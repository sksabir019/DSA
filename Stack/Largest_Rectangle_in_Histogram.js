/**
 * Given an integer array heights representing the heights of histogram bars,
 * write a function to find the largest rectangular area possible in a histogram,
 * where each bar's width is 1.
 */

//Brute Force Approach
function largestRectangleArea(heights) {
  let maxArea = 0;
  const n = heights.length;

  for (let i = 0; i < n; i++) {
    let left = i - 1;
    while (left >= 0 && heights[left] >= heights[i]) {
      left--;
    }

    let right = i + 1;
    while (right < n && heights[right] >= heights[i]) {
      right++;
    }

    maxArea = Math.max(maxArea, (right - left - 1) * heights[i]);
  }

  return maxArea;
}

// Example usage:
const heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights)); // Output: 10

//Optimized Approach using Stack
function largestRectangleAreaOptimized(heights) {
  const stack = [];
  let maxArea = 0;
  heights.push(0); // Add a sentinel value to pop all remaining bars

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const h = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * width);
    }
    stack.push(i);
  }

  return maxArea;
}

// Example usage:
console.log(largestRectangleAreaOptimized(heights)); // Output: 10

// Other way:

function largestRectangleArea(heights) {
  let stack = [];
  let maxArea = 0;
  let i = 0;
  while (i < heights.length) {
    if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
      stack.push(i);
      i++;
    } else {
      let top = stack.pop();
      let right = i - 1;
      let left = stack.length === 0 ? -1 : stack[stack.length - 1];
      let area = heights[top] * (right - left);
      maxArea = Math.max(maxArea, area);
    }
  }

  while (stack.length > 0) {
    let top = stack.pop();
    let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
    let area = heights[top] * width;
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
}
// Example usage:
const heights2 = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights2)); // Output: 10
