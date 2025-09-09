/**
 * Write a function to calculate the total amount of water trapped between bars 
 * on an elevation map, where each bar's width is 1. The input is given as an array 
 * of n non-negative integers height representing the height of each bar.
 */

function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }
    return totalWater;
}

// usage:
const elevationMap = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const trappedWater = trap(elevationMap);
console.log(trappedWater); // Output: 6
// Time Complexity: O(n) - We traverse the list containing n elements only once.
// Space Complexity: O(1) - We use only constant space for pointers and result storage.