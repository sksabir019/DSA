function prefixSums(arr) {
    const n = arr.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefix[i] = prefix[i - 1] + arr[i - 1];
    }
    return prefix;
}

// Write a function to efficiently count vowels within specified substrings of a given string.
function countVowels(s, queries) {
    const n = s.length;
    const vowelCount = new Array(n + 1).fill(0);
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 1; i <= n; i++) {
        vowelCount[i] = vowelCount[i - 1] + (vowels.has(s[i - 1]) ? 1 : 0);
    }

    const result = [];
    for (const [start, end] of queries) {
        result.push(vowelCount[end + 1] - vowelCount[start]);
    }
    return result;
}

// Example usage:
const s = "leetcode";
const queries = [[0, 1], [1, 4], [2, 5], [0, 7]];
console.log(countVowels(s, queries)); // Output: [1, 2, 2, 3]

// other way:
class Solution {
    vowelStrings(word, queries) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        const prefixSum = new Array(word.length + 1).fill(0);

        // Part 1: create the prefix sum array
        for (let i = 1; i <= word.length; i++) {
            const isVowel = vowels.has(word[i - 1]);
            prefixSum[i] = prefixSum[i - 1] + (isVowel ? 1 : 0);
        }

        // Part 2: calculate the number of vowels in each query 
        const result = [];
        for (const [left, right] of queries) {
            const numVowels = prefixSum[right + 1] - prefixSum[left];
            result.push(numVowels);
        }

        return result;
    }
}

word = "prefixsum"
queries = [[0, 2], [1, 4], [3, 5]]
console.log(new Solution().vowelStrings(word, queries)); // Output: Output: [1, 2, 1]

// Time Complexity: O(n + q) where n is the length of the string and q is the number of queries.
// Space Complexity: O(n) for the prefix sum array.