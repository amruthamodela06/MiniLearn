+++
title = "Algorithmic Pattern Recognition Guide"
weight = 1
+++

## Mapping Problem Clues to Optimal Algorithms

| Problem Clue / Constraint | Recommended Pattern | Target Complexity |
|---|---|---|
| Sorted array + pair/triplet sum or water container | **Opposite-End Two Pointers** | `O(N)` or `O(N^2)` |
| Longest/shortest contiguous subarray or substring | **Sliding Window** (or Prefix Sum + HashMap if negatives exist) | `O(N)` |
| Next greater/smaller element or histogram area | **Monotonic Stack** | `O(N)` |
| Top `K` largest/smallest/frequent or streaming median | **Min/Max Heap (`PriorityQueue`)** or Bucket Sort | `O(N log K)` |
| Monotonic predicate ("minimum capacity to ship within D days") | **Binary Search on Answer Space** | `O(N log(Range))` |
| Shortest path in unweighted graph or grid | **Breadth-First Search (BFS)** | `O(V + E)` |
| Dependency ordering / course schedule | **Topological Sort (Kahn's In-Degree BFS)** | `O(V + E)` |
| Dynamic connectivity / redundant edge / Kruskal MST | **Disjoint Set Union (Union-Find)** | `O(E α(V))` |
| Count ways / min cost with overlapping subproblems | **Dynamic Programming (1D/2D/Knapsack)** | `O(States × Transitions)` |
| Generate all combinations, subsets, or valid boards (`N <= 15`) | **Backtracking (`Choose -> Explore -> Unchoose`)** | `O(2^N)` or `O(N!)` |
