/**
 * Write a function to determine the slowest rate of apples Bobby can harvest per hour 
 * to finish the job in at most 'h' hours. The input to the function is an array of 
 * integers representing the number of apples on each tree and an integer 'h' representing 
 * the number of hours Bobby has to finish the job within.
 */
function minHarvestRate(apples, h) {
    let left = 1;
    let right = Math.max(...apples);
    let result = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const hoursNeeded = apples.reduce((acc, curr) => acc + Math.ceil(curr / mid), 0);

        if (hoursNeeded <= h) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
}

// Example usage
const appleTrees = [3, 6, 7, 11];
const hours = 8;
console.log(minHarvestRate(appleTrees, hours)); // Output: 4