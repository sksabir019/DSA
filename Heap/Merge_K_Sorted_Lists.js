/**
 * Given k linked lists, each sorted in ascending order, in a list lists, 
 * write a function to merge the input lists into one sorted linked list.
 * This problem can be solved using a min-heap of size k.
 */
function mergeKLists(lists) {
    const minHeap = new MinHeap();

    for (const list of lists) {
        if (list) {
            minHeap.push(list);
        }
    }

    const dummy = new ListNode(0);
    let current = dummy;

    while (minHeap.size() > 0) {
        const node = minHeap.pop();
        current.next = node;
        current = current.next;

        if (node.next) {
            minHeap.push(node.next);
        }
    }

    return dummy.next;
}

// example usage:
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const mergedList = mergeKLists([list1, list2, list3]);


// Other way:

function mergeKLists(lists) {
    if (!lists || lists.length === 0) {
        return null;
    }
    
    const heap = [];
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            heapPush(heap, [lists[i].val, i, lists[i]]);
        }
    }
    
    const dummy = new ListNode(0);
    let curr = dummy;
    
    while (heap.length > 0) {
        const [val, idx, node] = heapPop(heap);
        curr.next = node;
        curr = curr.next;
        
        if (node.next) {
            heapPush(heap, [node.next.val, idx, node.next]);
        }
    }
    
    return dummy.next;
}
console.log(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6