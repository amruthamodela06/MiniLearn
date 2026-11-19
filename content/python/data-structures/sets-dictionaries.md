+++
title = "Sets & Dictionaries"
weight = 2
+++

{{< complexity time="Lookup/Insert/Delete O(1) Avg" space="O(N)" level="Beginner–Intermediate" >}}

## Hash-Table Backed `dict` and `set`

Since Python 3.7+, `dict` preserves **insertion order** as a language guarantee while delivering `O(1)` average key lookup, insertion, and deletion.

```python
from collections import defaultdict, Counter

# 1. defaultdict eliminates KeyError boilerplate when grouping
graph: dict[int, list[int]] = defaultdict(list)
for u, v in [(0, 1), (0, 2), (1, 3)]:
    graph[u].append(v)

# 2. Counter for O(N) frequency tallies
freq = Counter("abracadabra")
print(freq.most_common(2))  # [('a', 5), ('b', 2)]

# 3. Algebraic Set Operations
a, b = {1, 2, 3, 4}, {3, 4, 5, 6}
print(a | b)  # Union: {1, 2, 3, 4, 5, 6}
print(a & b)  # Intersection: {3, 4}
print(a - b)  # Difference: {1, 2}
print(a ^ b)  # Symmetric Difference: {1, 2, 5, 6}
```
