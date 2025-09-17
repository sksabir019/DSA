/**
 * The heapify operation takes a list of elements and converts it into a 
 * heap in O(n) time.
 * A Min-Heap is a complete binary tree where the value of each node is 
 * less than or equal to the values of its children. This property ensures 
 * that the smallest element is always at the root of the tree.
 * 
 * The primary operations for a Min-Heap include:
 * 1. Insertion (push): Add a new element to the heap while maintaining the 
 *    heap property. This operation has a time complexity of O(log n).
 * 2. Deletion (pop): Remove and return the smallest element (the root) from 
 *    the heap, then re-heapify to maintain the heap property. This also has 
 *    a time complexity of O(log n).
 * 3. Peek: Return the smallest element without removing it, which is an 
 *    O(1) operation.
 * 
 * Below is an implementation of a Min-Heap in JavaScript, including methods 
 * for heapifying an array, inserting elements, removing the minimum element, 
 * and peeking at the minimum element.
 */
class MinHeap {
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
    
    heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            this.heapifyUp(parentIndex);
        }
    }
    
    heapifyDown(index) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let smallest = index;
        
        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }
        
        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }
        
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }
}

const arr = [3, 1, 4, 1, 5, 9, 2];
const heap = new MinHeap();

// convert array into a heap in-place. O(n)
heap.heapify(arr);

// push 0 to the heap. O(log n)
heap.push(0);

// peek the min element = 0. O(1)
const min = heap.peek();

// pop and return the min element = 0. O(log n)
const minElement = heap.pop();

// peek the new min element = 1. O(1)
const newMin = heap.peek();