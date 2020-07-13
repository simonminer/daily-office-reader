'use strict';

/*
 * advent.test.json - Tests for instances of the Advent class.
 *
 */

const earliestStartMonth = 11;
const earliestStartDay = 27;

const Advent = require('../lib/advent');

describe('Advent class', function() {

    test('constructor and default field values', () => {
        const advent = new Advent();
        expect(advent instanceof Advent).toBe(true);
        expect(advent.earliestStartMonth).toBe(earliestStartMonth);
        expect(advent.earliestStartDay).toBe(earliestStartDay);
    });
});
