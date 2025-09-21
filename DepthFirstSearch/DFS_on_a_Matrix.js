/**
 * DFS on a matrix is similar to DFS on an adjacency list. We still have to keep track of 
 * visited nodes, and we recursively call DFS on each neighbor of the current node.
 * The main difference is that in a matrix, the neighbors of a node are determined by its
 * position in the matrix (i.e., up, down, left, right).
 */
function dfsMatrix(matrix, visited, row, col) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Base case: Check boundaries and visited status
  if (row < 0 || row >= numRows || col < 0 || col >= numCols || visited.has(`${row},${col}`)) {
    return;
  }

  // Mark the current cell as visited
  visited.add(`${row},${col}`);

  // Explore neighbors (up, down, left, right)
  dfsMatrix(matrix, visited, row - 1, col); // Up
  dfsMatrix(matrix, visited, row + 1, col); // Down
  dfsMatrix(matrix, visited, row, col - 1); // Left
  dfsMatrix(matrix, visited, row, col + 1); // Right
}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const visited = new Set();
dfsMatrix(matrix, visited, 0, 0);
console.log(visited); // Output: Set with all visited cell coordinates 
// Output will be a set of visited coordinates in the format "row,col"