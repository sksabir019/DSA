/**
 * 
 * Binary Tree Properties: The top node of a binary tree is called the root. Each node in a binary tree
 * can have at most two children, referred to as the left child and right child. A node that does not 
 * have any children is called a leaf node.
 * 
 * Height of a Binary Tree: The height of a binary tree is the number of edges on the longest path between
 * the root node and a leaf node. This is also known as the depth of the tree.
 * 
 * Balanced Binary Tree: A binary tree is balanced if the height of the left and right subtrees of every
 * node differ by at most 1.
 * 
 * Complete Binary Tree: A binary tree is complete if every level, except possibly the last, is completely
 * filled, and all nodes are as far left as possible. Complete binary trees are an important concept
 * in heap data structures. A complete binary tree has a height of O(log(n)), where n is the number
 * of nodes in the tree.
 * 
 * Binary Search Tree: A binary search tree (BST) is a binary tree where: 
 *      All nodes in the left subtree of the root have a value less than the root.
 *      All nodes in the right subtree of the root have a value greater than the root.
 * The same property applies to all subtrees in the tree. This property allows for efficient search,
 *  insertion, and deletion of nodes in the tree.
 * 
 * Depth-First Search (DFS): Depth-First Search is an algorithm used to traverse each node in a binary tree.
 * It starts at the root node and tries to go "down" as far as possible until reaching a leaf node.
 * When it reaches a leaf node, it "backtracks" to the parent node to explore the next path
 * 
 * left node: 2*n + 1
 * right node: 2*n + 2
 * parent node: (n-1)/2
 * 
 * Types of DFS:
 *     In-order Traversal (Left, Root, Right): This traversal visits the left subtree first, then the root node,
 *     Pre-order Traversal (Root, Left, Right): This traversal visits the root node first, then the left subtree,
 *     Post-order Traversal (Left, Right, Root): This traversal visits the left subtree first, then the right subtree,
 *     Level-order Traversal (Breadth-First): This traversal visits all nodes at the present depth level before moving 
 *     on to nodes at the next depth level.
 *     Note: Level-order traversal is not a depth-first search but is often discussed in the context of tree traversals.
 * 
 * Applications of DFS:
 *     Path Finding: DFS can be used to find a path between two nodes in a binary tree.
 *     Topological Sorting: In directed acyclic graphs (DAGs), DFS can be used to perform topological sorting.
 *     Cycle Detection: DFS can help detect cycles in a graph or tree structure.
 *     Solving Puzzles: DFS is often used in algorithms for solving puzzles, such as mazes or Sudoku.
 * 
 * Implementation: DFS can be implemented using recursion or an explicit stack data structure. The recursive
 * approach is often more straightforward and easier to implement, while the iterative approach using a stack
 * can be more efficient in terms of space complexity in certain scenarios.
 * 
 * Time Complexity: O(n) - where n is the number of nodes in the binary tree. In the worst case, we visit each node exactly once.
 * Space Complexity: O(h) - where h is the height of the binary tree. This space is used by the call stack during recursion. In the worst case (for a skewed tree), the height can be n, leading to O(n) space complexity. For a balanced tree, the height is log(n), leading to O(log(n)) space complexity.
 *       
 */

// Recursion and the Call Stack
function dfs(node) {
    // base case
    if (!node) {
        return;
    }

    dfs(node.left); // recursive call
    dfs(node.right); // recursive call

}

// Time Complexity: O(n) - where n is the number of nodes in the binary tree. In the worst case, we visit each node exactly once.
// Space Complexity: O(h) - where h is the height of the binary tree. This space is used by the call stack during recursion. In the worst case (for a skewed tree), the height can be n, leading to O(n) space complexity. For a balanced tree, the height is log(n), leading to O(log(n)) space complexity.

// Iterative Approach using Stack
function dfsIterative(root) {
    if (!root) return;

    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        // Process the node (e.g., print its value)
        console.log(node.value);

        // Push right child first so that left child is processed first
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
}

// Time Complexity: O(n) - where n is the number of nodes in the binary tree. In the worst case, we visit each node exactly once.
// Space Complexity: O(h) - where h is the height of the binary tree. In the worst case (for a skewed tree), the height can be n, leading to O(n) space complexity. For a balanced tree, the height is log(n), leading to O(log

// Given a binary tree, use Depth-First Search to find the sum of all nodes in the tree.
function sumOfNodes(root) {
    if (!root) return 0;

    // Recursive DFS to calculate the sum of nodes
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Time Complexity: O(n) - where n is the number of nodes in the binary tree. We visit each node exactly once.
// Space Complexity: O(h) - where h is the height of the binary tree, due to the call stack during recursion.
 // Example usage:
// const tree = {
//     value: 1,
//     left: {
//         value: 2,
//         left: { value: 4, left: null, right: null },
//         right: { value: 5, left: null, right: null }
//     },
//     right: {
//         value: 3,
//         left: { value: 6, left: null, right: null },
//         right: { value: 7, left: null, right: null }
//     }
// };

// console.log(sumOfNodes(tree)); // Output will be the sum of all node values in the tree
// Output: 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)

function dfs(node) {
    // base case: empty subtree
    if (node === null) {
        return 0;
    }
    
    // base case: leaf node
    if (node.left === null && node.right === null) {
        return node.val;
    }
    
    const left = dfs(node.left);
    const right = dfs(node.right);
    return left + right + node.val;
}

// Find the maximum value in a binary tree
function findMaxValue(node) {
    if (!node) return -Infinity; // Return negative infinity for empty nodes

    const leftMax = findMaxValue(node.left);
    const rightMax = findMaxValue(node.right);

    return Math.max(node.value, leftMax, rightMax);
}

// Time Complexity: O(n) - where n is the number of nodes in the binary tree. We visit each node exactly once.
// Space Complexity: O(h) - where h is the height of the binary tree, due to the call stack during recursion.

// Example usage:
// const tree = {
//     value: 1,
//     left: {
//         value: 2,
//         left: { value: 4, left: null, right: null },
//         right: { value: 5, left: null, right: null }
//     },
//     right: {
//         value: 3,
//         left: { value: 6, left: null, right: null },
//         right: { value: 7, left: null, right: null }
//     }
// };

// console.log(findMaxValue(tree)); // Output will be the maximum value in the tree
// Output: 7

// Find the minimum value in a binary tree
function findMinValue(node) {
    if (!node) return Infinity; // Return positive infinity for empty nodes

    const leftMin = findMinValue(node.left);
    const rightMin = findMinValue(node.right);

    return Math.min(node.value, leftMin, rightMin);
}

// Time Complexity: O(n) - where n is the number of nodes in the binary tree. We visit each node exactly once.
// Space Complexity: O(h) - where h is the height of the binary tree, due to the call stack during recursion.

// Example usage:
// const tree = {
//     value: 1,
//     left: {
//         value: 2,
//         left: { value: 4, left: null, right: null },
//         right: { value: 5, left: null, right: null }
//     },
//     right: {
//         value: 3,
//         left: { value: 6, left: null, right: null },
//         right: { value: 7, left: null, right: null }
//     }
// };

// console.log(findMinValue(tree)); // Output will be the minimum value in the tree
// Output: 1

// Check if a binary tree is balanced
function isBalanced(node) {
    function checkHeight(node) {
        if (!node) return 0;

        const leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1; // Left subtree is not balanced

        const rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1; // Right subtree is not balanced

        // If the height difference is more than 1, the tree is not balanced
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Return the height of the current node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    return checkHeight(node) !== -1;
}

// Time Complexity: O(n) - where n is the number of nodes in the binary tree. We visit each node exactly once.
// Space Complexity: O(h) - where h is the height of the binary tree, due to the call stack during recursion.

// Example usage:
// const tree = {
//     value: 1,
//     left: {
//         value: 2,
//         left: { value: 4, left: null, right: null },
//         right: { value: 5, left: null, right: null }
//     },
//     right: {
//         value: 3,
//         left: { value: 6, left: null, right: null },
//         right: { value: 7, left: null, right: null }
//     }
// };

// console.log(isBalanced(tree)); // Output will be true if the tree is balanced
// Output: true

// Check if a binary tree is a valid Binary Search Tree (BST)
function isValidBST(node, min = null, max = null) {
    if (!node) return true;

    // Check the current node's value against the min and max constraints
    if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
        return false;
    }

    // Recursively check the left and right subtrees with updated constraints
    return isValidBST(node.left, min, node.value) && isValidBST(node.right, node.value, max);
}

// Time Complexity: O(n) - where n is the number of nodes in the binary tree. We visit each node exactly once.
// Space Complexity: O(h) - where h is the height of the binary tree, due to the call stack during recursion.

// Example usage:
// const tree = {
//     value: 4,
//     left: {
//         value: 2,
//         left: { value: 1, left: null, right: null },
//         right: { value: 3, left: null, right: null }
//     },
//     right: {
//         value: 6,
//         left: { value: 5, left: null, right: null },
//         right: { value: 7, left: null, right: null }
//     }
// };

// console.log(isValidBST(tree)); // Output will be true if the tree is a valid BST
// Output: true

// Find the path from root to a given node in a binary tree
function findPathToNode(root, target) {
    const path = [];

    function dfs(node) {
        if (!node) return false;

        // Add the current node to the path
        path.push(node.value);

        // Check if the current node is the target
        if (node.value === target) {
            return true;
        }

        // Recursively search in left and right subtrees
        if (dfs(node.left) || dfs(node.right)) {
            return true;
        }

        // If not found, remove the current node from the path
        path.pop();
        return false;
    }

    dfs(root);
    return path.length > 0 ? path : null; // Return the path or null if not found
}

// Time Complexity: O(n) - where n is the number of nodes in the binary tree. We may visit each node once.
// Space Complexity: O(h)

