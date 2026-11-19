+++
title = "Heaps (Min Heap)"
weight = 26
+++

{{< complexity time="Build O(N) • Push/Pop O(log N)" space="O(N)" level="Intermediate" >}}

## Complete Binary Tree in a 0-Indexed Array

A **Binary Min-Heap** is a complete binary tree where every parent `A[i]` satisfies `A[i] <= A[2i + 1]` (left child) and `A[i] <= A[2i + 2]` (right child).

- `parent(i) = (i - 1) // 2`
- `left(i) = 2 * i + 1`
- `right(i) = 2 * i + 2`

```python
class MinHeap:
    def __init__(self):
        self.data: list[int] = []

    def push(self, val: int) -> None:
        self.data.append(val)
        self._sift_up(len(self.data) - 1)

    def pop(self) -> int:
        if not self.data:
            raise IndexError("pop from empty heap")
        self.data[0], self.data[-1] = self.data[-1], self.data[0]
        minimum = self.data.pop()
        if self.data:
            self._sift_down(0)
        return minimum

    def _sift_up(self, idx: int) -> None:
        while idx > 0:
            p = (idx - 1) // 2
            if self.data[idx] < self.data[p]:
                self.data[idx], self.data[p] = self.data[p], self.data[idx]
                idx = p
            else:
                break

    def _sift_down(self, idx: int) -> None:
        n = len(self.data)
        while True:
            smallest = idx
            l, r = 2 * idx + 1, 2 * idx + 2
            if l < n and self.data[l] < self.data[smallest]:
                smallest = l
            if r < n and self.data[r] < self.data[smallest]:
                smallest = r
            if smallest == idx:
                break
            self.data[idx], self.data[smallest] = self.data[smallest], self.data[idx]
            idx = smallest
```
