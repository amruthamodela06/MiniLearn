+++
title = "Templates"
weight = 1
+++

{{< complexity time="Compile-Time Monomorphization" space="Zero Indirection" level="Advanced" >}}

## Function Templates, Class Templates & Variadic Templates

Templates instruct the C++ compiler to generate type-specialized machine code at compile time (**monomorphization**).

```cpp
#include <iostream>

template <typename T>
constexpr T clamp_val(T val, T lo, T hi) {
    return (val < lo) ? lo : ((val > hi) ? hi : val);
}

// C++17 Fold Expression over Variadic Template Parameter Pack
template <typename... Args>
auto sum_all(Args... args) {
    return (args + ... + 0);
}

int main() {
    std::cout << clamp_val(120, 0, 100) << '\n';  // 100
    std::cout << sum_all(10, 20, 30, 40) << '\n'; // 100
    return 0;
}
```
