/**
 * Write a function that takes in a parameter head of type ListNode that is a reference to the 
 * head of a linked list. The function should return True if the linked list contains a cycle, 
 * and False otherwise, without modifying the linked list in any way.
 */
function hasCycle(head) {
  if (head === null || head.next === null) return false;

  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    if (slow === fast) return true; // Cycle detected
    slow = slow.next;
    fast = fast.next.next;
  }

  return false; // No cycle found
}

// Solutionn 1: Keep Track of Visited Nodes
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function hasCycle(head) {
  const visitedNodes = new Set();

  let currentNode = head;
  while (currentNode !== null) {
    if (visitedNodes.has(currentNode)) {
      return true;  // Cycle detected
    }

    visitedNodes.add(currentNode);
    currentNode = currentNode.next;
  }

  return false;
}

// Solution 3: Optimal Solution: Fast and Slow Pointers
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

// Solution 3: Floyd's Cycle Detection Algorithm (Tortoise and Hare)
function hasCycle(head) {
  if (head === null || head.next === null) return false;

  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    if (slow === fast) return true; // Cycle detected
    slow = slow.next;
    fast = fast.next.next;
  }

  return false; // No cycle found
}
