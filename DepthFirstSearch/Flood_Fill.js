/**
 * Given a m x n integer grid image and integers sr, sc, and newColor, write a function to perform a flood fill on 
 * the image starting from the pixel image[sr][sc].
 *
 * In a 'flood fill', start by changing the color of image[sr][sc] to newColor. Then, change the color of all pixels connected to image[sr][sc] from either the top, bottom, left or right that have the same color as image[sr][sc], along with all the connected pixels of those pixels, and so on.
 *
 * Input: image = [[1,0,1],[1,0,0],[0,0,1]], sr = 1, sc = 1, color = 2
 *
 * Output: [[1,2,1],[1,2,2],[2,2,1]]
 *
 * The zeroes connected to the starting pixel (1, 1) are colored with the new color (2).
 *
 */
function floodFill(image, sr, sc, newColor) {
    const numRows = image.length;
    const numCols = image[0].length;
    const originalColor = image[sr][sc];

    if (originalColor === newColor) return image; // No need to fill if the color is the same

    function dfs(row, col) {
        // Base case: Check boundaries and color match
        if (row < 0 || row >= numRows || col < 0 || col >= numCols || image[row][col] !== originalColor) {
            return;
        }

        // Change the color of the current pixel
        image[row][col] = newColor;

        // Explore neighbors (up, down, left, right)
        dfs(row - 1, col); // Up
        dfs(row + 1, col); // Down
        dfs(row, col - 1); // Left
        dfs(row, col + 1); // Right
    }

    dfs(sr, sc);
    return image;
}
// Example usage:
const image = [[1,0,1],[1,0,0],[0,0,1]];
const sr = 1;
const sc = 1;
const newColor = 2;
const result = floodFill(image, sr, sc, newColor);
console.log(result); // Output: [[1,2,1],[1,2,2],[2,2,1]]