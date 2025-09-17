/**
 * You are given a sorted array that has been rotated at an unknown pivot point, 
 * along with a target value. Develop an algorithm to locate the index of the 
 * target value in the array. If the target is not present, return -1. 
 * The algorithm should have a time complexity of O(log n).
 */
function searchInRotatedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        // If the left side is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // If the right side is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

// Example usage
const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(searchInRotatedArray(rotatedArray, target)); // Output: 4