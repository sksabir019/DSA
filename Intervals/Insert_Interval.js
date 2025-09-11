/**
 * Given a list of intervals intervals and an interval newInterval, write a function to insert 
 * newInterval into a list of existing, non-overlapping, and sorted intervals based on their
 * starting points. The function should ensure that after the new interval is added, the list 
 * remains sorted without any overlapping intervals, merging them if needed.
 */
function insertInterval(intervals, newInterval) {
    const merged = [];
    let i = 0;

    // Add all intervals that end before the new interval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        merged.push(intervals[i]);
        i++;
    }

    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    merged.push(newInterval);

    // Add the remaining intervals
    while (i < intervals.length) {
        merged.push(intervals[i]);
        i++;
    }

    return merged;
}
// Example usage:
const intervals1 = [[1, 3], [6, 9]];
const newInterval1 = [2, 5];
console.log(insertInterval(intervals1, newInterval1)); // Output: [[1, 5], [6, 9]]
const intervals2 = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
const newInterval2 = [4, 8];
console.log(insertInterval(intervals2, newInterval2)); // output: [[1, 2], [3, 10], [12, 16]]
// Time Complexity: O(n) where n is the number of intervals
// Space Complexity: O(n) for the merged list
