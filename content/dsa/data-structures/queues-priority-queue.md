+++
title = "Queues (Priority Queue)"
weight = 17
+++

{{< complexity time="Push/Pop O(log N) • Peek O(1)" space="O(N)" level="Intermediate" >}}

## Priority Queue Abstract Data Type

Unlike a FIFO queue, a **Priority Queue** dequeues elements in order of their priority (minimum key first in a Min-Priority Queue, or maximum key first in a Max-Priority Queue).

### Top-K Largest Elements in `O(N log K)` Time

Maintain a **Min-Heap of size `K`**. Whenever the heap grows beyond `K`, pop the smallest element:

```python
import heapq


def find_kth_largest(nums: list[int], k: int) -> int:
    min_heap: list[int] = []
    for x in nums:
        heapq.heappush(min_heap, x)
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    return min_heap[0]
```

{{< quiz question="Why do we use a Min-Heap (instead of a Max-Heap) of size K to track the K largest elements in a stream?" options="Min-Heaps use less memory|The smallest of the top K elements sits at the root in O(1), acting as the threshold gatekeeper to evict in O(log K)|Max-Heaps cannot be implemented in arrays|Min-Heaps sort in O(1)" answer="1" explanation="In a Min-Heap of size K, the root is the K-th largest element seen so far; any incoming element larger than the root replaces it in O(log K)." >}}
