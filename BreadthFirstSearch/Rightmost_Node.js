/**
 * Given the root of a binary tree, return the rightmost node at each level of the tree. 
 * The output should be a list containing only the values of those nodes.
 */
function rightmostNodeAtEachLevel(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let rightmostValue;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            rightmostValue = currentNode.value;

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        result.push(rightmostValue);
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

// console.log(rightmostNodeAtEachLevel(root)); // Output: [1, 4, 2, 8]
// The output represents the rightmost node at each level of the binary tree.

class Solution {
    rightmostNode(root) {
        if (!root) {
            return [];
        }

        const nodes = [];
        const queue = [root];

        while (queue.length > 0) {
            const levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();

                // current node is the rightmost node
                if (i === levelSize - 1) {
                    nodes.push(node.val);
                }

                // add nodes as normal to the queue
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
        }

        return nodes;
    }
}