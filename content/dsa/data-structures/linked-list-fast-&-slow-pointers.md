+++
title = "Linked List (Fast & Slow Pointers)"
weight = 7
+++

{{< complexity time="O(N)" space="O(1)" level="Intermediate" >}}

## Floyd's Tortoise and Hare Algorithm

By advancing `slow` by **1 step** (`slow = slow.next`) and `fast` by **2 steps** (`fast = fast.next.next`):

1. **Middle of a Linked List**: When `fast` reaches the end, `slow` is at the exact midpoint.
2. **Cycle Detection**: If a cycle exists, `fast` laps `slow` inside the cycle in at most `O(N)` steps.
3. **Cycle Entry Node**: Reset one pointer to `head` and advance both by 1 step; they meet at the cycle entrance!

```python
def detect_cycle_start(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            # Phase 2: Locate cycle entrance
            entry = head
            while entry is not slow:
                entry = entry.next
                slow = slow.next
            return entry
    return None
```

### Finding the Middle Node

```python
def middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
```

{{< quiz question="If a linked list has a cycle of length C and a non-cyclic stem of length L, where do the pointers meet after resetting one pointer to head and moving both at speed 1?" options="At the tail node|At the exact cycle entrance node after L steps|At the middle of the cycle|They never meet" answer="1" explanation="Because the meeting point inside the cycle is C - (L mod C) steps before the cycle entrance, advancing L steps from both head and the meeting point lands both pointers at the cycle start." >}}
