+++
title = "Hashing (Hash Maps)"
weight = 19
+++

{{< complexity time="Lookup/Insert O(1) Avg" space="O(N)" level="Fundamental" >}}

## Interview Patterns with Hash Maps

Hash Maps (`dict` in Python, `std::unordered_map` in C++, `HashMap` in Java) reduce `O(N^2)` search pairs to `O(N)` single-pass lookups.

### 1. Two Sum (`O(N)` Time, `O(N)` Space)

```python
def two_sum(nums: list[int], target: int) -> list[int]:
    seen: dict[int, int] = {}
    for i, x in enumerate(nums):
        comp = target - x
        if comp in seen:
            return [seen[comp], i]
        seen[x] = i
    return []
```

### 2. Longest Consecutive Sequence (`O(N)` Time)

By converting `nums` into a `set` and only starting a streak from numbers `x` where `x - 1` is **not** in the set, each element is visited at most twice:

```python
def longest_consecutive(nums: list[int]) -> int:
    num_set = set(nums)
    best = 0
    for x in num_set:
        if x - 1 not in num_set:
            curr = x
            streak = 1
            while curr + 1 in num_set:
                curr += 1
                streak += 1
            best = max(best, streak)
    return best
```
