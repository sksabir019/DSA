/**
 * Given a string containing just the characters '(' and ')', find the length of the longest valid
 * (well-formed) parentheses substring. A well-formed parentheses string is one that follows 
 * these rules:
 * Open brackets must be closed by a matching pair in the correct order.
 * For example, given the string "(()", the longest valid parentheses substring is "()", 
 * which has a length of 2. Another example is the string ")()())", where the longest valid 
 * parentheses substring is "()()", which has a length of 4.
 */
function longestValidParentheses(s) {
    const stack = [];
    let maxLength = 0;
    let lastInvalid = -1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            if (stack.length === 0) {
                lastInvalid = i;
            } else {
                stack.pop();
                if (stack.length === 0) {
                    maxLength = Math.max(maxLength, i - lastInvalid);
                } else {
                    maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
                }
            }
        }
    }

    return maxLength;
}

// Example usage:
console.log(longestValidParentheses("(()")); // Output: 2
console.log(longestValidParentheses(")()())")); // Output: 4
console.log(longestValidParentheses("")); // Output: 0
// Time Complexity: O(n) where n is the length of the string
// Space Complexity: O(n) in the worst case for the stack (all opening brackets)