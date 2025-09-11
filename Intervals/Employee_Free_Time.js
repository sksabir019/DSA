/**
 * Write a function to find the common free time for all employees from a list called schedule. 
 * Each employee's schedule is represented by a list of non-overlapping intervals sorted by 
 * start times. The function should return a list of finite, non-zero length intervals where 
 * all employees are free, also sorted in order.
 */
function findCommonFreeTime(schedule) {
    // Merge all employee schedules into one timeline
    const merged = mergeIntervals(schedule.flat()); 

    // Find gaps between merged intervals
    const freeTime = [];
    for (let i = 1; i < merged.length; i++) {
        const start = merged[i - 1][1];
        const end = merged[i][0];
        if (start < end) {
            freeTime.push([start, end]);
        }
    }

    return freeTime;
}

// Example usage:
const schedule1 = [[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]];
console.log(findCommonFreeTime(schedule1)); // Output: [[3,4]]

const schedule2 = [[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]];
console.log(findCommonFreeTime(schedule2)); // Output: [[5,6],[7,9]]
// Time Complexity: O(n log n) due to sorting in mergeIntervals
// Space Complexity: O(n) for the merged list and free time list