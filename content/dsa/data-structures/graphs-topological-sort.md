+++
title = "Graphs (Topological Sort)"
weight = 31
+++

{{< complexity time="O(V + E)" space="O(V)" level="Intermediate" >}}

## Kahn's Algorithm (In-Degree BFS) for DAG Ordering

A **Topological Ordering** of a Directed Acyclic Graph (DAG) places every directed edge `u -> v` such that `u` appears before `v`. If the output list contains fewer than `V` vertices, the graph contains a **directed cycle**.

```python
from collections import deque


def topological_sort_kahn(num_courses: int, prerequisites: list[tuple[int, int]]) -> list[int]:
    adj: list[list[int]] = [[] for _ in range(num_courses)]
    in_degree = [0] * num_courses

    for u, v in prerequisites:
        adj[u].append(v)
        in_degree[v] += 1

    queue = deque([i for i in range(num_courses) if in_degree[i] == 0])
    order: list[int] = []

    while queue:
        u = queue.popleft()
        order.append(u)
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)

    return order if len(order) == num_courses else []
```
