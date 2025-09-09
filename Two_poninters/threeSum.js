/**
 * Given an input integer array nums, write a function to find all unique triplets 
 * [nums[i], nums[j], nums[k]] such that i, j, and k are distinct indices, 
 * and the sum of nums[i], nums[j], and nums[k] equals zero. 
 * Ensure that the resulting list does not contain any duplicate triplets.
 */

function threeSum(nums) {
    const result = [];
    const numSet = new Set();

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            const complement = -(nums[i] + nums[j]);
            if (numSet.has(complement)) {
                result.push([nums[i], nums[j], complement]);
            }
        }
        numSet.add(nums[i]);
    }

    // Remove duplicates
    const uniqueResult = Array.from(new Set(result.map(JSON.stringify))).map(JSON.parse);
    return uniqueResult;
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
const triplets = threeSum(nums);
console.log(triplets); // Output: [ [ -1, 0, 1 ], [ -1, -1, 2 ] ]
// Time Complexity: O(n^2) - We have a nested loop that goes through the array.
// Space Complexity: O(n) - We use a set to store elements and an array to store results.


// Note: This implementation may not be the most optimal one. A more efficient approach would involve sorting the array first and then using a two-pointer technique to find pairs that sum to the negative of the current element. This would reduce the time complexity to O(n^2) with better handling of duplicates.
// Here's an improved version using sorting and two-pointer technique:
function threeSumOptimized(nums) {
    nums.sort((a, b) => a - b); // Sort the array
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate elements
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // Move left and right to next distinct values
                let currentLeft = nums[left];
                let currentRight = nums[right];
                while (left < right && nums[left] === currentLeft) left++;
                while (left < right && nums[right] === currentRight) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

// Example usage:
const optimizedTriplets = threeSumOptimized(nums);
console.log(optimizedTriplets); // Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
// Time Complexity: O(n^2) - Sorting the array takes O(n log n) and the two-pointer approach takes O(n^2).
// Space Complexity: O(1) - We use only constant space for pointers and result storage (not counting the output).
                


