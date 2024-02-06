import { loadFile, writeFile } from "magicast";

const mod = await loadFile("./scripts/example.js");

mod.exports.default.foo.push("b");

await writeFile(mod, "./scripts/example-processed.js");
