import { replacePlugin } from 'rolldown/plugins';
import { defineConfig } from 'rolldown';

export default defineConfig({
    input: "index.tsx",
    output: {
        dir: ".",
        format: "es",
        name: "bundle",
        sourcemap: "inline",
        sourcemapIgnoreList: false,
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
