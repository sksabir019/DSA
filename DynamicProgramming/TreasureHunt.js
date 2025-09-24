/**
 * Given an array treasure of non-negative integers, where each integer represents the amount of treasure in a house, 
 * write a function to return the maximum amount of treasure you can collect without triggering any alarms.
 */
function maxTreasure(treasure) {
    const n = treasure.length;
    if (n === 0) return 0;
    if (n === 1) return treasure[0];

    // Dynamic programming array to store the maximum treasure at each house
    const dp = new Array(n).fill(0);
    dp[0] = treasure[0];
    dp[1] = Math.max(treasure[0], treasure[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + treasure[i]);
    }

    return dp[n - 1];
}

// Example usage:
const treasure = [6, 7, 1, 30, 8, 2, 4];
console.log(maxTreasure(treasure)); // Output: 41 // (6 + 30 + 4 = 40 or 7 + 30 + 4 = 41)

// Identify the Recurrence Relation
// dp(i) = max(dp(i - 1), dp(i - 2) + treasure[i - 1])

// Write the Recursive Solution
function rob(treasure) {
    if (!treasure || treasure.length === 0) {
        return 0;
    }
    
    function robHelper(i) {
        if (i === 0) {
            return 0;
        }
        if (i === 1) {
            return treasure[0];
        }
        
        const skip = robHelper(i - 1);
        const take = robHelper(i - 2) + treasure[i - 1];
        return Math.max(skip, take);
    }
    
    return robHelper(treasure.length);
}

// Add Memoization
function rob(treasure) {
    if (!treasure || treasure.length === 0) {
        return 0;
    }
    // initialize memoization object
    const memo = {};
    
    function robHelper(i) {
        // base cases
        if (i === 0) {
            return 0;
        }
        if (i === 1) {
            return treasure[0];
        }

        // check and return from memo
        // BEFORE making any recursive calls 
        if (i in memo) {
            return memo[i];
        }

        // recurrence relation 
        const skip = robHelper(i - 1);
        const take = robHelper(i - 2) + treasure[i - 1];
        memo[i] = Math.max(skip, take);
        return memo[i];
    }
    
    return robHelper(treasure.length);
}

// Convert to "Bottom-Up" DP:
function rob(treasure) {
    if (!treasure || treasure.length === 0) {
        return 0;
    }

    // initialize dp array
    const dp = new Array(treasure.length + 1).fill(0);

    // fill in base cases (dp[0] = 0 already)
    dp[1] = treasure[0];

    // iterate to fill in the rest of the array
    for (let i = 2; i <= treasure.length; i++) {
        // fill in dp[i] using the recurrence relation
        const take = dp[i - 2] + treasure[i - 1];
        const skip = dp[i - 1];
        dp[i] = Math.max(take, skip);
    }
    
    return dp[treasure.length];
}


// Further Optimization:
function rob(treasure) {
    if (!treasure || treasure.length === 0) {
        return 0;
    }

    let prev = 0, curr = treasure[0];

    for (let i = 2; i <= treasure.length; i++) {
        // calculate the next value of dp
        const take = prev + treasure[i - 1];
        const skip = curr;
        [prev, curr] = [curr, Math.max(take, skip)];
    }

    return curr;
}
