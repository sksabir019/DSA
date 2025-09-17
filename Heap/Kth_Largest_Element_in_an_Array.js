/**
 * Write a function that takes an array of unsorted integers nums and an integer k, 
 * and returns the kth largest element in the array. This function should run 
 * in O(n log k) time, where n is the length of the array.
 */

function findKthLargest(nums, k) {
    if (nums.length === 0) {
        return null;
    }
    const maxHeap = new MaxHeap();
    for (let num of nums) {
        maxHeap.push(num);
    }
    let kthLargest;
    for (let i = 0; i < k; i++) {
        kthLargest = maxHeap.pop();
    }
    return kthLargest;
}

// example usage:
const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k)); // Output: 5

// Other Implementation using Min-Heap of size k
function kthLargest(nums, k) {
    if (nums.length === 0) {
        return null;
    }
    
    const heap = [];
    for (const num of nums) {
        if (heap.length < k) {
            heapPush(heap, num);
        } else if (num > heap[0]) {
            heapPushPop(heap, num);
        }
    }
    
    return heap[0];
}