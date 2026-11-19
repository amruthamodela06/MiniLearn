+++
title = "Queues (Deque)"
weight = 16
+++

{{< complexity time="Push/Pop Both Ends O(1)" space="O(K)" level="Intermediate" >}}

## Double-Ended Queue (Deque) & Sliding Window Maximum

A **Deque** (`collections.deque` in Python, `std::deque` in C++, `ArrayDeque` in Java) supports `O(1)` insertion and removal at **both** the front and back.

### Sliding Window Maximum in `O(N)` Time (Monotonic Deque)

Maintain a deque of indices whose values are monotonically decreasing. For each step `i`:
1. Evict indices from the front that fell outside `[i - k + 1, i]`.
2. Pop indices from the back whose values are `<= nums[i]`.
3. The front of the deque holds the maximum for the current window!

```python
from collections import deque


def max_sliding_window(nums: list[int], k: int) -> list[int]:
    dq: deque[int] = deque()
    result: list[int] = []

    for i, val in enumerate(nums):
        while dq and dq[0] <= i - k:
            dq.popleft()
        while dq and nums[dq[-1]] <= val:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])

    return result
```
