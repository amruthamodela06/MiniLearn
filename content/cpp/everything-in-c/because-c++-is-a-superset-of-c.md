+++
title = "Because C++ is a superset of C"
weight = 1
+++

{{< complexity time="Zero-Overhead Abstractions" space="References & Value Semantics" level="Beginner" >}}

## Key C++ Enhancements Over C

1. **Lvalue References (`T&` & `const T&`)**: Non-null aliases to existing objects that avoid pointer dereferencing syntax and copy overhead.
2. **Function Overloading**: Multiple functions can share the same name if their parameter type signatures differ (resolved at compile time via name mangling).
3. **Namespaces (`namespace ml { ... }`)**: Prevent global symbol collisions.
4. **`constexpr` & `auto`**: Compile-time constant evaluation and type deduction.

```cpp
#include <iostream>
#include <string>

namespace minilearn {
    constexpr int square(int x) { return x * x; }

    void log_value(int v) { std::cout << "[int] " << v << '\n'; }
    void log_value(const std::string& s) { std::cout << "[str] " << s << '\n'; }
}

int main() {
    constexpr int area = minilearn::square(12);  // Evaluated at compile time
    minilearn::log_value(area);
    minilearn::log_value("Modern C++20");
    return 0;
}
```
