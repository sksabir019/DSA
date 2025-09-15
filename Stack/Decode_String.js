/**
 * Given an encoded string, write a function to return its decoded string that follows a specific 
 * encoding rule: k[encoded_string], where the encoded_string within the brackets is repeated exactly
 * k times. Note that k is always a positive integer. The input string is well-formed without any 
 * extra spaces, and square brackets are properly matched. Also, assume that the original data 
 * doesn't contain digits other than the ones that specify the number of times to repeat the 
 * following encoded_string.
 */
function decodeString(s) {
    const stack = [];
    let currentNum = 0;
    let currentString = "";

    for (const char of s) {
        if (char === "[") {
            // Push the current number and string onto the stack
            stack.push([currentNum, currentString]);
            // Reset for the next segment
            currentNum = 0;
            currentString = "";
        } else if (char === "]") {
            // Pop from the stack and repeat the current string
            const [prevNum, prevString] = stack.pop();
            currentString = prevString + currentString.repeat(prevNum);
        } else if (/\d/.test(char)) {
            // Build the current number
            currentNum = currentNum * 10 + parseInt(char);
        } else {
            // Append the current character to the string
            currentString += char;
        }
    }

    return currentString;
}

// Example usage:
console.log(decodeString("3[a2[c]]")); // Output: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"
console.log(decodeString("10[a]")); // Output: "aaaaaaaaaa"
// Time Complexity: O(n * m) where n is the length of the string and m is the maximum number of repetitions
// Space Complexity: O(n) for the stack and current string storage