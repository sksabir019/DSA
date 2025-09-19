/**
 * Given the root of a binary, write a recursive function to determine if it is a valid binary search tree.

* Given the root of a binary tree, determine if it is a valid binary search tree (BST).

* A tree is a BST if the following conditions are met:

* Every node on the left subtree has a value less than the value of the current node.
* Every node on the right subtree has a value greater than the value of the current node.
* The left and right subtrees must also be valid BSTs.
 */
function isValidBST(root, min = -Infinity, max = Infinity) {
    if (root === null) {
        return true;
    }
    if (root.value <= min || root.value >= max) {
        return false;
    }
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max);
}

// Time Complexity: O(n) - where n is the number of nodes in the binary tree. We visit each node exactly once.
// Space Complexity: O(h) - where h is the height of the binary tree, due to the call stack during recursion.

// Example usage:
// const tree = {
//     value: 5,
//     left: {
//         value: 3,
//         left: { value: 1, left: null, right: null },
//         right: { value: 4, left: null, right: null }
//     },
//     right: {
//         value: 7,
//         left: null,
//         right: { value: 8, left: null, right: null }
//     }
// };

// console.log(isValidBST(tree)); // Output: true