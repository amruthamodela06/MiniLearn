+++
title = "Sliding Window & Two Pointers"
weight = 10
+++

{{< complexity time="O(N) or O(N log N)" space="O(1)" level="Intermediate" >}}

## Three Core Two-Pointer Patterns

1. **Opposite-End Pointers (`left = 0`, `right = N - 1`)**: Used on sorted arrays (2Sum Sorted, 3Sum, Container With Most Water, Trapping Rain Water).
2. **Same-Direction Fast/Slow Pointers**: Removing duplicates in-place, partitioning arrays, moving zeros.
3. **Two Arrays / Merge Pointers**: Merging two sorted arrays, interval intersection.

### Container With Most Water (`O(N)` Time, `O(1)` Space)

```python
def max_water_area(height: list[int]) -> int:
    left, right = 0, len(height) - 1
    best = 0
    while left < right:
        width = right - left
        best = max(best, width * min(height[left], height[right]))
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return best
```

### 3Sum (Zero-Sum Triplets without Duplicates in `O(N^2)`)

```python
def three_sum(nums: list[int]) -> list[list[int]]:
    nums.sort()
    res: list[list[int]] = []
    n = len(nums)
    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        lo, hi = i + 1, n - 1
        while lo < hi:
            s = nums[i] + nums[lo] + nums[hi]
            if s == 0:
                res.append([nums[i], nums[lo], nums[hi]])
                lo += 1
                hi -= 1
                while lo < hi and nums[lo] == nums[lo - 1]:
                    lo += 1
            elif s < 0:
                lo += 1
            else:
                hi -= 1
    return res
```
