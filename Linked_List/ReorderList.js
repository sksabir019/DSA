/**
 * Given a reference head of type ListNode that is the head of a singly linked list, 
 * reorder the list in-place such that the nodes are reordered to form the following pattern:

1st node -> last node -> 2nd node -> 2nd to last node -> 3rd node ...
 */
function reorderList(head) {
  if (!head || !head.next) return;

  // Find middle using slow/fast pointer
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // If odd length, skip middle element
  let second = fast ? slow : slow.next;
  let first = prev;

  // Compare reversed first half with second half
  while (first && second) {
    if (first.val !== second.val) return false;
    first = first.next;
    second = second.next;
  }
  return true;
}

