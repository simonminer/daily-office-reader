/**
 * Utilty class to work with date calculations regarding Advent.
 */

'use strict';
var moment = require( 'moment' );

module.exports = class Advent {

    // The earliest Advent can begin in any given year
    // is the Sunday on or following November 27.
    earliestPossibleStartMonth = 11;
    earliestPossibleStartDay = 27;

    /*
     * Determine the date on which Advent begins in a given year
     * @method
     * @param {integer} year - The year in which to determine when Advent begins (defaults to current year)
     * @returns {Date} startDate - Date on which Advent begins in the specified year
     */
    getStartDate ( year ) {
        if ( year == undefined ) {
            year = moment().year();
        }
       
        // Advent can begin as early as 11/27 in a given year.
        var startDate = moment( [ year, this.earliestPossibleStartMonth - 1, this.earliestPossibleStartDay ] );
        // If 11/27 is not a Sunday, use the following Sunday as the first day of Advent.
        // Find the date of the next Sunday.
        if ( startDate.day() != 0 ) {
            startDate.day( 7 );
        }

        return startDate;
    }

    /*
     * Computes the number of days between the start of the current or most recent
     * Advent season and the specified date
     * @method
     * @param {Date} date - The date to compute the number of days since Advent began
     * @returns {integer} numberOfDays - number of days since the current or most recent Advent began
     */
    daysSinceStart ( date ) {

        // Default to today's date.
        if ( !date ) {
            date = moment();
        }

        // Is the most recent Advent in this year or last year?
        const year = date.year();
        var adventStartDate = this.getStartDate( year );
        if ( date < adventStartDate ) {
            adventStartDate = this.getStartDate( year - 1 );
        }

        // Compute the number of days between these dates.
        const numberOfDays = date.diff( adventStartDate, 'days' );

        return numberOfDays;
    }

}
