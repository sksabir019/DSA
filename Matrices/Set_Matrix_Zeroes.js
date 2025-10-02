/**
 * Write a function to modify an m x n integer matrix matrix directly, such that if any element in the matrix is 0, 
 * its entire corresponding row and column are set to 0. This transformation should be done in place, 
 * without using any additional data structures for storage.
 */

function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;

    // Check if the first row has a zero
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    // Check if the first column has a zero
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // Use the first row and column to mark zeros
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

        // Set the marked zeros
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    
        // Zero out the first row if needed
        if (firstRowHasZero) {
            for (let j = 0; j < n; j++) {
                matrix[0][j] = 0;
            }
        }
    
        // Zero out the first column if needed
        if (firstColHasZero) {
            for (let i = 0; i < m; i++) {
                matrix[i][0] = 0;
            }
        }
    }
            

// Example usage:
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
setZeroes(matrix); // The matrix is now modified in-place
console.log(matrix); // Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

// Time Complexity: O(m * n) where m is the number of rows and n is the number of columns in the matrix.
// Space Complexity: O(1) since the operation is done in-place without using extra space.

// Other way:
function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const zeroRows = new Set();
    const zeroCols = new Set();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    for (let row of zeroRows) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }

    for (let col of zeroCols) {
        for (let row = 0; row < rows; row++) {
            matrix[row][col] = 0;
        }
    }

    return matrix;
}