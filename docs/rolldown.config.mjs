import { replacePlugin } from 'rolldown/plugins';
import { defineConfig } from 'rolldown';

export default defineConfig({
    input: "index.tsx",
    output: {
        format: "es",
        file: "./bundle.js",
        sourcemap: "inline",
        sourcemapIgnoreList: false,
        codeSplitting: false
    },
    transform: {
        target: ["es2015"]
    },
    external: ["process"],
    treeshake: true,
    plugins: [
        replacePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }, { preventAssignment: true }),
    ],
})
