# Patrones
```text
D:.
+---.vscode
+---Banckend
|   +---.mvn
|   |   \---wrapper
|   +---src
|   |   +---main
|   |   |   +---java
|   |   |   |   \---com
|   |   |   |       \---example
|   |   |   |           \---Banckend
|   |   |   |               \---items
|   |   |   \---resources
|   |   |       +---static
|   |   |       \---templates
|   |   \---test
|   |       \---java
|   |           \---com
|   |               \---example
|   |                   \---Banckend
|   \---target
|       +---classes
|       |   \---com
|       |       \---example
|       |           \---Banckend
|       |               \---items
|       +---generated-sources
|       |   \---annotations
|       +---generated-test-sources
|       |   \---test-annotations
|       +---maven-status
|       |   \---maven-compiler-plugin
|       |       +---compile
|       |       |   \---default-compile
|       |       \---testCompile
|       |           \---default-testCompile
|       \---test-classes
|           \---com
|               \---example
|                   \---Banckend
\---Frontend
    +---node_modules
    |   +---.bin
    |   +---.vite
    |   |   \---deps
    |   +---.vite-temp
    |   +---@esbuild
    |   |   \---win32-x64
    |   +---@eslint
    |   |   +---config-array
    |   |   |   \---dist
    |   |   |       +---cjs
    |   |   |       |   \---std__path
    |   |   |       \---esm
    |   |   |           \---std__path
    |   |   +---config-helpers
    |   |   |   \---dist
    |   |   |       +---cjs
    |   |   |       \---esm
    |   |   +---core
    |   |   |   \---dist
    |   |   |       +---cjs
    |   |   |       \---esm
    |   |   +---eslintrc
    |   |   |   +---conf
    |   |   |   +---dist
    |   |   |   +---lib
    |   |   |   |   +---config-array
    |   |   |   |   +---shared
    |   |   |   |   \---types
    |   |   |   \---node_modules
    |   |   |       \---globals
    |   |   +---js
    |   |   |   +---src
    |   |   |   |   \---configs
    |   |   |   \---types
    |   |   +---object-schema
    |   |   |   \---dist
    |   |   |       +---cjs
    |   |   |       \---esm
    |   |   \---plugin-kit
    |   |       \---dist
    |   |           +---cjs
    |   |           \---esm
    |   +---@eslint-community
    |   |   +---eslint-utils
    |   |   |   \---node_modules
    |   |   |       \---eslint-visitor-keys
    |   |   |           +---dist
    |   |   |           \---lib
    |   |   \---regexpp
    |   +---@humanfs
    |   |   +---core
    |   |   |   +---dist
    |   |   |   \---src
    |   |   \---node
    |   |       +---dist
    |   |       +---node_modules
    |   |       |   \---@humanwhocodes
    |   |       |       \---retry
    |   |       |           \---dist
    |   |       \---src
    |   +---@humanwhocodes
    |   |   +---module-importer
    |   |   |   +---dist
    |   |   |   \---src
    |   |   \---retry
    |   |       \---dist
    |   +---@rolldown
    |   |   \---pluginutils
    |   |       \---dist
    |   +---@rollup
    |   |   \---rollup-win32-x64-msvc
    |   +---@swc
    |   |   +---core
    |   |   +---core-win32-x64-msvc
    |   |   +---counter
    |   |   \---types
    |   +---@types
    |   |   +---estree
    |   |   +---json-schema
    |   |   +---react
    |   |   |   \---ts5.0
    |   |   |       \---v18
    |   |   |           \---ts5.0
    |   |   \---react-dom
    |   |       \---test-utils
    |   +---@vitejs
    |   |   \---plugin-react-swc
    |   +---acorn
    |   |   +---bin
    |   |   \---dist
    |   +---acorn-jsx
    |   +---ajv
    |   |   +---dist
    |   |   +---lib
    |   |   |   +---compile
    |   |   |   +---dot
    |   |   |   +---dotjs
    |   |   |   \---refs
    |   |   \---scripts
    |   +---ansi-styles
    |   +---argparse
    |   |   \---lib
    |   +---asynckit
    |   |   \---lib
    |   +---axios
    |   |   +---dist
    |   |   |   +---browser
    |   |   |   +---esm
    |   |   |   \---node
    |   |   \---lib
    |   |       +---adapters
    |   |       +---cancel
    |   |       +---core
    |   |       +---defaults
    |   |       +---env
    |   |       |   \---classes
    |   |       +---helpers
    |   |       \---platform
    |   |           +---browser
    |   |           |   \---classes
    |   |           +---common
    |   |           \---node
    |   |               \---classes
    |   +---balanced-match
    |   |   \---.github
    |   +---brace-expansion
    |   +---call-bind-apply-helpers
    |   |   +---.github
    |   |   \---test
    |   +---callsites
    |   +---chalk
    |   |   \---source
    |   +---color-convert
    |   +---color-name
    |   +---combined-stream
    |   |   \---lib
    |   +---concat-map
    |   |   +---example
    |   |   \---test
    |   +---cross-spawn
    |   |   \---lib
    |   |       \---util
    |   +---csstype
    |   +---debug
    |   |   \---src
    |   +---deep-is
    |   |   +---example
    |   |   \---test
    |   +---delayed-stream
    |   |   \---lib
    |   +---dunder-proto
    |   |   +---.github
    |   |   \---test
    |   +---es-define-property
    |   |   +---.github
    |   |   \---test
    |   +---es-errors
    |   |   +---.github
    |   |   \---test
    |   +---es-object-atoms
    |   |   +---.github
    |   |   \---test
    |   +---es-set-tostringtag
    |   |   \---test
    |   +---esbuild
    |   |   +---bin
    |   |   \---lib
    |   +---escape-string-regexp
    |   +---eslint
    |   |   +---bin
    |   |   +---conf
    |   |   +---lib
    |   |   |   +---cli-engine
    |   |   |   |   \---formatters
    |   |   |   +---config
    |   |   |   +---eslint
    |   |   |   +---languages
    |   |   |   |   \---js
    |   |   |   |       \---source-code
    |   |   |   |           \---token-store
    |   |   |   +---linter
    |   |   |   |   \---code-path-analysis
    |   |   |   +---rule-tester
    |   |   |   +---rules
    |   |   |   |   \---utils
    |   |   |   |       \---unicode
    |   |   |   +---services
    |   |   |   +---shared
    |   |   |   \---types
    |   |   \---messages
    |   +---eslint-plugin-react-hooks
    |   |   \---cjs
    |   +---eslint-plugin-react-refresh
    |   +---eslint-scope
    |   |   +---dist
    |   |   \---lib
    |   +---eslint-visitor-keys
    |   |   +---dist
    |   |   \---lib
    |   +---espree
    |   |   +---dist
    |   |   \---lib
    |   +---esquery
    |   |   \---dist
    |   +---esrecurse
    |   +---estraverse
    |   +---esutils
    |   |   \---lib
    |   +---fast-deep-equal
    |   |   \---es6
    |   +---fast-json-stable-stringify
    |   |   +---.github
    |   |   +---benchmark
    |   |   +---example
    |   |   \---test
    |   +---fast-levenshtein
    |   +---fdir
    |   |   \---dist
    |   +---file-entry-cache
    |   +---find-up
    |   +---flat-cache
    |   |   \---src
    |   +---flatted
    |   |   +---cjs
    |   |   +---esm
    |   |   +---php
    |   |   +---python
    |   |   \---types
    |   +---follow-redirects
    |   +---form-data
    |   |   \---lib
    |   +---function-bind
    |   |   +---.github
    |   |   \---test
    |   +---get-intrinsic
    |   |   +---.github
    |   |   \---test
    |   +---get-proto
    |   |   +---.github
    |   |   \---test
    |   +---glob-parent
    |   +---globals
    |   +---gopd
    |   |   +---.github
    |   |   \---test
    |   +---has-flag
    |   +---has-symbols
    |   |   +---.github
    |   |   \---test
    |   |       \---shams
    |   +---has-tostringtag
    |   |   +---.github
    |   |   \---test
    |   |       \---shams
    |   +---hasown
    |   |   \---.github
    |   +---ignore
    |   +---import-fresh
    |   +---imurmurhash
    |   +---is-extglob
    |   +---is-glob
    |   +---isexe
    |   |   \---test
    |   +---js-yaml
    |   |   +---bin
    |   |   +---dist
    |   |   \---lib
    |   |       +---schema
    |   |       \---type
    |   +---json-buffer
    |   |   \---test
    |   +---json-schema-traverse
    |   |   \---spec
    |   |       \---fixtures
    |   +---json-stable-stringify-without-jsonify
    |   |   +---example
    |   |   \---test
    |   +---keyv
    |   |   \---src
    |   +---levn
    |   |   \---lib
    |   +---locate-path
    |   +---lodash.merge
    |   +---math-intrinsics
    |   |   +---.github
    |   |   +---constants
    |   |   \---test
    |   +---mime-db
    |   +---mime-types
    |   +---minimatch
    |   +---ms
    |   +---nanoid
    |   |   +---async
    |   |   +---bin
    |   |   +---non-secure
    |   |   \---url-alphabet
    |   +---natural-compare
    |   +---optionator
    |   |   \---lib
    |   +---p-limit
    |   +---p-locate
    |   +---parent-module
    |   +---path-exists
    |   +---path-key
    |   +---picocolors
    |   +---picomatch
    |   |   \---lib
    |   +---postcss
    |   |   \---lib
    |   +---prelude-ls
    |   |   \---lib
    |   +---proxy-from-env
    |   +---punycode
    |   +---react
    |   |   \---cjs
    |   +---react-dom
    |   |   \---cjs
    |   +---resolve-from
    |   +---rollup
    |   |   \---dist
    |   |       +---bin
    |   |       +---es
    |   |       |   \---shared
    |   |       \---shared
    |   +---scheduler
    |   |   \---cjs
    |   +---shebang-command
    |   +---shebang-regex
    |   +---source-map-js
    |   |   \---lib
    |   +---strip-json-comments
    |   +---supports-color
    |   +---tinyglobby
    |   |   \---dist
    |   +---type-check
    |   |   \---lib
    |   +---uri-js
    |   |   \---dist
    |   |       +---es5
    |   |       \---esnext
    |   |           \---schemes
    |   +---vite
    |   |   +---bin
    |   |   +---dist
    |   |   |   +---client
    |   |   |   \---node
    |   |   |       \---chunks
    |   |   +---misc
    |   |   \---types
    |   |       \---internal
    |   +---which
    |   |   \---bin
    |   +---word-wrap
    |   \---yocto-queue
    +---public
    \---src
        \---assets
