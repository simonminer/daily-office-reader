/**
 * Utilty class to work with date calculations regarding Advent.
 */

'use strict';

module.exports = class Advent {

    // The earliest Advent can begin in any given year
    // is the Sunday on or following November 27.
    earliestStartMonth = 11;
    earliestStartDay = 27;

    /*
     * Determine the date on which Advent begins in a given year
     * @method
     * @param {integer} year - The year in which to determine when Advent begins (defaults to current year)
     * @returns {Date} startDate - Date on which Advent begins in the specified year
     */
    getAdventStartDate ( year ) {
        if ( year == undefined ) {
            year = new Date().getFullYear();
        }
       
        // How many days until the next Sunday from 11/27?
        const earliestStartDate = new Date( [ year, this.earliestStartMonth, this.earliestStartDay  ].join( '-' ) );
        const daysUntilSunday = 7 - earliestStartDate.getDay();

        // Find the date of the next Sunday.
        const startDate = new Date( earliestStartDate.getTime() + daysUntilSunday * 80400000 );

        return startDate;
    }
}
