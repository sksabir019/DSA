/**
 * You are given a chessboard of infinite size where the coordinates of each cell are defined by 
 * integer pairs (x, y). The knight piece moves in an L-shape, either two squares horizontally 
 * and one square vertically, or two squares vertically and one square horizontally. 
 * Write a function to determine the minimum number of moves required for the knight to move 
 * from the starting position (0, 0) to the target position (x, y). 
 * Assume that it is always possible to reach the target position, and that x and y are both 
 * integers in the range [-200, 200]
 */

function minKnightMoves(x, y) {
    // Directions a knight can move
    const directions = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [2, -1], [1, -2], [-1, -2], [-2, -1]
    ];

    // BFS initialization
    const queue = [[0, 0, 0]]; // [x, y, moves]
    const visited = new Set();
    visited.add("0,0");

    while (queue.length > 0) {
        const [currX, currY, moves] = queue.shift();

        // Check if we've reached the target
        if (currX === x && currY === y) {
            return moves;
        }

        // Explore all possible knight moves
        for (const [dx, dy] of directions) {
            const newX = currX + dx;
            const newY = currY + dy;

            // Check bounds and visited
            if (newX >= -200 && newX <= 200 && newY >= -200 && newY <= 200) {
                const pos = `${newX},${newY}`;
                if (!visited.has(pos)) {
                    visited.add(pos);
                    queue.push([newX, newY, moves + 1]);
                }
            }
        }
    }

    return -1; // Should never reach here
}

// Example usage:
console.log(minKnightMoves(5, 5)); // Output: 4
console.log(minKnightMoves(2, 1)); // Output: 1
console.log(minKnightMoves(0, 0)); // Output: 0
console.log(minKnightMoves(-1, -1)); // Output: 2
console.log(minKnightMoves(200, 200)); // Output: 134