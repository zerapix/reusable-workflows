# Changelog

## [1.3.0](https://github.com/zerapix/reusable-workflows/compare/v1.2.0...v1.3.0) (2025-08-20)


### Features

* add change-log contents / title to release; attempt to comment on PR about release. ([488a373](https://github.com/zerapix/reusable-workflows/commit/488a373e99d0bf6380faf9ef1ce58c16191ee764))
* add new app.pixydocs.dev deployment location. ([2f798fb](https://github.com/zerapix/reusable-workflows/commit/2f798fb4951c62c8e3c33eabe50d2d5eba84e57a))
* add new sls deployment workflows that don't need/create a postgres db container. ([93b67be](https://github.com/zerapix/reusable-workflows/commit/93b67be01ed8204b5d86517905eb3df2747451d4))
* add robot  to comment/message. ([2c03d44](https://github.com/zerapix/reusable-workflows/commit/2c03d44eca2aeca5e83cc68cef916583358ffa7c))
* add start of a deployment workflow. ([90123ce](https://github.com/zerapix/reusable-workflows/commit/90123cec8a67abdc151aae52939bb61047a2409d))
* allow host to be passed in. ([b279835](https://github.com/zerapix/reusable-workflows/commit/b2798357ee084143a436714654cbd209ac94c713))
* allow ssh on debug if deploy fails. ([45c949f](https://github.com/zerapix/reusable-workflows/commit/45c949fc44912f232a0cd403e85f6ba62c537b26))
* attempting to add step to create tag/commit for release. ([694b0be](https://github.com/zerapix/reusable-workflows/commit/694b0be98e34600c98f0aed12037f6c829be44b1))
* attempting to create release. ([42613d2](https://github.com/zerapix/reusable-workflows/commit/42613d2f4ee709a6b33117bbb6eb4f4eceb5fed5))
* call new `deployment-auto.yml` workflow when auto-deploying. ([8c18d39](https://github.com/zerapix/reusable-workflows/commit/8c18d398b669529c32e5b39f29a3f26aa9dd92d7))
* checkout correct repo. ([8736c8f](https://github.com/zerapix/reusable-workflows/commit/8736c8f10d531f25e7eb746ff6cc3760563ced14))
* comment on PR about why release can't be made. ([976d404](https://github.com/zerapix/reusable-workflows/commit/976d404d7f27bde01a88ea381aca7fe4600feccd))
* default to 'dev' deployment. ([eb7373c](https://github.com/zerapix/reusable-workflows/commit/eb7373c0865ef2bf2820149bf581e39d0d0c3ee1))
* do concurrency on the workflow-level to preserve queue execution order. ([1ee8f83](https://github.com/zerapix/reusable-workflows/commit/1ee8f8301065210eda0a1239b5b4ae3bd12a407b))
* enable for main branch. ([c567192](https://github.com/zerapix/reusable-workflows/commit/c567192a1a74aafe1f36fa35a3c83db9c062f8de))
* fix incorrect slot number going back. ([7687a75](https://github.com/zerapix/reusable-workflows/commit/7687a75de908b5ba6a41d5987c03216f6a0dac79))
* fix input to a string. ([dd63ba2](https://github.com/zerapix/reusable-workflows/commit/dd63ba22b82bca60ef11e1cd515fd66cbe194549))
* fix missing quote. ([b823243](https://github.com/zerapix/reusable-workflows/commit/b8232435132e0d2ff6f331a9bcb377c3a76dffa4))
* fixed bad-var-ref. ([b75e77d](https://github.com/zerapix/reusable-workflows/commit/b75e77d3a01c6b4700794d744f029a2b09f84654))
* generalized checkout, so we can use actions via relative path. ([4734b38](https://github.com/zerapix/reusable-workflows/commit/4734b3866f6543593d35ed2164a0dc9258e23770))
* get concurrency on a per-pr-level. ([66b3699](https://github.com/zerapix/reusable-workflows/commit/66b3699cf5768d60b05100c449e7a142e1921f63))
* get tag name ([2272a4f](https://github.com/zerapix/reusable-workflows/commit/2272a4fc2f6d3abbcd8f1b2b89938b56b6d0f403))
* get the change log out correctly. ([0337566](https://github.com/zerapix/reusable-workflows/commit/0337566a8739ace8f42d2379977bf4436548b251))
* info about PR ([cb52ba7](https://github.com/zerapix/reusable-workflows/commit/cb52ba70da9a2f788403af0217e11301ac5dbfb9))
* inherit secrets ([fff6db0](https://github.com/zerapix/reusable-workflows/commit/fff6db0dea51ff0911b44589e5dff97db91ab286))
* investigate perl utility via ssh for github actions. ([bb4cd33](https://github.com/zerapix/reusable-workflows/commit/bb4cd334ce75dbc5234eb2cf9c976671332f59d3))
* let ssh have aws environment. ([f32df11](https://github.com/zerapix/reusable-workflows/commit/f32df11bb29c0248dc29fb514e57535b2148411a))
* look at context ([be59a1b](https://github.com/zerapix/reusable-workflows/commit/be59a1bba0c8881faca91d039ad5f87c3289abf7))
* look at event in reusable workflow ([4e42cc6](https://github.com/zerapix/reusable-workflows/commit/4e42cc66dbfe9adfbed34b62a233c700e5fa4889))
* look at github context ([eafd037](https://github.com/zerapix/reusable-workflows/commit/eafd037b298d9555fded994c8b02b0f861864bfb))
* make the deploy action generic, cross-language. ([632c844](https://github.com/zerapix/reusable-workflows/commit/632c844e60acee2be2de70466c83e76584255596))
* merge from main, use [@test](https://github.com/test) ([f4ac359](https://github.com/zerapix/reusable-workflows/commit/f4ac35901a740e6181add962f09878e93a9ea217))
* normalize the override stage feature with associated action. ([334ccd4](https://github.com/zerapix/reusable-workflows/commit/334ccd42810aaca80ae60747271b251a09f21c76))
* pirintenv ([163d988](https://github.com/zerapix/reusable-workflows/commit/163d988b99cc9594728346484f022c623172d55a))
* put ssh before build, as it can create to long of a log (so ssh info is not displayed). ([e95aae9](https://github.com/zerapix/reusable-workflows/commit/e95aae995b68f840fe814f221d953e90faa3dfe2))
* rename 'all-' to 'js-', directly call deployment workflow. ([8e0a451](https://github.com/zerapix/reusable-workflows/commit/8e0a45187b6eaa730a722d7ccecaad634f008989))
* rename to just 'deploy', pass along reusable-ref. ([41ee63f](https://github.com/zerapix/reusable-workflows/commit/41ee63f005f4477f165d10fe674e7eca0e176bd0))
* ssh ([34a6d66](https://github.com/zerapix/reusable-workflows/commit/34a6d6646d0b4c45af584076c7cc1f29a66b36d5))
* ssh again. ([337ba3d](https://github.com/zerapix/reusable-workflows/commit/337ba3d89873317200ff4ea1b34c82f9680c000f))
* support a different stage name vs environment name. ([b95a7d1](https://github.com/zerapix/reusable-workflows/commit/b95a7d184ff986f7e352ad1cba49e59262f8ac3a))
* support for PR deployments. ([0cdd84e](https://github.com/zerapix/reusable-workflows/commit/0cdd84e6b5d433c4f562575a4490dd50bac4dffb))
* temp ability to ssh/shell into worker. ([834a296](https://github.com/zerapix/reusable-workflows/commit/834a296324cf4a8a268f12cee2db69a4e1d9c282))
* test action. ([a2a1650](https://github.com/zerapix/reusable-workflows/commit/a2a1650fa6710b18d91ec18fcd0296a2e86b0494))
* test running deployment via dispatch. ([acef6a0](https://github.com/zerapix/reusable-workflows/commit/acef6a09dddb66c7220436760e792c63317e8631))
* testing checkout of reusable. ([e855a66](https://github.com/zerapix/reusable-workflows/commit/e855a669fb8db8ca6b9cf4f1cf732a46d82385fc))
* update db to postgres 14, use 15432 for local port (as expected in local environments) ([b76468a](https://github.com/zerapix/reusable-workflows/commit/b76468a7b759dcbff4339bc8f62216c0fcc8769a))
* use [@test](https://github.com/test) (after merge from main) ([1bc2568](https://github.com/zerapix/reusable-workflows/commit/1bc256802d2e0bc83fed7db3dc04ad6ec79e43b2))
* use deploy action for js deployment workflow. ([9bb7438](https://github.com/zerapix/reusable-workflows/commit/9bb743874f905e196a7569e6b35a2cb60e79372e))
* use main for merge-to-main-only. ([5882b54](https://github.com/zerapix/reusable-workflows/commit/5882b54b9a1e858e32ae66cab39c50c67909135d))
* use reusable py-create-release action. ([5640e5f](https://github.com/zerapix/reusable-workflows/commit/5640e5f0f36f2ee8d5016608c237f741afd69fc8))
* workflow for publishing + deploying same branch in repo/project. ([4576749](https://github.com/zerapix/reusable-workflows/commit/457674978a548df0bf0b52b7f910e9ab2d537f63))


### Bug Fixes

* accidentally left this as required. ([856b4d2](https://github.com/zerapix/reusable-workflows/commit/856b4d25b56b59947c32d844f580322860ba9756))
* add environment input. ([e90a6f7](https://github.com/zerapix/reusable-workflows/commit/e90a6f72f3819b4cfc964745f09355979daaf23c))
* add permissions to write to needed resources. ([95554ee](https://github.com/zerapix/reusable-workflows/commit/95554ee6ac594599dd96ff2641960314db7e70ef))
* can't use context in name ([b3eab3c](https://github.com/zerapix/reusable-workflows/commit/b3eab3ced6c795dd992baf6c47ed69950848185d))
* changelog should be in output, not env-var. ([4d3194a](https://github.com/zerapix/reusable-workflows/commit/4d3194af9a3301b2577410b50ea7ee5f4312dfbf))
* ensure we can push branch change up before pushing tags. ([2bc7ace](https://github.com/zerapix/reusable-workflows/commit/2bc7ace3fbaf3c7f4cc48cf003f999b0766d4f3c))
* get off inputs. ([c90d3b0](https://github.com/zerapix/reusable-workflows/commit/c90d3b0021cbb76c18e3d72c86f34fab5b80bb11))
* missing double-quote. ([cd05fb9](https://github.com/zerapix/reusable-workflows/commit/cd05fb92ba35038ec4f6b2d7c064715acc2818b4))
* outputs ref. ([038c313](https://github.com/zerapix/reusable-workflows/commit/038c313d6cd0163ac16bdc2d7110846942466379))
* put id on release step so we can grab its output. ([0e21401](https://github.com/zerapix/reusable-workflows/commit/0e2140156d769371bde03f11d25d09f8924c9325))
* step needed a run ([8c67a06](https://github.com/zerapix/reusable-workflows/commit/8c67a06b64dd8deed562067d424f064007c6a590))
* tag-out name ([c89280c](https://github.com/zerapix/reusable-workflows/commit/c89280cbf4694882e98eb5fda42b7b14fc99654b))
* use better name. ([03960af](https://github.com/zerapix/reusable-workflows/commit/03960afd582d6825d8e8e307e5c4ec33ce3099c8))
* use correct input for default branch in new workflow. ([9f40429](https://github.com/zerapix/reusable-workflows/commit/9f404298ffd73d3e6fed579e05fa54d0e76e836d))
* use correct job name for output. ([599af0e](https://github.com/zerapix/reusable-workflows/commit/599af0e41f72dff47f23c8e6eb87b0e3ba7be978))
* use default if no input provided. ([2972f3c](https://github.com/zerapix/reusable-workflows/commit/2972f3c14b2ad8c4d8cddefbaa10d2c25b5b1656))
* use test versions of all actions. ([a134fe5](https://github.com/zerapix/reusable-workflows/commit/a134fe58ed31f4b33e5ace83781c88b830b968ae))
* use the calculated stage name ([0ad383e](https://github.com/zerapix/reusable-workflows/commit/0ad383e8ffcb19cba912b11e95363d44f88ad2ff))

## [1.2.0](https://github.com/zerapix/reusable-workflows/compare/v1.1.0...v1.2.0) (2023-01-19)


### Features

* add support for publishing and not requiring tomlkit in package-deps. ([367d10d](https://github.com/zerapix/reusable-workflows/commit/367d10d5ec21ada3061556d7ed170fc7d9b11c51))
* allow to specify non-default branch to release on. ([a335435](https://github.com/zerapix/reusable-workflows/commit/a335435a62038b8eb272535962da907c9546f95e))

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
