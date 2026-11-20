+++
title = "Constructors, Destructors"
weight = 2
+++

{{< complexity time="Deterministic RAII" space="Rule of Five / Zero" level="Intermediate" >}}

## RAII (Resource Acquisition Is Initialization) & Member Initializer Lists

In C++, an object's **Constructor** acquires resources (memory, file handles, mutex locks) and its **Destructor (`~ClassName()`)** deterministically releases them the instant the object leaves scope.

### The Rule of Five

If a class defines a custom destructor to manage a raw resource, it should also define or `=delete`:
1. Destructor (`~Buffer()`)
2. Copy Constructor (`Buffer(const Buffer&)`)
3. Copy Assignment Operator (`Buffer& operator=(const Buffer&)`)
4. Move Constructor (`Buffer(Buffer&&) noexcept`)
5. Move Assignment Operator (`Buffer& operator=(Buffer&&) noexcept`)

```cpp
#include <algorithm>
#include <cstddef>

class IntBuffer {
    std::size_t size_;
    int* data_;
public:
    explicit IntBuffer(std::size_t n) : size_(n), data_(new int[n]{}) {}
    ~IntBuffer() { delete[] data_; }

    // Move constructor transfers ownership in O(1)
    IntBuffer(IntBuffer&& other) noexcept : size_(other.size_), data_(other.data_) {
        other.size_ = 0;
        other.data_ = nullptr;
    }
};
```
