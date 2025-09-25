/**
 * There are n gas stations along a circular route. You are given two integer arrays gas and cost of length n. 
 * At each gas station i, gas[i] represents the amount of gas you receive by stopping at this station, 
 * and cost[i] represents the amount of gas required to travel from station i to the next station. 
 * You begin the journey with an empty tank at one of the gas stations.
 * 
 * Write a function to return the starting gas station's index if you can travel around the circuit 
 * once in the clockwise direction; otherwise, return -1. Note that if there exists a solution, 
 * it is guaranteed to be unique. Also, you can only travel from station i to station i + 1, 
 * and the last station will lead back to the first station.
 */
function canCompleteCircuit(gas, cost) {
    const n = gas.length;
    let totalGas = 0;
    let totalCost = 0;
    let currentGas = 0;
    let startIndex = 0;

    for (let i = 0; i < n; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currentGas += gas[i] - cost[i];

        // If currentGas drops below 0, reset startIndex to the next station
        if (currentGas < 0) {
            startIndex = i + 1;
            currentGas = 0;
        }
    }

    // If totalGas is greater than or equal to totalCost, a solution exists
    return totalGas >= totalCost ? startIndex : -1;
}

// Example usage:
const gas = [1, 2, 3, 4, 5];
const cost = [2, 3, 4, 5, 1];
console.log(canCompleteCircuit(gas, cost)); // Output: 4

// Time Complexity: O(n)
// Space Complexity: O(1)


// Another Example:
function canCompleteCircuit(gas, cost) {
    let totalTank = 0; // Total gas in the tank
    let currentTank = 0; // Current gas in the tank
    let startingStation = 0; // Starting station index

    for (let i = 0; i < gas.length; i++) {
        totalTank += gas[i] - cost[i];
        currentTank += gas[i] - cost[i];

        // If current tank is negative, reset starting station and current tank
        if (currentTank < 0) {
            startingStation = i + 1;
            currentTank = 0;
        }
    }

    // If total tank is negative, it's impossible to complete the circuit
    return totalTank >= 0 ? startingStation : -1;
}

// Example usage:
const gasStations = [2, 3, 4];
const travelCosts = [3, 4, 3];
console.log(canCompleteCircuit(gasStations, travelCosts)); // Output: -1

// Time Complexity: O(n)
// Space Complexity: O(1)
