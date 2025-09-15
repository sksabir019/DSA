/**
 * Given an input string s consisting solely of the characters '(', ')', '{', '}', '[' and ']', 
 * determine whether s is a valid string. A string is considered valid if every opening bracket is 
 * closed by a matching type of bracket and in the correct order, and every closing bracket has 
 * a corresponding opening bracket of the same type.
 */
function isValidParentheses(s) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of s) {
        if (bracketMap[char]) {
            // If it's an opening bracket, push the corresponding closing bracket onto the stack
            stack.push(bracketMap[char]);
        } else {
            // If it's a closing bracket, check if it matches the top of the stack
            if (stack.pop() !== char) {
                return false; // Mismatch found
            }
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}

// Example usage:
const str1 = "()";
console.log(isValidParentheses(str1)); // Output: true

const str2 = "()[]{}";
console.log(isValidParentheses(str2)); // Output: true

const str3 = "(]";
console.log(isValidParentheses(str3)); // Output: false

const str4 = "([)]";
console.log(isValidParentheses(str4)); // Output: false

const str5 = "{[]}";
console.log(isValidParentheses(str5)); // Output: true
// Time Complexity: O(n) where n is the length of the string
// Space Complexity: O(n) in the worst case for the stack (all opening brackets)

// Another approach:
function isValid(s) {
  const stack = [];
  const mapping = {")": "(", "}": "{", "]": "["};

  for (const char of s) {
    if (char in mapping) {
      if (stack.length === 0 || stack[stack.length - 1] !== mapping[char]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// Example usage:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true