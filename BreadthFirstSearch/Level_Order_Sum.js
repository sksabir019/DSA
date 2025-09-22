/**
 * Given the root of a binary tree, return the sum of the nodes at each level. 
 * The output should be a list containing the sum of the nodes at each level.
 * Input: [1, 3, 4, null, 2, 7, null, 8]
 * Output:  [1, 7, 9, 8]
 */

function levelOrderSum(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            levelSum += currentNode.value;

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        result.push(levelSum);
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

// console.log(levelOrderSum(root)); // Output: [1, 7, 11, 8]
// The output represents the sum of nodes at each level of the binary tree.

