/**
 * Given the root of a binary tree and an integer target, write a recursive 
 * function to determine if the tree has a root-to-leaf path where all the 
 * values along that path sum to the target.
 */
function hasPathSum(root, target) {
  if (root === null) {
    return target === 0;
  }
  const newTarget = target - root.value;
  return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget);
}

class Solution {
    pathSum(root, target) {
        if (root === null) {
            return false;
        }
       
        // if we reach a leaf node, check if the target is equal to the leaf node's value
        if (!root.left && !root.right) {
            return target === root.val;
        }

        target -= root.val;
        
        // check if there's a path from the current node to a leaf that sums to target
        return this.pathSum(root.left, target) || this.pathSum(root.right, target);
    }
}

// Time Complexity: O(n) - where n is the number of nodes in the binary tree. We visit each node exactly once.
// Space Complexity: O(h) - where h is the height of the binary tree, due to the call stack during recursion.

// Example usage:
// const tree = {
//     value: 5,
//     left: {
//         value: 4,
//         left: { value: 11, left: { value: 7, left: null, right: null }, right: { value: 2, left: null, right: null } },
//         right: null
//     },
//     right: {
//         value: 8,
//         left: { value: 13, left: null, right: null },
//         right: { value: 4, left: null, right: { value: 1, left: null, right: null } }
//     }
// };

// console.log(hasPathSum(tree, 22)); // Output: true
// console.log(hasPathSum(tree, 26)); // Output: true
// console.log(hasPathSum(tree, 18)); // Output: false
