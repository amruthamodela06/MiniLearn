+++
title = "ArrayList, HashMap, TreeMap, HashSet"
weight = 2
+++

{{< complexity time="HashMap O(1) Avg / O(log N) TreeBin • TreeMap O(log N)" space="O(N)" level="Intermediate" >}}

## Java 8+ `HashMap` Treeification & `TreeMap` Navigable Operations

In Java 8+, when a `HashMap` bucket chain exceeds **`TREEIFY_THRESHOLD = 8`** (and table capacity is `>= 64`), the linked list automatically converts into a balanced **Red-Black Tree**, bounding worst-case hash collision lookup to **`O(log N)`** instead of `O(N)`!

| Class | Backing Structure | `get` / `put` | Ordering |
|---|---|---|---|
| `ArrayList<E>` | Resizable `Object[]` (1.5x growth) | `get(i)` `O(1)` | Insertion order |
| `HashMap<K, V>` | Array + Linked List / Red-Black Tree | `O(1)` avg, `O(log N)` worst | Unordered |
| `LinkedHashMap<K, V>` | Hash Table + Doubly-Linked List | `O(1)` avg | Insertion or LRU access order |
| `TreeMap<K, V>` | Red-Black Tree (`NavigableMap`) | `O(log N)` | Sorted by key (`floorKey`, `ceilingKey`) |
