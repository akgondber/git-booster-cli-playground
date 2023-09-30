import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { z } from 'zod'; 
import { sum } from '../source/math.js';

const obj = {
    foo: 3,
    bar: 'ta',
};

test('sum', () => {
    assert.is(sum(3, 6), 9);
});

test.run();
