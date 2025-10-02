/**
 * Write a function to traverse an m x n matrix in spiral order and return all elements in a single list. 
 * The traversal should start from the top left corner and proceed clockwise, spiraling inward until every element has been visited.
 */
function spiralOrder(matrix) {
    if (matrix.length === 0) return [];
    
    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let direction = 0; // 0: left->right, 1: top->bottom, 2: right->left, 3: bottom->top

    while (top <= bottom && left <= right) {
        if (direction === 0) { // left to right
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++;
            direction = 1;
        } else if (direction === 1) { // top to bottom
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--;
            direction = 2;
        } else if (direction === 2) { // right to left
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
            direction = 3;
        } else if (direction === 3) { // bottom to top
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
            direction = 0;
        }
    }

    return result;
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(matrix)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Time Complexity: O(m * n) where m is the number of rows and n is the number of columns.
// Space Complexity: O(1) if we don't count the output array, otherwise O(m * n) for the output array.

// other way:
function spiralOrder(matrix) {
    let result = [];                                       // Resultant array to store spiral order
    while (matrix.length > 0) {
        result = result.concat(matrix.shift());            // Take the first row
        if (matrix.length > 0 && matrix[0].length > 0) {   // Check if there are remaining rows  
            for (let row of matrix) {     
                result.push(row.pop());                    // Take the last element of each remaining row
            }
        }
        if (matrix.length > 0) {
            result = result.concat(matrix.pop().reverse()); // Take the last row in reverse order
        }
        if (matrix.length > 0 && matrix[0].length > 0) {    // Check if there are remaining rows
            for (let i = matrix.length - 1; i >= 0; i--) {  // Take the first element of each remaining row in reverse order
                result.push(matrix[i].shift());              // Take the first element
            }
        }
    }
    return result;
}

// Example usage:
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(matrix1)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Time Complexity: O(m * n) where m is the number of rows and n is the number of columns.
// Space Complexity: O(1) if we don't count the output array, otherwise O(m * n) for the output array.