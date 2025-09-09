/**
 * Given a sorted array of integers nums, determine if there exists a pair of numbers that 
 * sum to a given target.
 * @param {number[]} numbers - The array of numbers to search.
 * @param {number} target - The target sum.
 * @returns {number[] | null} - The indices of the two numbers that add up to the target, 
 * or null if not found.
 */
function twoSum(numbers, target) {
  const numDict = {};
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (numDict[complement] !== undefined) {
        // return [complement, numbers[i]]; // to return the actual numbers
      return [numDict[complement], i]; // to return the indices of the numbers
    }
    // numDict[numbers[i]] = numbers[i]; // to store the actual numbers
    numDict[numbers[i]] = i; // to store the indices of the numbers
  }
  return null;
}

// Example usage:
const numbers = [2, 7, 11, 15, 10];
const target = 9;
const result = twoSum(numbers, target);
console.log(result); // Output: [0, 1] because numbers[0] + numbers[1] = 2 + 7 = 9
// Time Complexity: O(n) - We traverse the list containing n elements only once.
// Space Complexity: O(n) - The space required by the hash map to store the elements.

// another approach using two pointers (only works if the array is sorted)
function twoSumSorted(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}
// Example usage for sorted array:
const sortedNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
const sortedTarget = 10;
const sortedResult = twoSumSorted(sortedNumbers, sortedTarget);
console.log(sortedResult); // Output: [1, 7] because numbers[1] + numbers[7] = 3 + 7 = 10

// Time Complexity: O(n) - We traverse the list containing n elements only once.
// Space Complexity: O(1) - We use only constant space.
