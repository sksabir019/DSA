/**
 * If at any point during our search, we encounter a node that we've already visited and is not the parent of the 
 * current node, then we've found a cycle. We return true to indicate that the graph is not a valid tree, 
 * which causes the depth-first search to terminate early, until the main function returns false.
 */
function hasCycle(adjList) {
  if (!adjList || Object.keys(adjList).length === 0) {
    return false;
  }
  const visited = new Set();
  let foundCycle = false;

  function dfsHelper(node, parent) {
    if (visited.has(node)) {
      foundCycle = true;
      return;
    }

    visited.add(node);
    for (const neighbor of adjList[node] || []) {
      if (neighbor !== parent) { // Avoid counting the immediate parent as a cycle
        dfsHelper(neighbor, node);
      }
    }
  }

  for (const node in adjList) {
    if (!visited.has(node)) {
      dfsHelper(node, null);
      if (foundCycle) break; // Early exit if a cycle is found
    }
  }

  return foundCycle;
}

// Example usage:
const graphWithCycle = {
  1: [2],
  2: [1, 3],
  3: [2, 4],
  4: [3, 1] // This edge creates a cycle
};

const graphWithoutCycle = {
  1: [2],
  2: [1, 3],
  3: [2, 4],
  4: [3]
};

console.log(hasCycle(graphWithCycle)); // Output: true
console.log(hasCycle(graphWithoutCycle)); // Output: false