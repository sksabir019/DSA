/**
 * You are given binary matrix grid of size m x n, where '1' denotes land and '0' signifies water. 
 * Determine the count of islands present in this grid. An island is defined as a region of 
 * contiguous land cells connected either vertically or horizontally, and it is completely 
 * encircled by water. Assume that the grid is bordered by water on all sides.
 */
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const numRows = grid.length;
    const numCols = grid[0].length;
    let islandCount = 0;
    const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));

    function dfs(row, col) {
        // Base case: Check boundaries and if the cell is land and not visited
        if (row < 0 || row >= numRows || col < 0 || col >= numCols || grid[row][col] === '0' || visited[row][col]) {
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

    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            if (grid[r][c] === '1' && !visited[r][c]) {
                islandCount++;
                dfs(r, c); // Start DFS to mark all connected land cells
            }
        }
    }

    return islandCount;
}

// Example usage:
const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

console.log(numIslands(grid)); // Output: 3


function numIslands(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }
    
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    
    function dfs(r, c) {
        grid[r][c] = '0';
        if (r + 1 < rows && grid[r + 1][c] === '1') {
            dfs(r + 1, c);
        }
        if (r > 0 && grid[r - 1][c] === '1') {
            dfs(r - 1, c);
        }
        if (c + 1 < cols && grid[r][c + 1] === '1') {
            dfs(r, c + 1);
        }
        if (c > 0 && grid[r][c - 1] === '1') {
            dfs(r, c - 1);
        }
        return;
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    
    return count;
}