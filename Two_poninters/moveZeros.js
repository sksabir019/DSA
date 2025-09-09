/**
 * Given an integer array nums, write a function to rearrange the array by moving all zeros 
 * to the end while keeping the order of non-zero elements unchanged. 
 * Perform this operation in-place without creating a copy of the array.
 */
function moveZeros(nums) {
    let lastNonZeroIndex = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeros
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}

// Example usage:
const nums = [0, 1, 0, 3, 12];
moveZeros(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
// Time Complexity: O(n) - We go through the array a constant number of times.
// Space Complexity: O(1) - We use only constant space for pointers and result storage.
