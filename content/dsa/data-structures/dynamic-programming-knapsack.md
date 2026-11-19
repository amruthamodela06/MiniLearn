+++
title = "Dynamic Programming (Knapsack)"
weight = 38
+++

{{< complexity time="O(N × W)" space="O(W) 1D Array" level="Intermediate–Advanced" >}}

## 0/1 Knapsack vs Unbounded Knapsack

Given `N` items with weights `w[i]` and values `v[i]`, maximize total value within capacity `W`:

1. **0/1 Knapsack (Each item used at most once)**: Iterate capacity `c` **backward** from `W` down to `w[i]` so each item is only picked once per row.
2. **Unbounded Knapsack (Infinite copies of each item)**: Iterate capacity `c` **forward** from `w[i]` up to `W`.

```python
def knapsack_01(weights: list[int], values: list[int], capacity: int) -> int:
    dp = [0] * (capacity + 1)
    for w, v in zip(weights, values):
        for c in range(capacity, w - 1, -1):
            dp[c] = max(dp[c], dp[c - w] + v)
    return dp[capacity]
```

{{< quiz question="Why must the inner capacity loop run BACKWARD (from W down to w[i]) in space-optimized 1D 0/1 Knapsack?" options="To make the loop run faster on modern CPUs|So that dp[c - w] still holds the previous row's value without reusing the current item multiple times|Because weights are negative|To sort the items automatically" answer="1" explanation="Iterating forward would overwrite dp[c - w] in the current item's pass, turning 0/1 Knapsack into Unbounded Knapsack." >}}
