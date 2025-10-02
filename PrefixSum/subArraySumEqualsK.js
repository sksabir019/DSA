/**
 * Write a function that returns the total number of contiguous subarrays within a given integer array whose elements sum up to a target K.
 */
function subArraySumEqualsK(arr, k) {
    const prefixSum = new Map();
    prefixSum.set(0, 1);  // Initialize with sum 0 occurring once
    let currentSum = 0;
    let count = 0;

    for (const num of arr) {
        currentSum += num;
        if (prefixSum.has(currentSum - k)) {
            count += prefixSum.get(currentSum - k);
        }
        prefixSum.set(currentSum, (prefixSum.get(currentSum) || 0) + 1);
    }

    return count;
}

// Example usage:
const arr = [1, 1, 1];
const k = 2;
console.log(subArraySumEqualsK(arr, k)); // Output: 2


// Time Complexity: O(n) where n is the length of the array.
// Space Complexity: O(n) for the prefix sum map.

// other way:
class Solution {
    subarraySum(nums, k) {
        // Prefix sum + hashmap approach: count subarrays with sum = k
        let count = 0;                        // Count of valid subarrays
        let sum_ = 0;                         // Running prefix sum
        const prefix_counts = {0: 1};         // Map: prefix_sum -> frequency

        for (const num of nums) {
            sum_ += num;                      // Update running sum
            
            // Check if there's a prefix sum that makes current subarray sum = k
            // If sum_ - k exists, then subarray from that point to current has sum k
            if ((sum_ - k) in prefix_counts) {
                count += prefix_counts[sum_ - k];
            }
            
            // Record current prefix sum in our frequency map
            prefix_counts[sum_] = (prefix_counts[sum_] || 0) + 1;
        }

        return count;
    }
}

// Example usage:
const nums = [1, 2, 3];
const target = 3;
console.log(new Solution().subarraySum(nums, target)); // Output: 2

// Time Complexity: O(n) where n is the length of the array.
// Space Complexity: O(n) for the prefix sum frequency map.