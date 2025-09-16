/**
 * Given a reference head of type ListNode that is the head of a singly linked list, 
 * write a function to swap every two adjacent nodes and return its head.
 */
function swapPairs(head) {
  // Create a dummy node to simplify edge cases
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (prev.next && prev.next.next) {
    let first = prev.next;
    let second = first.next;

    // Swap the nodes
    first.next = second.next;
    second.next = first;
    prev.next = second;

    // Move to the next pair
    prev = first;
  }

  return dummy.next;
}