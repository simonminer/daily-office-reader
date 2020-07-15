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

    test('getAdventStartDate', () => {
        const advent = new Advent();
        var year = new Date().getFullYear();
        var startDate = new Date( year, advent.earliestStartMonth - 1, advent.earliestStartDay );
        var dayOfWeek = startDate.getUTCDay();
        if ( dayOfWeek ) {
            var daysUntilSunday = 7 - dayOfWeek;
            startDate.setDate( startDate.getDate() + daysUntilSunday );
        }

        var defaultStartDate = advent.getAdventStartDate();
        expect( defaultStartDate ).toEqual( startDate );
        expect( defaultStartDate.getDay() ).toBe( 0 );
        expect( advent.getAdventStartDate( year ) ).toEqual( startDate );

        const years = {
            2007: '2007-12-02',
            2008: '2008-11-30',
            2009: '2009-11-29',
            2010: '2010-11-28',
            2011: '2011-11-27',
            2012: '2012-12-02',
            2013: '2013-12-01',
            2014: '2014-11-30',
            2015: '2015-11-29',
            2016: '2016-11-27',
            2017: '2017-12-03',
            2018: '2018-12-02',
            2019: '2019-12-01',
            2020: '2020-11-29',
            2021: '2021-11-28',
            2022: '2022-11-27',
            2023: '2023-12-03',
            2024: '2024-12-01',
            2025: '2025-11-30',
            2026: '2026-11-29',
            2027: '2027-11-28',
            2028: '2028-12-03',
            2029: '2029-12-02',
            2030: '2030-12-01'
        };
        Object.keys( years ).forEach( year => {
            var startDate = new Date( years[year] );
            var dayOfWeek = startDate.getUTCDay();
            if ( dayOfWeek ) {
                var daysUntilSunday = 7 - dayOfWeek;
                startDate.setDate( startDate.getDate() + daysUntilSunday );
            }
            // Need to adjust for local timezone offset
            startDate.setTime( startDate.getTime() + startDate.getTimezoneOffset() * 60 * 1000 );
            expect( advent.getAdventStartDate( year ) ).toEqual( startDate );
            expect( startDate.getUTCDay() ).toBe( 0 );
        });

    });

});
