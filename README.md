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
name: Deploy To Environment
on:
  workflow_dispatch:
    inputs:
      environment:
        description: Environment to deploy in.
        type: environment
        default: dev
jobs:
  reusable:
    uses: zerapix/reusable-workflows/.github/workflows/py-deployment-w-serverless-db.yml@test
    with:
      environment: ${{ inputs.environment }}
    secrets: inherit

```

On push to main branch:

```yaml
name: Create Either PR or Release
on:
  push:
    branches:
      - main
jobs:
  reusable:
    # Depending on if the merge to main was a release merge, or a normal branch merge...
    # it will either create a PR with a release candidate or create a github release object.
    uses: zerapix/reusable-workflows/.github/workflows/py-merge-to-main-serverless-w-db.yml@test
    with:
      package-name: pixydocs_api
    secrets: inherit
```

On pull_request:

```yaml
name: Run Tests
on: pull_request
jobs:
  reusable:
    uses: zerapix/reusable-workflows/.github/workflows/py-test-w-db.yml@test
    secrets: inherit


```

## Optional SLS Deploy Features


Right before serverless/sls deploy, there is an option to run a sls-deploy-pre.sh
script.

If a script exists here in the local repo:

`.github/hooks/sls-deploy-pre.sh`

It will be executed with these environmental variables:

- `APP_ENV`: SLS Stage / Deployment Environment
- `AWS_ACCESS_KEY_ID` + `AWS_SECRET_ACCESS_KEY`: To execute/deploy things if needed in aws.

