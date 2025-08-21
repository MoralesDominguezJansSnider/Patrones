# Patrones

D:.
|   README.md
|
+---.vscode
|       settings.json
|
+---Banckend
|   |   .gitattributes
|   |   .gitignore
|   |   HELP.md
|   |   mvnw
|   |   mvnw.cmd
|   |   pom.xml
|   |
|   +---.mvn
|   |   \---wrapper
|   |           maven-wrapper.properties
|   |
|   +---src
|   |   +---main
|   |   |   +---java
|   |   |   |   \---com
|   |   |   |       \---example
|   |   |   |           \---Banckend
|   |   |   |               |   ParteApplication.java
|   |   |   |               |
|   |   |   |               \---items
|   |   |   |                       Item.java
|   |   |   |                       ItemController.java
|   |   |   |
|   |   |   \---resources
|   |   |       |   application.properties
|   |   |       |
|   |   |       +---static
|   |   |       \---templates
|   |   \---test
|   |       \---java
|   |           \---com
|   |               \---example
|   |                   \---Banckend
|   |                           ParteApplicationTests.java
|   |
|   \---target
|       +---classes
|       |   |   application.properties
|       |   |
|       |   \---com
|       |       \---example
|       |           \---Banckend
|       |               |   ParteApplication.class
|       |               |
|       |               \---items
|       |                       Item.class
|       |                       ItemController.class
|       |
|       +---generated-sources
|       |   \---annotations
|       +---generated-test-sources
|       |   \---test-annotations
|       +---maven-status
|       |   \---maven-compiler-plugin
|       |       +---compile
|       |       |   \---default-compile
|       |       |           createdFiles.lst
|       |       |           inputFiles.lst
|       |       |
|       |       \---testCompile
|       |           \---default-testCompile
|       |                   createdFiles.lst
|       |                   inputFiles.lst
|       |
|       \---test-classes
|           \---com
|               \---example
|                   \---Banckend
|                           ParteApplicationTests.class
|
\---Frontend
    |   .gitignore
    |   eslint.config.js
    |   index.html
    |   package-lock.json
    |   package.json
    |   README.md
    |   vite.config.js
    |
    +---node_modules
    |   |   .package-lock.json
    |   |
    |   +---.bin
    |   |       acorn
    |   |       acorn.cmd
    |   |       acorn.ps1
    |   |       esbuild
    |   |       esbuild.cmd
    |   |       esbuild.ps1
    |   |       eslint
    |   |       eslint.cmd
    |   |       eslint.ps1
    |   |       js-yaml
    |   |       js-yaml.cmd
    |   |       js-yaml.ps1
    |   |       nanoid
    |   |       nanoid.cmd
    |   |       nanoid.ps1
    |   |       node-which
    |   |       node-which.cmd
    |   |       node-which.ps1
    |   |       rollup
    |   |       rollup.cmd
    |   |       rollup.ps1
    |   |       vite
    |   |       vite.cmd
    |   |       vite.ps1
    |   |
    |   +---.vite
    |   |   \---deps
    |   |           axios.js
    |   |           axios.js.map
    |   |           chunk-HKJ2B2AA.js
    |   |           chunk-HKJ2B2AA.js.map
    |   |           chunk-UJJ4OYEN.js
    |   |           chunk-UJJ4OYEN.js.map
    |   |           package.json
    |   |           react-dom_client.js
    |   |           react-dom_client.js.map
    |   |           react.js
    |   |           react.js.map
    |   |           react_jsx-dev-runtime.js
    |   |           react_jsx-dev-runtime.js.map
    |   |           _metadata.json
    |   |
    |   +---.vite-temp
    |   +---@esbuild
    |   |   \---win32-x64
    |   |           esbuild.exe
    |   |           package.json
    |   |           README.md
    |   |
    |   +---@eslint
    |   |   +---config-array
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |
    |   |   |   \---dist
    |   |   |       +---cjs
    |   |   |       |   |   index.cjs
    |   |   |       |   |   index.d.cts
    |   |   |       |   |   types.ts
    |   |   |       |   |
    |   |   |       |   \---std__path
    |   |   |       |           posix.cjs
    |   |   |       |           windows.cjs
    |   |   |       |
    |   |   |       \---esm
    |   |   |           |   index.d.ts
    |   |   |           |   index.js
    |   |   |           |   types.d.ts
    |   |   |           |   types.ts
    |   |   |           |
    |   |   |           \---std__path
    |   |   |                   posix.js
    |   |   |                   windows.js
    |   |   |
    |   |   +---config-helpers
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |
    |   |   |   \---dist
    |   |   |       +---cjs
    |   |   |       |       index.cjs
    |   |   |       |       index.d.cts
    |   |   |       |       types.cts
    |   |   |       |
    |   |   |       \---esm
    |   |   |               index.d.ts
    |   |   |               index.js
    |   |   |               types.d.ts
    |   |   |               types.ts
    |   |   |
    |   |   +---core
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |
    |   |   |   \---dist
    |   |   |       +---cjs
    |   |   |       |       types.d.cts
    |   |   |       |
    |   |   |       \---esm
    |   |   |               types.d.ts
    |   |   |
    |   |   +---eslintrc
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |   universal.js
    |   |   |   |
    |   |   |   +---conf
    |   |   |   |       config-schema.js
    |   |   |   |       environments.js
    |   |   |   |
    |   |   |   +---dist
    |   |   |   |       eslintrc-universal.cjs
    |   |   |   |       eslintrc-universal.cjs.map
    |   |   |   |       eslintrc.cjs
    |   |   |   |       eslintrc.cjs.map
    |   |   |   |       eslintrc.d.cts
    |   |   |   |
    |   |   |   +---lib
    |   |   |   |   |   cascading-config-array-factory.js
    |   |   |   |   |   config-array-factory.js
    |   |   |   |   |   flat-compat.js
    |   |   |   |   |   index-universal.js
    |   |   |   |   |   index.js
    |   |   |   |   |
    |   |   |   |   +---config-array
    |   |   |   |   |       config-array.js
    |   |   |   |   |       config-dependency.js
    |   |   |   |   |       extracted-config.js
    |   |   |   |   |       ignore-pattern.js
    |   |   |   |   |       index.js
    |   |   |   |   |       override-tester.js
    |   |   |   |   |
    |   |   |   |   +---shared
    |   |   |   |   |       ajv.js
    |   |   |   |   |       config-ops.js
    |   |   |   |   |       config-validator.js
    |   |   |   |   |       deep-merge-arrays.js
    |   |   |   |   |       deprecation-warnings.js
    |   |   |   |   |       naming.js
    |   |   |   |   |       relative-module-resolver.js
    |   |   |   |   |       types.js
    |   |   |   |   |
    |   |   |   |   \---types
    |   |   |   |           index.d.ts
    |   |   |   |
    |   |   |   \---node_modules
    |   |   |       \---globals
    |   |   |               globals.json
    |   |   |               index.d.ts
    |   |   |               index.js
    |   |   |               license
    |   |   |               package.json
    |   |   |               readme.md
    |   |   |
    |   |   +---js
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |
    |   |   |   +---src
    |   |   |   |   |   index.js
    |   |   |   |   |
    |   |   |   |   \---configs
    |   |   |   |           eslint-all.js
    |   |   |   |           eslint-recommended.js
    |   |   |   |
    |   |   |   \---types
    |   |   |           index.d.ts
    |   |   |
    |   |   +---object-schema
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |
    |   |   |   \---dist
    |   |   |       +---cjs
    |   |   |       |       index.cjs
    |   |   |       |       index.d.cts
    |   |   |       |       types.ts
    |   |   |       |
    |   |   |       \---esm
    |   |   |               index.d.ts
    |   |   |               index.js
    |   |   |               types.d.ts
    |   |   |               types.ts
    |   |   |
    |   |   \---plugin-kit
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   README.md
    |   |       |
    |   |       \---dist
    |   |           +---cjs
    |   |           |       index.cjs
    |   |           |       index.d.cts
    |   |           |       types.cts
    |   |           |
    |   |           \---esm
    |   |                   index.d.ts
    |   |                   index.js
    |   |                   types.d.ts
    |   |                   types.ts
    |   |
    |   +---@eslint-community
    |   |   +---eslint-utils
    |   |   |   |   index.d.mts
    |   |   |   |   index.d.ts
    |   |   |   |   index.js
    |   |   |   |   index.js.map
    |   |   |   |   index.mjs
    |   |   |   |   index.mjs.map
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |
    |   |   |   \---node_modules
    |   |   |       \---eslint-visitor-keys
    |   |   |           |   LICENSE
    |   |   |           |   package.json
    |   |   |           |   README.md
    |   |   |           |
    |   |   |           +---dist
    |   |   |           |       eslint-visitor-keys.cjs
    |   |   |           |       eslint-visitor-keys.d.cts
    |   |   |           |       index.d.ts
    |   |   |           |       visitor-keys.d.ts
    |   |   |           |
    |   |   |           \---lib
    |   |   |                   index.js
    |   |   |                   visitor-keys.js
    |   |   |
    |   |   \---regexpp
    |   |           index.d.ts
    |   |           index.js
    |   |           index.js.map
    |   |           index.mjs
    |   |           index.mjs.map
    |   |           LICENSE
    |   |           package.json
    |   |           README.md
    |   |
    |   +---@humanfs
    |   |   +---core
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |
    |   |   |   +---dist
    |   |   |   |       errors.d.ts
    |   |   |   |       fsx.d.ts
    |   |   |   |       hfs.d.ts
    |   |   |   |       index.d.ts
    |   |   |   |       path.d.ts
    |   |   |   |
    |   |   |   \---src
    |   |   |           errors.js
    |   |   |           hfs.js
    |   |   |           index.js
    |   |   |           path.js
    |   |   |
    |   |   \---node
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   README.md
    |   |       |
    |   |       +---dist
    |   |       |       index.d.ts
    |   |       |       node-fsx.d.ts
    |   |       |       node-hfs.d.ts
    |   |       |
    |   |       +---node_modules
    |   |       |   \---@humanwhocodes
    |   |       |       \---retry
    |   |       |           |   LICENSE
    |   |       |           |   package.json
    |   |       |           |   README.md
    |   |       |           |
    |   |       |           \---dist
    |   |       |                   retrier.cjs
    |   |       |                   retrier.d.cts
    |   |       |                   retrier.d.ts
    |   |       |                   retrier.js
    |   |       |                   retrier.min.js
    |   |       |                   retrier.mjs
    |   |       |
    |   |       \---src
    |   |               index.js
    |   |               node-hfs.js
    |   |
    |   +---@humanwhocodes
    |   |   +---module-importer
    |   |   |   |   CHANGELOG.md
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |
    |   |   |   +---dist
    |   |   |   |       module-importer.cjs
    |   |   |   |       module-importer.d.cts
    |   |   |   |       module-importer.d.ts
    |   |   |   |       module-importer.js
    |   |   |   |
    |   |   |   \---src
    |   |   |           module-importer.cjs
    |   |   |           module-importer.js
    |   |   |
    |   |   \---retry
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   README.md
    |   |       |
    |   |       \---dist
    |   |               retrier.cjs
    |   |               retrier.d.cts
    |   |               retrier.d.ts
    |   |               retrier.js
    |   |               retrier.min.js
    |   |               retrier.mjs
    |   |
    |   +---@rolldown
    |   |   \---pluginutils
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   README.md
    |   |       |
    |   |       \---dist
    |   |               index.cjs
    |   |               index.d.cts
    |   |               index.d.ts
    |   |               index.js
    |   |
    |   +---@rollup
    |   |   \---rollup-win32-x64-msvc
    |   |           package.json
    |   |           README.md
    |   |           rollup.win32-x64-msvc.node
    |   |
    |   +---@swc
    |   |   +---core
    |   |   |       binding.d.ts
    |   |   |       binding.js
    |   |   |       index.d.ts
    |   |   |       index.js
    |   |   |       package.json
    |   |   |       postinstall.js
    |   |   |       README.md
    |   |   |       spack.d.ts
    |   |   |       spack.js
    |   |   |       util.d.ts
    |   |   |       util.js
    |   |   |       Visitor.d.ts
    |   |   |       Visitor.js
    |   |   |
    |   |   +---core-win32-x64-msvc
    |   |   |       package.json
    |   |   |       README.md
    |   |   |       swc.win32-x64-msvc.node
    |   |   |
    |   |   +---counter
    |   |   |       CHANGELOG.md
    |   |   |       index.js
    |   |   |       package.json
    |   |   |       README.md
    |   |   |
    |   |   \---types
    |   |           assumptions.d.ts
    |   |           assumptions.js
    |   |           index.d.ts
    |   |           index.js
    |   |           LICENSE
    |   |           package.json
    |   |           README.md
    |   |
    |   +---@types
    |   |   +---estree
    |   |   |       flow.d.ts
    |   |   |       index.d.ts
    |   |   |       LICENSE
    |   |   |       package.json
    |   |   |       README.md
    |   |   |
    |   |   +---json-schema
    |   |   |       index.d.ts
    |   |   |       LICENSE
    |   |   |       package.json
    |   |   |       README.md
    |   |   |
    |   |   +---react
    |   |   |   |   canary.d.ts
    |   |   |   |   compiler-runtime.d.ts
    |   |   |   |   experimental.d.ts
    |   |   |   |   global.d.ts
    |   |   |   |   index.d.ts
    |   |   |   |   jsx-dev-runtime.d.ts
    |   |   |   |   jsx-runtime.d.ts
    |   |   |   |   LICENSE
    |   |   |   |   package.json
    |   |   |   |   README.md
    |   |   |   |
    |   |   |   \---ts5.0
    |   |   |       |   canary.d.ts
    |   |   |       |   experimental.d.ts
    |   |   |       |   global.d.ts
    |   |   |       |   index.d.ts
    |   |   |       |   jsx-dev-runtime.d.ts
    |   |   |       |   jsx-runtime.d.ts
    |   |   |       |
    |   |   |       \---v18
    |   |   |           |   global.d.ts
    |   |   |           |   index.d.ts
    |   |   |           |   jsx-dev-runtime.d.ts
    |   |   |           |   jsx-runtime.d.ts
    |   |   |           |
    |   |   |           \---ts5.0
    |   |   |                   global.d.ts
    |   |   |                   index.d.ts
    |   |   |                   jsx-dev-runtime.d.ts
    |   |   |                   jsx-runtime.d.ts
    |   |   |
    |   |   \---react-dom
    |   |       |   canary.d.ts
    |   |       |   client.d.ts
    |   |       |   experimental.d.ts
    |   |       |   index.d.ts
    |   |       |   LICENSE
    |   |       |   package.json
    |   |       |   README.md
    |   |       |   server.browser.d.ts
    |   |       |   server.bun.d.ts
    |   |       |   server.d.ts
    |   |       |   server.edge.d.ts
    |   |       |   server.node.d.ts
    |   |       |   static.browser.d.ts
    |   |       |   static.d.ts
    |   |       |   static.edge.d.ts
    |   |       |   static.node.d.ts
    |   |       |
    |   |       \---test-utils
    |   |               index.d.ts
    |   |
    |   +---@vitejs
    |   |   \---plugin-react-swc
    |   |           index.d.ts
    |   |           index.js
    |   |           LICENSE
    |   |           package.json
    |   |           README.md
    |   |           refresh-runtime.js
    |   |
    |   +---acorn
    |   |   |   CHANGELOG.md
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---bin
    |   |   |       acorn
    |   |   |
    |   |   \---dist
    |   |           acorn.d.mts
    |   |           acorn.d.ts
    |   |           acorn.js
    |   |           acorn.mjs
    |   |           bin.js
    |   |
    |   +---acorn-jsx
    |   |       index.d.ts
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       xhtml.js
    |   |
    |   +---ajv
    |   |   |   .tonic_example.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---dist
    |   |   |       ajv.bundle.js
    |   |   |       ajv.min.js
    |   |   |       ajv.min.js.map
    |   |   |
    |   |   +---lib
    |   |   |   |   ajv.d.ts
    |   |   |   |   ajv.js
    |   |   |   |   cache.js
    |   |   |   |   data.js
    |   |   |   |   definition_schema.js
    |   |   |   |   keyword.js
    |   |   |   |
    |   |   |   +---compile
    |   |   |   |       async.js
    |   |   |   |       equal.js
    |   |   |   |       error_classes.js
    |   |   |   |       formats.js
    |   |   |   |       index.js
    |   |   |   |       resolve.js
    |   |   |   |       rules.js
    |   |   |   |       schema_obj.js
    |   |   |   |       ucs2length.js
    |   |   |   |       util.js
    |   |   |   |
    |   |   |   +---dot
    |   |   |   |       allOf.jst
    |   |   |   |       anyOf.jst
    |   |   |   |       coerce.def
    |   |   |   |       comment.jst
    |   |   |   |       const.jst
    |   |   |   |       contains.jst
    |   |   |   |       custom.jst
    |   |   |   |       defaults.def
    |   |   |   |       definitions.def
    |   |   |   |       dependencies.jst
    |   |   |   |       enum.jst
    |   |   |   |       errors.def
    |   |   |   |       format.jst
    |   |   |   |       if.jst
    |   |   |   |       items.jst
    |   |   |   |       missing.def
    |   |   |   |       multipleOf.jst
    |   |   |   |       not.jst
    |   |   |   |       oneOf.jst
    |   |   |   |       pattern.jst
    |   |   |   |       properties.jst
    |   |   |   |       propertyNames.jst
    |   |   |   |       ref.jst
    |   |   |   |       required.jst
    |   |   |   |       uniqueItems.jst
    |   |   |   |       validate.jst
    |   |   |   |       _limit.jst
    |   |   |   |       _limitItems.jst
    |   |   |   |       _limitLength.jst
    |   |   |   |       _limitProperties.jst
    |   |   |   |
    |   |   |   +---dotjs
    |   |   |   |       allOf.js
    |   |   |   |       anyOf.js
    |   |   |   |       comment.js
    |   |   |   |       const.js
    |   |   |   |       contains.js
    |   |   |   |       custom.js
    |   |   |   |       dependencies.js
    |   |   |   |       enum.js
    |   |   |   |       format.js
    |   |   |   |       if.js
    |   |   |   |       index.js
    |   |   |   |       items.js
    |   |   |   |       multipleOf.js
    |   |   |   |       not.js
    |   |   |   |       oneOf.js
    |   |   |   |       pattern.js
    |   |   |   |       properties.js
    |   |   |   |       propertyNames.js
    |   |   |   |       README.md
    |   |   |   |       ref.js
    |   |   |   |       required.js
    |   |   |   |       uniqueItems.js
    |   |   |   |       validate.js
    |   |   |   |       _limit.js
    |   |   |   |       _limitItems.js
    |   |   |   |       _limitLength.js
    |   |   |   |       _limitProperties.js
    |   |   |   |
    |   |   |   \---refs
    |   |   |           data.json
    |   |   |           json-schema-draft-04.json
    |   |   |           json-schema-draft-06.json
    |   |   |           json-schema-draft-07.json
    |   |   |           json-schema-secure.json
    |   |   |
    |   |   \---scripts
    |   |           .eslintrc.yml
    |   |           bundle.js
    |   |           compile-dots.js
    |   |           info
    |   |           prepare-tests
    |   |           publish-built-version
    |   |           travis-gh-pages
    |   |
    |   +---ansi-styles
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---argparse
    |   |   |   argparse.js
    |   |   |   CHANGELOG.md
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---lib
    |   |           sub.js
    |   |           textwrap.js
    |   |
    |   +---asynckit
    |   |   |   bench.js
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   parallel.js
    |   |   |   README.md
    |   |   |   serial.js
    |   |   |   serialOrdered.js
    |   |   |   stream.js
    |   |   |
    |   |   \---lib
    |   |           abort.js
    |   |           async.js
    |   |           defer.js
    |   |           iterate.js
    |   |           readable_asynckit.js
    |   |           readable_parallel.js
    |   |           readable_serial.js
    |   |           readable_serial_ordered.js
    |   |           state.js
    |   |           streamify.js
    |   |           terminator.js
    |   |
    |   +---axios
    |   |   |   CHANGELOG.md
    |   |   |   index.d.cts
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   MIGRATION_GUIDE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---dist
    |   |   |   |   axios.js
    |   |   |   |   axios.js.map
    |   |   |   |   axios.min.js
    |   |   |   |   axios.min.js.map
    |   |   |   |
    |   |   |   +---browser
    |   |   |   |       axios.cjs
    |   |   |   |       axios.cjs.map
    |   |   |   |
    |   |   |   +---esm
    |   |   |   |       axios.js
    |   |   |   |       axios.js.map
    |   |   |   |       axios.min.js
    |   |   |   |       axios.min.js.map
    |   |   |   |
    |   |   |   \---node
    |   |   |           axios.cjs
    |   |   |           axios.cjs.map
    |   |   |
    |   |   \---lib
    |   |       |   axios.js
    |   |       |   utils.js
    |   |       |
    |   |       +---adapters
    |   |       |       adapters.js
    |   |       |       fetch.js
    |   |       |       http.js
    |   |       |       README.md
    |   |       |       xhr.js
    |   |       |
    |   |       +---cancel
    |   |       |       CanceledError.js
    |   |       |       CancelToken.js
    |   |       |       isCancel.js
    |   |       |
    |   |       +---core
    |   |       |       Axios.js
    |   |       |       AxiosError.js
    |   |       |       AxiosHeaders.js
    |   |       |       buildFullPath.js
    |   |       |       dispatchRequest.js
    |   |       |       InterceptorManager.js
    |   |       |       mergeConfig.js
    |   |       |       README.md
    |   |       |       settle.js
    |   |       |       transformData.js
    |   |       |
    |   |       +---defaults
    |   |       |       index.js
    |   |       |       transitional.js
    |   |       |
    |   |       +---env
    |   |       |   |   data.js
    |   |       |   |   README.md
    |   |       |   |
    |   |       |   \---classes
    |   |       |           FormData.js
    |   |       |
    |   |       +---helpers
    |   |       |       AxiosTransformStream.js
    |   |       |       AxiosURLSearchParams.js
    |   |       |       bind.js
    |   |       |       buildURL.js
    |   |       |       callbackify.js
    |   |       |       combineURLs.js
    |   |       |       composeSignals.js
    |   |       |       cookies.js
    |   |       |       deprecatedMethod.js
    |   |       |       formDataToJSON.js
    |   |       |       formDataToStream.js
    |   |       |       fromDataURI.js
    |   |       |       HttpStatusCode.js
    |   |       |       isAbsoluteURL.js
    |   |       |       isAxiosError.js
    |   |       |       isURLSameOrigin.js
    |   |       |       null.js
    |   |       |       parseHeaders.js
    |   |       |       parseProtocol.js
    |   |       |       progressEventReducer.js
    |   |       |       readBlob.js
    |   |       |       README.md
    |   |       |       resolveConfig.js
    |   |       |       speedometer.js
    |   |       |       spread.js
    |   |       |       throttle.js
    |   |       |       toFormData.js
    |   |       |       toURLEncodedForm.js
    |   |       |       trackStream.js
    |   |       |       validator.js
    |   |       |       ZlibHeaderTransformStream.js
    |   |       |
    |   |       \---platform
    |   |           |   index.js
    |   |           |
    |   |           +---browser
    |   |           |   |   index.js
    |   |           |   |
    |   |           |   \---classes
    |   |           |           Blob.js
    |   |           |           FormData.js
    |   |           |           URLSearchParams.js
    |   |           |
    |   |           +---common
    |   |           |       utils.js
    |   |           |
    |   |           \---node
    |   |               |   index.js
    |   |               |
    |   |               \---classes
    |   |                       FormData.js
    |   |                       URLSearchParams.js
    |   |
    |   +---balanced-match
    |   |   |   index.js
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---.github
    |   |           FUNDING.yml
    |   |
    |   +---brace-expansion
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   +---call-bind-apply-helpers
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   actualApply.d.ts
    |   |   |   actualApply.js
    |   |   |   applyBind.d.ts
    |   |   |   applyBind.js
    |   |   |   CHANGELOG.md
    |   |   |   functionApply.d.ts
    |   |   |   functionApply.js
    |   |   |   functionCall.d.ts
    |   |   |   functionCall.js
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   reflectApply.d.ts
    |   |   |   reflectApply.js
    |   |   |   tsconfig.json
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |
    |   |   \---test
    |   |           index.js
    |   |
    |   +---callsites
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---chalk
    |   |   |   index.d.ts
    |   |   |   license
    |   |   |   package.json
    |   |   |   readme.md
    |   |   |
    |   |   \---source
    |   |           index.js
    |   |           templates.js
    |   |           util.js
    |   |
    |   +---color-convert
    |   |       CHANGELOG.md
    |   |       conversions.js
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       route.js
    |   |
    |   +---color-name
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   +---combined-stream
    |   |   |   License
    |   |   |   package.json
    |   |   |   Readme.md
    |   |   |   yarn.lock
    |   |   |
    |   |   \---lib
    |   |           combined_stream.js
    |   |
    |   +---concat-map
    |   |   |   .travis.yml
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.markdown
    |   |   |
    |   |   +---example
    |   |   |       map.js
    |   |   |
    |   |   \---test
    |   |           map.js
    |   |
    |   +---cross-spawn
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---lib
    |   |       |   enoent.js
    |   |       |   parse.js
    |   |       |
    |   |       \---util
    |   |               escape.js
    |   |               readShebang.js
    |   |               resolveCommand.js
    |   |
    |   +---csstype
    |   |       index.d.ts
    |   |       index.js.flow
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   +---debug
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---src
    |   |           browser.js
    |   |           common.js
    |   |           index.js
    |   |           node.js
    |   |
    |   +---deep-is
    |   |   |   .travis.yml
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.markdown
    |   |   |
    |   |   +---example
    |   |   |       cmp.js
    |   |   |
    |   |   \---test
    |   |           cmp.js
    |   |           NaN.js
    |   |           neg-vs-pos-0.js
    |   |
    |   +---delayed-stream
    |   |   |   .npmignore
    |   |   |   License
    |   |   |   Makefile
    |   |   |   package.json
    |   |   |   Readme.md
    |   |   |
    |   |   \---lib
    |   |           delayed_stream.js
    |   |
    |   +---dunder-proto
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   get.d.ts
    |   |   |   get.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   set.d.ts
    |   |   |   set.js
    |   |   |   tsconfig.json
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |
    |   |   \---test
    |   |           get.js
    |   |           index.js
    |   |           set.js
    |   |
    |   +---es-define-property
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   tsconfig.json
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |
    |   |   \---test
    |   |           index.js
    |   |
    |   +---es-errors
    |   |   |   .eslintrc
    |   |   |   CHANGELOG.md
    |   |   |   eval.d.ts
    |   |   |   eval.js
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   range.d.ts
    |   |   |   range.js
    |   |   |   README.md
    |   |   |   ref.d.ts
    |   |   |   ref.js
    |   |   |   syntax.d.ts
    |   |   |   syntax.js
    |   |   |   tsconfig.json
    |   |   |   type.d.ts
    |   |   |   type.js
    |   |   |   uri.d.ts
    |   |   |   uri.js
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |
    |   |   \---test
    |   |           index.js
    |   |
    |   +---es-object-atoms
    |   |   |   .eslintrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   isObject.d.ts
    |   |   |   isObject.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   RequireObjectCoercible.d.ts
    |   |   |   RequireObjectCoercible.js
    |   |   |   ToObject.d.ts
    |   |   |   ToObject.js
    |   |   |   tsconfig.json
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |
    |   |   \---test
    |   |           index.js
    |   |
    |   +---es-set-tostringtag
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   tsconfig.json
    |   |   |
    |   |   \---test
    |   |           index.js
    |   |
    |   +---esbuild
    |   |   |   install.js
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---bin
    |   |   |       esbuild
    |   |   |
    |   |   \---lib
    |   |           main.d.ts
    |   |           main.js
    |   |
    |   +---escape-string-regexp
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---eslint
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---bin
    |   |   |       eslint.js
    |   |   |
    |   |   +---conf
    |   |   |       default-cli-options.js
    |   |   |       ecma-version.js
    |   |   |       globals.js
    |   |   |       replacements.json
    |   |   |       rule-type-list.json
    |   |   |
    |   |   +---lib
    |   |   |   |   api.js
    |   |   |   |   cli.js
    |   |   |   |   config-api.js
    |   |   |   |   options.js
    |   |   |   |   universal.js
    |   |   |   |   unsupported-api.js
    |   |   |   |
    |   |   |   +---cli-engine
    |   |   |   |   |   cli-engine.js
    |   |   |   |   |   file-enumerator.js
    |   |   |   |   |   hash.js
    |   |   |   |   |   index.js
    |   |   |   |   |   lint-result-cache.js
    |   |   |   |   |   load-rules.js
    |   |   |   |   |
    |   |   |   |   \---formatters
    |   |   |   |           formatters-meta.json
    |   |   |   |           html.js
    |   |   |   |           json-with-metadata.js
    |   |   |   |           json.js
    |   |   |   |           stylish.js
    |   |   |   |
    |   |   |   +---config
    |   |   |   |       config-loader.js
    |   |   |   |       config.js
    |   |   |   |       default-config.js
    |   |   |   |       flat-config-array.js
    |   |   |   |       flat-config-schema.js
    |   |   |   |
    |   |   |   +---eslint
    |   |   |   |       eslint-helpers.js
    |   |   |   |       eslint.js
    |   |   |   |       index.js
    |   |   |   |       legacy-eslint.js
    |   |   |   |
    |   |   |   +---languages
    |   |   |   |   \---js
    |   |   |   |       |   index.js
    |   |   |   |       |   validate-language-options.js
    |   |   |   |       |
    |   |   |   |       \---source-code
    |   |   |   |           |   index.js
    |   |   |   |           |   source-code.js
    |   |   |   |           |
    |   |   |   |           \---token-store
    |   |   |   |                   backward-token-comment-cursor.js
    |   |   |   |                   backward-token-cursor.js
    |   |   |   |                   cursor.js
    |   |   |   |                   cursors.js
    |   |   |   |                   decorative-cursor.js
    |   |   |   |                   filter-cursor.js
    |   |   |   |                   forward-token-comment-cursor.js
    |   |   |   |                   forward-token-cursor.js
    |   |   |   |                   index.js
    |   |   |   |                   limit-cursor.js
    |   |   |   |                   padded-token-cursor.js
    |   |   |   |                   skip-cursor.js
    |   |   |   |                   utils.js
    |   |   |   |
    |   |   |   +---linter
    |   |   |   |   |   apply-disable-directives.js
    |   |   |   |   |   esquery.js
    |   |   |   |   |   file-context.js
    |   |   |   |   |   file-report.js
    |   |   |   |   |   index.js
    |   |   |   |   |   interpolate.js
    |   |   |   |   |   linter.js
    |   |   |   |   |   rule-fixer.js
    |   |   |   |   |   rules.js
    |   |   |   |   |   source-code-fixer.js
    |   |   |   |   |   source-code-traverser.js
    |   |   |   |   |   source-code-visitor.js
    |   |   |   |   |   timing.js
    |   |   |   |   |   vfile.js
    |   |   |   |   |
    |   |   |   |   \---code-path-analysis
    |   |   |   |           code-path-analyzer.js
    |   |   |   |           code-path-segment.js
    |   |   |   |           code-path-state.js
    |   |   |   |           code-path.js
    |   |   |   |           debug-helpers.js
    |   |   |   |           fork-context.js
    |   |   |   |           id-generator.js
    |   |   |   |
    |   |   |   +---rule-tester
    |   |   |   |       index.js
    |   |   |   |       rule-tester.js
    |   |   |   |
    |   |   |   +---rules
    |   |   |   |   |   accessor-pairs.js
    |   |   |   |   |   array-bracket-newline.js
    |   |   |   |   |   array-bracket-spacing.js
    |   |   |   |   |   array-callback-return.js
    |   |   |   |   |   array-element-newline.js
    |   |   |   |   |   arrow-body-style.js
    |   |   |   |   |   arrow-parens.js
    |   |   |   |   |   arrow-spacing.js
    |   |   |   |   |   block-scoped-var.js
    |   |   |   |   |   block-spacing.js
    |   |   |   |   |   brace-style.js
    |   |   |   |   |   callback-return.js
    |   |   |   |   |   camelcase.js
    |   |   |   |   |   capitalized-comments.js
    |   |   |   |   |   class-methods-use-this.js
    |   |   |   |   |   comma-dangle.js
    |   |   |   |   |   comma-spacing.js
    |   |   |   |   |   comma-style.js
    |   |   |   |   |   complexity.js
    |   |   |   |   |   computed-property-spacing.js
    |   |   |   |   |   consistent-return.js
    |   |   |   |   |   consistent-this.js
    |   |   |   |   |   constructor-super.js
    |   |   |   |   |   curly.js
    |   |   |   |   |   default-case-last.js
    |   |   |   |   |   default-case.js
    |   |   |   |   |   default-param-last.js
    |   |   |   |   |   dot-location.js
    |   |   |   |   |   dot-notation.js
    |   |   |   |   |   eol-last.js
    |   |   |   |   |   eqeqeq.js
    |   |   |   |   |   for-direction.js
    |   |   |   |   |   func-call-spacing.js
    |   |   |   |   |   func-name-matching.js
    |   |   |   |   |   func-names.js
    |   |   |   |   |   func-style.js
    |   |   |   |   |   function-call-argument-newline.js
    |   |   |   |   |   function-paren-newline.js
    |   |   |   |   |   generator-star-spacing.js
    |   |   |   |   |   getter-return.js
    |   |   |   |   |   global-require.js
    |   |   |   |   |   grouped-accessor-pairs.js
    |   |   |   |   |   guard-for-in.js
    |   |   |   |   |   handle-callback-err.js
    |   |   |   |   |   id-blacklist.js
    |   |   |   |   |   id-denylist.js
    |   |   |   |   |   id-length.js
    |   |   |   |   |   id-match.js
    |   |   |   |   |   implicit-arrow-linebreak.js
    |   |   |   |   |   indent-legacy.js
    |   |   |   |   |   indent.js
    |   |   |   |   |   index.js
    |   |   |   |   |   init-declarations.js
    |   |   |   |   |   jsx-quotes.js
    |   |   |   |   |   key-spacing.js
    |   |   |   |   |   keyword-spacing.js
    |   |   |   |   |   line-comment-position.js
    |   |   |   |   |   linebreak-style.js
    |   |   |   |   |   lines-around-comment.js
    |   |   |   |   |   lines-around-directive.js
    |   |   |   |   |   lines-between-class-members.js
    |   |   |   |   |   logical-assignment-operators.js
    |   |   |   |   |   max-classes-per-file.js
    |   |   |   |   |   max-depth.js
    |   |   |   |   |   max-len.js
    |   |   |   |   |   max-lines-per-function.js
    |   |   |   |   |   max-lines.js
    |   |   |   |   |   max-nested-callbacks.js
    |   |   |   |   |   max-params.js
    |   |   |   |   |   max-statements-per-line.js
    |   |   |   |   |   max-statements.js
    |   |   |   |   |   multiline-comment-style.js
    |   |   |   |   |   multiline-ternary.js
    |   |   |   |   |   new-cap.js
    |   |   |   |   |   new-parens.js
    |   |   |   |   |   newline-after-var.js
    |   |   |   |   |   newline-before-return.js
    |   |   |   |   |   newline-per-chained-call.js
    |   |   |   |   |   no-alert.js
    |   |   |   |   |   no-array-constructor.js
    |   |   |   |   |   no-async-promise-executor.js
    |   |   |   |   |   no-await-in-loop.js
    |   |   |   |   |   no-bitwise.js
    |   |   |   |   |   no-buffer-constructor.js
    |   |   |   |   |   no-caller.js
    |   |   |   |   |   no-case-declarations.js
    |   |   |   |   |   no-catch-shadow.js
    |   |   |   |   |   no-class-assign.js
    |   |   |   |   |   no-compare-neg-zero.js
    |   |   |   |   |   no-cond-assign.js
    |   |   |   |   |   no-confusing-arrow.js
    |   |   |   |   |   no-console.js
    |   |   |   |   |   no-const-assign.js
    |   |   |   |   |   no-constant-binary-expression.js
    |   |   |   |   |   no-constant-condition.js
    |   |   |   |   |   no-constructor-return.js
    |   |   |   |   |   no-continue.js
    |   |   |   |   |   no-control-regex.js
    |   |   |   |   |   no-debugger.js
    |   |   |   |   |   no-delete-var.js
    |   |   |   |   |   no-div-regex.js
    |   |   |   |   |   no-dupe-args.js
    |   |   |   |   |   no-dupe-class-members.js
    |   |   |   |   |   no-dupe-else-if.js
    |   |   |   |   |   no-dupe-keys.js
    |   |   |   |   |   no-duplicate-case.js
    |   |   |   |   |   no-duplicate-imports.js
    |   |   |   |   |   no-else-return.js
    |   |   |   |   |   no-empty-character-class.js
    |   |   |   |   |   no-empty-function.js
    |   |   |   |   |   no-empty-pattern.js
    |   |   |   |   |   no-empty-static-block.js
    |   |   |   |   |   no-empty.js
    |   |   |   |   |   no-eq-null.js
    |   |   |   |   |   no-eval.js
    |   |   |   |   |   no-ex-assign.js
    |   |   |   |   |   no-extend-native.js
    |   |   |   |   |   no-extra-bind.js
    |   |   |   |   |   no-extra-boolean-cast.js
    |   |   |   |   |   no-extra-label.js
    |   |   |   |   |   no-extra-parens.js
    |   |   |   |   |   no-extra-semi.js
    |   |   |   |   |   no-fallthrough.js
    |   |   |   |   |   no-floating-decimal.js
    |   |   |   |   |   no-func-assign.js
    |   |   |   |   |   no-global-assign.js
    |   |   |   |   |   no-implicit-coercion.js
    |   |   |   |   |   no-implicit-globals.js
    |   |   |   |   |   no-implied-eval.js
    |   |   |   |   |   no-import-assign.js
    |   |   |   |   |   no-inline-comments.js
    |   |   |   |   |   no-inner-declarations.js
    |   |   |   |   |   no-invalid-regexp.js
    |   |   |   |   |   no-invalid-this.js
    |   |   |   |   |   no-irregular-whitespace.js
    |   |   |   |   |   no-iterator.js
    |   |   |   |   |   no-label-var.js
    |   |   |   |   |   no-labels.js
    |   |   |   |   |   no-lone-blocks.js
    |   |   |   |   |   no-lonely-if.js
    |   |   |   |   |   no-loop-func.js
    |   |   |   |   |   no-loss-of-precision.js
    |   |   |   |   |   no-magic-numbers.js
    |   |   |   |   |   no-misleading-character-class.js
    |   |   |   |   |   no-mixed-operators.js
    |   |   |   |   |   no-mixed-requires.js
    |   |   |   |   |   no-mixed-spaces-and-tabs.js
    |   |   |   |   |   no-multi-assign.js
    |   |   |   |   |   no-multi-spaces.js
    |   |   |   |   |   no-multi-str.js
    |   |   |   |   |   no-multiple-empty-lines.js
    |   |   |   |   |   no-native-reassign.js
    |   |   |   |   |   no-negated-condition.js
    |   |   |   |   |   no-negated-in-lhs.js
    |   |   |   |   |   no-nested-ternary.js
    |   |   |   |   |   no-new-func.js
    |   |   |   |   |   no-new-native-nonconstructor.js
    |   |   |   |   |   no-new-object.js
    |   |   |   |   |   no-new-require.js
    |   |   |   |   |   no-new-symbol.js
    |   |   |   |   |   no-new-wrappers.js
    |   |   |   |   |   no-new.js
    |   |   |   |   |   no-nonoctal-decimal-escape.js
    |   |   |   |   |   no-obj-calls.js
    |   |   |   |   |   no-object-constructor.js
    |   |   |   |   |   no-octal-escape.js
    |   |   |   |   |   no-octal.js
    |   |   |   |   |   no-param-reassign.js
    |   |   |   |   |   no-path-concat.js
    |   |   |   |   |   no-plusplus.js
    |   |   |   |   |   no-process-env.js
    |   |   |   |   |   no-process-exit.js
    |   |   |   |   |   no-promise-executor-return.js
    |   |   |   |   |   no-proto.js
    |   |   |   |   |   no-prototype-builtins.js
    |   |   |   |   |   no-redeclare.js
    |   |   |   |   |   no-regex-spaces.js
    |   |   |   |   |   no-restricted-exports.js
    |   |   |   |   |   no-restricted-globals.js
    |   |   |   |   |   no-restricted-imports.js
    |   |   |   |   |   no-restricted-modules.js
    |   |   |   |   |   no-restricted-properties.js
    |   |   |   |   |   no-restricted-syntax.js
    |   |   |   |   |   no-return-assign.js
    |   |   |   |   |   no-return-await.js
    |   |   |   |   |   no-script-url.js
    |   |   |   |   |   no-self-assign.js
    |   |   |   |   |   no-self-compare.js
    |   |   |   |   |   no-sequences.js
    |   |   |   |   |   no-setter-return.js
    |   |   |   |   |   no-shadow-restricted-names.js
    |   |   |   |   |   no-shadow.js
    |   |   |   |   |   no-spaced-func.js
    |   |   |   |   |   no-sparse-arrays.js
    |   |   |   |   |   no-sync.js
    |   |   |   |   |   no-tabs.js
    |   |   |   |   |   no-template-curly-in-string.js
    |   |   |   |   |   no-ternary.js
    |   |   |   |   |   no-this-before-super.js
    |   |   |   |   |   no-throw-literal.js
    |   |   |   |   |   no-trailing-spaces.js
    |   |   |   |   |   no-unassigned-vars.js
    |   |   |   |   |   no-undef-init.js
    |   |   |   |   |   no-undef.js
    |   |   |   |   |   no-undefined.js
    |   |   |   |   |   no-underscore-dangle.js
    |   |   |   |   |   no-unexpected-multiline.js
    |   |   |   |   |   no-unmodified-loop-condition.js
    |   |   |   |   |   no-unneeded-ternary.js
    |   |   |   |   |   no-unreachable-loop.js
    |   |   |   |   |   no-unreachable.js
    |   |   |   |   |   no-unsafe-finally.js
    |   |   |   |   |   no-unsafe-negation.js
    |   |   |   |   |   no-unsafe-optional-chaining.js
    |   |   |   |   |   no-unused-expressions.js
    |   |   |   |   |   no-unused-labels.js
    |   |   |   |   |   no-unused-private-class-members.js
    |   |   |   |   |   no-unused-vars.js
    |   |   |   |   |   no-use-before-define.js
    |   |   |   |   |   no-useless-assignment.js
    |   |   |   |   |   no-useless-backreference.js
    |   |   |   |   |   no-useless-call.js
    |   |   |   |   |   no-useless-catch.js
    |   |   |   |   |   no-useless-computed-key.js
    |   |   |   |   |   no-useless-concat.js
    |   |   |   |   |   no-useless-constructor.js
    |   |   |   |   |   no-useless-escape.js
    |   |   |   |   |   no-useless-rename.js
    |   |   |   |   |   no-useless-return.js
    |   |   |   |   |   no-var.js
    |   |   |   |   |   no-void.js
    |   |   |   |   |   no-warning-comments.js
    |   |   |   |   |   no-whitespace-before-property.js
    |   |   |   |   |   no-with.js
    |   |   |   |   |   nonblock-statement-body-position.js
    |   |   |   |   |   object-curly-newline.js
    |   |   |   |   |   object-curly-spacing.js
    |   |   |   |   |   object-property-newline.js
    |   |   |   |   |   object-shorthand.js
    |   |   |   |   |   one-var-declaration-per-line.js
    |   |   |   |   |   one-var.js
    |   |   |   |   |   operator-assignment.js
    |   |   |   |   |   operator-linebreak.js
    |   |   |   |   |   padded-blocks.js
    |   |   |   |   |   padding-line-between-statements.js
    |   |   |   |   |   prefer-arrow-callback.js
    |   |   |   |   |   prefer-const.js
    |   |   |   |   |   prefer-destructuring.js
    |   |   |   |   |   prefer-exponentiation-operator.js
    |   |   |   |   |   prefer-named-capture-group.js
    |   |   |   |   |   prefer-numeric-literals.js
    |   |   |   |   |   prefer-object-has-own.js
    |   |   |   |   |   prefer-object-spread.js
    |   |   |   |   |   prefer-promise-reject-errors.js
    |   |   |   |   |   prefer-reflect.js
    |   |   |   |   |   prefer-regex-literals.js
    |   |   |   |   |   prefer-rest-params.js
    |   |   |   |   |   prefer-spread.js
    |   |   |   |   |   prefer-template.js
    |   |   |   |   |   quote-props.js
    |   |   |   |   |   quotes.js
    |   |   |   |   |   radix.js
    |   |   |   |   |   require-atomic-updates.js
    |   |   |   |   |   require-await.js
    |   |   |   |   |   require-unicode-regexp.js
    |   |   |   |   |   require-yield.js
    |   |   |   |   |   rest-spread-spacing.js
    |   |   |   |   |   semi-spacing.js
    |   |   |   |   |   semi-style.js
    |   |   |   |   |   semi.js
    |   |   |   |   |   sort-imports.js
    |   |   |   |   |   sort-keys.js
    |   |   |   |   |   sort-vars.js
    |   |   |   |   |   space-before-blocks.js
    |   |   |   |   |   space-before-function-paren.js
    |   |   |   |   |   space-in-parens.js
    |   |   |   |   |   space-infix-ops.js
    |   |   |   |   |   space-unary-ops.js
    |   |   |   |   |   spaced-comment.js
    |   |   |   |   |   strict.js
    |   |   |   |   |   switch-colon-spacing.js
    |   |   |   |   |   symbol-description.js
    |   |   |   |   |   template-curly-spacing.js
    |   |   |   |   |   template-tag-spacing.js
    |   |   |   |   |   unicode-bom.js
    |   |   |   |   |   use-isnan.js
    |   |   |   |   |   valid-typeof.js
    |   |   |   |   |   vars-on-top.js
    |   |   |   |   |   wrap-iife.js
    |   |   |   |   |   wrap-regex.js
    |   |   |   |   |   yield-star-spacing.js
    |   |   |   |   |   yoda.js
    |   |   |   |   |
    |   |   |   |   \---utils
    |   |   |   |       |   ast-utils.js
    |   |   |   |       |   char-source.js
    |   |   |   |       |   fix-tracker.js
    |   |   |   |       |   keywords.js
    |   |   |   |       |   lazy-loading-rule-map.js
    |   |   |   |       |   regular-expressions.js
    |   |   |   |       |
    |   |   |   |       \---unicode
    |   |   |   |               index.js
    |   |   |   |               is-combining-character.js
    |   |   |   |               is-emoji-modifier.js
    |   |   |   |               is-regional-indicator-symbol.js
    |   |   |   |               is-surrogate-pair.js
    |   |   |   |
    |   |   |   +---services
    |   |   |   |       parser-service.js
    |   |   |   |       processor-service.js
    |   |   |   |       suppressions-service.js
    |   |   |   |       warning-service.js
    |   |   |   |
    |   |   |   +---shared
    |   |   |   |       ajv.js
    |   |   |   |       assert.js
    |   |   |   |       ast-utils.js
    |   |   |   |       deep-merge-arrays.js
    |   |   |   |       directives.js
    |   |   |   |       flags.js
    |   |   |   |       logging.js
    |   |   |   |       naming.js
    |   |   |   |       option-utils.js
    |   |   |   |       relative-module-resolver.js
    |   |   |   |       runtime-info.js
    |   |   |   |       serialization.js
    |   |   |   |       severity.js
    |   |   |   |       stats.js
    |   |   |   |       string-utils.js
    |   |   |   |       text-table.js
    |   |   |   |       traverser.js
    |   |   |   |
    |   |   |   \---types
    |   |   |           config-api.d.ts
    |   |   |           index.d.ts
    |   |   |           rules.d.ts
    |   |   |           universal.d.ts
    |   |   |           use-at-your-own-risk.d.ts
    |   |   |
    |   |   \---messages
    |   |           all-files-ignored.js
    |   |           all-matched-files-ignored.js
    |   |           config-file-missing.js
    |   |           config-plugin-missing.js
    |   |           config-serialize-function.js
    |   |           eslintrc-incompat.js
    |   |           eslintrc-plugins.js
    |   |           extend-config-missing.js
    |   |           failed-to-read-json.js
    |   |           file-not-found.js
    |   |           invalid-rule-options.js
    |   |           invalid-rule-severity.js
    |   |           no-config-found.js
    |   |           plugin-conflict.js
    |   |           plugin-invalid.js
    |   |           plugin-missing.js
    |   |           print-config-with-directory-path.js
    |   |           shared.js
    |   |           whitespace-found.js
    |   |
    |   +---eslint-plugin-react-hooks
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---cjs
    |   |           eslint-plugin-react-hooks.d.ts
    |   |           eslint-plugin-react-hooks.development.js
    |   |           eslint-plugin-react-hooks.production.js
    |   |
    |   +---eslint-plugin-react-refresh
    |   |       index.d.ts
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   +---eslint-scope
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---dist
    |   |   |       eslint-scope.cjs
    |   |   |
    |   |   \---lib
    |   |           assert.js
    |   |           definition.js
    |   |           index.js
    |   |           pattern-visitor.js
    |   |           reference.js
    |   |           referencer.js
    |   |           scope-manager.js
    |   |           scope.js
    |   |           variable.js
    |   |           version.js
    |   |
    |   +---eslint-visitor-keys
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---dist
    |   |   |       eslint-visitor-keys.cjs
    |   |   |       eslint-visitor-keys.d.cts
    |   |   |       index.d.ts
    |   |   |       visitor-keys.d.ts
    |   |   |
    |   |   \---lib
    |   |           index.js
    |   |           visitor-keys.js
    |   |
    |   +---espree
    |   |   |   espree.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---dist
    |   |   |       espree.cjs
    |   |   |
    |   |   \---lib
    |   |           espree.js
    |   |           features.js
    |   |           options.js
    |   |           token-translator.js
    |   |           version.js
    |   |
    |   +---esquery
    |   |   |   license.txt
    |   |   |   package.json
    |   |   |   parser.js
    |   |   |   README.md
    |   |   |
    |   |   \---dist
    |   |           esquery.esm.js
    |   |           esquery.esm.min.js
    |   |           esquery.esm.min.js.map
    |   |           esquery.js
    |   |           esquery.lite.js
    |   |           esquery.lite.min.js
    |   |           esquery.lite.min.js.map
    |   |           esquery.min.js
    |   |           esquery.min.js.map
    |   |
    |   +---esrecurse
    |   |       .babelrc
    |   |       esrecurse.js
    |   |       gulpfile.babel.js
    |   |       package.json
    |   |       README.md
    |   |
    |   +---estraverse
    |   |       .jshintrc
    |   |       estraverse.js
    |   |       gulpfile.js
    |   |       LICENSE.BSD
    |   |       package.json
    |   |       README.md
    |   |
    |   +---esutils
    |   |   |   LICENSE.BSD
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---lib
    |   |           ast.js
    |   |           code.js
    |   |           keyword.js
    |   |           utils.js
    |   |
    |   +---fast-deep-equal
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   react.d.ts
    |   |   |   react.js
    |   |   |   README.md
    |   |   |
    |   |   \---es6
    |   |           index.d.ts
    |   |           index.js
    |   |           react.d.ts
    |   |           react.js
    |   |
    |   +---fast-json-stable-stringify
    |   |   |   .eslintrc.yml
    |   |   |   .travis.yml
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |
    |   |   +---benchmark
    |   |   |       index.js
    |   |   |       test.json
    |   |   |
    |   |   +---example
    |   |   |       key_cmp.js
    |   |   |       nested.js
    |   |   |       str.js
    |   |   |       value_cmp.js
    |   |   |
    |   |   \---test
    |   |           cmp.js
    |   |           nested.js
    |   |           str.js
    |   |           to-json.js
    |   |
    |   +---fast-levenshtein
    |   |       levenshtein.js
    |   |       LICENSE.md
    |   |       package.json
    |   |       README.md
    |   |
    |   +---fdir
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---dist
    |   |           index.cjs
    |   |           index.d.cts
    |   |           index.d.mts
    |   |           index.mjs
    |   |
    |   +---file-entry-cache
    |   |       cache.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   +---find-up
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---flat-cache
    |   |   |   changelog.md
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---src
    |   |           cache.js
    |   |           del.js
    |   |           utils.js
    |   |
    |   +---flatted
    |   |   |   es.js
    |   |   |   esm.js
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   min.js
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---cjs
    |   |   |       index.js
    |   |   |       package.json
    |   |   |
    |   |   +---esm
    |   |   |       index.js
    |   |   |
    |   |   +---php
    |   |   |       flatted.php
    |   |   |
    |   |   +---python
    |   |   |       flatted.py
    |   |   |
    |   |   \---types
    |   |           index.d.ts
    |   |
    |   +---follow-redirects
    |   |       debug.js
    |   |       http.js
    |   |       https.js
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   +---form-data
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   License
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---lib
    |   |           browser.js
    |   |           form_data.js
    |   |           populate.js
    |   |
    |   +---function-bind
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   implementation.js
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |       SECURITY.md
    |   |   |
    |   |   \---test
    |   |           .eslintrc
    |   |           index.js
    |   |
    |   +---get-intrinsic
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |
    |   |   \---test
    |   |           GetIntrinsic.js
    |   |
    |   +---get-proto
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   Object.getPrototypeOf.d.ts
    |   |   |   Object.getPrototypeOf.js
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   Reflect.getPrototypeOf.d.ts
    |   |   |   Reflect.getPrototypeOf.js
    |   |   |   tsconfig.json
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |
    |   |   \---test
    |   |           index.js
    |   |
    |   +---glob-parent
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   +---globals
    |   |       globals.json
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---gopd
    |   |   |   .eslintrc
    |   |   |   CHANGELOG.md
    |   |   |   gOPD.d.ts
    |   |   |   gOPD.js
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   tsconfig.json
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |
    |   |   \---test
    |   |           index.js
    |   |
    |   +---has-flag
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---has-symbols
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   shams.d.ts
    |   |   |   shams.js
    |   |   |   tsconfig.json
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |
    |   |   \---test
    |   |       |   index.js
    |   |       |   tests.js
    |   |       |
    |   |       \---shams
    |   |               core-js.js
    |   |               get-own-property-symbols.js
    |   |
    |   +---has-tostringtag
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   shams.d.ts
    |   |   |   shams.js
    |   |   |   tsconfig.json
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |
    |   |   \---test
    |   |       |   index.js
    |   |       |   tests.js
    |   |       |
    |   |       \---shams
    |   |               core-js.js
    |   |               get-own-property-symbols.js
    |   |
    |   +---hasown
    |   |   |   .eslintrc
    |   |   |   .nycrc
    |   |   |   CHANGELOG.md
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   tsconfig.json
    |   |   |
    |   |   \---.github
    |   |           FUNDING.yml
    |   |
    |   +---ignore
    |   |       index.d.ts
    |   |       index.js
    |   |       legacy.js
    |   |       LICENSE-MIT
    |   |       package.json
    |   |       README.md
    |   |
    |   +---import-fresh
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---imurmurhash
    |   |       imurmurhash.js
    |   |       imurmurhash.min.js
    |   |       package.json
    |   |       README.md
    |   |
    |   +---is-extglob
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   +---is-glob
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   +---isexe
    |   |   |   .npmignore
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   mode.js
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   windows.js
    |   |   |
    |   |   \---test
    |   |           basic.js
    |   |
    |   +---js-yaml
    |   |   |   CHANGELOG.md
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---bin
    |   |   |       js-yaml.js
    |   |   |
    |   |   +---dist
    |   |   |       js-yaml.js
    |   |   |       js-yaml.min.js
    |   |   |       js-yaml.mjs
    |   |   |
    |   |   \---lib
    |   |       |   common.js
    |   |       |   dumper.js
    |   |       |   exception.js
    |   |       |   loader.js
    |   |       |   schema.js
    |   |       |   snippet.js
    |   |       |   type.js
    |   |       |
    |   |       +---schema
    |   |       |       core.js
    |   |       |       default.js
    |   |       |       failsafe.js
    |   |       |       json.js
    |   |       |
    |   |       \---type
    |   |               binary.js
    |   |               bool.js
    |   |               float.js
    |   |               int.js
    |   |               map.js
    |   |               merge.js
    |   |               null.js
    |   |               omap.js
    |   |               pairs.js
    |   |               seq.js
    |   |               set.js
    |   |               str.js
    |   |               timestamp.js
    |   |
    |   +---json-buffer
    |   |   |   .travis.yml
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---test
    |   |           index.js
    |   |
    |   +---json-schema-traverse
    |   |   |   .eslintrc.yml
    |   |   |   .travis.yml
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---spec
    |   |       |   .eslintrc.yml
    |   |       |   index.spec.js
    |   |       |
    |   |       \---fixtures
    |   |               schema.js
    |   |
    |   +---json-stable-stringify-without-jsonify
    |   |   |   .npmignore
    |   |   |   .travis.yml
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   readme.markdown
    |   |   |
    |   |   +---example
    |   |   |       key_cmp.js
    |   |   |       nested.js
    |   |   |       str.js
    |   |   |       value_cmp.js
    |   |   |
    |   |   \---test
    |   |           cmp.js
    |   |           nested.js
    |   |           replacer.js
    |   |           space.js
    |   |           str.js
    |   |           to-json.js
    |   |
    |   +---keyv
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---src
    |   |           index.d.ts
    |   |           index.js
    |   |
    |   +---levn
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---lib
    |   |           cast.js
    |   |           index.js
    |   |           parse-string.js
    |   |
    |   +---locate-path
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---lodash.merge
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   +---math-intrinsics
    |   |   |   .eslintrc
    |   |   |   abs.d.ts
    |   |   |   abs.js
    |   |   |   CHANGELOG.md
    |   |   |   floor.d.ts
    |   |   |   floor.js
    |   |   |   isFinite.d.ts
    |   |   |   isFinite.js
    |   |   |   isInteger.d.ts
    |   |   |   isInteger.js
    |   |   |   isNaN.d.ts
    |   |   |   isNaN.js
    |   |   |   isNegativeZero.d.ts
    |   |   |   isNegativeZero.js
    |   |   |   LICENSE
    |   |   |   max.d.ts
    |   |   |   max.js
    |   |   |   min.d.ts
    |   |   |   min.js
    |   |   |   mod.d.ts
    |   |   |   mod.js
    |   |   |   package.json
    |   |   |   pow.d.ts
    |   |   |   pow.js
    |   |   |   README.md
    |   |   |   round.d.ts
    |   |   |   round.js
    |   |   |   sign.d.ts
    |   |   |   sign.js
    |   |   |   tsconfig.json
    |   |   |
    |   |   +---.github
    |   |   |       FUNDING.yml
    |   |   |
    |   |   +---constants
    |   |   |       maxArrayLength.d.ts
    |   |   |       maxArrayLength.js
    |   |   |       maxSafeInteger.d.ts
    |   |   |       maxSafeInteger.js
    |   |   |       maxValue.d.ts
    |   |   |       maxValue.js
    |   |   |
    |   |   \---test
    |   |           index.js
    |   |
    |   +---mime-db
    |   |       db.json
    |   |       HISTORY.md
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   +---mime-types
    |   |       HISTORY.md
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   +---minimatch
    |   |       LICENSE
    |   |       minimatch.js
    |   |       package.json
    |   |       README.md
    |   |
    |   +---ms
    |   |       index.js
    |   |       license.md
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---nanoid
    |   |   |   index.browser.cjs
    |   |   |   index.browser.js
    |   |   |   index.cjs
    |   |   |   index.d.cts
    |   |   |   index.d.ts
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   nanoid.js
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---async
    |   |   |       index.browser.cjs
    |   |   |       index.browser.js
    |   |   |       index.cjs
    |   |   |       index.d.ts
    |   |   |       index.js
    |   |   |       index.native.js
    |   |   |       package.json
    |   |   |
    |   |   +---bin
    |   |   |       nanoid.cjs
    |   |   |
    |   |   +---non-secure
    |   |   |       index.cjs
    |   |   |       index.d.ts
    |   |   |       index.js
    |   |   |       package.json
    |   |   |
    |   |   \---url-alphabet
    |   |           index.cjs
    |   |           index.js
    |   |           package.json
    |   |
    |   +---natural-compare
    |   |       index.js
    |   |       package.json
    |   |       README.md
    |   |
    |   +---optionator
    |   |   |   CHANGELOG.md
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---lib
    |   |           help.js
    |   |           index.js
    |   |           util.js
    |   |
    |   +---p-limit
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---p-locate
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---parent-module
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---path-exists
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---path-key
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---picocolors
    |   |       LICENSE
    |   |       package.json
    |   |       picocolors.browser.js
    |   |       picocolors.d.ts
    |   |       picocolors.js
    |   |       README.md
    |   |       types.d.ts
    |   |
    |   +---picomatch
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   posix.js
    |   |   |   README.md
    |   |   |
    |   |   \---lib
    |   |           constants.js
    |   |           parse.js
    |   |           picomatch.js
    |   |           scan.js
    |   |           utils.js
    |   |
    |   +---postcss
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---lib
    |   |           at-rule.d.ts
    |   |           at-rule.js
    |   |           comment.d.ts
    |   |           comment.js
    |   |           container.d.ts
    |   |           container.js
    |   |           css-syntax-error.d.ts
    |   |           css-syntax-error.js
    |   |           declaration.d.ts
    |   |           declaration.js
    |   |           document.d.ts
    |   |           document.js
    |   |           fromJSON.d.ts
    |   |           fromJSON.js
    |   |           input.d.ts
    |   |           input.js
    |   |           lazy-result.d.ts
    |   |           lazy-result.js
    |   |           list.d.ts
    |   |           list.js
    |   |           map-generator.js
    |   |           no-work-result.d.ts
    |   |           no-work-result.js
    |   |           node.d.ts
    |   |           node.js
    |   |           parse.d.ts
    |   |           parse.js
    |   |           parser.js
    |   |           postcss.d.mts
    |   |           postcss.d.ts
    |   |           postcss.js
    |   |           postcss.mjs
    |   |           previous-map.d.ts
    |   |           previous-map.js
    |   |           processor.d.ts
    |   |           processor.js
    |   |           result.d.ts
    |   |           result.js
    |   |           root.d.ts
    |   |           root.js
    |   |           rule.d.ts
    |   |           rule.js
    |   |           stringifier.d.ts
    |   |           stringifier.js
    |   |           stringify.d.ts
    |   |           stringify.js
    |   |           symbols.js
    |   |           terminal-highlight.js
    |   |           tokenize.js
    |   |           warn-once.js
    |   |           warning.d.ts
    |   |           warning.js
    |   |
    |   +---prelude-ls
    |   |   |   CHANGELOG.md
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---lib
    |   |           Func.js
    |   |           index.js
    |   |           List.js
    |   |           Num.js
    |   |           Obj.js
    |   |           Str.js
    |   |
    |   +---proxy-from-env
    |   |       .eslintrc
    |   |       .travis.yml
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |       test.js
    |   |
    |   +---punycode
    |   |       LICENSE-MIT.txt
    |   |       package.json
    |   |       punycode.es6.js
    |   |       punycode.js
    |   |       README.md
    |   |
    |   +---react
    |   |   |   compiler-runtime.js
    |   |   |   index.js
    |   |   |   jsx-dev-runtime.js
    |   |   |   jsx-dev-runtime.react-server.js
    |   |   |   jsx-runtime.js
    |   |   |   jsx-runtime.react-server.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   react.react-server.js
    |   |   |   README.md
    |   |   |
    |   |   \---cjs
    |   |           react-compiler-runtime.development.js
    |   |           react-compiler-runtime.production.js
    |   |           react-compiler-runtime.profiling.js
    |   |           react-jsx-dev-runtime.development.js
    |   |           react-jsx-dev-runtime.production.js
    |   |           react-jsx-dev-runtime.profiling.js
    |   |           react-jsx-dev-runtime.react-server.development.js
    |   |           react-jsx-dev-runtime.react-server.production.js
    |   |           react-jsx-runtime.development.js
    |   |           react-jsx-runtime.production.js
    |   |           react-jsx-runtime.profiling.js
    |   |           react-jsx-runtime.react-server.development.js
    |   |           react-jsx-runtime.react-server.production.js
    |   |           react.development.js
    |   |           react.production.js
    |   |           react.react-server.development.js
    |   |           react.react-server.production.js
    |   |
    |   +---react-dom
    |   |   |   client.js
    |   |   |   client.react-server.js
    |   |   |   index.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   profiling.js
    |   |   |   profiling.react-server.js
    |   |   |   react-dom.react-server.js
    |   |   |   README.md
    |   |   |   server.browser.js
    |   |   |   server.bun.js
    |   |   |   server.edge.js
    |   |   |   server.js
    |   |   |   server.node.js
    |   |   |   server.react-server.js
    |   |   |   static.browser.js
    |   |   |   static.edge.js
    |   |   |   static.js
    |   |   |   static.node.js
    |   |   |   static.react-server.js
    |   |   |   test-utils.js
    |   |   |
    |   |   \---cjs
    |   |           react-dom-client.development.js
    |   |           react-dom-client.production.js
    |   |           react-dom-profiling.development.js
    |   |           react-dom-profiling.profiling.js
    |   |           react-dom-server-legacy.browser.development.js
    |   |           react-dom-server-legacy.browser.production.js
    |   |           react-dom-server-legacy.node.development.js
    |   |           react-dom-server-legacy.node.production.js
    |   |           react-dom-server.browser.development.js
    |   |           react-dom-server.browser.production.js
    |   |           react-dom-server.bun.development.js
    |   |           react-dom-server.bun.production.js
    |   |           react-dom-server.edge.development.js
    |   |           react-dom-server.edge.production.js
    |   |           react-dom-server.node.development.js
    |   |           react-dom-server.node.production.js
    |   |           react-dom-test-utils.development.js
    |   |           react-dom-test-utils.production.js
    |   |           react-dom.development.js
    |   |           react-dom.production.js
    |   |           react-dom.react-server.development.js
    |   |           react-dom.react-server.production.js
    |   |
    |   +---resolve-from
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---rollup
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---dist
    |   |       |   getLogFilter.d.ts
    |   |       |   getLogFilter.js
    |   |       |   loadConfigFile.d.ts
    |   |       |   loadConfigFile.js
    |   |       |   native.js
    |   |       |   parseAst.d.ts
    |   |       |   parseAst.js
    |   |       |   rollup.d.ts
    |   |       |   rollup.js
    |   |       |
    |   |       +---bin
    |   |       |       rollup
    |   |       |
    |   |       +---es
    |   |       |   |   getLogFilter.js
    |   |       |   |   package.json
    |   |       |   |   parseAst.js
    |   |       |   |   rollup.js
    |   |       |   |
    |   |       |   \---shared
    |   |       |           node-entry.js
    |   |       |           parseAst.js
    |   |       |           watch.js
    |   |       |
    |   |       \---shared
    |   |               fsevents-importer.js
    |   |               index.js
    |   |               loadConfigFile.js
    |   |               parseAst.js
    |   |               rollup.js
    |   |               watch-cli.js
    |   |               watch.js
    |   |
    |   +---scheduler
    |   |   |   index.js
    |   |   |   index.native.js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   unstable_mock.js
    |   |   |   unstable_post_task.js
    |   |   |
    |   |   \---cjs
    |   |           scheduler-unstable_mock.development.js
    |   |           scheduler-unstable_mock.production.js
    |   |           scheduler-unstable_post_task.development.js
    |   |           scheduler-unstable_post_task.production.js
    |   |           scheduler.development.js
    |   |           scheduler.native.development.js
    |   |           scheduler.native.production.js
    |   |           scheduler.production.js
    |   |
    |   +---shebang-command
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---shebang-regex
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---source-map-js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   source-map.d.ts
    |   |   |   source-map.js
    |   |   |
    |   |   \---lib
    |   |           array-set.js
    |   |           base64-vlq.js
    |   |           base64.js
    |   |           binary-search.js
    |   |           mapping-list.js
    |   |           quick-sort.js
    |   |           source-map-consumer.d.ts
    |   |           source-map-consumer.js
    |   |           source-map-generator.d.ts
    |   |           source-map-generator.js
    |   |           source-node.d.ts
    |   |           source-node.js
    |   |           util.js
    |   |
    |   +---strip-json-comments
    |   |       index.d.ts
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---supports-color
    |   |       browser.js
    |   |       index.js
    |   |       license
    |   |       package.json
    |   |       readme.md
    |   |
    |   +---tinyglobby
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---dist
    |   |           index.d.mts
    |   |           index.d.ts
    |   |           index.js
    |   |           index.mjs
    |   |
    |   +---type-check
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   \---lib
    |   |           check.js
    |   |           index.js
    |   |           parse-type.js
    |   |
    |   +---uri-js
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   yarn.lock
    |   |   |
    |   |   \---dist
    |   |       +---es5
    |   |       |       uri.all.d.ts
    |   |       |       uri.all.js
    |   |       |       uri.all.js.map
    |   |       |       uri.all.min.d.ts
    |   |       |       uri.all.min.js
    |   |       |       uri.all.min.js.map
    |   |       |
    |   |       \---esnext
    |   |           |   index.d.ts
    |   |           |   index.js
    |   |           |   index.js.map
    |   |           |   regexps-iri.d.ts
    |   |           |   regexps-iri.js
    |   |           |   regexps-iri.js.map
    |   |           |   regexps-uri.d.ts
    |   |           |   regexps-uri.js
    |   |           |   regexps-uri.js.map
    |   |           |   uri.d.ts
    |   |           |   uri.js
    |   |           |   uri.js.map
    |   |           |   util.d.ts
    |   |           |   util.js
    |   |           |   util.js.map
    |   |           |
    |   |           \---schemes
    |   |                   http.d.ts
    |   |                   http.js
    |   |                   http.js.map
    |   |                   https.d.ts
    |   |                   https.js
    |   |                   https.js.map
    |   |                   mailto.d.ts
    |   |                   mailto.js
    |   |                   mailto.js.map
    |   |                   urn-uuid.d.ts
    |   |                   urn-uuid.js
    |   |                   urn-uuid.js.map
    |   |                   urn.d.ts
    |   |                   urn.js
    |   |                   urn.js.map
    |   |                   ws.d.ts
    |   |                   ws.js
    |   |                   ws.js.map
    |   |                   wss.d.ts
    |   |                   wss.js
    |   |                   wss.js.map
    |   |
    |   +---vite
    |   |   |   client.d.ts
    |   |   |   LICENSE.md
    |   |   |   package.json
    |   |   |   README.md
    |   |   |
    |   |   +---bin
    |   |   |       openChrome.js
    |   |   |       vite.js
    |   |   |
    |   |   +---dist
    |   |   |   +---client
    |   |   |   |       client.mjs
    |   |   |   |       env.mjs
    |   |   |   |
    |   |   |   \---node
    |   |   |       |   cli.js
    |   |   |       |   constants.js
    |   |   |       |   index.d.ts
    |   |   |       |   index.js
    |   |   |       |   module-runner.d.ts
    |   |   |       |   module-runner.js
    |   |   |       |   moduleRunnerTransport-BWUZBVLX.d.ts
    |   |   |       |
    |   |   |       \---chunks
    |   |   |               dep-03SfmTdk.js
    |   |   |               dep-6-jTB_1O.js
    |   |   |               dep-Bj7gA1-0.js
    |   |   |               dep-C9NktISv.js
    |   |   |               dep-CA7ICgyJ.js
    |   |   |               dep-CcFMbzqu.js
    |   |   |               dep-CPnzVSwg.js
    |   |   |               dep-D5MCzjWT.js
    |   |   |               dep-lCKrEJQm.js
    |   |   |               dep-SeJl6gzM.js
    |   |   |               dep-TDFDwW_9.js
    |   |   |               dep-UEPspf5j.js
    |   |   |               dep-XdVlHtXy.js
    |   |   |
    |   |   +---misc
    |   |   |       false.js
    |   |   |       true.js
    |   |   |
    |   |   \---types
    |   |       |   customEvent.d.ts
    |   |       |   hmrPayload.d.ts
    |   |       |   hot.d.ts
    |   |       |   import-meta.d.ts
    |   |       |   importGlob.d.ts
    |   |       |   importMeta.d.ts
    |   |       |   metadata.d.ts
    |   |       |   package.json
    |   |       |
    |   |       \---internal
    |   |               cssPreprocessorOptions.d.ts
    |   |               lightningcssOptions.d.ts
    |   |               terserOptions.d.ts
    |   |
    |   +---which
    |   |   |   CHANGELOG.md
    |   |   |   LICENSE
    |   |   |   package.json
    |   |   |   README.md
    |   |   |   which.js
    |   |   |
    |   |   \---bin
    |   |           node-which
    |   |
    |   +---word-wrap
    |   |       index.d.ts
    |   |       index.js
    |   |       LICENSE
    |   |       package.json
    |   |       README.md
    |   |
    |   \---yocto-queue
    |           index.d.ts
    |           index.js
    |           license
    |           package.json
    |           readme.md
    |
    +---public
    |       vite.svg
    |
    \---src
        |   api.js
        |   App.css
        |   App.jsx
        |   index.css
        |   main.jsx
        |
        \---assets
                react.svg
