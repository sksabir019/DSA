/**
 * Given the root of a binary tree, write a recursive function to find its maximum depth, 
 * where maximum depth is defined as the number of nodes along the longest path from 
 * the root node down to a leaf node.
 */
function maxDepth(root) {
  if (root === null) {
    return 0;
  }
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
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

// console.log(maxDepth(tree)); // Output will be the maximum depth of the tree
// Output: 3 (The longest path is 1 -> 2 -> 4 or 1 -> 2 -> 5 or 1 -> 3 -> 6 or 1 -> 3 -> 7)

// [4, 2, 7, 1, null, 6, 9, null, 8, null, null, null, null, null, null]
