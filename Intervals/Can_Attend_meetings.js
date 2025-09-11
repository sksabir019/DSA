/**
 * Write a function to check if a person can attend all the meetings scheduled without any time 
 * conflicts. Given an array intervals, where each element [s1, e1] represents a meeting starting at 
 * time s1 and ending at time e1, determine if there are any overlapping meetings. 
 * If there is no overlap between any meetings, return true; otherwise, return false.
 * Note that meetings ending and starting at the same time, such as (0,5) and (5,10), do not conflict.
 */
function canAttendMeetings(intervals) {
     if (intervals.length === 0) {
        return true;
    }
    // Sort the meetings by start time
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        // If the start time of the current meeting is less than the end time of the previous meeting, there is a conflict
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false;
        }
    }
    return true;
}

// Example usage:
const meetings1 = [[0, 30], [5, 10], [15, 20]];
console.log(canAttendMeetings(meetings1)); // Output: false

const meetings2 = [[7, 10], [2, 4]];
console.log(canAttendMeetings(meetings2)); // Output: true
// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(1) if sorting in place, otherwise O(n) depending on the sorting algorithm used