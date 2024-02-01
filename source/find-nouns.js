import nlp from 'compromise'

let doc = nlp('I got no immediate reply; Moxon was apparently intent upon the coals in the grate, touching them deftly here and there with the fire-poker till they signified a sense of his attention by a brighter glow.');
const haw = doc.nouns();
console.log(haw);
// doc.text()
// 'the purple
