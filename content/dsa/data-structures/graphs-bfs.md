+++
title = "Graphs (BFS)"
weight = 29
+++

{{< complexity time="O(V + E)" space="O(V)" level="Fundamental" >}}

## Breadth-First Search & Shortest Path in Unweighted Graphs

**Breadth-First Search (BFS)** explores vertices layer-by-layer using a FIFO `deque`. In an unweighted graph, the first time BFS reaches a vertex `v`, it guarantees the **minimum number of edges** from the source `s`.

```python
from collections import deque


def bfs_shortest_path(adj: dict[int, list[int]], start: int, target: int) -> int:
    if start == target:
        return 0
    visited = {start}
    queue: deque[tuple[int, int]] = deque([(start, 0)])

    while queue:
        u, dist = queue.popleft()
        for v in adj.get(u, []):
            if v == target:
                return dist + 1
            if v not in visited:
                visited.add(v)
                queue.append((v, dist + 1))

    return -1
```

{{< callout type="tip" title="Multi-Source BFS" >}}
To find the shortest distance from **any** of several starting nodes (e.g., Rotting Oranges, 01 Matrix), push all source nodes into the queue at `dist = 0` before starting the BFS loop!
{{< /callout >}}
