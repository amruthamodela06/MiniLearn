+++
title = "Recursion"
weight = 3
+++

{{< complexity time="O(N) or O(log N)" space="O(Depth) Stack Frames" level="Intermediate" >}}

## Recursive Call Frames & Tail Recursion in C

Modern C compilers (`gcc -O2`, `clang -O2`) can optimize **tail-recursive** functions into an iterative jump without growing the hardware call stack.

```c
#include <stdio.h>
#include <stdint.h>

uint64_t factorial_tail(uint32_t n, uint64_t acc) {
    if (n <= 1) {
        return acc;
    }
    return factorial_tail(n - 1, acc * n);
}

int main(void) {
    printf("10! = %llu\n", (unsigned long long)factorial_tail(10, 1));
    return 0;
}
```
