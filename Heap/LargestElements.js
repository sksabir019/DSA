/**
 * Given an integer array nums, return the 3 largest elements in the array in any order.
 * Max Heap: A complete binary tree where each node is greater than or equal to its children.
 * The largest element is always at the root of the tree.
 * 
 * The primary operations for a Max-Heap
 */
function findThreeLargestNumbers(nums) {
    const maxHeap = new MaxHeap();
    for (let num of nums) {
        maxHeap.push(num);
    }
    const largestNumbers = [];
    for (let i = 0; i < 3; i++) {
        largestNumbers.push(maxHeap.pop());
    }
    return largestNumbers;
}

// example usage:
const nums = [3, 1, 5, 12, 2, 11];
console.log(findThreeLargestNumbers(nums)); // Output: [12, 11, 5]

