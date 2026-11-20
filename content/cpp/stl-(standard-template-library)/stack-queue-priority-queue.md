+++
title = "Stack, Queue, Priority Queue"
weight = 2
+++

{{< complexity time="stack/queue O(1) • priority_queue O(log N)" space="O(N)" level="Intermediate" >}}

## STL Container Adaptors

- `std::stack<T>`: LIFO adaptor (defaults to wrapping `std::deque<T>`).
- `std::queue<T>`: FIFO adaptor (`push`, `front`, `pop` in `O(1)`).
- `std::priority_queue<T>`: Binary **Max-Heap** by default (`top()` returns largest element). Use `std::greater<T>` for a **Min-Heap**!

```cpp
#include <functional>
#include <iostream>
#include <queue>
#include <vector>

int main() {
    // Min-Heap in C++ STL
    std::priority_queue<int, std::vector<int>, std::greater<int>> min_heap;
    min_heap.push(40);
    min_heap.push(10);
    min_heap.push(25);

    std::cout << "Smallest element: " << min_heap.top() << '\n';  // 10
    return 0;
}
```
