/**
 * Write a function that, given an integer n, returns an array dp of size n + 1, where dp[i] stores the count of '1' bits in 
 * the binary form of i.
 */
function countBits(n) { 
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i & 1); // explain: dp[i >> 1] gives the count of 1 bits in i/2, and (i & 1) adds 1 if i is odd
    }
    return dp;
}

// Test the function
console.log(countBits(5)); // Output: [0,1,1,2,1,2]

// Time Complexity: O(n) - We compute the number of 1 bits for each number from 1 to n.
// Space Complexity: O(n) - We use an array of size n+1 to store the results.

// Other way:
function countBits(n) {
  let dp = new Array(n + 1).fill(0);
    
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[Math.floor(i / 2)] + (i % 2); // dp[i] = dp[i >> 1] + (i & 1) is equivalent
  }
  return dp;
}

// Example usage:
console.log(countBits(5)); // Output: [0,1,1,2,1,2]

// Time Complexity: O(n) - We compute the number of 1 bits for each number from 1 to n.
// Space Complexity: O(n) - We use an array of size n+1 to store the results.
// Explanation: For each number i, the number of 1 bits is equal to the number of 1 bits in i/2 (which is i right-shifted by 1) 
// plus 1 if i is odd (i.e., if the least significant bit is 1).
// This is because dividing by 2 effectively removes the least significant bit, and we just need to check if that bit was 1 or 0.