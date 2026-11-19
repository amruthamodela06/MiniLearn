+++
title = "Graphs (Union-Find / DSU)"
weight = 32
+++

{{< complexity time="O(α(N)) ≈ O(1) per op" space="O(N)" level="Intermediate" >}}

## Disjoint Set Union with Path Compression & Union by Rank

**Disjoint Set Union (DSU)** tracks dynamic connected components under edge additions in near-constant inverse-Ackermann `O(α(N))` time.

```python
class DisjointSetUnion:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n

    def find(self, x: int) -> int:
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]

    def union(self, a: int, b: int) -> bool:
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False
        if self.rank[ra] < self.rank[rb]:
            ra, rb = rb, ra
        self.parent[rb] = ra
        if self.rank[ra] == self.rank[rb]:
            self.rank[ra] += 1
        self.components -= 1
        return True
```

{{< quiz question="Which two optimizations combine to give Union-Find an amortized O(α(N)) time complexity per operation?" options="Sorting and Binary Search|Path Compression and Union by Rank/Size|BFS and DFS|Memoization and Tabulation" answer="1" explanation="Path compression flattens tree pointers during find(), while Union by Rank keeps tree height logarithmic." >}}
