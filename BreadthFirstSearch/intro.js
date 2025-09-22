/**
 * BFS is a level-by-level traversal algorithm. It starts at the root node of the binary tree and visits 
 * all nodes at the current level before moving to the next level of the tree.
 * BFS uses a queue to keep track of the nodes it needs to visit, and follows these steps:
 * Start at the root node and add it to the queue.
 * While the queue is not empty, remove the node at the front of the queue and visit it.
 * Add the children of the node to the back queue.
 * Repeat steps 2 and 3 until the queue is empty, which means you've processed all nodes in the tree.
 */

function bfs(root) {
    if (!root) return [];

    const queue = [root]; // Initialize a queue with the root node
    const result = []; // Array to store the order of visited nodes

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Dequeue the front node
        result.push(currentNode.value); // Process the current node

        // Enqueue left child if it exists
        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        // Enqueue right child if it exists
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    return result; // Return the array of visited nodes in BFS order
}

// Example usage:
// Assuming a binary tree node structure like this:
// function TreeNode(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
// }
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);

// console.log(bfs(root)); // Output: [1, 2, 3, 4]
// The output represents the order in which nodes are visited in BFS traversal.

// Given a binary tree, return the level-order traversal of its nodes' values. (i.e., from left to right, level by level).
// For example: [[4], [2, 7], [1, 3, 6, 9]]]

function levelOrder(root) {
    if (!root) return [];

    const queue = [root]; // Initialize a queue with the root node
    const result = []; // Array to store the levels of visited nodes

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        const currentLevel = []; // Array to store nodes at the current level

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift(); // Dequeue the front node
            currentLevel.push(currentNode.value); // Process the current node

            // Enqueue left child if it exists
            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            // Enqueue right child if it exists
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        result.push(currentLevel); // Add the current level to the result
    }

    return result; // Return the array of levels in BFS order
}

// Example usage:
// const root = new TreeNode(4);
// root.left = new TreeNode(2);
// root.right = new TreeNode(7);
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(3);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(9);

// console.log(levelOrder(root)); // Output: [[4], [2, 7], [1, 3, 6, 9]]]

// calculate the number of nodes at each level 
function countNodesPerLevel(root) {
    if (!root) return [];

    const queue = [root]; // Initialize a queue with the root node
    const result = []; // Array to store the count of nodes at each level

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        result.push(levelSize); // Store the count of nodes at the current level

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift(); // Dequeue the front node

            // Enqueue left child if it exists
            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            // Enqueue right child if it exists
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }

    return result; // Return the array of node counts per level
}

// Example usage:
// const root = new TreeNode(4);
// root.left = new TreeNode(2);
// root.right = new TreeNode(7);
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(3);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(9);

countNodesPerLevel(root); // Output: [1, 2, 4]

