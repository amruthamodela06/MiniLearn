+++
title = "Linked List (Singly)"
weight = 4
+++

{{< complexity time="Insert Head O(1) • Search O(N)" space="O(N)" level="Fundamental" >}}

## Singly Linked List Structure & In-Place Reversal

A **Singly Linked List** consists of heap-allocated nodes where each node stores `val` and a `next` reference to the successor node.

```python
class ListNode:
    def __init__(self, val: int = 0, next_node: "ListNode | None" = None):
        self.val = val
        self.next = next_node


def reverse_linked_list(head: ListNode | None) -> ListNode | None:
    """Iterative in-place reversal in O(N) time and O(1) space."""
    prev: ListNode | None = None
    curr = head
    while curr is not None:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev
```

### Merge Two Sorted Linked Lists (`O(N + M)` Time, `O(1)` Space)

Using a **dummy sentinel head** eliminates special-case branches for the initial node:

```python
def merge_two_lists(l1: ListNode | None, l2: ListNode | None) -> ListNode | None:
    dummy = ListNode(-1)
    tail = dummy
    while l1 and l2:
        if l1.val <= l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    tail.next = l1 or l2
    return dummy.next
```

{{< quiz question="What is the time complexity of deleting a known node (given a pointer to its predecessor) in a Singly Linked List?" options="O(N)|O(log N)|O(1)|O(N^2)" answer="2" explanation="Given the predecessor node prev, updating prev.next = prev.next.next takes a constant O(1) pointer assignment." >}}
