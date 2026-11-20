+++
title = "Lambda Functions"
weight = 4
+++

{{< complexity time="Inlined Functor Class" space="Capture Struct" level="Intermediate" >}}

## C++ Lambda Expressions `[captures](params) -> ret { body }`

Every lambda expression causes the compiler to generate an anonymous **closure class** with an inline `operator() const`.

- `[]`: Capture nothing.
- `[=]`: Capture local variables by **value** (copy).
- `[&]`: Capture local variables by **reference**.
- `[x, &total]`: Capture `x` by value and `total` by reference.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> scores = {72, 95, 88, 64, 91};
    int threshold = 85;
    int high_count = 0;

    std::for_each(scores.begin(), scores.end(), [threshold, &high_count](int s) {
        if (s >= threshold) {
            ++high_count;
        }
    });
    std::cout << "Scores >= 85: " << high_count << '\n';
    return 0;
}
```
