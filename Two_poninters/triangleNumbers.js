/**
 * Write a function to count the number of triplets in an integer array nums that could form 
 * the sides of a triangle. The triplets do not need to be unique.
 */
function countTriangleTriplets(nums) {
    let count = 0;
    const n = nums.length;

    // Sort the array
    nums.sort((a, b) => a - b);

    // Iterate through each triplet
    for (let i = 0; i < n - 2; i++) {
        let k = i + 2; // Initialize the third pointer
        for (let j = i + 1; j < n - 1; j++) {
            // Find the maximum value for the third side
            while (k < n && nums[i] + nums[j] > nums[k]) {
                k++;
            }
            // Count the valid triplets
            count += k - j - 1;

            // Print the triplets for understanding
            for (let m = j + 1; m < k; m++) {
                console.log([nums[i], nums[j], nums[m]]);
            }
        }
    }
    return count;
}

// Example usage:
const nums = [2, 2, 3, 4];
const triangleCount = countTriangleTriplets(nums);
console.log(triangleCount); // Output: 3
// Time Complexity: O(n^2) - We have a nested loop that goes through the array.
// Space Complexity: O(1) - We use only constant space for pointers and result storage.
// Note: The triplets printed may not be unique, but the count will include all valid triplets.
