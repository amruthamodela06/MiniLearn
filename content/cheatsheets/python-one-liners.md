+++
title = "Python Interview Idioms & One-Liners"
weight = 3
+++

## Essential Python Interview Snippets

```python
from bisect import bisect_left, bisect_right
from collections import Counter, defaultdict, deque
from functools import lru_cache
import heapq
import math

# 1. Infinity constants & integer division ceiling
INF = float("inf")
ceil_div = (17 + 5 - 1) // 5  # math.ceil(17 / 5) == 4 without float inaccuracy

# 2. 2D Grid Initialization (SAFE: distinct row lists!)
rows, cols = 4, 5
grid = [[0] * cols for _ in range(rows)]

# 3. 4-Directional Grid Neighbors
DIRS = [(-1, 0), (1, 0), (0, -1), (0, 1)]

# 4. Binary Search with bisect
arr = [10, 20, 20, 30, 40]
first_ge_20 = bisect_left(arr, 20)   # index 1
first_gt_20 = bisect_right(arr, 20)  # index 3

# 5. Heapify an existing list in O(N)
nums = [8, 3, 5, 1, 9]
heapq.heapify(nums)
smallest_three = heapq.nsmallest(3, nums)
```
