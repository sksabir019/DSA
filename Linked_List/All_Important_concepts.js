/**
 * Traverse a linked list and print its elements
 */
function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

// Calculate the length of a linked list
function getLinkedListLength(head) {
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }
  return length;
}

// Calculate the sum of all elements in a linked list
function getLinkedListSum(head) {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.value;
    current = current.next;
  }
  return sum;
}

// Calculate the average of all elements in a linked list
function getLinkedListAverage(head) {
  const length = getLinkedListLength(head);
  if (length === 0) return 0; // Avoid division by zero
  return getLinkedListSum(head) / length;
}

// calculate the maximum value in a linked list
function getLinkedListMax(head) {
  if (head === null) return null; // Handle empty list
  let max = head.value;
  let current = head.next;
  while (current !== null) {
    if (current.value > max) {
      max = current.value;
    }
    current = current.next;
  }
  return max;
}

// calculate the minimum value in a linked list
function getLinkedListMin(head) {
  if (head === null) return null; // Handle empty list
  let min = head.value;
  let current = head.next;
  while (current !== null) {
    if (current.value < min) {
      min = current.value;
    }
    current = current.next;
  }
  return min;
}

// calculate the median of a linked list
function getLinkedListMedian(head) {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }

  if (values.length === 0) return null; // Handle empty list

  values.sort((a, b) => a - b);
  const mid = Math.floor(values.length / 2);

  if (values.length % 2 === 0) {
    return (values[mid - 1] + values[mid]) / 2; // Average of two middle values
  } else {
    return values[mid]; // Middle value for odd length
  }
}

// Calculate the mode of a linked list
function getLinkedListMode(head) {
  const frequency = {};
  let current = head;

  while (current !== null) {
    frequency[current.value] = (frequency[current.value] || 0) + 1;
    current = current.next;
  }

  let maxCount = 0;
  let mode = null;

  for (const value in frequency) {
    if (frequency[value] > maxCount) {
      maxCount = frequency[value];
      mode = value;
    }
  }

  return mode; // Return the mode value
}

// Deleting a Node With a Given Target
function deleteNode(head, target) {
  if (head === null) return null; // Handle empty list

  // If the head is the target
  if (head.value === target) {
    return head.next; // Return the next node as the new head
  }

  let current = head;
  while (current.next !== null) {
    if (current.next.value === target) {
      current.next = current.next.next; // Bypass the target node
      return head; // Return the unchanged head
    }
    current = current.next;
  }

  return head; // Return the unchanged head if target not found
}

// Deleting the Last Node
function deleteLastNode(head) {
  if (head === null) return null; // Handle empty list

  // If there's only one node
  if (head.next === null) {
    return null; // Return null as the new head
  }

  let current = head;
  while (current.next.next !== null) {
    current = current.next; // Traverse to the second last node
  }

  current.next = null; // Remove the last node
  return head; // Return the unchanged head
}

// Deleting the First Node
function deleteFirstNode(head) {
  if (head === null) return null; // Handle empty list
  return head.next; // Return the next node as the new head
} 

// Deleting a Node at a Specific Position
function deleteNodeAtPosition(head, position) {
  if (head === null) return null; // Handle empty list

  // If deleting the head node
  if (position === 0) {
    return head.next; // Return the next node as the new head
  }

  let current = head;
  let index = 0;

  while (current !== null && index < position - 1) {
    current = current.next; // Traverse to the node before the desired position
    index++;
  }

  if (current === null || current.next === null) {
    return head; // If position is out of bounds, return unchanged head
  }

  current.next = current.next.next; // Bypass the node at the desired position
  return head; // Return the unchanged head
}

// Inserting a Node at a Specific Position
function insertNodeAtPosition(head, value, position) {
  const newNode = { value: value, next: null };

  // If inserting at the head
  if (position === 0) {
    newNode.next = head; // Link the new node to the current head
    return newNode; // Return the new node as the new head
  }

  let current = head;
  let index = 0;

  while (current !== null && index < position - 1) {
    current = current.next; // Traverse to the position before the desired index
    index++;
  }

  if (current === null) {
    return head; // If position is out of bounds, return unchanged head
  }

  newNode.next = current.next; // Link the new node to the next node
  current.next = newNode; // Link the previous node to the new node

  return head; // Return the unchanged head
}


// Inserting a Node at the End
function insertAtEnd(head, value) {
  const newNode = { value: value, next: null };
  
  if (head === null) {
    return newNode; // If the list is empty, return the new node as the head
  }

  let current = head;
  while (current.next !== null) {
    current = current.next; // Traverse to the end of the list
  }
  
  current.next = newNode; // Link the new node at the end
  return head; // Return the unchanged head
}

// Inserting a Node at the Beginning
function insertAtBeginning(head, value) {
  const newNode = { value: value, next: head }; // Create a new node pointing to the current head
  return newNode; // Return the new node as the new head
}

// Inserting a Node at a Specific Position
function insertAtPosition(head, value, position) {
  const newNode = { value: value, next: null };

  if (position === 0) {
    newNode.next = head; // Insert at the beginning
    return newNode; // Return the new node as the new head
  }

  let current = head;
  let index = 0;

  while (current !== null && index < position - 1) {
    current = current.next; // Traverse to the position before the desired index
    index++;
  }

  if (current === null) {
    return head; // If position is out of bounds, return unchanged head
  }

  newNode.next = current.next; // Link the new node to the next node
  current.next = newNode; // Link the previous node to the new node

  return head; // Return the unchanged head
}


// Reversing a Linked List
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next; // Store the next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev to current
    current = nextNode; // Move to the next node
  }

  return prev; // New head of the reversed list
}

// Finding the N-th Node from the End
function findNthFromEnd(head, n) {
  let mainPtr = head;
  let refPtr = head;

  // Move refPtr n nodes ahead
  for (let i = 0; i < n; i++) {
    if (refPtr === null) return null; // If n is greater than the length of the list
    refPtr = refPtr.next;
  }

  // Move both pointers until refPtr reaches the end
  while (refPtr !== null) {
    mainPtr = mainPtr.next;
    refPtr = refPtr.next;
  }

  return mainPtr; // Return the n-th node from the end
}

// Finding the Middle Node of a Linked List
function findMiddleNode(head) {
  if (head === null) return null; // Handle empty list

  let slowPtr = head;
  let fastPtr = head;

  // Move fastPtr two steps and slowPtr one step
  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next; // Move slow pointer by one
    fastPtr = fastPtr.next.next; // Move fast pointer by two
  }

  return slowPtr; // Return the middle node
}

// Finding the Intersection of Two Linked Lists
function findIntersection(headA, headB) {
  if (headA === null || headB === null) return null; // Handle empty lists

  let lenA = getLinkedListLength(headA);
  let lenB = getLinkedListLength(headB);

  // Align the start of both lists
  while (lenA > lenB) {
    headA = headA.next;
    lenA--;
  }
  while (lenB > lenA) {
    headB = headB.next;
    lenB--;
  }

  // Traverse both lists together to find the intersection
  while (headA !== null && headB !== null) {
    if (headA === headB) {
      return headA; // Return the intersection node
    }
    headA = headA.next;
    headB = headB.next;
  }

  return null; // No intersection found
}

// Finding the Cycle in a Linked List
function hasCycle(head) {
  if (head === null) return false; // Handle empty list

  let slowPtr = head;
  let fastPtr = head;

  // Move slowPtr by one and fastPtr by two
  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next; // Move slow pointer by one
    fastPtr = fastPtr.next.next; // Move fast pointer by two

    if (slowPtr === fastPtr) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle found
}

// Finding the Length of a Cycle in a Linked List
function getCycleLength(head) {
  if (head === null) return 0; // Handle empty list

  let slowPtr = head;
  let fastPtr = head;

  // Move slowPtr by one and fastPtr by two
  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next; // Move slow pointer by one
    fastPtr = fastPtr.next.next; // Move fast pointer by two    

    if (slowPtr === fastPtr) {
      // Cycle detected, find the length
      let cycleLength = 1;
      let current = slowPtr;
      while (current.next !== slowPtr) {
        current = current.next;
        cycleLength++;
      }
      return cycleLength;
    }
  }

  return 0; // No cycle found
}

// Finding the Start of a Cycle in a Linked List
function findCycleStart(head) {
  if (head === null) return null; // Handle empty list

  let slowPtr = head;
  let fastPtr = head;

  // Move slowPtr by one and fastPtr by two
  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next; // Move slow pointer by one
    fastPtr = fastPtr.next.next; // Move fast pointer by two

    if (slowPtr === fastPtr) {
      // Cycle detected, find the start
      slowPtr = head; // Reset slowPtr to head
      while (slowPtr !== fastPtr) {
        slowPtr = slowPtr.next; // Move slow pointer by one
        fastPtr = fastPtr.next; // Move fast pointer by one
      }
      return slowPtr; // Return the start of the cycle
    }
  }

  return null; // No cycle found
}

// Merging Two Linked Lists
function mergeTwoLists(l1, l2) {
  if (l1 === null) return l2; // If l1 is empty, return l2
  if (l2 === null) return l1; // If l2 is empty, return l1

  let mergedHead = null;

  // Determine the head of the merged list
  if (l1.value < l2.value) {
    mergedHead = l1;
    l1 = l1.next;
  } else {
    mergedHead = l2;
    l2 = l2.next;
  }

  let current = mergedHead;

  // Merge the two lists
  while (l1 !== null && l2 !== null) {
    if (l1.value < l2.value) {
      current.next = l1; // Link l1 node
      l1 = l1.next; // Move l1 pointer
    } else {
      current.next = l2; // Link l2 node
      l2 = l2.next; // Move l2 pointer
    }
    current = current.next; // Move current pointer
  }

  // If any nodes left in either list, link them
  if (l1 !== null) {
    current.next = l1;
  } else if (l2 !== null) {
    current.next = l2;
  }

  return mergedHead; // Return the head of the merged list
}

// 

// example usage
const LinkedListNode = function (value) {
  this.value = value;
  this.next = null;
};

// Create a linked list
const head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);

// Example usage
printLinkedList(head);
console.log(getLinkedListLength(head));
console.log(getLinkedListSum(head));
console.log(getLinkedListAverage(head));
console.log(getLinkedListMax(head));
console.log(getLinkedListMin(head));
console.log(getLinkedListMedian(head));
console.log(getLinkedListMode(head));
