+++
title = "Graphs (MST - Prim's, Kruskal's)"
weight = 33
+++

{{< complexity time="O(E log E) or O(E log V)" space="O(V + E)" level="Intermediate" >}}

## Minimum Spanning Tree (MST)

Given a connected, undirected, weighted graph, an **MST** connects all `V` vertices using `V - 1` edges with minimum total weight and no cycles.

### 1. Kruskal's Algorithm (`Sort Edges + Union-Find`, `O(E log E)`)

Best for sparse graphs: sort edges by ascending weight and greedily add edges that connect two distinct DSU components.

```python
def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> int:
    """edges: list of (weight, u, v)."""
    parent = list(range(n))

    def find(x: int) -> int:
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    total_weight = 0
    edges_used = 0
    for w, u, v in sorted(edges):
        ru, rv = find(u), find(v)
        if ru != rv:
            parent[ru] = rv
            total_weight += w
            edges_used += 1
            if edges_used == n - 1:
                break
    return total_weight
```

### 2. Prim's Algorithm (`Min-Heap Cut Expansion`, `O(E log V)`)

Starts from an arbitrary vertex and repeatedly picks the minimum-weight edge crossing the frontier between visited and unvisited vertices.
