/**
 * Given an integer array nums, write a function that returns the length of the longest increasing 
 * subsequence within the array. The subsequence does not have to be contiguous, but the elements 
 * must be strictly increasing (i.e. nums[i] < nums[j] for all i < j).
 */

function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    const n = nums.length;
    const dp = new Array(n).fill(1); // Each element is an increasing subsequence of length 1

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                console.log(`LIS ending at index ${i}: ${dp[i]}`);
            }
        }
    }

    return Math.max(...dp);
}

// Example usage:
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4 ([2,3,7,101])
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));          // Output: 4 ([0,1,2,3])
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));       // Output: 1 ([7])

// Time Complexity: O(n^2) where n is the length of the input array
// Space Complexity: O(n) for the dp array

// Another way using binary search (Patience Sorting technique)
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    const tails = [];
    
    for (let num of nums) {
        let left = 0, right = tails.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num;
        }
        
        console.log(`Tails after processing ${num}: ${tails}`);
    }
    
    return tails.length;
}

// Example usage:
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4 ([2,3,7,101])
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));          // Output: 4 ([0,1,2,3])
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));       // Output: 1 ([7])

// Time Complexity: O(n log n) where n is the length of the input array
// Space Complexity: O(n) for the tails array   


// Another way using recursion with memoization
function lengthOfLIS(nums) {
    const n = nums.length;
    const memo = new Array(n).fill(0);

    function helper(currentIndex, previousIndex) {
        if (currentIndex === n) return 0;
        if (memo[currentIndex] !== 0) return memo[currentIndex];

        let taken = 0;
        if (previousIndex < 0 || nums[currentIndex] > nums[previousIndex]) {
            taken = 1 + helper(currentIndex + 1, currentIndex);
        }
        const notTaken = helper(currentIndex + 1, previousIndex);

        memo[currentIndex] = Math.max(taken, notTaken);
        return memo[currentIndex];
    }

    return helper(0, -1);
}

// Example usage:
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4 ([2,3,7,101])
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));          // Output: 4 ([0,1,2,3])
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));       // Output: 1 ([7])

// Time Complexity: O(n^2) where n is the length of the input array
// Space Complexity: O(n) for the memo array and recursion stack

