/**
 * You have to take a total of numCourses courses, which are labeled from 0 to numCourses - 1. 
 * You are given a list of prerequisites pairs, where prerequisites[i] = [a, b] indicates 
 * that you must complete course b before course a. 
 * Given the total number of courses and a list of prerequisite pairs, 
 * write a function to determine if it is possible to finish all courses.
 */
function canFinish(numCourses, prerequisites) {
    const graph = createAdjacencyList(prerequisites);
    const indegrees = calculateIndegrees(graph);
    const queue = [];
    let count = 0;

    // Enqueue nodes with indegree of 0
    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        const current = queue.shift();
        count++;

        // Decrease the indegree of neighboring nodes
        for (let neighbor of graph[current] || []) {
            indegrees[neighbor]--;
            if (indegrees[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return count === numCourses;
}

// Helper function to create an adjacency list from prerequisites
function createAdjacencyList(prerequisites) {
    const graph = {};
    for (let [course, prereq] of prerequisites) {
        if (!graph[prereq]) {
            graph[prereq] = [];
        }
        graph[prereq].push(course);
    }
    return graph;
}

// Helper function to calculate indegrees
function calculateIndegrees(graph) {
    const indegrees = {};
    for (let node in graph) {
        if (!(node in indegrees)) {
            indegrees[node] = 0; // Initialize indegree of each node to 0
        }
        for (let neighbor of graph[node]) {
            if (!(neighbor in indegrees)) {
                indegrees[neighbor] = 0; // Initialize indegree of neighbor if not present
            }
            indegrees[neighbor]++; // Increment indegree for each neighbor
        }
    }
    return indegrees;
}

// Example usage:
const numCourses = 4;
const prerequisites = [[1, 0], [2, 1], [3, 2]];
console.log(canFinish(numCourses, prerequisites)); // Output: true

const numCourses2 = 2;
const prerequisites2 = [[1, 0], [0, 1]];
console.log(canFinish(numCourses2, prerequisites2)); // Output: false

// Other way:
class Solution {
    canFinish(numCourses, prerequisites) {
        const graph = new Map();
        const inDegree = new Array(numCourses).fill(0);

        for (const [dest, src] of prerequisites) {
            if (!graph.has(src)) {
                graph.set(src, []);
            }
            graph.get(src).push(dest);
            inDegree[dest]++;
        }

        const queue = [];
        for (let i = 0; i < numCourses; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }

        let count = 0;
        while (queue.length > 0) {
            const course = queue.shift();
            count++;
            
            for (const neighbor of graph.get(course) || []) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        return count === numCourses;
    }
}

// Time Complexity: O(V + E) where V is the number of courses and E is the number of prerequisites.
// Space Complexity: O(V + E) for storing the graph and indegree array.