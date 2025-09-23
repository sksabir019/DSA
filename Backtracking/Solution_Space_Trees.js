/**
 * In the Overview section, we use Depth-First Search to explore all valid root-to-leaf paths 
 * in a binary tree that we are given. In most backtracking problems, we won't be given an 
 * explicit tree to traverse. Instead, our algorithm needs to construct the tree based on 
 * the problem.
 */

function letterCombinations(digits) {
    const phone = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    function backtrack(path, idx) {
        if (idx === digits.length) {
            result.push(path);
            return;
        }

        for (const letter of phone[digits[idx]]) {
            backtrack(path + letter, idx + 1);
        }
    }

    const result = [];
    if (digits.length > 0) {
        backtrack("", 0);
    }
    return result;
}

// Example usage:
console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Time Complexity: O(4^N * N) where N is the length of the input digits string.
// The 4^N term comes from the fact that each digit can map to at most 4 letters (like '7' and '9').
// The additional N factor is due to the time taken to build each combination string of length N.

