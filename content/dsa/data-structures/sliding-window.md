+++
title = "Sliding Window"
weight = 9
+++

{{< complexity time="O(N)" space="O(1) or O(K)" level="Intermediate" >}}

## Fixed vs Variable Size Sliding Window

The **Sliding Window** technique transforms nested `O(N^2)` subarray/substring loops into a single `O(N)` linear pass by maintaining a window `[left, right]` that expands with `right` and contracts with `left`.

### Universal Variable-Size Sliding Window Template

```python
def longest_substring_without_repeating(s: str) -> int:
    last_seen: dict[str, int] = {}
    left = 0
    best = 0

    for right, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= left:
            left = last_seen[ch] + 1
        last_seen[ch] = right
        best = max(best, right - left + 1)

    return best
```

### Fixed-Size Window Template (`Size = K`)

```python
def max_sum_subarray_of_size_k(nums: list[int], k: int) -> int:
    if len(nums) < k:
        return 0
    window_sum = sum(nums[:k])
    best = window_sum
    for right in range(k, len(nums)):
        window_sum += nums[right] - nums[right - k]
        best = max(best, window_sum)
    return best
```

{{< quiz question="Why does the variable-size sliding window algorithm run in O(N) time despite having a while loop inside a for loop?" options="The while loop only runs on even indices|Both left and right pointers move exclusively forward at most N times each (2N total steps)|It uses binary search internally|It only works on sorted arrays" answer="1" explanation="Since left never decrements and right increments N times, the inner loop body executes at most N times across the entire run." >}}
