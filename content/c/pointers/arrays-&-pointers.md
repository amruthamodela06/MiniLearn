+++
title = "Arrays & Pointers"
weight = 2
+++

{{< complexity time="Array-to-Pointer Decay" space="Contiguous Stack/Heap" level="Intermediate" >}}

## Array-to-Pointer Decay & `sizeof` Difference

In most expressions (including function arguments), an array name `arr` **decays** to a pointer to its first element (`&arr[0]`), and `arr[i]` is syntactic sugar for `*(arr + i)`.

**Exceptions where `arr` does NOT decay**:
1. `sizeof(arr)` returns the total byte size of the entire array (`N * sizeof(T)`).
2. `&arr` returns a pointer to the whole array of type `T (*)[N]`.

```c
#include <stdio.h>

void print_array(const int *arr, size_t len) {
    for (size_t i = 0; i < len; ++i) {
        printf("%d ", *(arr + i));
    }
    putchar('\n');
}
```
