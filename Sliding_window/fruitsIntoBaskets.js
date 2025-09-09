/**
 * Write a function to calculate the maximum number of fruits you can collect from an integer
 * array fruits, where each element represents a type of fruit. You can start collecting fruits 
 * from any position in the array, but you must stop once you encounter a third distinct type of
 * fruit. The goal is to find the longest subarray where at most two different types of fruits 
 * are collected.
 */

function fruitIntoBaskets(fruits) {
    let start = 0;
    let basket = {};
    let maxFruit = 0;

    for (let end = 0; end < fruits.length; end++) {
        basket[fruits[end]] = (basket[fruits[end]] || 0) + 1;

        while (Object.keys(basket).length > 2) {
            basket[fruits[start]]--;
            if (basket[fruits[start]] === 0) {
                delete basket[fruits[start]];
            }
            start++;
        }

        maxFruit = Math.max(maxFruit, end - start + 1);
    }

    return maxFruit;
}

// Example usage:

const fruits = [1, 2, 1, 2, 3, 2, 2, 1];
const maxCollectedFruits = fruitIntoBaskets(fruits);
console.log(maxCollectedFruits); // Output: 5 (The longest subarray is [2, 1, 2, 2, 1])
// Time Complexity: O(n) - We traverse the array once with two pointers.
// Space Complexity: O(1) - The fruitCount object will hold at most two types of fruits.


// Template for sliding window:
function variableLengthSlidingWindow(nums) {
    let state = {}; // choose appropriate data structure
    let start = 0;
    let max_ = 0;

    for (let end = 0; end < nums.length; end++) {
        // extend window
        // add nums[end] to state in O(1) in time

        while (/* state is not valid */) {
            // repeatedly contract window until it is valid again
            // remove nums[start] from state in O(1) in time
            start++;
        }

        // INVARIANT: state of current window is valid here.
        max_ = Math.max(max_, end - start + 1);
    }

    return max_;
}