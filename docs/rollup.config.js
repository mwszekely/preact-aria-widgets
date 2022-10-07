import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';
import path from "path";


export default {
    input: "index.tsx",
    output: {
        file: "bundle.js",
        format: "iife",
        name: "bundle",
        sourcemap: "inline"
    },
    plugins: [
        typescript({ sourceMap: true, inlineSources: true }),
        commonjs({ sourceMap: true }),
        resolve({ dedupe: ['preact', "preact/compat", "preact/hooks", "preact-prop-helpers"] }),
        getBabelOutputPlugin({
            configFile: path.resolve(__dirname, ".babelrc"),
            sourceMaps: true,
            allowAllFormats: true
        }),
        sourcemaps()
    ],
}

