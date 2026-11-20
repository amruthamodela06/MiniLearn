+++
title = "Exception Handling"
weight = 2
+++

{{< complexity time="Zero-Cost Happy Path" space="Stack Unwinding Tables" level="Intermediate" >}}

## `try`, `catch`, `throw`, `noexcept` & Stack Unwinding

When an exception is thrown in C++, the runtime **unwinds the call stack**, invoking the destructors of all local RAII objects along the path until a matching `catch (const std::exception& e)` handler is reached.

```cpp
#include <iostream>
#include <stdexcept>

double safe_divide(double num, double den) {
    if (den == 0.0) {
        throw std::invalid_argument("Division by zero");
    }
    return num / den;
}

int main() {
    try {
        std::cout << safe_divide(10.0, 0.0) << '\n';
    } catch (const std::exception& ex) {
        std::cerr << "Caught error: " << ex.what() << '\n';
    }
    return 0;
}
```
