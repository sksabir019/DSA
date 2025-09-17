/**
 * Given a sorted array nums, a target value target, and an integer k, 
 * find the k closest elements to target in the array, where "closest" 
 * is the absolute difference between each element and target. 
 * Return these elements in array, sorted in ascending order.
 */
function findKClosestElements(nums, target, k) {
    if (!nums || nums.length === 0 || k <= 0) {
        return [];
    }

    const minHeap = new MinHeap();

    for (const num of nums) {
        const diff = Math.abs(num - target);
        minHeap.push({ num, diff });

        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }

    const result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.pop().num);
    }

    return result.sort((a, b) => a - b);
}

// example usage:
const nums = [1, 2, 3, 4, 5];
const target = 3;
const k = 2;
console.log(findKClosestElements(nums, target, k)); // Output: [2, 3]

// Other way:
function kClosest(nums, k, target) {
    const heap = [];
    for (const num of nums) {
        const distance = Math.abs(num - target);
        if (heap.length < k) {
            heapPush(heap, [-distance, num]);
        } else if (distance < -heap[0][0]) {
            heapPushPop(heap, [-distance, num]);
        }
    }
    
    const distances = heap.map(pair => pair[1]);
    distances.sort((a, b) => a - b);
    return distances;
}