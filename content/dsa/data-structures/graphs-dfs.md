+++
title = "Graphs (DFS)"
weight = 30
+++

{{< complexity time="O(V + E)" space="O(V)" level="Fundamental" >}}

## Depth-First Search, Connected Components & Cycle Detection

**Depth-First Search (DFS)** plunges as deep as possible along each branch before backtracking.

### Directed Graph Cycle Detection (`3-Color State`: `0 = Unvisited`, `1 = Visiting`, `2 = Visited`)

```python
def has_directed_cycle(num_nodes: int, adj: dict[int, list[int]]) -> bool:
    state = [0] * num_nodes  # 0: unvisited, 1: in current recursion stack, 2: done

    def dfs(u: int) -> bool:
        state[u] = 1
        for v in adj.get(u, []):
            if state[v] == 1:
                return True  # Back-edge to ancestor -> cycle!
            if state[v] == 0 and dfs(v):
                return True
        state[u] = 2
        return False

    return any(state[i] == 0 and dfs(i) for i in range(num_nodes))
```
