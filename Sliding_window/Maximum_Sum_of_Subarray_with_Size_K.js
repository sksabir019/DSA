/**
 * Given an array of integers nums and an integer k, find the maximum sum of any contiguous 
 * subarray of size k.
 */

function maxSumSubarrayOfSizeK(nums, k) {
    let maxSum = 0;
    let windowSum = 0;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        windowSum += nums[end];

        if (end >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= nums[start];
            start++;
        }
    }

    return maxSum;
}

// Example usage:
const nums = [2, 1, 5, 1, 3, 2];
const k = 3;
const maxSum = maxSumSubarrayOfSizeK(nums, k);
console.log(maxSum); // Output: 9 (The subarray is [5, 1, 3])
// Time Complexity: O(n) - We traverse the array once with a sliding window.
// Space Complexity: O(1) - We use a constant amount of space.

// Template for sliding window:
function fixedLengthSlidingWindow(nums, k) {
  let state = 0; // choose appropriate data structure
  let start = 0;
  let max = 0;

  for (let end = 0; end < nums.length; end++) {
    // extend window
    // add nums[end] to state in O(1) time

    if (end - start + 1 === k) {
      // INVARIANT: size of the window is k here.
      max = Math.max(max, state);

      // contract window
      // remove nums[start] from state in O(1) time
      start++;
    }
  }

  return max;
}