/**
 * Write a function to determine whether you can travel from the first index to the last index of an integer array nums, 
 * where each number in the array specifies the maximum distance you can jump from that index. 
 * The function should return true if reaching the last index is possible, and false otherwise.
 */

function canJump(nums) {
    let maxReachable = 0; // Initialize the maximum reachable index

    for (let i = 0; i < nums.length; i++) {
        // If the current index is greater than the maximum reachable index, we cannot proceed further
        if (i > maxReachable) {
            return false;
        }
        // Update the maximum reachable index
        maxReachable = Math.max(maxReachable, i + nums[i]);
    }

    return true; // If we can reach or exceed the last index
}

// Example usage:
const jumpArray = [2, 3, 1, 1, 4];
console.log(canJump(jumpArray)); // Output: true (You can jump to the last index)

// Time Complexity: O(n), where n is the length of the nums array.
// Space Complexity: O(1), as we are using only a constant amount of extra space.

// Another Example:
function canJump(nums) {
    let lastPos = nums.length - 1; // Start from the last index

    // Traverse the array backwards
    for (let i = nums.length - 2; i >= 0; i--) {
        // If the current position can reach or exceed lastPos, update lastPos to current position
        if (i + nums[i] >= lastPos) {
            lastPos = i;
        }
    }

    // If we have moved lastPos to the start, we can reach the end
    return lastPos === 0;
}

// Example usage:
const nums = [3, 2, 1, 0, 4];
console.log(canJump(nums)); // Output: false (You cannot jump to the last index)

// Time Complexity: O(n)
// Space Complexity: O(1)