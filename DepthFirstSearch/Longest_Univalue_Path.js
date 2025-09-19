/**
 * Given the root of the binary tree, find the longest path where all nodes along the path have the same value. 
 * This path doesn't have to include the root node. Return the number of edges on that path, not the number of nodes.
 */
function longestUnivaluePath(root) {
    let maxPath = 0;

    function dfs(node) {
        if (!node) return 0;

        const leftLength = dfs(node.left);
        const rightLength = dfs(node.right);

        // Check if the left child has the same value
        const leftPath = node.left && node.left.value === node.value ? leftLength + 1 : 0;
        // Check if the right child has the same value
        const rightPath = node.right && node.right.value === node.value ? rightLength + 1 : 0;

        // Update the maximum path found so far
        maxPath = Math.max(maxPath, leftPath + rightPath);

        // Return the longest path extending from the current node
        return Math.max(leftPath, rightPath);
    }

    dfs(root);
    return maxPath;
}

// Time Complexity: O(n) - where n is the number of nodes in the binary tree. We visit each node exactly once.
// Space Complexity: O(h) - where h is the height of the binary tree, due to the call stack during recursion.

// Example usage:
// const tree = {
//     value: 5,
//     left: {
//         value: 4,
//         left: { value: 1, left: null, right: null },
//         right: { value: 1, left: null, right: null }
//     },
//     right: {
//         value: 5,
//         left: { value: 5, left: null, right: null },
//         right: { value: 5, left: null, right: null }
//     }
// };

console.log(longestUnivaluePath(tree)); // Output: 2