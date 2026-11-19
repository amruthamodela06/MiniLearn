+++
title = "Dynamic Programming (Tabulation)"
weight = 35
+++

{{< complexity time="O(States × Transitions)" space="O(States) or Space-Optimized" level="Intermediate" >}}

## Bottom-Up DP with Tabulation

**Tabulation** fills an iterative DP table from the smallest base cases up to the target state in topological order, completely eliminating recursion call-stack overhead.

### Space-Optimized Bottom-Up DP

Whenever `dp[i]` depends only on `dp[i - 1]` and `dp[i - 2]`, we can compress an `O(N)` table down to `O(1)` scalar variables:

```python
def climb_stairs_tabulation(n: int) -> int:
    if n <= 2:
        return n
    prev2, prev1 = 1, 2
    for _ in range(3, n + 1):
        prev2, prev1 = prev1, prev1 + prev2
    return prev1
```
