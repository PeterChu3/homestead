/**
 * This file holds functions that are passed parameters and don't require access to the scope of when they are called.
 * For example, the timeStringToSeconds only requires the timeString parameter. It doesn't need to know anything else about the Stats component.
 */

/**
 * Converts the time input into seconds
 * @param {string} timeString 
 * @returns {number} total number of seconds
 */
export function timeStringToSeconds(timeString) {
    const timeComponents = timeString.split(':');

    let totalSeconds = 0;

    if (timeComponents.length === 3) {
        // HH:MM:SS.SS format
        const [hours, minutes, secondsWithMillis] = timeComponents;
        const [seconds, milliseconds] = secondsWithMillis.split('.');

        totalSeconds =
            parseInt(hours, 10) * 3600 +
            parseInt(minutes, 10) * 60 +
            parseInt(seconds, 10);

        totalSeconds += parseFloat(`0.${milliseconds || 0}`);
    } else if (timeComponents.length === 2) {
        // MM:SS.SS format
        const [minutes, secondsWithMillis] = timeComponents;
        const [seconds, milliseconds] = secondsWithMillis.split('.');

        totalSeconds =
            parseInt(minutes, 10) * 60 +
            parseInt(seconds, 10);

        totalSeconds += parseFloat(`0.${milliseconds || 0}`);
    } else {
        console.error('Invalid time format');
    }

    return totalSeconds;
}

export function addLeadingZeros(number) {
  return String(number).padStart(2, '0');
}

//Function to calculate miles per hour from distance and seconds.
export function calculateMPH(distanceInMiles, timeInSeconds) {
  // Convert time from seconds to hours
  const timeInHours = timeInSeconds / 3600;

  // Calculate miles per hour
  const mph = parseFloat((distanceInMiles / timeInHours).toFixed(2));

  return mph;
}

//Function to convert total seconds to minutes and seconds
export function convertSecondsToMinutes(totalSeconds, divisor) {
  // Calculate minutes and seconds
  const hours = Math.floor(totalSeconds / divisor / 3600);
  const minutes = Math.floor(((totalSeconds / divisor) % 3600) / 60);
  const seconds = Math.floor((totalSeconds / divisor) % 60);

  // Return the result as an object
  return {
      hours,
      minutes,
      seconds,
  };
};

// This will export them all if you don't specify when importing
export default {
  convertSecondsToMinutes,
  calculateMPH,
  addLeadingZeros,
  timeStringToSeconds,
}
