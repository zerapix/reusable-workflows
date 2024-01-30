Repo for workflows we reuse in our various projects.

- [How To Use](#how-to-use)
    * [Optional SLS Deploy Features](#optional-sls-deploy-features)j

# How To Use

These reusable workflows can be used in other repos under the same organization
to test and deploy code.

Right now we only have workflows for Python + Serverless deployments.

The standard configuration in other Python/Serverless repos is this:

On Deployment To Specific Environment Workflow:

```yaml
name: Deploy to Environment
on:
  workflow_dispatch:
    inputs:
      environment:
        description: Environment to deploy in.
        type: environment
        default: dev

      override-stage-name:
        required: false
        type: string
        default: ''
        description: >- 
          Defaults to the environment name; use this if the stage is different;
          like if its an account-wide "all" stage or Pull Request 'prs*' stage.

concurrency: deployment-${{ inputs.environment }}

jobs:
  reusable:
    uses: zerapix/reusable-workflows/.github/workflows/py-deploy.yml@test
    secrets: inherit
    with:
      environment: ${{ inputs.environment }}
      override-stage-name: ${{ inputs.override-stage-name }}
```

Workflow that runs for automatically deploying just-created release:

```yaml
name: Auto Deploy to dev
on: workflow_dispatch
concurrency: deployment-dev

jobs:
  deploy-dev:
    uses: zerapix/reusable-workflows/.github/workflows/py-deploy.yml@test
    secrets: inherit
    with:
      environment: dev
```

Create Releases:

```yaml
name: Create Release
on:
  pull_request:
    types:
      - closed
    branches:
          - main
jobs:
  reusable:
    uses: zerapix/reusable-workflows/.github/workflows/py-create-release.yml@test
    #if: ${{ github.event_name == 'pull_request' && github.event.action == 'closed' && github.event.pull_request.merged }}
    secrets: inherit
```

Run Tests:

```yaml
name: Run Tests
on: pull_request
jobs:
  reusable:
    uses: zerapix/reusable-workflows/.github/workflows/py-test-w-db.yml@main
    secrets: inherit
```

## Optional SLS Deploy Features

**Note: Don't use the optional SLS Deploy Script, instead run a script based on the serverless life events
so deploying like normal manually will still work like expected.**


~~Right before serverless/sls deploy, there is an option to run a sls-deploy-pre.sh
script.~~

~~If a script exists here in the local repo:~~

~~`.github/hooks/sls-deploy-pre.sh`~~

~~It will be executed with these environmental variables:~~

- ~~`APP_ENV`: SLS Stage / Deployment Environment~~
- ~~`AWS_ACCESS_KEY_ID` + `AWS_SECRET_ACCESS_KEY`: To execute/deploy things if needed in aws.~~

