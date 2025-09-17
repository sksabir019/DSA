/**
 * Max Heap Implementation in JavaScript
 * 
 * A Max-Heap is a complete binary tree where the value of each node is greater than or equal to 
 * the values of its children. This implementation includes methods for heapifying an array, 
 * inserting elements, removing the maximum element, and peeking at the maximum element.
 * The heap is represented as an array, where for any given index i:
 * - The left child is located at index 2*i + 1
 * - The right child is located at index 2*i + 2
 * - The parent is located at index Math.floor((i - 1) / 2)
 * 
 * The primary operations for a Max-Heap include:
 * 1. Insertion (push): Add a new element to the heap while maintaining the heap property. This operation has a time complexity of O(log n).
 * 2. Deletion (pop): Remove and return the largest element (the root) from the heap, then re-heapify to maintain the heap property. This also has a time complexity of O(log n).
 * 3. Peek: Return the largest element without removing it, which is an O(1) operation.
 * 4. Heapify: Convert an arbitrary array into a heap in O(n) time.
 * 
 * Below is an implementation of a Max-Heap in JavaScript, including methods for heapifying an array, inserting elements, removing the maximum element, and peeking at the maximum element
 */

class MaxHeap {
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
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }
    
    peek() {
        return this.heap[0];
    }
    
    heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            this.heapifyUp(parentIndex);
        }
    }
    
    heapifyDown(index) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let largest = index;
        
        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild;
        }
        
        if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
        }
        
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }
}

const arr = [3, 1, 4, 1, 5, 9, 2];
const heap = new MaxHeap();

// convert array into a max-heap
heap.heapify(arr);

// push 11 to the heap
heap.push(11);

// peek root of heap = 11
const max = heap.peek();

// pop and return the max element = 11
const maxElement = heap.pop();

// peek the new max element = 9
const newMax = heap.peek();