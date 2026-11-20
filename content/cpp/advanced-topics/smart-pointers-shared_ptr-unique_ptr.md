+++
title = "Smart Pointers (shared_ptr, unique_ptr)"
weight = 3
+++

{{< complexity time="unique_ptr Zero-Cost • shared_ptr Atomic RefCount" space="8 or 16 Bytes" level="Intermediate–Advanced" >}}

## Modern `<memory>` Smart Pointers

1. **`std::unique_ptr<T>` (Exclusive Ownership)**: Move-only, zero memory or CPU overhead compared to a raw pointer `T*`. Always create via `std::make_unique<T>(...)`.
2. **`std::shared_ptr<T>` (Reference-Counted Shared Ownership)**: Frees the managed object when the last `shared_ptr` is destroyed. Always create via `std::make_shared<T>(...)` (combines control block and object in a single heap allocation).
3. **`std::weak_ptr<T>` (Non-Owning Observer)**: Breaks cyclic `shared_ptr` references.

```cpp
#include <iostream>
#include <memory>

struct Engine {
    int horsepower;
    explicit Engine(int hp) : horsepower(hp) {}
};

int main() {
    auto eng = std::make_unique<Engine>(450);
    std::cout << "HP: " << eng->horsepower << '\n';
    return 0;  // Automatically deleted at scope exit!
}
```
