/**
 * Write a function that takes this grid as input and returns the minimum number of minutes that must elapse until no cell has a fresh orange. If it is impossible to rot every fresh orange, return -1
 */
function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [
        [0, 1],  // right
        [1, 0],  // down
        [0, -1], // left
        [-1, 0]  // up
    ];

    let queue = [];
    let freshCount = 0;

    // Initialize the queue with all rotten oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
                visited.add(`${r},${c}`);
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    let minutes = 0;

    while (queue.length > 0 && freshCount > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const [x, y] = queue.shift();

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                if (
                    newX >= 0 && newX < rows &&
                    newY >= 0 && newY < cols &&
                    grid[newX][newY] === 1
                ) {
                    // Rot the fresh orange
                    grid[newX][newY] = 2;
                    freshCount--;
                    queue.push([newX, newY]);
                }
            }
        }

        minutes++;
    }

    return freshCount === 0 ? minutes : -1;
}

// Example usage:
const grid1 = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];
console.log(orangesRotting(grid1)); // Output: 4

const grid2 = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]
];
console.log(orangesRotting(grid2)); // Output: -1

const grid3 = [
    [0, 2]
];
console.log(orangesRotting(grid3)); // Output: 0