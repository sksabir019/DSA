/**
 * Write a function to return the minimum number of intervals that must be removed from a given array
 *  intervals, where intervals[i] consists of a starting point starti and an ending point endi, 
 * to ensure that the remaining intervals do not overlap.
 */
function eraseOverlapIntervals(intervals) {
    if (intervals.length === 0) {
        return 0;
    }
    // Sort the intervals based on their end times
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0; // Count of non-overlapping intervals
    let end = intervals[0][1]; // End time of the last added interval

    for (let i = 1; i < intervals.length; i++) {
        // If the start time of the current interval is greater than or equal to the end time of the last added interval
        if (intervals[i][0] >= end) {
            count++; // Increment count of non-overlapping intervals
            end = intervals[i][1]; // Update the end time to the current interval's end time
        }
    }

    // The minimum number of intervals to remove is the total number of intervals minus the count of non-overlapping intervals
    return intervals.length - (count + 1);
}   
// Example usage:
const intervals1 = [[1, 2], [2, 3], [3, 4], [1, 3]];
console.log(eraseOverlapIntervals(intervals1)); // Output: 1

const intervals2 = [[1, 2], [2, 3], [3, 4], [1, 3]];
console.log(eraseOverlapIntervals(intervals2)); // Output: 1
const intervals3 = [[1, 2], [1, 2], [1, 2]];
console.log(eraseOverlapIntervals(intervals3)); // Output: 2
const intervals4 = [[1, 2], [2, 3]];
console.log(eraseOverlapIntervals(intervals4)); // Output: 0
// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(1) if sorting in place, otherwise O(n) depending on the sorting algorithm used
