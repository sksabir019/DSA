/**
 * You are also given two integers source and target, representing the starting bus stop and 
 * the destination bus stop, respectively. Write a function that takes in routes, source, 
 * and target as input, and returns the minimum number of buses you need to take to travel 
 * from source to target. Return -1 if it is not possible to reach the destination.
 */
function numBusesToDestination(routes, source, target) {
    if (source === target) return 0;

    const graph = new Map();

    // Build the graph
    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].length; j++) {
            const stop = routes[i][j];
            if (!graph.has(stop)) {
                graph.set(stop, []);
            }
            graph.get(stop).push(i);
        }
    }

    const visitedStops = new Set();
    const visitedBuses = new Set();
    const queue = [[source, 0]]; // [current stop, bus count]

    while (queue.length > 0) {
        const [currentStop, busCount] = queue.shift();

        // Explore all buses that can be taken from the current stop
        for (const bus of graph.get(currentStop) || []) {
            if (visitedBuses.has(bus)) continue;
            visitedBuses.add(bus);

            // Explore all stops that can be reached by this bus
            for (const stop of routes[bus]) {
                if (stop === target) return busCount + 1;
                if (!visitedStops.has(stop)) {
                    visitedStops.add(stop);
                    queue.push([stop, busCount + 1]);
                }
            }
        }
    }

    return -1;
}

// Example usage:
const routes = [
    [1, 2, 7],
    [3, 6, 7],
    [7, 8, 9]
];
const source = 1;
const target = 9;
console.log(numBusesToDestination(routes, source, target)); // Output: 3