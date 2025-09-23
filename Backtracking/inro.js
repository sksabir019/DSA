/**
 * Backtracking algorithms use Depth-First Search to search all possible paths for a solution 
 * to a path. The animation below shows how a backtracking algorithm finds the word "HELLO" 
 * using cells that are adjacent to each other in a 2D-grid.
 */

// Path Sum: Given a binary tree where all nodes have positive, integer values and a target sum, 
// find all root-to-leaf paths where the sum of the values along the path equals the given sum.
 
function pathSum(root, targetSum) {
    const result = [];
    
    function dfs(node, currentPath, currentSum) {
        if (!node) return;

        currentPath.push(node.val);
        currentSum += node.val;

        // Check if it's a leaf node and the path sum equals targetSum
        if (!node.left && !node.right && currentSum === targetSum) {
            result.push([...currentPath]);
        } else {
            // Continue the search on left and right children
            dfs(node.left, currentPath, currentSum);
            dfs(node.right, currentPath, currentSum);
        }

        // Backtrack: remove the last node from the current path
        currentPath.pop();
    }

    dfs(root, [], 0);
    return result;
}

// Word Search: Given a 2D board and a word, find if the word exists in the grid. 
// The word can be constructed from letters of sequentially adjacent cells, 
// where "adjacent" cells are horizontally or vertically neighboring. 
// The same letter cell may not be used more than once.

function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, index) {
        if (index === word.length) return true; // All characters matched
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[index]) {
            return false; // Out of bounds or character mismatch
        }

        const temp = board[r][c];
        board[r][c] = '#'; // Mark as visited

        // Explore all four directions
        const found = dfs(r + 1, c, index + 1) || // Down
                      dfs(r - 1, c, index + 1) || // Up
                      dfs(r, c + 1, index + 1) || // Right
                      dfs(r, c - 1, index + 1);   // Left

        board[r][c] = temp; // Restore original value
        return found;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }
    return false;
}
 

// Tome complexity O(m * n) where m is the number of rows and n is the number of columns in the grid.
// Space complexity O(m * n) for the recursion stack in the worst case.

