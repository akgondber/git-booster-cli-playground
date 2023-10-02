import { print } from 'esrap';

const { code, map } = print({
  type: 'Program',
  body: [
    {
      type: 'ExpressionStatement',
      expression: {
        callee: {
          type: 'Identifier',
          name: 'alert'
        },
        arguments: [
          {
            type: 'Literal',
            value: 'hello world!'
          }
        ]
      }
    }
  ]
});

console.log(code);
