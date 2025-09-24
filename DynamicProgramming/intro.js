/**
 * Dynamic Programming: A method for solving complex problems by breaking them down into simpler subproblems.
 * It is applicable when the subproblems overlap and optimal substructure is present.
 * Dynamic programming can be implemented using either a top-down approach (memoization) or a bottom-up approach (tabulation).
 */

// Climbing Stairs: Buttom-Up Dynamic Programming Approach
function climbStairs(n) {
    if (n <= 1) return 1;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // 1 way to stay at the ground (do nothing)
    dp[1] = 1; // 1 way to reach the first step

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // Sum of ways to reach the last step and the one before it
    }

    return dp[n];
}

// Example usage:
console.log(climbStairs(5)); // Output: 8

// Time Complexity: O(n) - We compute the number of ways to reach each step from 2 to n.
// Space Complexity: O(n) - We use an array of size n+1 to store the number of ways to reach each step.

// Optimized Space Complexity:
function climbStairsOptimized(n) {
    if (n <= 1) return 1;

    let first = 1; // Ways to reach the first step
    let second = 1; // Ways to reach the ground

    for (let i = 2; i <= n; i++) {
        const current = first + second; // Current ways is sum of the two previous
        second = first; // Move second to first
        first = current; // Update first to current
    }

    return first;
}

// Example usage:
console.log(climbStairsOptimized(5)); // Output: 8

// Time Complexity: O(n) - We still compute the number of ways to reach each step from 2 to n.
// Space Complexity: O(1) - We only use a constant amount of space for the two variables.

// Recursive call: Top-Down Dynamic Programming Approach
function climbStairs(n) {
    // base cases
    if (n <= 1) {
        return 1;
    }
    
    return climbStairs(n - 1) + climbStairs(n - 2);
}

// Recursive with memoization: Top-Down Dynamic Programming Approach
function climbStairs(n, memo = {}) {
    // base cases
    if (n <= 1) {
        return 1;
    }
    
    if (n in memo) {
        return memo[n];
    }
    
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
}

// Example usage:
console.log(climbStairs(5)); // Output: 8
console.log(climbStairs(10)); // Output: 89

// Time Complexity: O(n) - Each state is computed once and stored in the memo object.
// Space Complexity: O(n) - The memo object stores results for each state, and the recursion stack can go up to n calls deep.

/**
 * Both the top-down and bottom-up approaches are valid ways to solve problems by avoiding redundant calculations. 
 * The top-down approach uses recursion and memoization to store the results of subproblems, while the bottom-up 
 * approach iterates from the base cases to the original problem.
 * The top-down approach is often more intuitive to those who are first learning dynamic programming, 
 * but the bottom-up approach is generally more efficient because it avoids the overhead of recursive calls and function calls. 
 * In the next section, we'll build upon these concepts and follow a structured approach to solve dynamic programming problems.
 */