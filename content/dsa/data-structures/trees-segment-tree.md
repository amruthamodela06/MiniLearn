+++
title = "Trees (Segment Tree)"
weight = 24
+++

{{< complexity time="Build O(N) • Update/Query O(log N)" space="O(4N)" level="Advanced" >}}

## Segment Tree for Dynamic Range Queries

A **Segment Tree** divides an array of size `N` into a binary tree of intervals, supporting **Point Updates** and **Range Queries** (sum, min, max, GCD, XOR) in `O(log N)` time.

```python
class SegmentTree:
    def __init__(self, nums: list[int]):
        self.n = len(nums)
        self.tree = [0] * (2 * self.n)
        for i in range(self.n):
            self.tree[self.n + i] = nums[i]
        for i in range(self.n - 1, 0, -1):
            self.tree[i] = self.tree[2 * i] + self.tree[2 * i + 1]

    def update(self, index: int, value: int) -> None:
        pos = index + self.n
        self.tree[pos] = value
        while pos > 1:
            pos //= 2
            self.tree[pos] = self.tree[2 * pos] + self.tree[2 * pos + 1]

    def range_sum(self, left: int, right: int) -> int:
        """Inclusive range sum query [left, right] in O(log N)."""
        l, r = left + self.n, right + self.n + 1
        total = 0
        while l < r:
            if l & 1:
                total += self.tree[l]
                l += 1
            if r & 1:
                r -= 1
                total += self.tree[r]
            l //= 2
            r //= 2
        return total
```
