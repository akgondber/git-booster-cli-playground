import { loadFile, writeFile } from "magicast";

const mod = await loadFile("./scripts/example.js");

mod.exports.default.foo.push("c");

await writeFile(mod, "./scripts/example-processed.js");
