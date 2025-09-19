/**
 * Given the root node of a binary tree, write a recursive function to return the sum of each node's tilt.

 * The tilt of a node is the absolute difference between the sum of its left subtree and the sum of its 
right subtree. If a node has an empty left or subtree, the sum of the empty subtree is 0.
 */
function findTilt(root) {
    let totalTilt = 0;

    function dfs(node) {
        if (!node) return 0;

        const leftSum = dfs(node.left);
        const rightSum = dfs(node.right);

        // Calculate the tilt for the current node
        const tilt = Math.abs(leftSum - rightSum);
        totalTilt += tilt;

        // Return the sum of values for the current subtree
        return leftSum + rightSum + node.value;
    }

    dfs(root);
    return totalTilt;
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

// console.log(findTilt(tree)); // Output: 11