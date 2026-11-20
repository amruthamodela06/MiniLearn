+++
title = "Big-O Complexity Master Table"
weight = 1
+++

## Data Structure Operations Complexity

| Data Structure | Access | Search | Insertion | Deletion | Space (Worst) |
|---|---|---|---|---|---|
| **Dynamic Array (`list` / `vector`)** | `O(1)` | `O(N)` | `O(1)` end / `O(N)` mid | `O(1)` end / `O(N)` mid | `O(N)` |
| **Singly Linked List** | `O(N)` | `O(N)` | `O(1)` head | `O(1)` head | `O(N)` |
| **Doubly Linked List** | `O(N)` | `O(N)` | `O(1)` head/tail/node | `O(1)` given node | `O(N)` |
| **Hash Table (`dict` / `HashMap`)** | N/A | `O(1)` avg | `O(1)` avg | `O(1)` avg | `O(N)` |
| **Balanced BST (`TreeMap` / `std::map`)** | N/A | `O(log N)` | `O(log N)` | `O(log N)` | `O(N)` |
| **Binary Heap (`PriorityQueue`)** | `O(1)` top | `O(N)` | `O(log N)` | `O(log N)` | `O(N)` |
| **Prefix Trie (Length `L`)** | N/A | `O(L)` | `O(L)` | `O(L)` | `O(Σ · L · N)` |
| **Segment / Fenwick Tree** | `O(log N)` | `O(log N)` | `O(log N)` update | N/A | `O(N)` |
| **Disjoint Set Union (DSU)** | `O(α(N))` | `O(α(N))` | `O(α(N))` union | N/A | `O(N)` |

## Sorting Algorithms Comparison

| Algorithm | Best Time | Average Time | Worst Time | Auxiliary Space | Stable? |
|---|---|---|---|---|---|
| **Quick Sort** | `O(N log N)` | `O(N log N)` | `O(N^2)` | `O(log N)` | No |
| **Merge Sort** | `O(N log N)` | `O(N log N)` | `O(N log N)` | `O(N)` | **Yes** |
| **Heap Sort** | `O(N log N)` | `O(N log N)` | `O(N log N)` | `O(1)` | No |
| **TimSort (Python / Java)** | `O(N)` | `O(N log N)` | `O(N log N)` | `O(N)` | **Yes** |
| **Counting / Radix Sort** | `O(N + K)` | `O(N + K)` | `O(N + K)` | `O(N + K)` | **Yes** |
