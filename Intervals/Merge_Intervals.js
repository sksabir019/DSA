/**
 * Write a function to consolidate overlapping intervals within a given array intervals, where each 
 * interval intervals[i] consists of a start time starti and an end time endi.
 * 
 * Two intervals are considered overlapping if they share any common time, including if one ends 
 * exactly when another begins (e.g., [1,4] and [4,5] overlap and should be merged into [1,5]).
 * 
 * The function should return an array of the merged intervals so that no two intervals overlap and 
 * all the intervals collectively cover all the time ranges in the original input.
 */
function mergeIntervals(intervals) {
    if (intervals.length === 0) {
        return [];
    }   
    // Sort the intervals based on their starting times
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]]; // Start with the first interval

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const lastMerged = merged[merged.length - 1];

        // If the current interval overlaps with the last merged interval, merge them
        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
}
// Example usage:
const intervals1 = [[1, 3], [2, 4], [5, 7], [6, 8]];
console.log(mergeIntervals(intervals1)); // Output: [[1, 4], [5, 8]]

const intervals2 = [[1, 4], [4, 5]];
console.log(mergeIntervals(intervals2)); // Output: [[1, 5]]
// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(n) for the merged list

// Another approach:
function mergeIntervals(intervals) {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
        
    for (const interval of sortedIntervals) {
        if (merged.length === 0 || interval[0] > merged[merged.length - 1][1]) {
            merged.push(interval);
        } else {
            merged[merged.length - 1][1] = Math.max(interval[1], merged[merged.length - 1][1]);
        }
    }

    return merged;
}