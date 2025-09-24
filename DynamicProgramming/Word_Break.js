/**
 * You are provided with a string s and a set of words called wordDict. Write a function to determine 
 * whether s can be broken down into a sequence of one or more words from wordDict, where each word 
 * can appear more than once and there are no spaces in s. If s can be segmented in such a way, 
 * return true; otherwise, return false.
 * 
 * Example: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
 * Output: false
 * 
 * Example: s = "leetcode", wordDict = ["leet","code"]
 * Output: true
 */

function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    
    dp[0] = true; // Base case: empty string can be segmented
    
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true; 
                break; // No need to check further if we found a valid segmentation
            }
        }
    }

    return dp[n];
}
// Example usage:
console.log(wordBreak("leetcode", ["leet", "code"])); // Output: true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true

// Time Complexity: O(n^2) where n is the length of the string s
// Space Complexity: O(n) for the dp array and O(m) for the wordSet where m is the number of words in wordDict

// Another way using recursion with memoization
function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = new Map();

    function canBreak(start) {
        if (start === s.length) return true;
        if (memo.has(start)) return memo.get(start);

        for (let end = start + 1; end <= s.length; end++) {
            if (wordSet.has(s.substring(start, end)) && canBreak(end)) {
                memo.set(start, true);
                return true;
            }
        }

        memo.set(start, false);
        return false;
    }

    return canBreak(0);
}

// Example usage:
console.log(wordBreak("leetcode", ["leet", "code"])); // Output: true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true

// Time Complexity: O(n^2) in the worst case due to substring checks and recursion depth
// Space Complexity: O(n) for the memoization map and recursion stack

// Another way using BFS
function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const queue = [0];
    const visited = new Set();

    while (queue.length > 0) {
        const start = queue.shift();
        if (visited.has(start)) continue;
        visited.add(start);

        for (let end = start + 1; end <= s.length; end++) {
            if (wordSet.has(s.substring(start, end))) {
                if (end === s.length) return true;
                queue.push(end);
            }
        }
    }

    return false;
}

// Example usage:
console.log(wordBreak("leetcode", ["leet", "code"])); // Output: true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true

// Time Complexity: O(n^2) in the worst case due to substring checks
// Space Complexity: O(n) for the queue and visited set

// Another way:
function wordBreak(s, wordDict) {
  let wordSet = new Set(wordDict);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true; // Empty string is a valid break

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      let sub = s.substring(j, i);
      if (dp[j] && wordSet.has(sub)) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

// Example usage:
console.log(wordBreak("leetcode", ["leet", "code"])); // Output: true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true

// Time Complexity: O(n^2) where n is the length of the string s
// Space Complexity: O(n) for the dp array and O(m) for the wordSet where m is the number of words in wordDict

// Alternate:
function wordBreak(s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true; // Empty string is a valid break

  for (let i = 1; i <= s.length; i++) {
    for (let word of wordDict) {
      if (i >= word.length && dp[i - word.length]) {
        let sub = s.substring(i - word.length, i);
        if (sub === word) {
          dp[i] = true;
          break;
        }
      }
    }
  }

  return dp[s.length];
}