+++
title = "Algorithms (sort, binary_search)"
weight = 3
+++

{{< complexity time="sort O(N log N) • lower_bound O(log N)" space="O(log N) Introsort" level="Intermediate" >}}

## `<algorithm>` Introsort & Binary Search Bounds

`std::sort` uses **Introsort** (hybrid QuickSort + HeapSort + InsertionSort), guaranteeing worst-case **`O(N log N)`** time.

- `std::binary_search(begin, end, val)`: Returns `bool` (`true` if `val` exists).
- `std::lower_bound(begin, end, val)`: Iterator to the **first element `>= val`**.
- `std::upper_bound(begin, end, val)`: Iterator to the **first element `> val`**.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {10, 20, 20, 20, 30, 40};
    auto lo = std::lower_bound(v.begin(), v.end(), 20);
    auto hi = std::upper_bound(v.begin(), v.end(), 20);
    std::cout << "Count of 20s: " << (hi - lo) << '\n';  // 3
    return 0;
}
```

{{< quiz question="On a sorted std::vector v, what does (std::upper_bound(v.begin(), v.end(), x) - std::lower_bound(v.begin(), v.end(), x)) compute in O(log N) time?" options="The sum of all elements equal to x|The exact frequency count of x in the sorted vector|The index of the maximum element|Whether the vector is empty" answer="1" explanation="lower_bound points to the first occurrence of x and upper_bound points one past the last occurrence of x, so their difference is the count of x." >}}
