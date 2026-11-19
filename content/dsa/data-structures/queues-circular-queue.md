+++
title = "Queues (Circular Queue)"
weight = 15
+++

{{< complexity time="Enqueue/Dequeue O(1)" space="O(K)" level="Fundamental" >}}

## Fixed-Capacity Ring Buffer (Circular Queue)

A **Circular Queue** avoids the `O(N)` shifting overhead of array-based queues by wrapping `head` and `tail` indices around a fixed array of size `capacity` using modulo arithmetic `(idx + 1) % capacity`.

```python
class CircularQueue:
    def __init__(self, k: int):
        self.buf = [0] * k
        self.cap = k
        self.head = 0
        self.size = 0

    def enqueue(self, value: int) -> bool:
        if self.is_full():
            return False
        tail = (self.head + self.size) % self.cap
        self.buf[tail] = value
        self.size += 1
        return True

    def dequeue(self) -> bool:
        if self.is_empty():
            return False
        self.head = (self.head + 1) % self.cap
        self.size -= 1
        return True

    def front(self) -> int:
        return -1 if self.is_empty() else self.buf[self.head]

    def is_empty(self) -> bool:
        return self.size == 0

    def is_full(self) -> bool:
        return self.size == self.cap
```
