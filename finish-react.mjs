// @ts-check
import { readFile, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

/**
 * @param {import("fs").PathLike | import("fs/promises").FileHandle} path
 */
async function replace(path) { await writeFile(path, (await readFile(path)).toString("utf-8").replace(/("|')preact-prop-helpers("|')/g, "$1preact-prop-helpers/react$2")); }

/**
 * @param string path
 */
async function allFilesInDirRecursive(path) {
    const a = await readdir(path, { withFileTypes: true});
    /** @type string[] */
    const files = (await Promise.all(a.map((dirEntry) => {
        const dirEntryFullPath = resolve(path, dirEntry.name);   
        return dirEntry.isDirectory()? allFilesInDirRecursive(dirEntryFullPath) : [dirEntryFullPath];
    }))).flat();
    return files;
}

(async () => {
    await Promise.all((await allFilesInDirRecursive("./dist/react/")).map(replace));
})()
