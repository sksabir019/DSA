/**
 * Given an integer n which represents the number of nodes in a graph, and a list of edges edges, 
 * where edges[i] = [ui, vi] represents a bidirectional edge between nodes ui and vi, 
 * write a function to return the adjacency list representation of the graph as a dictionary. 
 * The keys of the dictionary should be the nodes, and the values should be a list of the 
 * nodes each node is connected to.
 */
function buildAdjacencyList(n, edges) {
    const adjacencyList = {};
    for (let i = 1; i <= n; i++) {
        adjacencyList[i] = [];
    }
    for (const [u, v] of edges) {
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
    }
    return adjacencyList;
}

// Example usage:
const n = 5;
const edges = [[1, 2], [1, 3], [2, 4], [3, 5]];
const adjacencyList = buildAdjacencyList(n, edges);
console.log(adjacencyList);
// Output:
// {
//   '1': [2, 3],
//   '2': [1, 4],
//   '3': [1, 5],
//   '4': [2],
//   '5': [3]
// }

// DFS Traversal using Adjacency List
function dfs(adjacencyList, start, visited = new Set()) {
    if (visited.has(start)) return;
    visited.add(start);
    console.log(start); // Process the node (e.g., print it)
    for (const neighbor of adjacencyList[start]) {
        dfs(adjacencyList, neighbor, visited);
    }
}

// Example DFS usage:
console.log("DFS Traversal starting from node 1:");
dfs(adjacencyList, 1); // Output: 1 2 4 3 5 (order may vary)


function dfs(adjList) {
  if (!adjList || Object.keys(adjList).length === 0) {
    return;
  }
  const visited = new Set();

  function dfsHelper(node) {
    if (visited.has(node)) {
      return;
    }

    visited.add(node);
    for (const neighbor of adjList[node] || []) {
      dfsHelper(neighbor);
    }
    return;
  }

  // Handle disconnected components
  for (const node in adjList) {
    if (!visited.has(parseInt(node))) {
      dfsHelper(parseInt(node));
    }
  }
}