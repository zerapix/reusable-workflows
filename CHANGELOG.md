# Changelog

## [1.1.0](https://github.com/zerapix/reusable-workflows/compare/v1.0.0...v1.1.0) (2023-01-11)


### Features

* always use `--force`; in future refactor to make it an option (changeable via run-workflow option). ([0ebb357](https://github.com/zerapix/reusable-workflows/commit/0ebb357557e08e12e123cfedc2bc7cd4e21f359f))

## [1.0.0](https://github.com/zerapix/reusable-workflows/compare/v0.1.0...v1.0.0) (2022-12-16)


### Features

* add APP_ENV env-var during serverless deployment. ([307e5f9](https://github.com/zerapix/reusable-workflows/commit/307e5f937ade7e3d0670e1a96d802899fada3b73))
* allow backwards compatibility. ([ae1a5dc](https://github.com/zerapix/reusable-workflows/commit/ae1a5dc620f1a2a98280fd60711e8072c4bb947e))
* attempt to control if unit-tests should run. ([815acaa](https://github.com/zerapix/reusable-workflows/commit/815acaa731e3d8395be5629f2ada467682be2492))
* use auto-discoverable package-name; ability to change default stage/env to auto-deploy to. ([8c66ebd](https://github.com/zerapix/reusable-workflows/commit/8c66ebd3e4c135881c3ba78c2db11a432a723b4b))


### Bug Fixes

* pass auto-deploy environment name variable into serverless deploy action ([fb773fb](https://github.com/zerapix/reusable-workflows/commit/fb773fba28d35c42467e7757adb7c0797c269ff4))
* syntax error. ([73f4cfe](https://github.com/zerapix/reusable-workflows/commit/73f4cfec511289142d3645d6cde15969399e248c))
* various fixes for poetry when grabbing info via tomlkit. ([53a3da8](https://github.com/zerapix/reusable-workflows/commit/53a3da8fb8d04487de90e4eb00c51b3de63a87f1))


### Miscellaneous Chores

* 1.0.0 release ([70e2e96](https://github.com/zerapix/reusable-workflows/commit/70e2e96af42b5b86274789c1c27055b24ddd90a7))

## 0.1.0 (2022-11-22)


### Features

* add --verbose flag to serverless deployments ([ddb15eb](https://github.com/zerapix/reusable-workflows/commit/ddb15eb93790ed4aaf1c4e82352e3ac424ce1a73))
* add ability for private gemfury libraries dependencies. ([ad58de4](https://github.com/zerapix/reusable-workflows/commit/ad58de4e7282f084d6a0135919766b67da975475))
* added db service container for unit-testing ([38c80b0](https://github.com/zerapix/reusable-workflows/commit/38c80b0bdd4ae196ec1004f4a239c14473d152ee))
* added new workflows for publishing libraries. ([1dc6782](https://github.com/zerapix/reusable-workflows/commit/1dc6782270f41ba8bd543c046ddb769bcb37637b))
* added reusable py-test workflow. ([1ceba33](https://github.com/zerapix/reusable-workflows/commit/1ceba336ff739f48279d7672bf2323de94c1fe83))
* added version that includes a db service, when needed for unit tests. ([eaa1367](https://github.com/zerapix/reusable-workflows/commit/eaa13679eaaee26d29b0ff284e814c560a972ccb))
* attempting to read python version to use from pyproject.toml file. ([8c5f69f](https://github.com/zerapix/reusable-workflows/commit/8c5f69f58d45d2a5b73e72b2cd8ee9351893aa77))
* better naming. ([eb4d03d](https://github.com/zerapix/reusable-workflows/commit/eb4d03d37d9e66fde93b90ad09613416a5d4adf4))
* check for a pre-serverless script file, to run just before serverless deploy. ([e9cd346](https://github.com/zerapix/reusable-workflows/commit/e9cd346f9a5320d0b1bfd47a76a416ab7276c87c))
* first attempt at an auto-dev deploy for serverless. ([5583fef](https://github.com/zerapix/reusable-workflows/commit/5583fef60a637f3c858e2f70272df55c2d3f24f8))
* make aws-creds a bit more secure. ([df6f583](https://github.com/zerapix/reusable-workflows/commit/df6f58389aa52d09512c6c712d112217f80c8d58))
* run doctor right after deploy, sometimes there are deprecations and you need to run `doctor` right after to report them. ([ad40664](https://github.com/zerapix/reusable-workflows/commit/ad4066406fd6a29aafca3bb4660d4359909f334c))
* separate deployment from release creation, ability to reuse deployment as action. ([b7f85f2](https://github.com/zerapix/reusable-workflows/commit/b7f85f26bff537f9a7fb8012f7ba2368a6f8d501))
* setup basic env-vars for DB access for all job steps. ([6093b3c](https://github.com/zerapix/reusable-workflows/commit/6093b3cb0421a477fc99bad16142369ccd78c7bc))
* split out project setup to separate action. ([a640f4d](https://github.com/zerapix/reusable-workflows/commit/a640f4dcd6978d80365106979f5d411128ed2eda))
* split out unit testing into it's own action. ([b2fc2f9](https://github.com/zerapix/reusable-workflows/commit/b2fc2f90fc6fe7935a19eb284c6404a555b9bb61))
* support release-please directly on reusable-workflows. ([e79fd7f](https://github.com/zerapix/reusable-workflows/commit/e79fd7f2f9dc85c0aac5a1ecf3ffddd60ace2cff))
* support simple release creation workflows (with no deployment, etc). ([35f62cb](https://github.com/zerapix/reusable-workflows/commit/35f62cb77f2ac9bcf11e8c23a19df1538d4e29b5))
* use release tags that start with v/ instead ([a4a2744](https://github.com/zerapix/reusable-workflows/commit/a4a2744c8a9e6fd7be71ca91569aa982e9a31fb2))


### Bug Fixes

* actions require specifying shell. ([09b20e8](https://github.com/zerapix/reusable-workflows/commit/09b20e8fb18eeddbf940e7e16c5173a5cf67ed9e))
* add bash as shell for action. ([f826ead](https://github.com/zerapix/reusable-workflows/commit/f826eadc6c81a9c91d879007efea0469a0e4fa29))
* add env-vars needed for postgres project. ([676f945](https://github.com/zerapix/reusable-workflows/commit/676f94579154aabec5da69042a03c33323c2a424))
* deployment error. ([5c7e3ad](https://github.com/zerapix/reusable-workflows/commit/5c7e3adaba54db6e9b613f8fcf6f49948620d9bb))
* don't use shell when calling action. ([c5b12a2](https://github.com/zerapix/reusable-workflows/commit/c5b12a2a73f55b306c70de1e0cf7241873870752))
* env placement. ([63a995b](https://github.com/zerapix/reusable-workflows/commit/63a995b50f854b2854ed852f0b150790baa3cd18))
* get aws env vars in place. ([3a77cc0](https://github.com/zerapix/reusable-workflows/commit/3a77cc01f4b1be1f95b7ba4af5d755d2591ced2b))
* get names looking better. ([b7af939](https://github.com/zerapix/reusable-workflows/commit/b7af9393ff02b3d90e6a9797928f98bd2a199c64))
* install poetry. ([b62009e](https://github.com/zerapix/reusable-workflows/commit/b62009e2afc87771d3344e5b383eff6cfa8a8cd4))
* only auto-run dev deployment if release was created. ([1b0d631](https://github.com/zerapix/reusable-workflows/commit/1b0d63196ad9c61f7962f4bdf866935c9c5d4e46))
* remove input, remove if statements. ([125b67f](https://github.com/zerapix/reusable-workflows/commit/125b67f788e34c4d80de6cdeb62154cb9c88b0c8))
* use `.outputs` to get previously-ran job outputs. ([a6f5d34](https://github.com/zerapix/reusable-workflows/commit/a6f5d34dd7ec17ca8714f15f118b0fb000f767be))
* use pgV13. ([a4e3087](https://github.com/zerapix/reusable-workflows/commit/a4e308725cbff4a2250478e18f0ed87c761f5c5e))
