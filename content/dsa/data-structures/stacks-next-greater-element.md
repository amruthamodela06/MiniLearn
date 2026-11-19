+++
title = "Stacks (Next Greater Element)"
weight = 14
+++

{{< complexity time="O(N)" space="O(N)" level="Intermediate" >}}

## Monotonic Stack Pattern

A **Monotonic Decreasing Stack** maintains indices of elements in decreasing order of value. Whenever a new element `nums[i]` exceeds the top of the stack, `nums[i]` is the **Next Greater Element (NGE)** for every smaller element popped!

```python
def next_greater_elements(nums: list[int]) -> list[int]:
    n = len(nums)
    result = [-1] * n
    stack: list[int] = []  # stores indices

    for i, val in enumerate(nums):
        while stack and nums[stack[-1]] < val:
            idx = stack.pop()
            result[idx] = val
        stack.append(i)

    return result
```

### Applications of Monotonic Stacks

| Problem | Stack Monotonicity | Complexity |
|---|---|---|
| **Next Greater Element / Daily Temperatures** | Monotonic Decreasing | `O(N)` |
| **Largest Rectangle in Histogram** | Monotonic Increasing | `O(N)` |
| **Trapping Rain Water** | Monotonic Decreasing | `O(N)` |
| **Sum of Subarray Minimums** | Monotonic Increasing (prev/next smaller) | `O(N)` |
