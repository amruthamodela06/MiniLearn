+++
title = "Divide and Conquer"
weight = 40
+++

{{< complexity time="O(N log N)" space="O(N) or O(log N)" level="Intermediate" >}}

## Divide, Conquer, and Combine Paradigm

1. **Divide**: Partition the problem into independent subproblems of smaller size.
2. **Conquer**: Recursively solve each subproblem (or solve base cases directly).
3. **Combine**: Merge subproblem solutions into the final result.

### Merge Sort (`O(N log N)` Worst-Case Guaranteed, Stable)

```python
def merge_sort(arr: list[int]) -> list[int]:
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    merged: list[int] = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1
    merged.extend(left[i:])
    merged.extend(right[j:])
    return merged
```
