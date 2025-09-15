/**
 * Given an integer array temps representing daily temperatures, write a function to calculate 
 * the number of days one has to wait for a warmer temperature after each given day. 
 * The function should return an array answer where answer[i] represents the wait time 
 * for a warmer day after the ith day. If no warmer day is expected in the future, set answer[i] to 0.
 */
function dailyTemperatures(temps) {
  const n = temps.length;
  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
      const index = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i);
  }

  return answer;
}

// Example usage:
const temps = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temps)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]