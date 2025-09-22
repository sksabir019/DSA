// BFS on an Adjacency List

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        }
    }
    bfs(startVertex) {
        const visited = new Set();
        const queue = [startVertex];
        visited.add(startVertex);

        while (queue.length > 0) {
            const current = queue.shift();
            console.log("Visiting:", current);

            const neighbors = this.adjacencyList[current] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        console.log("BFS complete");
    }
}


function bfs(start) {
  let visited = new Set([start]);
  let queue = [start];

  while (queue.length > 0) {
    let node = queue.shift();
    for (let neighbor of adjList[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// BFS on an Matrix (2D Grid)

function bfsMatrix(matrix, start) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let visited = new Set([start.toString()]);
  let queue = [start];
  let directions = [
    [0, 1],  // right
    [1, 0],  // down
    [0, -1], // left
    [-1, 0]  // up
  ];

  while (queue.length > 0) {
    let [x, y] = queue.shift();
    for (let [dx, dy] of directions) {
      let newX = x + dx;
      let newY = y + dy;
      if (
        newX >= 0 && newX < rows &&
        newY >= 0 && newY < cols &&
        !visited.has([newX, newY].toString())
      ) {
        visited.add([newX, newY].toString());
        queue.push([newX, newY]);
      }
    }
  }
}

/**
 * Given the root of a binary tree, return the maximum width of the binary tree.
 * The maximum width of a tree is the maximum width among all levels.
 * The width of one level is defined as the length between the end-nodes
 * (the leftmost and rightmost non-null nodes), where the null nodes
 * between the end-nodes are also counted into the length calculation.
 * It is guaranteed that the answer will be in the range of a 32-bit signed integer.
 *
 * Input: [1, 3, 4, null, 2, 7, null, 8]
 * Output: 4
 * Explanation: The maximum width exists in the third level with length 4 (nodes 8, null, null, 7).
 */

// Adjacency List Level-By-Level Traversal
function bfsLevels(graph, start) {
    const queue = [start];
    const visited = new Set();
    visited.add(start);
    const levels = [];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node);
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        
        // IMPORTANT
        // we have finished processing all nodes at the current level
        levels.push(currentLevel);
    }

    return levels;
}

// Matrix Level-By-Level
function bfsMatrixLevels(matrix, start) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const directions = [
        [0, 1],  // right
        [1, 0],  // down
        [0, -1], // left
        [-1, 0]  // up
    ];
    const queue = [start];
    const visited = new Set();
    visited.add(start.toString());
    const levels = [];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const [x, y] = queue.shift();
            currentLevel.push([x, y]);

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                if (
                    newX >= 0 && newX < rows &&
                    newY >= 0 && newY < cols &&
                    !visited.has([newX, newY].toString())
                ) {
                    visited.add([newX, newY].toString());
                    queue.push([newX, newY]);
                }
            }
        }

        // IMPORTANT
        // we have finished processing all nodes at the current level
        levels.push(currentLevel);
    }

    return levels;
}

/**
 * Given the root of a binary tree, return the maximum width of the binary tree.
 * The maximum width of a tree is the maximum width among all levels.
 * The width of one level is defined as the length between the end-nodes
 * (the leftmost and rightmost non-null nodes), where the null nodes
 * between the end-nodes are also counted into the length calculation.
 * It is guaranteed that the answer will be in the range of a 32-bit signed integer.
 *
 * Input: [1, 3, 4, null, 2, 7, null, 8]
 * Output: 4
 * Explanation: The maximum width exists in the third level with length 4 (nodes 8, null, null, 7).
 */

// Shortest Path in a Graph
function shortestPath(graph, start, end) {
    const queue = [[start, 0]]; // [node, distance]
    const visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        const [node, distance] = queue.shift();

        if (node === end) {
            return distance;
        }

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }

    return -1; // return -1 if there is no path from start to end
}

// Example usage:
const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 4],
    3: [1],
    4: [1, 2]
};

const start = 0;
const end = 4;
const distance = shortestPath(graph, start, end);
console.log(distance); // Output: 2