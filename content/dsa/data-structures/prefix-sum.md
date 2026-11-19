+++
title = "Prefix Sum"
weight = 8
+++

{{< complexity time="Build O(N) • Query O(1)" space="O(N)" level="Fundamental" >}}

## 1D Prefix Sum & Range Sum Queries

Given an array `A[0..N-1]`, the prefix sum array `P` of length `N + 1` satisfies `P[i] = A[0] + A[1] + ... + A[i-1]`. Any inclusive range sum `sum(A[L..R])` can then be answered in `O(1)` time:

`sum(A[L..R]) = P[R + 1] - P[L]`

```python
class RangeSumQuery:
    def __init__(self, nums: list[int]):
        self.prefix = [0] * (len(nums) + 1)
        for i, val in enumerate(nums):
            self.prefix[i + 1] = self.prefix[i] + val

    def query(self, left: int, right: int) -> int:
        return self.prefix[right + 1] - self.prefix[left]
```

## Subarray Sum Equals `K` (`Prefix Sum + Hash Map` in `O(N)`)

Count the number of contiguous subarrays whose elements sum to `k`:

```python
def subarray_sum_equals_k(nums: list[int], k: int) -> int:
    seen_sums = {0: 1}
    running = 0
    count = 0
    for x in nums:
        running += x
        count += seen_sums.get(running - k, 0)
        seen_sums[running] = seen_sums.get(running, 0) + 1
    return count
```

## Difference Array for `O(1)` Range Updates

To add `val` to `A[L..R]` across `Q` offline range updates:
1. Set `diff[L] += val` and `diff[R + 1] -= val` in `O(1)` per query.
2. Compute the prefix sum of `diff` at the end in `O(N)`.
