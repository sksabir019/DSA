/**
 * Write a function to sort a given integer array nums in-place 
 * (and without the built-in sort function), where the array contains n integers 
 * that are either 0, 1, and 2 and represent the colors red, white, and blue. 
 * Arrange the objects so that same-colored ones are adjacent, 
 * in the order of red, white, and blue (0, 1, 2).
 * input: nums = [2,1,2,0,1,0,1,0,1]
 * output: [0,0,0,1,1,1,1,2,2]
 */
function sortColors(nums) {
    let low = 0; // Pointer for the next position of 0
    let mid = 0; // Current element under consideration
    let high = nums.length - 1; // Pointer for the next position of 2

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap 0 to the front
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            // Swap 2 to the back
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}   
// Example usage:
const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums); // Output: [0, 0, 0, 1, 1, 2]    