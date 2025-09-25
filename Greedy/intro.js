/**
 * Your task is to assign cookies to children such that as many children as possible are satisfied. 
 * A child is satisfied if the cookie they receive is equal to or greater than their greed factor. 
 * Each child can receive at most one cookie, and each cookie can be given to only one child. 
 * Write a function to return the maximum number of children that can be satisfied.
 */

function findContentChildren(g, s) {
    // Sort the greed factors and cookie sizes in ascending order
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let childIndex = 0; // Pointer for children
    let cookieIndex = 0; // Pointer for cookies

    // Iterate through both arrays until we reach the end of either
    while (childIndex < g.length && cookieIndex < s.length) {
        if (s[cookieIndex] >= g[childIndex]) {
            // If the current cookie can satisfy the current child
            childIndex++; // Move to the next child
        }
        // Always move to the next cookie
        cookieIndex++;
    }

    // The number of satisfied children is equal to the number of children we were able to satisfy
    return childIndex;
}

// Example usage:
const greedFactors = [1, 2, 3];
const cookieSizes = [1, 1];
console.log(findContentChildren(greedFactors, cookieSizes)); // Output: 1   

// Time Complexity: O(n log n + m log m) due to sorting, where n is the number of children and m is the number of cookies.
// Space Complexity: O(1) if we ignore the input storage, as we are using only a constant amount of extra space.


// Another Example:
function findContentChildren(greeds, cookies) {
    greeds.sort((a, b) => a - b);
    cookies.sort((a, b) => a - b);

    let count = 0;
    let i = 0, j = 0;
    while (i < greeds.length && j < cookies.length) {
        // current cookie can satisfy current child
        if (cookies[j] >= greeds[i]) {
            count++;
            i++;
        }
        j++;
    }
    
    return count;
}

