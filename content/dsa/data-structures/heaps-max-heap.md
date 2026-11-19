+++
title = "Heaps (Max Heap)"
weight = 27
+++

{{< complexity time="Push/Pop O(log N) • Max O(1)" space="O(N)" level="Intermediate" >}}

## Max-Heap & Dual-Heap Running Median

In a **Max-Heap**, every parent key is greater than or equal to its children (`A[parent] >= A[child]`), placing the maximum element at `A[0]`. In Python's `heapq` (which is a min-heap), negate values (`-x`) to simulate a Max-Heap.

### Find Median from Data Stream (`Two Heaps: Max-Heap + Min-Heap`)

Maintain:
- `lower_half`: Max-Heap storing the smaller half of numbers.
- `upper_half`: Min-Heap storing the larger half of numbers.

```python
import heapq


class MedianFinder:
    def __init__(self):
        self.lower: list[int] = []  # Max-heap (negated values)
        self.upper: list[int] = []  # Min-heap

    def add_num(self, num: int) -> None:
        heapq.heappush(self.lower, -num)
        heapq.heappush(self.upper, -heapq.heappop(self.lower))
        if len(self.upper) > len(self.lower):
            heapq.heappush(self.lower, -heapq.heappop(self.upper))

    def find_median(self) -> float:
        if len(self.lower) > len(self.upper):
            return float(-self.lower[0])
        return (-self.lower[0] + self.upper[0]) / 2.0
```
