+++
title = "Vectors, Maps, Sets, Pairs"
weight = 1
+++

{{< complexity time="vector O(1) • map/set O(log N) • unordered O(1)" space="O(N)" level="Intermediate" >}}

## Core STL Sequence & Associative Containers

| Container | Underlying Structure | Lookup / Insert | Ordering |
|---|---|---|---|
| `std::vector<T>` | Contiguous dynamic array | `push_back` `O(1)` amortized | Insertion order |
| `std::map<K, V>` / `std::set<K>` | Red-Black Balanced BST | `O(log N)` guaranteed | Sorted by `K` (`operator<`) |
| `std::unordered_map<K, V>` | Hash Table (Chaining) | `O(1)` avg, `O(N)` worst | Unordered |
| `std::pair<T1, T2>` | 2-tuple aggregate | `O(1)` `.first`, `.second` | Lexicographical comparison |

```cpp
#include <iostream>
#include <map>
#include <vector>

int main() {
    std::vector<std::pair<int, std::string>> tasks = {{2, "Deploy"}, {1, "Build"}};
    tasks.emplace_back(3, "Monitor");

    std::map<std::string, int> freq;
    freq["cpp"]++;
    for (const auto& [lang, count] : freq) {  // C++17 Structured Binding
        std::cout << lang << ": " << count << '\n';
    }
    return 0;
}
```
