/**
 * The classic Binary Search algorithm is used to search for a target value 
 * in a sorted array.
 * Given a sorted array of integers nums and a target value target, write a 
 * function to determine if target is in the array. If target is present in 
 * the array, return its index. Otherwise, return -1.
 * 
 * Binary Search works by repeatedly cutting the relevant search space of the 
 * array in half, until it either finds the target or the search space is empty, 
 * at which point it concludes that the target is not in the array. The halving 
 * is where the algorithm gets its O(log n) time complexity.
 */

function searchTarget(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Example usage
const nums = [1, 2, 3, 4, 5];
console.log(searchTarget(nums, 3)); // 2
console.log(searchTarget(nums, 6)); // -1