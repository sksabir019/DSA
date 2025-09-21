/**
 * Given a reference to a variable node which is part of an undirected, connected graph, write a function 
 * to return a copy of the graph as an adjacency list in dictionary form. The keys of the adjacency list 
 * are the values of the nodes, and the values are the neighbors of the nodes.
 */
function copyGraph(node) {
    if (!node) return null;

    const visited = new Map();

    function dfs(current) {
        if (visited.has(current)) return visited.get(current);

        const clone = { value: current.value, neighbors: [] };
        visited.set(current, clone);

        for (const neighbor of current.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }

    return dfs(node);
}

// Example usage:
const graph = {
    value: 1,
    neighbors: [
        { value: 2, neighbors: [] },
        { value: 3, neighbors: [] }
    ]
};
graph.neighbors[0].neighbors.push(graph); // Connect node 2 back to node 1
graph.neighbors[1].neighbors.push(graph); // Connect node 3 back to node 1

const copiedGraph = copyGraph(graph);
console.log(copiedGraph);
// Output will be a deep copy of the original graph structure

/**
 * Given the number of nodes n and a list of edges where each edge is represented as a pair [u, v] 
 * indicating an undirected edge between nodes u and v, write a function to build the adjacency list representation 
 * of the graph as a dictionary.
 */
