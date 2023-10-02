import { colord } from "colord";

console.log(colord("#ff0000").grayscale().alpha(0.25).toRgbString());
console.log(colord("#1e0056").grayscale().alpha(0.55).toRgbString());
console.log(colord("#890f56").grayscale().alpha(0.55).toRgbString());
