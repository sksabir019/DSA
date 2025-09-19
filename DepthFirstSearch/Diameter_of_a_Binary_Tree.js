/**
 * Given the root of a binary tree, write a recursive function to find the diameter of the tree. 
 * The diameter of a binary tree is the length of the longest path (# of edges) between any two nodes in a tree. 
 * This path may or may not pass through the root.
 */
function diameterOfBinaryTree(root) {
    let maxDiameter = 0;

    function dfs(node) {
        if (!node) return 0;

        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);

        // Update the maximum diameter found so far
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

        // Return the depth of the current node
        return Math.max(leftDepth, rightDepth) + 1;
    }

    dfs(root);
    return maxDiameter;
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
//         left: null,
//         right: { value: 6, left: null, right: null }
//     }
// };

// console.log(diameterOfBinaryTree(tree)); // Output: 4