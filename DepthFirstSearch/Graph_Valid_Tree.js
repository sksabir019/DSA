/**
 * 
You are given an integer n and a list of undirected edges where each entry in the list is a pair of 
integers representing an edge between nodes 1 and n. You have to write a function to check whether 
these edges make up a valid tree. A valid tree is defined as a connected graph with no cycles.
There will be no duplicate edges in the edges list. (i.e. [0, 1] and [1, 0] will not appear together in the list).
 */
function validTree(n, edges) {
    if (edges.length !== n - 1) return false; // A valid tree must have exactly n-1 edges

    const adjacencyList = {};
    for (let i = 0; i < n; i++) {
        adjacencyList[i] = [];
    }
    for (const [u, v] of edges) {
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
    }

    const visited = new Set();

    function dfs(node, parent) {
        visited.add(node);
        for (const neighbor of adjacencyList[node]) {
            if (!visited.has(neighbor)) {
                if (!dfs(neighbor, node)) return false;
            } else if (neighbor !== parent) {
                return false; // Found a cycle
            }
        }
        return true;
    }

    if (!dfs(0, -1)) return false; // Start DFS from node 0

    return visited.size === n; // Check if all nodes are visited (connected)
}   

// Example usage:
const n = 5;
const edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
console.log(validTree(n, edges)); // Output: true

const n2 = 5;
const edges2 = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]];
console.log(validTree(n2, edges2)); // Output: false (contains a cycle)
