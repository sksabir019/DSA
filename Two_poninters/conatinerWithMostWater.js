/**
 * Given an integer input array heights representing the heights of vertical lines, 
 * write a function that returns the maximum area of water that can be contained by two of the lines 
 * (and the x-axis).The function should take in an array of integers and return an integer.
 * @param {number[]} heights
 * @returns {number}
 */
function maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate the current area
        const currentArea = Math.min(heights[left], heights[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer pointing to the shorter line
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
// Example usage:
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxArea(heights);
console.log(result); // Output: 49
// Time Complexity: O(n) - We traverse the list containing n elements only once.
// Space Complexity: O(1) - We use only constant space.
