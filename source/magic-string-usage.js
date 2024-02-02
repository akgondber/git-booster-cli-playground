import MagicString from 'magic-string';

const s = new MagicString('problems = 89');

s.update(0, 8, 'answer');

console.log(s.toString());

s.prepend('var ').append(';');
console.log(s.toString());
