+++
title = "Lists & Tuples"
weight = 1
+++

{{< complexity time="Index O(1) • Append O(1) • Insert(0) O(N)" space="O(N)" level="Beginner" >}}

## Mutable `list` vs Immutable `tuple`

A Python `list` is an over-allocated dynamic array of object references. A `tuple` is a fixed-size, immutable sequence that uses less memory and can serve as a dictionary key when its elements are hashable.

### Slicing Syntax `seq[start:stop:step]`

```python
nums = [10, 20, 30, 40, 50, 60]
print(nums[1:4])    # [20, 30, 40]
print(nums[::-1])   # [60, 50, 40, 30, 20, 10] (reversed copy)

# Custom sorting with key functions (Timsort: O(N log N) stable)
words = ["banana", "pie", "Washington", "book"]
words.sort(key=lambda w: (len(w), w.lower()))
```

### Shallow Copy vs Deep Copy

`copy = matrix[:]` or `matrix.copy()` only copies the outer list references. For nested 2D lists, use `copy.deepcopy(matrix)` or `[row[:] for row in matrix]`.
