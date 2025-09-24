/**
 * Your are given a string s containing only digits. Write a function to return the number of ways to decode using the following mapping:
'1' -> "A"
'2' -> "B"
'3' -> "C"
...
'26' -> "Z"
There may be multiple ways to decode a string. For example, "14" can be decoded as "AD" or "N".
 */
function numDecodings(s) {
    if (s[0] === '0') return 0; // No valid encoding starts with '0'
    
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    
    dp[0] = 1; // An empty string has one way to decode
    dp[1] = 1; // A single non-zero digit has one way to decode
    
    for (let i = 2; i <= n; i++) {
        const oneDigit = parseInt(s.slice(i - 1, i), 10);
        const twoDigits = parseInt(s.slice(i - 2, i), 10);
        
        // Check if the last one digit is valid (1-9)
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }
        
        // Check if the last two digits form a valid number (10-26)
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    
    return dp[n];
}

// Example usage:
console.log(numDecodings("226")); // Output: 3 ("BZ", "VF", "BBF")
console.log(numDecodings("12"));  // Output: 2 ("AB", "L")
console.log(numDecodings("0"));   // Output: 0 (no valid encoding)
console.log(numDecodings("06"));  // Output: 0 (no valid encoding)

// Time Complexity: O(n) where n is the length of the string
// Space Complexity: O(n) for the dp array

// Other way:

function numDecodings(s) {
  if (!s || s[0] === '0') {
    return 0;
  }

  let n = s.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    let digit = parseInt(s[i - 1]);
    if (digit !== 0) {
      dp[i] += dp[i - 1];
    }
        
    digit = parseInt(s.substring(i - 2, i));
    if (digit >= 10 && digit <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}
// Time Complexity: O(n)
// Space Complexity: O(n)