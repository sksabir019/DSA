/**
 * Given the root of a binary tree, write a function to find its maximum width. 
 * Each level of the binary tree has a width, which is the number of nodes between the leftmost 
 * and rightmost nodes at that level, including the null nodes between them. 
 * The function should return the maximum width of the binary tree.
 */
function maxWidthOfBinaryTree(root) {
    if (!root) return 0;

    let maxWidth = 0;
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let leftmost = null;
        let rightmost = null;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            // Find the leftmost and rightmost non-null nodes
            if (currentNode) {
                if (leftmost === null) leftmost = i;
                rightmost = i;
                // Enqueue children
                queue.push(currentNode.left);
                queue.push(currentNode.right);
            } else {
                // If current node is null, enqueue nulls for children
                queue.push(null);
                queue.push(null);
            }
        }

        // Update maxWidth if the current level is wider
        if (leftmost !== null && rightmost !== null) {
            maxWidth = Math.max(maxWidth, rightmost - leftmost + 1);
        }
    }

    return maxWidth;
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

// console.log(maxWidthOfBinaryTree(root)); // Output: 4
// The output represents the maximum width of the binary tree.

class Solution {
    maxWidth(root) {
        if (!root) {
            return 0;
        }

        // enqueue the root node with position 0
        const queue = [[root, 0]];
        let maxWidth = 0;

        while (queue.length > 0) {
            const levelSize = queue.length;

            // leftPos is the position of the leftmost node at the current level
            const leftPos = queue[0][1];
            let rightPos = -1;

            for (let i = 0; i < levelSize; i++) {
                const [node, pos] = queue.shift();

                // update rightPos to the position of the rightmost node
                // when we reach the last node in the level
                if (i === levelSize - 1) {
                    rightPos = pos;
                }

                // add the children to the queue with their positions
                if (node.left) {
                    queue.push([node.left, 2 * pos]);
                }
                if (node.right) {
                    queue.push([node.right, 2 * pos + 1]);
                }
            }
            
            // rightPos - leftPos + 1 is the width of the current level 
            maxWidth = Math.max(maxWidth, rightPos - leftPos + 1);
        }

        return maxWidth;
    }
}