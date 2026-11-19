+++
title = "Linked List (Doubly)"
weight = 5
+++

{{< complexity time="Insert/Remove Node O(1)" space="O(N)" level="Intermediate" >}}

## Doubly Linked List & `O(1)` Node Unlinking

Each node in a **Doubly Linked List (DLL)** maintains both `prev` and `next` pointers. Unlike a singly linked list, a node in a DLL can be unlinked in `O(1)` time **without** traversing to find its predecessor.

### Real-World Application: LRU Cache (`HashMap + Doubly Linked List`)

Combining a hash map (`key -> DLL Node`) with a Doubly Linked List using `head` and `tail` dummy sentinels enables `O(1)` `get()` and `O(1)` `put()` with Least-Recently-Used eviction:

```python
class DLLNode:
    def __init__(self, key: int = 0, val: int = 0):
        self.key = key
        self.val = val
        self.prev: "DLLNode | None" = None
        self.next: "DLLNode | None" = None


class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache: dict[int, DLLNode] = {}
        self.head = DLLNode()
        self.tail = DLLNode()
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node: DLLNode) -> None:
        p, n = node.prev, node.next
        p.next = n
        n.prev = p

    def _insert_front(self, node: DLLNode) -> None:
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        node = self.cache[key]
        self._remove(node)
        self._insert_front(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self._remove(self.cache[key])
        node = DLLNode(key, value)
        self.cache[key] = node
        self._insert_front(node)
        if len(self.cache) > self.cap:
            lru = self.tail.prev
            self._remove(lru)
            del self.cache[lru.key]
```
