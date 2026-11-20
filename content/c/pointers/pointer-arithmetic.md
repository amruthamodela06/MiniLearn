+++
title = "Pointer Arithmetic"
weight = 1
+++

{{< complexity time="O(1) Address Scaling" space="8 Bytes (64-bit)" level="Intermediate" >}}

## Scaled Address Arithmetic (`ptr + k`)

Adding an integer `k` to a typed pointer `T *ptr` advances the raw memory address by **`k * sizeof(T)` bytes**!

```c
#include <stdio.h>

int main(void) {
    int arr[4] = {10, 20, 30, 40};
    int *p = arr;

    printf("*p       = %d\n", *p);        // 10
    printf("*(p + 2) = %d\n", *(p + 2));  // 30 (advances 2 * sizeof(int) = 8 bytes)

    int *end = &arr[3];
    printf("Distance = %td elements\n", end - p);  // 3 elements
    return 0;
}
```
