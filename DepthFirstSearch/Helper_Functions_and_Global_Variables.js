/**
 * Given the root node of a binary tree, write a function to find the number of "good nodes" 
 * in the tree. A node X in the tree is considered "good" if in the path from the root to the 
 * node X, there are no nodes with a value greater than X's value.
 */
function countGoodNodes(root) {
    let goodNodeCount = 0;

    function dfs(node, maxSoFar) {
        if (!node) return;

        if (node.value >= maxSoFar) {
            goodNodeCount++;
            maxSoFar = node.value;
        }

        dfs(node.left, maxSoFar);
        dfs(node.right, maxSoFar);
    }

    dfs(root, root.value);
    return goodNodeCount;
}

function goodNodes(root) {
    const nodes = [];
    
    function dfs(root, maxVal) {
        if (root === null) {
            return;
        }
        
        if (root.val >= maxVal) {
            maxVal = root.val;
            nodes.push(root);
        }
        
        dfs(root.left, maxVal);
        dfs(root.right, maxVal);
    }

    dfs(root, -Infinity);
    return nodes;
}
// Time Complexity: O(n) - where n is the number of nodes in the binary tree. We visit each node exactly once.
// Space Complexity: O(h) - where h is the height of the binary tree, due to the call stack during recursion.

// Example usage:
// const tree = {
//     value: 3,
//     left: {
//         value: 1,
//         left: { value: 3, left: null, right: null },
//         right: null
//     },
//     right: {
//         value: 4,
//         left: { value: 1, left: null, right: null },
//         right: { value: 5, left: null, right: null }
//     }
// };

// console.log(countGoodNodes(tree)); // Output: 4
// Explanation: The good nodes are 3 (root), 4, and 5. The node with value 3 (left child of root) is not good because there is a node with value 3 (root) in the path from root to this node.