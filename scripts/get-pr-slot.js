module.exports = ({github, context, devAppHost, devPdAppHost}) => {
    // let devAppHost = "pixydocs.dev.zerapix.com"

  // return context.payload.client_payload.value
  //   github.rest.issues.addLabels({
  //     issue_number: context.issue.number,
  //     owner: context.repo.owner,
  //     repo: context.repo.repo,
  //     labels: ['pr-slot-2']
  //   })

    // github.rest.issues.addLabels({
    //   issue_number: context.issue.number,
    //   owner: context.repo.owner,
    //   repo: context.repo.repo,
    //   labels: ['pr-slot-2']
    // })

    // var repoIssueRequest = new RepositoryIssueRequest
    // {
    //     State = ItemState.Open,// Is ItemState.Open or ItemState.Closed
    //     //Labels = new[] { label1, label2}// Don't specify label names here
    // }
    //
    // repoIssueRequest.Labels.Add("Label1");// Repeat for label 2 and so on or use .AddRange()
    //
    // var gitRepoIssues = (_gitHubclient.Issue.GetForRepository(context.repo.owner, context.repo.repo, repoIssueRequest)).Result.ToList()
    //
    // console.log(gitRepoIssues)
    // return "hello!"

    return github.rest.pulls.list({
        owner: context.repo.owner,
        repo: context.repo.repo,
        state: 'open',
        per_page: 100
    }).then(function (results) {
        let allUsedSlots = []
        let selfPrNum = context.issue.number
        let labelsToRemove = []
        let foundSlotNum = 0

        for (const pr of results.data) {
            let labels = pr.labels
            let prIsSelf = (pr.number == selfPrNum)
            let currentPrLabels = []
            let lastSlotNum = null

            for (const label of labels) {
                let name = label.name
                if (name.startsWith("pr-slot-")) {
                    if (prIsSelf && context.action == 'reopened') {
                        // We were reopened, so ignore our current labels
                        // (since they could be wrong now, as some other PR may be using it now)
                        // Mark label for removal...
                        labelsToRemove.push(name)
                        continue
                    }
                    currentPrLabels.push(name)
                    let slotNum = name.split("-")[2]
                    allUsedSlots.push(parseInt(slotNum))
                    lastSlotNum = slotNum
                }
            }

            if (prIsSelf && context.action != 'reopened') {
                console.log(`Found currentPR labels (${currentPrLabels})...`)
                if (currentPrLabels.length == 1) {
                    console.log(`Found already assigned slot (${lastSlotNum}), for PR issue id (${context.issue.number}).`)
                    // TODO: If there happens to be more then one label, remove others???
                    return lastSlotNum
                }
                else if (currentPrLabels.length > 1) {
                    console.log(`Found more then one current labels (${currentPrLabels})...`)
                    // Add all labels except last one,
                    // we will use last one for our slot number...
                    labelsToRemove = labelsToRemove.concat(currentPrLabels)
                    foundSlotNum = lastSlotNum
                }
            }
        }

        // Sort in ascending order
        allUsedSlots = allUsedSlots.sort(function (a, b) {  return a - b;  });
        if (foundSlotNum <= 0) {
            let predictNum = 0
            for (const slotNum of allUsedSlots) {
                predictNum = predictNum + 1
                if (slotNum == predictNum) {
                    continue
                }

                // We found an unused slot!
                foundSlotNum = predictNum
                break
            }

            if (foundSlotNum == 0) {
                foundSlotNum = predictNum + 1
            }
        }

        let newLabel = `pr-slot-${foundSlotNum}`
        let allPromises = []

        // Filter out our new-label from labelsToRemove (safety)
        labelsToRemove = labelsToRemove.filter( ( el ) => el != newLabel );
        console.log(`Labels To Remove After Filter (${labelsToRemove})`)

        let promise = github.rest.issues.addLabels({
          issue_number: context.issue.number,
          owner: context.repo.owner,
          repo: context.repo.repo,
          labels: [newLabel]
        })
        allPromises.push(promise)

        for (const labelName of labelsToRemove) {
            console.log(`Found extra slot label (${labelName}), removing it...`)
            let promise = github.rest.issues.removeLabel({
                issue_number: context.issue.number,
                owner: context.repo.owner,
                repo: context.repo.repo,
                name: labelName
            })
            allPromises.push(promise)
        }

        let stageName = `prs${foundSlotNum}`

        // TODO: Consider not creating a comment if we are a 'reopened' PR + we end up selecting same slot again.
        //      for now don't worry about the duplicate comment in this edge-case...
        promise = github.rest.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: `PR Will Deploy To https://${stageName}-${devAppHost}/ and https://${stageName}-${devPdAppHost}/`
        });
        allPromises.push(promise)

        console.log(`All Found Used Slots (${allUsedSlots}), Selected Slot (${foundSlotNum}) for Stage (${stageName}); applying label (${newLabel}) to PR issue id (${context.issue.number}).`)
        return Promise.all(allPromises).then(
            result => {
                return foundSlotNum
            }
        )
    })
}
