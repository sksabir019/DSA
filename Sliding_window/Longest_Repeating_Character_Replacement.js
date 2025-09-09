/**
 * Write a function to find the length of the longest substring containing the same letter 
 * in a given string s, after performing at most k operations in which you can choose any 
 * character of the string and change it to any other uppercase English letter.
 */
function characterReplacement(s, k) {
    let charCount = {};
    let maxLength = 0;
    let maxCount = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        charCount[currentChar] = (charCount[currentChar] || 0) + 1;
        maxCount = Math.max(maxCount, charCount[currentChar]);

        while (right - left + 1 - maxCount > k) {
            charCount[s[left]]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
const inputString = "AABABBA";
const k = 1;
const longestSubstringLength = characterReplacement(inputString, k);
console.log(longestSubstringLength); // Output: 4 (The longest substring is "AABA")
// Time Complexity: O(n) - We traverse the string once with two pointers.
// Space Complexity: O(1) - The charCount object will hold at most 26 characters (A-Z).