/**
 * Write a function to return the length of the longest substring in a provided string s 
 * where all characters in the substring are distinct.
 */
function lengthOfLongestSubstring(s) {
    let charMap = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        if (charMap[currentChar]) {
            left = Math.max(left, charMap[currentChar]);
        }
        charMap[currentChar] = right + 1;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
const inputString = "abcabcbb";
const longestSubstringLength = lengthOfLongestSubstring(inputString);
console.log(longestSubstringLength); // Output: 3 (The longest substring is "abc")
// Time Complexity: O(n) - We traverse the string once with two pointers.
// Space Complexity: O(min(m, n)) - The charMap will hold at most min(m, n) characters, where m is the size of the character set and n is the length of the string.