+++
title = "Dynamic Programming (1D DP)"
weight = 36
+++

{{< complexity time="O(N) or O(N log N)" space="O(N) or O(1)" level="Intermediate" >}}

## Classic 1D Dynamic Programming Patterns

### 1. House Robber (Maximum Non-Adjacent Sum in `O(N)` Time, `O(1)` Space)

Recurrence: `dp[i] = max(dp[i - 1], nums[i] + dp[i - 2])`

```python
def rob_houses(nums: list[int]) -> int:
    prev2, prev1 = 0, 0
    for val in nums:
        prev2, prev1 = prev1, max(prev1, prev2 + val)
    return prev1
```

### 2. Longest Increasing Subsequence (LIS in `O(N log N)` with Patience Sorting)

Maintain `tails[k]`, the smallest tail of all increasing subsequences of length `k + 1`:

```python
from bisect import bisect_left


def length_of_lis(nums: list[int]) -> int:
    tails: list[int] = []
    for x in nums:
        idx = bisect_left(tails, x)
        if idx == len(tails):
            tails.append(x)
        else:
            tails[idx] = x
    return len(tails)
```
