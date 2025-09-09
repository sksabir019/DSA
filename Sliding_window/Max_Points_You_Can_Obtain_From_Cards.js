/**
 * Given an array of integers representing the value of cards, write a function to calculate 
 * the maximum score you can achieve by selecting exactly k cards from either the beginning 
 * or the end of the array.
 */
function maxPoints(cards, k) {
    const n = cards.length;
    let maxScore = 0;

    // Calculate the sum of the first k cards
    let currentScore = 0;
    for (let i = 0; i < k; i++) {
        currentScore += cards[i];
    }
    maxScore = currentScore;

    // Slide the window from the end
    for (let i = 0; i < k; i++) {
        currentScore += cards[n - 1 - i] - cards[k - 1 - i];
        maxScore = Math.max(maxScore, currentScore);
    }

    return maxScore;
}

// Example usage:
const cards = [1, 2, 3, 4, 5];
const k = 2;
const maxPointsObtained = maxPoints(cards, k);
console.log(maxPointsObtained); // Output: 9 (Select cards 4 and 5)
// Time Complexity: O(k) - We calculate the initial sum and then slide the window k times.
// Space Complexity: O(1) - We use a constant amount of space.