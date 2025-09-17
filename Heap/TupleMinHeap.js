/**
 * By default, the heap is ordered based on the first element of the tuple. If the first elements are equal, 
 * the second elements are compared, and so on.
 */

// Custom heap implementation with tuple comparison
class TupleMinHeap {
    constructor() {
        this.heap = [];
    }
    
    heapify(arr) {
        this.heap = [...arr];
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
    
    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }
    
    peek() {
        return this.heap[0];
    }
    
    compare(a, b) {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] < b[i]) return -1;
            if (a[i] > b[i]) return 1;
        }
        return a.length - b.length;
    }
    
    heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            this.heapifyUp(parentIndex);
        }
    }
    
    heapifyDown(index) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let smallest = index;
        
        if (leftChild < this.heap.length && this.compare(this.heap[leftChild], this.heap[smallest]) < 0) {
            smallest = leftChild;
        }
        
        if (rightChild < this.heap.length && this.compare(this.heap[rightChild], this.heap[smallest]) < 0) {
            smallest = rightChild;
        }
        
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }
}

const arr = [[3, 1], [1, 5], [4, 2], [1, 9], [5, 3], [9, 4], [2, 6]];
const heap = new TupleMinHeap();
heap.heapify(arr);

// pop and return the min element = [1, 5]
const minElement = heap.pop();

// peek the new min element = [1, 9]
const newMin = heap.peek();

// push [1, 7] to the heap, which is smaller than [1, 9]
heap.push([1, 7]);

// peek the min element = [1, 7]
const min = heap.peek();