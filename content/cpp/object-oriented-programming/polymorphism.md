+++
title = "Polymorphism"
weight = 5
+++

{{< complexity time="Static vs Dynamic Dispatch" space="VPtr (8 Bytes)" level="Intermediate" >}}

## Compile-Time (Static) vs Runtime (Dynamic) Polymorphism

1. **Compile-Time Polymorphism**: Function overloading, operator overloading (`operator+`, `operator<`), templates, and `constexpr` — zero runtime indirection overhead.
2. **Runtime Polymorphism**: Achieved via `virtual` functions invoked through a base pointer (`Base*`) or base reference (`Base&`).

```cpp
struct Complex {
    double re, im;
    constexpr Complex operator+(const Complex& rhs) const noexcept {
        return {re + rhs.re, im + rhs.im};
    }
};
```
