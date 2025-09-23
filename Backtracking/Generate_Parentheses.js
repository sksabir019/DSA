/**
 * Given an integer n, write a function to return all well-formed (valid) expressions 
 * that can be made using n pairs of parentheses.
 */

function generateParenthesis(n) {
    const result = [];

    function backtrack(open, close, path) {
        if (path.length === n * 2) {
            result.push(path);
            return;
        }

        if (open < n) {
            backtrack(open + 1, close, path + '(');
        }
        if (close < open) {
            backtrack(open, close + 1, path + ')');
        }
    }

    backtrack(0, 0, '');
    return result;  
}

// Example usage: 
console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]