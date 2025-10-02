/**
 * Write a function to rotate an n x n 2D matrix representing an image by 90 degrees clockwise. 
 * The rotation must be done in-place, meaning you should modify the input matrix directly without 
 * using an additional matrix for the operation.
 */

function rotate(matrix) {
    const n = matrix.length;

    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // Swap matrix[i][j] and matrix[j][i]
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
rotate(matrix); // The matrix is now modified in-place
console.log(matrix); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

// Time Complexity: O(n^2) where n is the number of rows or columns in the matrix.
// Space Complexity: O(1) since the rotation is done in-place without using extra space.
