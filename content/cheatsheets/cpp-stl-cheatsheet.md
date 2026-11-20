+++
title = "C++ STL Cheat Sheet"
weight = 2
+++

## Essential C++ STL Quick Reference

```cpp
#include <algorithm>
#include <deque>
#include <map>
#include <numeric>
#include <queue>
#include <set>
#include <unordered_map>
#include <vector>

void stl_quick_ref() {
    // 1. Vector sorting, deduplication & binary search
    std::vector<int> v = {5, 2, 8, 2, 1};
    std::sort(v.begin(), v.end());
    v.erase(std::unique(v.begin(), v.end()), v.end());
    bool has5 = std::binary_search(v.begin(), v.end(), 5);

    // 2. Min-Heap & Max-Heap
    std::priority_queue<int> max_pq;
    std::priority_queue<int, std::vector<int>, std::greater<int>> min_pq;

    // 3. Ordered vs Unordered Map
    std::map<int, int> ordered_map;           // O(log N), supports lower_bound()
    std::unordered_map<int, int> hash_map;    // O(1) average

    // 4. Built-in Bit Manipulation (GCC / C++20 <bit>)
    int pop = __builtin_popcount(42);         // Number of set 1-bits
    int clz = __builtin_clz(42);              // Count leading zeros
}
```
