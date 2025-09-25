/**
 * Write a function to determine the maximum profit you can obtain from a series of stock prices given in an array prices, 
 * where prices[i] represents the stock price on the ith day. You are allowed to buy and then sell the stock once, 
 * as long as as the sell date is after the buy date. If no profit can be made, the function should return 0.
 */

function maxProfit(prices) {
    let minPrice = Infinity; // Initialize minPrice to a very high value
    let maxProfit = 0; // Initialize maxProfit to 0

    for (let price of prices) {
        // Update minPrice if the current price is lower than the recorded minPrice
        if (price < minPrice) {
            minPrice = price;
        } 
        // Calculate potential profit and update maxProfit if it's higher than the recorded maxProfit
        else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return maxProfit; // Return the maximum profit found
}

// Example usage:
const stockPrices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(stockPrices)); // Output: 5 (Buy on day 2 at price 1 and sell on day 5 at price 6)

// Time Complexity: O(n), where n is the number of days (length of prices array).
// Space Complexity: O(1), as we are using only a constant amount of extra space.

// Another Example:
function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }

    return maxProfit;
}

// Example usage:
const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices)); // Output: 0 (No profit can be made)

// Time Complexity: O(n)
// Space Complexity: O(1)

// Another Example:
function maxProfit(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
}

// Example usage:
const pricesList = [3, 2, 6, 5, 0, 3];
console.log(maxProfit(pricesList)); // Output: 4 (Buy on day 2 at price 2 and sell on day 3 at price 6)

// Time Complexity: O(n)
// Space Complexity: O(1)

// Another Example:
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
            maxProfit = 0;
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }

    return maxProfit;
}

// Example usage:
const priceArray = [1, 2, 3, 4, 5];
console.log(maxProfit(priceArray)); // Output: 4 (Buy on day 1 at price 1 and sell on day 5 at price 5)

// Time Complexity: O(n)
// Space Complexity: O(1)
