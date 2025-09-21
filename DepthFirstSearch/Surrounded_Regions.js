/**
 * Given an m x n matrix grid containing only characters 'X' and 'O', modify grid to replace all regions of 'O' 
 * that are completey surrounded by 'X' with 'X'.

A region of 'O' is surrounded by 'X' if there is no adjacent path (cells that border each other in the N, W, E, S directions) 
consisting of only 'O' from anywhere inside that region to the border of the board.
 */

function solve(board) {
    if (!board || board.length === 0) return;

    const numRows = board.length;
    const numCols = board[0].length;
    const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));

    function dfs(row, col) {
        // Base case: Check boundaries and if the cell is 'O' and not visited
        if (row < 0 || row >= numRows || col < 0 || col >= numCols || board[row][col] !== 'O' || visited[row][col]) {
            return;
        }

        // Mark the cell as visited
        visited[row][col] = true;

        // Explore all four directions (up, down, left, right)
        dfs(row - 1, col); // Up
        dfs(row + 1, col); // Down
        dfs(row, col - 1); // Left
        dfs(row, col + 1); // Right
    }

    // Start DFS from 'O's on the border
    for (let r = 0; r < numRows; r++) {
        if (board[r][0] === 'O' && !visited[r][0]) dfs(r, 0); // Left border
        if (board[r][numCols - 1] === 'O' && !visited[r][numCols - 1]) dfs(r, numCols - 1); // Right border
    }
    for (let c = 0; c < numCols; c++) {
        if (board[0][c] === 'O' && !visited[0][c]) dfs(0, c); // Top border
        if (board[numRows - 1][c] === 'O' && !visited[numRows - 1][c]) dfs(numRows - 1, c); // Bottom border
    }

    // Flip all unvisited 'O's to 'X'
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            if (board[r][c] === 'O' && !visited[r][c]) {
                board[r][c] = 'X';
            }   
        }
    }
    return board;
}
// Example usage:
const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
];

solve(board);
console.log(board); // 

class Solution {
    surroundedRegions(grid) {
        if (!grid || grid.length === 0) {
            return grid;
        }
        
        const rows = grid.length;
        const cols = grid[0].length;

        // recursive function to find all the "O"s that are reachable
        // from the border and mark them as "S"
        function dfs(x, y) {
            // return immediately if the cell is out of bounds or is not an "O"
            if (x < 0 || y < 0 || x >= rows || y >= cols || grid[x][y] !== 'O') {
                return;
            }
            grid[x][y] = 'S';

            // explore the neighboring cells
            dfs(x + 1, y);
            dfs(x - 1, y);
            dfs(x, y + 1);
            dfs(x, y - 1);
        }

        // initialize the dfs for the first and last column
        for (let i = 0; i < rows; i++) {
            if (grid[i][0] === 'O') {
                dfs(i, 0);
            }
            if (grid[i][cols - 1] === 'O') {
                dfs(i, cols - 1);
            }
        }

        // initialize the dfs for the first and last row
        for (let j = 0; j < cols; j++) {
            if (grid[0][j] === 'O') {
                dfs(0, j);
            }
            if (grid[rows - 1][j] === 'O') {
                dfs(rows - 1, j);
            }
        }

        // change the "O"s that are not marked as "S" to "X"s and the "S"s back to "O"s
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 'O') {
                    grid[i][j] = 'X';
                } else if (grid[i][j] === 'S') {
                    grid[i][j] = 'O';
                }
            }
        }
                    
        return grid;
    }
}
// Example usage:
const solution = new Solution();
const result = solution.surroundedRegions(board);
console.log(result);