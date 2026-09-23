Repo for workflows we reuse in our various projects.

- [How To Use](#how-to-use)
    * [Optional SLS Deploy Features](#optional-sls-deploy-features)j

# How To Use

These reusable workflows can be used in other repos under the same organization
to test and deploy code.

Right now we only have workflows for Python + Serverless deployments.

The standard configuration in other Python/Serverless repos is this:

Deploy To User Selectable Environment:

```yaml
# file: deploy.yml
name: Deploy
run-name: Deploy to ${{ inputs.environment }}
concurrency: deployment-${{ inputs.environment }}
on:
  workflow_dispatch:
    inputs:
      environment:
        description: Environment to deploy in.
        type: environment
        default: dev

jobs:
  reusable:
    uses: zerapix/reusable-workflows/.github/workflows/py-deploy.yml@test
    secrets: inherit
    with:
      environment: ${{ inputs.environment }}
```

Workflow that runs for automatically deploying just-created release:

```yaml
# file: deploy-auto.yml
name: Deploy Automatically
on: workflow_dispatch
concurrency: deployment-dev
run-name: Auto deploy ${{ github.ref_name }} to dev
jobs:
  deploy-dev:
    uses: zerapix/reusable-workflows/.github/workflows/py-deploy.yml@test
    secrets: inherit
    with:
      environment: dev
```

Create Releases:

```yaml
# file: release-create.yml
name: Release Create
run-name: Create release for pr ${{ github.event.number }}
on:
  pull_request:
    types:
      - closed
    branches:
      - main
jobs:
  reusable:
    uses: zerapix/reusable-workflows/.github/workflows/py-create-release.yml@test
    secrets: inherit
```

Run Tests:

```yaml
# file: test.yml
name: Run Tests
on: pull_request
run-name: Testing pr ${{ github.event.number }} for commit ${{ github.event.after }}
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

