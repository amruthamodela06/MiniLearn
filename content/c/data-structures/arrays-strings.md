+++
title = "Arrays, Strings"
weight = 1
+++

{{< complexity time="Index O(1) • strlen O(N)" space="Contiguous Bytes" level="Beginner–Intermediate" >}}

## Contiguous Arrays & `NUL`-Terminated C Strings (`'\0'`)

In C, a string is a byte array terminated by a zero byte (`'\0'`, ASCII `0`). Thus, storing a string of `L` characters requires at least **`L + 1` bytes**.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char greeting[32] = "Hello";
    // Safe bounded concatenation
    strncat(greeting, ", MiniLearn!", sizeof(greeting) - strlen(greeting) - 1);
    printf("%s (len = %zu)\n", greeting, strlen(greeting));
    return 0;
}
```
