+++
title = "Linked List (Circular)"
weight = 6
+++

{{< complexity time="Insert Head/Tail O(1)" space="O(N)" level="Intermediate" >}}

## Circular Linked List Design

In a **Circular Linked List**, the `tail.next` pointer points back to `head` instead of `None`. By maintaining a single `tail` pointer:
- `tail` gives `O(1)` access to the last element.
- `tail.next` gives `O(1)` access to the `head` element!

### Round-Robin Task Scheduler Implementation

```python
class CircularNode:
    def __init__(self, val: int):
        self.val = val
        self.next: "CircularNode" = self


class CircularLinkedList:
    def __init__(self):
        self.tail: CircularNode | None = None

    def append(self, val: int) -> None:
        node = CircularNode(val)
        if self.tail is None:
            self.tail = node
        else:
            node.next = self.tail.next
            self.tail.next = node
            self.tail = node

    def to_list(self) -> list[int]:
        if self.tail is None:
            return []
        out: list[int] = []
        curr = self.tail.next
        while True:
            out.append(curr.val)
            if curr is self.tail:
                break
            curr = curr.next
        return out
```

{{< callout type="tip" title="Avoiding Infinite Loops" >}}
When traversing a circular linked list, never check `while curr is not None`. Instead, stop when `curr is head` after processing the first node.
{{< /callout >}}
