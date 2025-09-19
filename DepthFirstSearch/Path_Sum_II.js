/**
 * Given the root of a binary tree and an integer target, write a recursive function to 
 * find all root-to-leaf paths where the sum of all the values along the path sum to target.
 */
function pathSum(root, target) {
    const result = [];
    findPaths(root, target, [], result);
    return result;
}

function findPaths(node, target, currentPath, result) {
    if (!node) return;

    currentPath.push(node.value);
    target -= node.value;

    // If it's a leaf node and the target is met, add the path to the result
    if (!node.left && !node.right && target === 0) {
        result.push([...currentPath]);
    }

    // Continue the search in the left and right subtrees
    findPaths(node.left, target, currentPath, result);
    findPaths(node.right, target, currentPath, result);

    // Backtrack
    currentPath.pop();
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

// console.log(pathSum(tree, 22)); // Output: [[5, 4, 11, 2], [5, 8, 4, 5]]