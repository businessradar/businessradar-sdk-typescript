# Changelog

## 0.7.0 (2026-03-13)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/businessradar/businessradar-sdk-typescript/compare/v0.6.0...v0.7.0)

### Features

* **api:** api update ([29e9933](https://github.com/businessradar/businessradar-sdk-typescript/commit/29e99332924cbb26b9a0a64b79386d46ffd40e4c))
* **api:** api update ([1f38a75](https://github.com/businessradar/businessradar-sdk-typescript/commit/1f38a75c1644a1cdf324c97a89502830fe81f86e))
* **api:** api update ([5132660](https://github.com/businessradar/businessradar-sdk-typescript/commit/51326607cc62e1e30ea831106c7ea8060408bfc4))
* **mcp:** add an option to disable code tool ([03b2c83](https://github.com/businessradar/businessradar-sdk-typescript/commit/03b2c835f70428316079573c74286dfe55c4e5cf))
* **mcp:** add initial server instructions ([a00ce6a](https://github.com/businessradar/businessradar-sdk-typescript/commit/a00ce6a543f712488e3db8e181e8db58560bbda1))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([8c66051](https://github.com/businessradar/businessradar-sdk-typescript/commit/8c66051496ac2c15c8ef17878fcf55809d5e642c))
* **client:** avoid removing abort listener too early ([1245592](https://github.com/businessradar/businessradar-sdk-typescript/commit/124559267d81b1196d8e881987db74e2c0faa0f1))
* **client:** preserve URL params already embedded in path ([38c208d](https://github.com/businessradar/businessradar-sdk-typescript/commit/38c208d9a148ca4a60404714dc8bfbd6275f934b))
* **docs/contributing:** correct pnpm link command ([e5b041c](https://github.com/businessradar/businessradar-sdk-typescript/commit/e5b041ccc3e00dcbc8da9bb7f3b8f99cd5cad548))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([b064961](https://github.com/businessradar/businessradar-sdk-typescript/commit/b0649615eae7a0652f75ebf0b9656723b4c9f4bb))
* **mcp:** update prompt ([5258bad](https://github.com/businessradar/businessradar-sdk-typescript/commit/5258bad76784b701b9c37e572f78171b115f0150))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([c038186](https://github.com/businessradar/businessradar-sdk-typescript/commit/c038186ca54d9f94d897f23ca7efdf6492c78be0))
* **client:** do not parse responses with empty content-length ([13e2868](https://github.com/businessradar/businessradar-sdk-typescript/commit/13e2868ab0d32680b7f02f1df1b05c2ba576e182))
* **client:** restructure abort controller binding ([7bc1dfe](https://github.com/businessradar/businessradar-sdk-typescript/commit/7bc1dfedd1427749298be3c6ecd61373b4828fd3))
* **internal/client:** fix form-urlencoded requests ([a1f6a42](https://github.com/businessradar/businessradar-sdk-typescript/commit/a1f6a422993a4195a51b1748958e8642704aa29f))
* **internal:** add health check to MCP server when running in HTTP mode ([0097247](https://github.com/businessradar/businessradar-sdk-typescript/commit/0097247c492e1cc1450f24eadc8770d1c4c85a90))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([9b2e2ce](https://github.com/businessradar/businessradar-sdk-typescript/commit/9b2e2ce492ffd7933ddf0af38d3fda0ee3013cec))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([8baad60](https://github.com/businessradar/businessradar-sdk-typescript/commit/8baad6010cf633d402f137cac8a234fd44342860))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([3380b3d](https://github.com/businessradar/businessradar-sdk-typescript/commit/3380b3d94d05b8b345e62d06ff14eddd0b3777c1))
* **internal:** avoid type checking errors with ts-reset ([2c58936](https://github.com/businessradar/businessradar-sdk-typescript/commit/2c5893686f616056884b1ddce2e226582ac04e16))
* **internal:** cache fetch instruction calls in MCP server ([4532223](https://github.com/businessradar/businessradar-sdk-typescript/commit/45322238ffe2756cec1796814b6a7469e2d6bfb0))
* **internal:** codegen related update ([b8d8932](https://github.com/businessradar/businessradar-sdk-typescript/commit/b8d893209cddd262e46bde4562415250761e9e01))
* **internal:** codegen related update ([9b919c2](https://github.com/businessradar/businessradar-sdk-typescript/commit/9b919c2bb7eaaefade835ef9fabfa40f5c04996a))
* **internal:** codegen related update ([ab4a734](https://github.com/businessradar/businessradar-sdk-typescript/commit/ab4a7348b5b1c1945d19add72a27f0c5491e87a8))
* **internal:** codegen related update ([b5a6d0d](https://github.com/businessradar/businessradar-sdk-typescript/commit/b5a6d0d1a38e63749ea8fd644b52911702070221))
* **internal:** codegen related update ([9f73d3b](https://github.com/businessradar/businessradar-sdk-typescript/commit/9f73d3be91044e2b8ddcda3151ca355a8286fc0e))
* **internal:** codegen related update ([f06e6a1](https://github.com/businessradar/businessradar-sdk-typescript/commit/f06e6a11fa254c30dc4c95d275b8381f308659e0))
* **internal:** codegen related update ([10b2f05](https://github.com/businessradar/businessradar-sdk-typescript/commit/10b2f054311ae0da52217bc16a6811015d949c57))
* **internal:** codegen related update ([1a81ad0](https://github.com/businessradar/businessradar-sdk-typescript/commit/1a81ad02d4ac71b3114ea2fe1471c81a66a3558d))
* **internal:** codegen related update ([a79052a](https://github.com/businessradar/businessradar-sdk-typescript/commit/a79052a76ab35610f3ff07277c76ea3d4c96935c))
* **internal:** codegen related update ([efbbe79](https://github.com/businessradar/businessradar-sdk-typescript/commit/efbbe7987efeaa27ec6b443f8aff89b62ae716d4))
* **internal:** codegen related update ([9fa7e19](https://github.com/businessradar/businessradar-sdk-typescript/commit/9fa7e190ea4505969bc3e5ca4279abf324de3663))
* **internal:** codegen related update ([a769319](https://github.com/businessradar/businessradar-sdk-typescript/commit/a769319f5b4993a49a63757a90e130380144e91d))
* **internal:** codegen related update ([a9a21ec](https://github.com/businessradar/businessradar-sdk-typescript/commit/a9a21ec325306af8cfb11f2ae330cbd1c8932a92))
* **internal:** codegen related update ([c5e1c1c](https://github.com/businessradar/businessradar-sdk-typescript/commit/c5e1c1cf910d860d4aa086272ce550fe3986f1ac))
* **internal:** codegen related update ([88fd394](https://github.com/businessradar/businessradar-sdk-typescript/commit/88fd394dee181e65b449726fd128987fc384ae61))
* **internal:** codegen related update ([a0c3ea0](https://github.com/businessradar/businessradar-sdk-typescript/commit/a0c3ea014ba99b352bbce9d71fad38426235b72c))
* **internal:** codegen related update ([81a5007](https://github.com/businessradar/businessradar-sdk-typescript/commit/81a5007b71ed4667e5dbb7018bc877a945d905ab))
* **internal:** codegen related update ([1603889](https://github.com/businessradar/businessradar-sdk-typescript/commit/1603889bc7ab8a07d347fdde1423702f6aa84e98))
* **internal:** codegen related update ([1144230](https://github.com/businessradar/businessradar-sdk-typescript/commit/11442302be3b3c6cb72deb568cdb3f4475894a20))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([5602a49](https://github.com/businessradar/businessradar-sdk-typescript/commit/5602a49705a390224bd4dd7daceeb349f5026b23))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([aba12cf](https://github.com/businessradar/businessradar-sdk-typescript/commit/aba12cf70c6edbbfc8eb8121c040d5f6702b9c51))
* **internal:** fix pagination internals not accepting option promises ([431a27a](https://github.com/businessradar/businessradar-sdk-typescript/commit/431a27a7f0002f748af72dd477114830cbac09bc))
* **internal:** improve layout of generated MCP server files ([ba6b757](https://github.com/businessradar/businessradar-sdk-typescript/commit/ba6b757aaaaf9e4dd6017f1cda7ba8230d10fefd))
* **internal:** improve reliability of MCP servers when using local code mode execution ([55e6160](https://github.com/businessradar/businessradar-sdk-typescript/commit/55e6160718de6450327b04485c320ea891a37bea))
* **internal:** make MCP code execution location configurable via a flag ([6814522](https://github.com/businessradar/businessradar-sdk-typescript/commit/6814522ccdf9d788b85d698734f88bf54d104f10))
* **internal:** move stringifyQuery implementation to internal function ([f7f4315](https://github.com/businessradar/businessradar-sdk-typescript/commit/f7f4315d6762bc8ef7a119f341bfa1454e4d46e0))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([597d70b](https://github.com/businessradar/businessradar-sdk-typescript/commit/597d70b4eb879adb36d1110669dff5c4ac4a662c))
* **internal:** remove mock server code ([f112bb9](https://github.com/businessradar/businessradar-sdk-typescript/commit/f112bb90e2fe8c5e869817d9b68593c6212a9a8a))
* **internal:** support oauth authorization code flow for MCP servers ([2371142](https://github.com/businessradar/businessradar-sdk-typescript/commit/2371142e9a8883fdaaeba160892bf57f77550ed7))
* **internal:** update dependencies to address dependabot vulnerabilities ([13fd118](https://github.com/businessradar/businessradar-sdk-typescript/commit/13fd118ff5e0725fd38ad93d210726adcfe5c6bb))
* **internal:** update lock file ([d9a6cc5](https://github.com/businessradar/businessradar-sdk-typescript/commit/d9a6cc589f70865484ad8c411e11d3dbed32c599))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([768d1c1](https://github.com/businessradar/businessradar-sdk-typescript/commit/768d1c127fc3caaed0462722b17ab1d72be0d828))
* **internal:** upgrade pnpm ([a57abbe](https://github.com/businessradar/businessradar-sdk-typescript/commit/a57abbec67b45ddc5717bc7a2e737495e83a3fb2))
* **internal:** upgrade pnpm version ([181f2e5](https://github.com/businessradar/businessradar-sdk-typescript/commit/181f2e55507ead2c1b59690108d4d636288e5274))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([840dc37](https://github.com/businessradar/businessradar-sdk-typescript/commit/840dc37d03f2d6d1673ee2cfb9f61118bf47671e))
* **mcp-server:** improve instructions ([e4624ce](https://github.com/businessradar/businessradar-sdk-typescript/commit/e4624ce37c0213969243e1757ba64c37d0d11e2f))
* **mcp-server:** return access instructions for 404 without API key ([c0f8f5a](https://github.com/businessradar/businessradar-sdk-typescript/commit/c0f8f5aeece1474abc646a75b744b58312df06f5))
* **mcp:** correctly update version in sync with sdk ([3992bcc](https://github.com/businessradar/businessradar-sdk-typescript/commit/3992bcca14a3796d9aee7c713484d252e44eda79))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([58cbbba](https://github.com/businessradar/businessradar-sdk-typescript/commit/58cbbba2fe7723e614bc43614f0eb69ede7c222b))
* update mock server docs ([8b5d691](https://github.com/businessradar/businessradar-sdk-typescript/commit/8b5d6914d84ed19fe90a722dace4cd43da510cbc))


### Refactors

* update sdk ([9202363](https://github.com/businessradar/businessradar-sdk-typescript/commit/92023635d75123d9a56d161796822f6aa3574824))

## 0.6.0 (2026-01-30)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/businessradar/businessradar-sdk-typescript/compare/v0.5.0...v0.6.0)

### Features

* **api:** api update ([0358675](https://github.com/businessradar/businessradar-sdk-typescript/commit/0358675e10d04ab0f1b43b68a2ca75970497c2e2))
* **api:** api update ([d944c2e](https://github.com/businessradar/businessradar-sdk-typescript/commit/d944c2e33fe541ea29ce30cdace5b19d7eef6b85))
* **api:** api update ([c5ebeee](https://github.com/businessradar/businessradar-sdk-typescript/commit/c5ebeeefff20e3aec4100ba9da16e94c345f6684))
* **api:** api update ([e3a5c3c](https://github.com/businessradar/businessradar-sdk-typescript/commit/e3a5c3c93d6cca3a390b7a5e97193aaf0ff5df63))
* **api:** api update ([b0ba445](https://github.com/businessradar/businessradar-sdk-typescript/commit/b0ba445f23140c08790fc93f2de981be7cf363bd))
* **api:** api update ([6667107](https://github.com/businessradar/businessradar-sdk-typescript/commit/6667107bb803a4a50632d3a0de9ce5735df50c3f))
* **api:** api update ([cf154d5](https://github.com/businessradar/businessradar-sdk-typescript/commit/cf154d50e761335fa6adf6ffb3e716e2eaa83a58))
* **api:** manual updates ([1e3d552](https://github.com/businessradar/businessradar-sdk-typescript/commit/1e3d5522fc7098db1f559485d012ebf40faa15d6))

## 0.5.0 (2026-01-30)

Full Changelog: [v0.4.1...v0.5.0](https://github.com/businessradar/businessradar-sdk-typescript/compare/v0.4.1...v0.5.0)

### Features

* **api:** api update ([98958fc](https://github.com/businessradar/businessradar-sdk-typescript/commit/98958fcdc6435105cc495e6847d4bdaa5955190e))
* **api:** api update ([37251c8](https://github.com/businessradar/businessradar-sdk-typescript/commit/37251c8cb185ebd236fd824813430e8d6e527451))
* **api:** manual updates ([f66ebb0](https://github.com/businessradar/businessradar-sdk-typescript/commit/f66ebb0d9a4c9be281a22d43d18d791168c0d90e))

## 0.4.1 (2026-01-29)

Full Changelog: [v0.4.0...v0.4.1](https://github.com/businessradar/businessradar-sdk-typescript/compare/v0.4.0...v0.4.1)

## 0.4.0 (2026-01-29)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/businessradar/businessradar-sdk-typescript/compare/v0.3.0...v0.4.0)

### Features

* **api:** manual updates ([13858f2](https://github.com/businessradar/businessradar-sdk-typescript/commit/13858f264da0efb303e0f9e787febe8240f1b6dc))

## 0.3.0 (2026-01-29)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/businessradar/businessradar-sdk-typescript/compare/v0.2.0...v0.3.0)

### Features

* **api:** manual updates ([2d6ceb0](https://github.com/businessradar/businessradar-sdk-typescript/commit/2d6ceb0137e5e9610a6f7c7bca3515710fd4f264))

## 0.2.0 (2026-01-29)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/businessradar/businessradar-sdk-typescript/compare/v0.1.0...v0.2.0)

### Features

* **api:** manual updates ([7de732f](https://github.com/businessradar/businessradar-sdk-typescript/commit/7de732f1a83430c06ca86129af95be6ee6e9a3f4))
* **api:** manual updates ([48c85f0](https://github.com/businessradar/businessradar-sdk-typescript/commit/48c85f0a6826ea19e62a2344648a819b44227dd5))

## 0.1.0 (2026-01-29)

Full Changelog: [v0.0.2...v0.1.0](https://github.com/businessradar/businessradar-sdk-typescript/compare/v0.0.2...v0.1.0)

### Features

* **api:** manual updates ([af28d24](https://github.com/businessradar/businessradar-sdk-typescript/commit/af28d240073892d819cb9492da909b605315c311))
* **api:** manual updates ([0a71f60](https://github.com/businessradar/businessradar-sdk-typescript/commit/0a71f6055d1bec0d37a1e41d7a47bd09fbfdd37d))


### Chores

* **mcp:** up tsconfig lib version to es2022 ([6249487](https://github.com/businessradar/businessradar-sdk-typescript/commit/6249487c6454a4a0057bfcc72f607390571daa35))

## 0.0.2 (2026-01-28)

Full Changelog: [v0.0.1...v0.0.2](https://github.com/businessradar/businessradar-sdk-typescript/compare/v0.0.1...v0.0.2)

### Chores

* configure new SDK language ([d38dbd6](https://github.com/businessradar/businessradar-sdk-typescript/commit/d38dbd6dddc8859a9fc210167fba5e9c36c8db1c))
* configure new SDK language ([7454ecc](https://github.com/businessradar/businessradar-sdk-typescript/commit/7454ecc1572ee29d1f54ec0762a8f5394ee047e9))
* **internal:** configure MCP Server hosting ([926f727](https://github.com/businessradar/businessradar-sdk-typescript/commit/926f72711c9560b8865175c75c54cdf06749d3f8))
* update SDK settings ([1535f51](https://github.com/businessradar/businessradar-sdk-typescript/commit/1535f51ea6d36a15ce9d25f621027a2b4c99468f))
