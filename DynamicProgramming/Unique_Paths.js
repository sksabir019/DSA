/**
 * You are given a robot that starts at the top-left corner of a grid with dimensions m x n. 
 * The robot can only move either down or right at any point in time. The goal is for the robot to reach the bottom-right corner of the grid.

Given the dimensions of the board m and n, write a function to return the number of unique paths 
the robot can take to reach the bottom-right corner.
 */

function uniquePaths(m, n) {
    const dp = Array.from({ length: m }, () => new Array(n).fill(1));
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            console.log(`Paths to (${i}, ${j}): ${dp[i][j]}`);
        }
    }
    
    return dp[m - 1][n - 1];
}

// Example usage:
console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 2)); // Output: 3
console.log(uniquePaths(7, 3)); // Output: 28
console.log(uniquePaths(3, 3)); // Output: 6

// Time Complexity: O(m * n) where m is the number of rows and n is the number of columns
// Space Complexity: O(m * n) for the dp array

// Another way:
function uniquePaths(m, n) {
    if (m === 1 || n === 1) {
        return 1;
    } else {
        return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
    }
}
// Time Complexity: O(2^(m+n)) in the worst case without memoization
// Space Complexity: O(m + n) for the recursion stack

// Example usage:
console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 2)); // Output: 3
console.log(uniquePaths(7, 3)); // Output: 28
console.log(uniquePaths(3, 3)); // Output: 6

// using memoization to optimize the recursive approach
function uniquePaths(m, n, memo = {}) {
    const key = `${m},${n}`;
    if (key in memo) return memo[key];
    if (m === 1 || n === 1) return 1;
    
    memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
    return memo[key];
}
// Time Complexity: O(m * n) due to memoization
// Space Complexity: O(m * n) for the memo object

// Example usage:
console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 2)); // Output: 3
console.log(uniquePaths(7, 3)); // Output: 28
console.log(uniquePaths(3, 3)); // Output: 6

// Another way using combinatorial approach
function uniquePaths(m, n) {
    const N = m + n - 2; // Total steps to reach bottom-right corner
    const k = Math.min(m - 1, n - 1); // Steps in one direction (down or right)
    let res = 1;

    for (let i = 1; i <= k; i++) {
        res = res * (N - k + i) / i;
    }

    return Math.round(res);
}
// Time Complexity: O(min(m, n))
// Space Complexity: O(1)

// Example usage:
console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 2)); // Output: 3
console.log(uniquePaths(7, 3)); // Output: 28
console.log(uniquePaths(3, 3)); // Output: 6

// Another way using 1D DP array to optimize space
function uniquePaths(m, n) {
    const dp = new Array(n).fill(1);
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }

    return dp[n - 1];
}
// Time Complexity: O(m * n)
// Space Complexity: O(n)

// Example usage:
console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 2)); // Output: 3
console.log(uniquePaths(7, 3)); // Output: 28
console.log(uniquePaths(3, 3)); // Output: 6

// Another way using 1D DP array with swapped dimensions for optimization
function uniquePaths(m, n) {
    if (m > n) [m, n] = [n, m]; // Ensure m <= n to minimize space usage
    const dp = new Array(m).fill(1);
    
    for (let j = 1; j < n; j++) {
        for (let i = 1; i < m; i++) {
            dp[i] += dp[i - 1];
        }
    }

    return dp[m - 1];
}
// Time Complexity: O(m * n)
// Space Complexity: O(m)
// Example usage:
console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 2)); // Output: 3
console.log(uniquePaths(7, 3)); // Output: 28
console.log(uniquePaths(3, 3)); // Output: 6

// Another way using Pascal's Triangle approach
function uniquePaths(m, n) {
    const dp = Array.from({ length: m }, () => new Array(n).fill(1));
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            dp[i][j] = Math.round(dp[i][j]);
        }
    }
    
    return dp[m - 1][n - 1];
}
// Time Complexity: O(m * n)
// Space Complexity: O(m * n)

// Example usage:
console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 2)); // Output: 3
console.log(uniquePaths(7, 3)); // Output: 28
console.log(uniquePaths(3, 3)); // Output: 6

// Another way using iterative approach with two variables
function uniquePaths(m, n) {
    let prev = new Array(n).fill(1);
    let curr = new Array(n).fill(1);
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            curr[j] = curr[j - 1] + prev[j];
        }
        [prev, curr] = [curr, prev];
    }

    return prev[n - 1];
}   
// Time Complexity: O(m * n)
// Space Complexity: O(n)

// Example usage:
console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 2)); // Output: 3
console.log(uniquePaths(7, 3)); // Output: 28
console.log(uniquePaths(3, 3)); // Output: 6

// Another way:
class Solution {
    uniquePaths(m, n) {
        // Initialize a 2D array with dimensions m x n
        const dp = Array(m).fill().map(() => Array(n).fill(0));
        
        // base case: there is only one way to reach any cell in the first row (moving only right)
        for (let i = 0; i < n; i++) {
            dp[0][i] = 1;
        }
        
        // Set base case: there is only one way to reach any cell in the first column (moving only down)
        for (let j = 0; j < m; j++) {
            dp[j][0] = 1;
        }
        
        // Fill the rest of the dp array
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        
        return dp[m - 1][n - 1];
    }
}