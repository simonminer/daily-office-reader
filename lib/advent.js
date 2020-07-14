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
       
        // Advent can begin as early as 11/27 in a given year.
        var startDate = new Date( year, this.earliestStartMonth - 1, this.earliestStartDay );

        // If 11/27 is not a Sunday, use the following Sunday as the first day of Advent.
        const dayOfWeek = startDate.getUTCDay();
        // Find the date of the next Sunday.
        if ( dayOfWeek ) {
            const daysUntilSunday = 7 - dayOfWeek;
            startDate.setDate( startDate.getDate() + daysUntilSunday );
        }

        return startDate;
    }
}
