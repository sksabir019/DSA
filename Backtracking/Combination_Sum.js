/**
 * Given an array of distinct integers candidates and a target integer target, generate all unique combinations 
 * of candidates which sum to target. The combinations may be returned in any order, and the same number may be 
 * chosen from candidates an unlimited number of times.
 */
function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, path, sum) {
        if (sum === target) {
            result.push(path);
            return;
        }
        if (sum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            backtrack(i, path.concat(candidates[i]), sum + candidates[i]);
        }
    }

    backtrack(0, [], 0);
    return result;
}

// Example usage:
console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]

// Time Complexity: O(N^(T/M + 1)) where N is the number of candidates, T is the target value, and M is the minimum value in candidates.
// This is because in the worst case, we can make T/M choices (where M is the smallest candidate) and for each choice, we have N options.
// Space Complexity: O(T/M) for the recursion stack, where T is the target value and M is the minimum value in candidates.


function combinationSum(candidates, target) {
    function backtrack(start, combo, currentTarget) {
        if (currentTarget === 0) {
            result.push([...combo]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            const curr = candidates[i];
            if (candidates[i] > currentTarget) {
                return;
            }
            combo.push(curr);
            backtrack(i, combo, currentTarget - curr);
            combo.pop();
        }
        return;
    }

    candidates.sort((a, b) => a - b);
    const result = [];
    backtrack(0, [], target);
    return result;
}