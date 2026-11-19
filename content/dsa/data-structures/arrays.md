+++
title = "Arrays"
weight = 1
+++

{{< complexity time="Access O(1) • Insert/Delete O(N)" space="O(N)" level="Fundamental" >}}

## Contiguous Memory & Cache Locality

An **Array** stores homogeneous elements in contiguous memory cells. Given base address `B` and element size `S`, the address of index `i` is computed in `O(1)` time:

`Address(A[i]) = B + i * S`

### Classic Interview Algorithm: Kadane's Maximum Subarray (`O(N)`)

Find the contiguous subarray within a 1D array of numbers that has the largest sum.

```python
def max_subarray_sum(nums: list[int]) -> int:
    best = nums[0]
    current = nums[0]
    for x in nums[1:]:
        current = max(x, current + x)
        best = max(best, current)
    return best
```

### Dutch National Flag (3-Way Partitioning in `O(N)` Time, `O(1)` Space)

Sort an array containing only `0`, `1`, and `2` in a single pass:

```python
def sort_colors(nums: list[int]) -> None:
    low, mid, high = 0, 0, len(nums) - 1
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1
```

{{< quiz question="Why is appending to a dynamic array (Python list / C++ std::vector) O(1) amortized?" options="It never reallocates memory|Doubling capacity on overflow spreads the O(N) copy cost over N insertions|It uses a linked list internally|It allocates memory on disk" answer="1" explanation="Geometric growth (1.5x or 2x) ensures total copies across N appends is at most 1 + 2 + 4 + ... + N < 2N = O(N), or O(1) amortized per append." >}}
