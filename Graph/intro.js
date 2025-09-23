/**
 * When working with graphs, make sure you first practice using Depth-First Search (DFS) and 
 * Breadth-First Search (BFS) to solve coding interview questions, as they are the most common 
 * graph algorithms you'll encounter.
 * This section covers Topological Sort, an important but less common graph algorithm.
 */

// Calculate Indegrees:
function calculateIndegrees(graph) {
    const indegrees = {};
    for (let node in graph) {
        indegrees[node] = 0; // Initialize indegree of each node to 0
    }
    for (let node in graph) {
        for (let neighbor of graph[node]) {
            indegrees[neighbor]++; // Increment indegree for each neighbor
        }
    }
    return indegrees;
}

// example usage of calculateIndegrees:
const exampleGraph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D'],
    D: ['E'],
    E: []
};

console.log("Indegrees:", calculateIndegrees(exampleGraph)); // Output: { A: 0, B: 1, C: 1, D: 2, E: 1 }

function indegree(n, edges) {
    const indegree = new Array(n).fill(0);
    for (const [u, v] of edges) {
        indegree[v] += 1;
    }
    return indegree;
}
// example usage of indegree function:
const n = 5;
const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]];
console.log("Indegree Array:", indegree(n, edges)); // Output: [0, 1, 1, 2, 1]


// Topological Sort using Kahn's Algorithm:
function topologicalSort(graph) {
    const indegrees = calculateIndegrees(graph);
    const queue = [];
    const sortedOrder = [];

    // Enqueue nodes with indegree of 0
    for (let node in indegrees) {
        if (indegrees[node] === 0) {
            queue.push(node);
        }
    }

    while (queue.length > 0) {
        const currentNode = queue.shift();
        sortedOrder.push(currentNode);

        // Decrease the indegree of neighboring nodes
        for (let neighbor of graph[currentNode]) {
            indegrees[neighbor]--;
            if (indegrees[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // If sortedOrder doesn't contain all nodes, there was a cycle
    if (sortedOrder.length !== Object.keys(graph).length) {
        throw new Error("Graph has at least one cycle, topological sort not possible.");
    }

    return sortedOrder;
}

// Example usage:
const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D'],
    D: ['E'],
    E: []
};

try {
    const sorted = topologicalSort(graph);
    console.log("Topological Sort Order:", sorted);
} catch (error) {
    console.error(error.message);
}

function topologicalSort(adjList, n) {
    // calculate indegree of each node
    const indegree = new Array(n).fill(0);
    for (const u in adjList) {
        for (const v of adjList[u]) {
            indegree[v]++;
        }
    }

    // enqueue nodes with indegree 0
    const queue = [];
    for (let u = 0; u < n; u++) {
        if (indegree[u] === 0) {
            queue.push(u);
        }
    }

    const order = [];
    while (queue.length > 0) {
        const u = queue.shift();
        order.push(u);
        
        for (const v of adjList[u] || []) {
            indegree[v]--;
            if (indegree[v] === 0) {
                queue.push(v);
            }
        }
    }

    return order.length === n ? order : [];
}


/**
 * When working with graphs, make sure you first practice using Depth-First Search (DFS) and 
 * Breadth-First Search (BFS) to solve coding interview questions, as they are the most common 
 * graph algorithms you'll encounter.
 * This section covers Topological Sort, an important but less common graph algorithm.
 */

// Adjacency List:
function createAdjacencyList(edges) {
    const graph = {};
    for (let [u, v] of edges) {
        if (!graph[u]) graph[u] = [];
        if (!graph[v]) graph[v] = []; // Ensure all nodes appear in the graph
        graph[u].push(v);
        graph[v].push(u); // For undirected graph; omit this line for directed graph
    }
    return graph;
}

// Example usage of createAdjacencyList:
const edges1 = [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['C', 'D'],
    ['D', 'E']
];

console.log("Adjacency List:", createAdjacencyList(edges1));
/*
Output:
Adjacency List: {
  A: [ 'B', 'C' ],
  B: [ 'A', 'D' ],
  C: [ 'A', 'D' ],
  D: [ 'B', 'C', 'E' ],
  E: [ 'D' ]
}
*/

// Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
// Space Complexity: O(V + E) for storing the adjacency list.