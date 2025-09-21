/**
 * You are given an m x n matrix of non-negative integers representing a grid of land. 
 * Each value in the grid represents the height of that piece of land.

The Pacific Ocean touches the left and top edges of the matrix, while the Atlantic Ocean 
touches the right and bottom edges. Water can only flow from a cell to its neighboring cells 
directly north, south, east, or west, but only if the height of the neighboring cell is equal 
to or lower than the current cell.
 */

function pacificAtlantic(heights) {
    if (!heights || heights.length === 0) return [];

    const numRows = heights.length;
    const numCols = heights[0].length;

    const pacificVisited = Array.from({ length: numRows }, () => Array(numCols).fill(false));
    const atlanticVisited = Array.from({ length: numRows }, () => Array(numCols).fill(false));

    function dfs(row, col, visited) {
        // Base case: Check boundaries and if the cell is already visited
        if (row < 0 || row >= numRows || col < 0 || col >= numCols || visited[row][col]) {
            return;
        }

        // Mark the cell as visited
        visited[row][col] = true;

        // Explore all four directions (up, down, left, right)
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            // Check if the neighboring cell is within bounds and can flow to it
            if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols &&
                heights[newRow][newCol] <= heights[row][col]) {
                dfs(newRow, newCol, visited);
            }
        }
    }

    // Start DFS from the Pacific Ocean (top and left edges)
    for (let r = 0; r < numRows; r++) {
        dfs(r, 0, pacificVisited); // Left edge
        dfs(r, numCols - 1, atlanticVisited); // Right edge
    }
    for (let c = 0; c < numCols; c++) {
        dfs(0, c, pacificVisited); // Top edge
        dfs(numRows - 1, c, atlanticVisited); // Bottom edge
    }

    const result = [];
    // Find all cells that can reach both oceans
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            if (pacificVisited[r][c] && atlanticVisited[r][c]) {
                result.push([r, c]);
            }
        }
    }
    return result;
}
// Example usage:
const heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 2],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
];
const result = pacificAtlantic(heights);
console.log(result);