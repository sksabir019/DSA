/**
 * Given the root of a binary tree, return the zigzag level-order traversal of its nodes' values.
 * The output should be a list of lists containing the values of the nodes at each level. 
 * The first list should contain the value of the root, the second list should contain the 
 * values of the nodes at the second level from right to left, the third list should contain 
 * the values of the third level from left to right, and so on.
 * Input: [1, 3, 4, null, 2, 7, null, 8]
 * Output: [[1], [4, 3], [2, 7], [8]]
 */
function zigzagLevelOrder(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];
    let leftToRight = true; // Flag to indicate the direction of traversal

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            // Add the current node's value to the current level based on the traversal direction
            if (leftToRight) {
                currentLevel.push(currentNode.value);
            } else {
                currentLevel.unshift(currentNode.value);
            }

            // Enqueue left child if it exists
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            // Enqueue right child if it exists
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        result.push(currentLevel);
        leftToRight = !leftToRight; // Toggle the direction for the next level
    }

    return result;
}

// Example usage:
// Assuming a binary tree node structure like this:
// function TreeNode(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
// }
// const root = new TreeNode(1);
// root.left = new TreeNode(3);
// root.right = new TreeNode(4);
// root.left.right = new TreeNode(2);
// root.right.left = new TreeNode(7);
// root.left.right.left = new TreeNode(8);

// console.log(zigzagLevelOrder(root)); // Output: [[1], [4, 3], [2, 7], [8]]
// The output represents the zigzag level-order traversal of the binary tree.

