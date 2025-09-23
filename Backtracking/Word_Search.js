/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
horizontally or vertically neighboring. The same letter cell may not be used more than once.
 */

class Solution {
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        function dfs(r, c, index) {
            if (index === word.length) {
                return true;
            }
            if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[index]) {
                return false;
            }

            const temp = board[r][c];
            board[r][c] = "#";

            const found = (
                dfs(r + 1, c, index + 1) ||
                dfs(r - 1, c, index + 1) ||
                dfs(r, c + 1, index + 1) ||
                dfs(r, c - 1, index + 1)
            );

            board[r][c] = temp;
            return found;
        }

        // initialize depth-first search from
        // each of the cells that have the same first
        // letter as word
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (board[row][col] === word[0]) {
                    if (dfs(row, col, 0)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}

// Example usage:
const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
const word = "ABCCED";
const solution = new Solution();
console.log(solution.exist(board, word)); // Output: true
// Print index of each character in the word
for (let i = 0; i < word.length; i++) {
    console.log(`Character: ${word[i]}, Index: ${i}`);
}

// Time Complexity: O(N * 3^L) where N is the number of cells in the board and L is the length of the word.
// Space Complexity: O(L) where L is the length of the word.