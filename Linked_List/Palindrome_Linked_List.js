/**
 * Given a reference of type ListNode which is the head of a singly linked list,
 * write a function to determine if the linked list is a palindrome.
 */

// 1. Convert to List: Compare Reverse
function isPalindrome(head) {
  // convert linked list to list
  let vals = [];
  let currentNode = head;
  while (currentNode) {
    vals.push(currentNode.val);
    currentNode = currentNode.next;
  }

  // compare list with its reverse
  return JSON.stringify(vals) === JSON.stringify(vals.reverse());
}

// 2. Convert to List: Two-Pointer Technique
function isPalindrome(head) {
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

// 3. Optimal Solution: Reverse Second Half
function isPalindrome(head) {
  if (!head || !head.next) {
    return true;
  }

  // find middle node
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // reverse second half
  let prev = null;
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // compare halves
  let first = head,
    second = prev;
  while (second) {
    if (first.val !== second.val) {
      return false;
    }
    first = first.next;
    second = second.next;
  }

  return true;
}
