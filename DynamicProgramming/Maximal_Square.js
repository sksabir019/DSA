/**
 * Given an m x n 2D matrix with only 0's and 1's, write a function to return the area of the 
 * largest square containing only 1's.
 */
function maximalSquare(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));
    let maxSide = 0;

        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= cols; j++) {
                if (matrix[i - 1][j - 1] === '1') {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                    maxSide = Math.max(maxSide, dp[i][j]);
                }
            }
        }
        return maxSide * maxSide;
    }
                
// Time Complexity: O(m * n) where m is the number of rows and n is the number of columns
// Space Complexity: O(m * n) for the dp array

// Example usage:
const matrix1 = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];

console.log(maximalSquare(matrix1)); // Output: 4

// Another way:

function maximalSquare(matrix) {
  if (!matrix || matrix.length === 0) {
    return 0;
  }

  let r = matrix.length;
  let c = matrix[0].length;
  let dp = Array.from({ length: r + 1 }, () => Array(c + 1).fill(0));
  let maxSide = 0;

  for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= c; j++) {
      if (matrix[i - 1][j - 1] === 1) {
        let top = dp[i - 1][j];
        let left = dp[i][j - 1];
        let diag = dp[i - 1][j - 1];
        dp[i][j] = Math.min(top, left, diag) + 1;
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }

  return maxSide * maxSide;
}