/**
 * Given an array of integers, find the next smaller element for each element in the array. 
 * The next smaller element of an element x is the first element to the right of x that is 
 * smaller than x. If there is no such element, then the next smaller element is -1.
 * @param {number[]} nums 
 * @returns {number[]} 
 */

function nextSmallerElement(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = nums[i];
    }
    stack.push(i);
  }

  return result;
}

// Example usage:
const nums = [4, 5, 2, 10, 8, 6, 1];
console.log(nextSmallerElement(nums)); // Output: [2, 2, -1, 8, -1, 1, -1]