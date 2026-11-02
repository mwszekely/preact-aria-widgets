import { defineConfig } from 'tsdown';
import { replacePlugin } from 'rolldown/plugins';

const BaseConfig = defineConfig({
    entry: "src/index.ts",
    sourcemap: true,
    dts: true,
    deps: {
        neverBundle: true
    },
    treeshake: true
})

export default defineConfig([
    {
        ...BaseConfig,
        outDir: "./dist/preact",
    },
    {
        ...BaseConfig,
        outDir: "./dist/react",
        tsconfig: "tsconfig.react.json",
        plugins: [
            replacePlugin(
                {
                    "preact-prop-helpers/preact": "preact-prop-helpers/react"
                },
                {
                    sourcemap: true,
                    delimiters: ['', ''],
                    preventAssignment: false
                }
            ),
        ],
    }
])
