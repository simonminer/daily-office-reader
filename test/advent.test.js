'use strict';

/*
 * advent.test.json - Tests for instances of the Advent class.
 *
 */

var moment = require( 'moment' );

const earliestPossibleStartMonth = 11;
const earliestPossibleStartDay = 27;

const Advent = require('../lib/advent');

describe('Advent class', function() {

    test( 'constructor and default field values', () => {
        const advent = new Advent();
        expect(advent instanceof Advent).toBe(true);
        expect(advent.earliestPossibleStartMonth).toBe(earliestPossibleStartMonth);
        expect(advent.earliestPossibleStartDay).toBe(earliestPossibleStartDay);
    });

    test( 'getStartDate method', () => {
        const advent = new Advent();
        var year = moment().year();
        var startDate = moment( [ year, advent.earliestPossibleStartMonth - 1, advent.earliestPossibleStartDay ] );
        if ( startDate.day() != 0 ) {
            startDate.day( 7 );
        }

        var defaultStartDate = advent.getStartDate();
        expect( defaultStartDate ).toEqual( startDate );
        expect( defaultStartDate.day() ).toBe( 0 );
        expect( advent.getStartDate( year ) ).toEqual( startDate );

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
            var startDate = moment( years[year] );
            if ( startDate.day() != 0 ) {
                startDate.day( 7 );
            }
            // Need to adjust for local timezone offset
            expect( advent.getStartDate( year ).format() ).toEqual( startDate.format() );
            expect( startDate.day() ).toBe( 0 );
        });

    });

    test( 'daysSinceStart method', () => {
        const advent = new Advent();
        const now = moment();
        const thisYear = now.year();

        var adventStartDate = advent.getStartDate( thisYear );
        if ( now < adventStartDate ) {
            adventStartDate = advent.getStartDate( thisYear - 1 );
        }
        var numberOfDays = now.diff( adventStartDate, 'days' );
        expect( advent.daysSinceStart( now ) ).toBe( numberOfDays );
    });

});
