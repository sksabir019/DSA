/**
 * Given a list of points in the form [[x1, y1], [x2, y2], ... [xn, yn]] and 
 * an integer k, find the k closest points to the origin (0, 0) on the 2D plane.
 * The distance between two points (x, y) and (a, b) is calculated using the formula:
 * √(x1 - a2)2 + (y1 - b2)2
 * Return the k closest points in any order.
 */

function kClosest(points, k) {
    if (points.length === 0 || k <= 0) {
        return [];
    }
    
    const maxHeap = new MaxHeap();
    
    for (const point of points) {
        const distance = Math.sqrt(point[0] ** 2 + point[1] ** 2);
        maxHeap.push({ point, distance });
        
        if (maxHeap.heap.length > k) {
            maxHeap.pop();
        }
    }
    
    return maxHeap.heap.map(item => item.point);
}   

// example usage:
const points = [[1, 3], [-2, 2], [5, 8], [0, 1]];
const k = 2;
console.log(kClosest(points, k)); // Output: [[-2, 2], [0, 1]]

// Other way:
function kClosest(points, k) {
    const heap = [];
    for (let i = 0; i < points.length; i++) {
        const [x, y] = points[i];
        const distance = x * x + y * y;
        
        if (heap.length < k) {
            heapPush(heap, [-distance, i]);
        } else if (distance < -heap[0][0]) {
            heapPop(heap);
            heapPush(heap, [-distance, i]);
        }
    }
    
    return heap.map(p => points[p[1]]);
}

