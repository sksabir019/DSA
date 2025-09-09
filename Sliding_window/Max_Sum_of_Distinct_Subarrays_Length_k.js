/**
 * Given an integer array nums and an integer k, write a function to identify the highest 
 * possible sum of a subarray within nums, where the subarray meets the following criteria: 
 * its length is k, and all of its elements are unique.
 */
function maxSumOfDistinctSubarray(nums, k) {
    let maxSum = 0;
    let windowSum = 0;
    let start = 0;
    let charMap = new Map();

    for (let end = 0; end < nums.length; end++) {
        const currentNum = nums[end];
        windowSum += currentNum;

        // If we have a duplicate, shrink the window from the left
        while (charMap.has(currentNum)) {
            charMap.delete(nums[start]);
            windowSum -= nums[start];
            start++;
        }

        charMap.set(currentNum, end);

        // If we have a valid window of size k, check the sum
        if (end - start + 1 === k) {
            maxSum = Math.max(maxSum, windowSum);
        }
    }

    return maxSum;
}

// Example usage:
const nums = [1, 2, 3, 2, 5];
const k = 3;
const maxSum = maxSumOfDistinctSubarray(nums, k);
console.log(maxSum); // Output: 10 (The subarray is [2, 3, 5])
// Time Complexity: O(n) - We traverse the array once with a sliding window.
// Space Complexity: O(k) - We use a map to store the last occurrence of each element.