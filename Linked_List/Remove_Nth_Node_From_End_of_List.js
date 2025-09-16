/**
 * Given a reference head of type ListNode that is the head node of a singly linked list and 
 * an integer n, write a function that removes the n-th node from the end of the list and 
 * returns the head of the modified list.
 */

// 1. Find the Length of the List

function removeNthFromEnd(head, n) {
    // find length
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    
    let target = length - n;
    if (target === 0) {
        return head.next;
    }
    
    current = head;
    for (let i = 0; i < target - 1; i++) {
        current = current.next;
    }
    
    current.next = current.next.next;
    return head;
}

// 2. Two-Pointer Technique
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;

  // Move fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the n-th node
  slow.next = slow.next.next;

  return dummy.next;
}

// 3. Dummy Node

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let fast = dummy, slow = dummy;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // remove nth node from end
    slow.next = slow.next.next;
    return dummy.next;
}