import {test} from 'zora';

test(`my very first test`, (assertion) => {
    const input = true;
    assertion.ok(input, 'input should be truthy');
});

test(`should not be same`, (assertion) => {
    const input = 'baz';
    assertion.equal(input, 'baz');
});
