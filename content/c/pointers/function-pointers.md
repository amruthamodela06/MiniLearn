+++
title = "Function Pointers"
weight = 3
+++

{{< complexity time="Indirect Call O(1)" space="8 Bytes (64-bit)" level="Advanced" >}}

## Function Pointers, Callbacks & `qsort()`

A **Function Pointer** stores the code segment address of a compiled function (`int (*op)(int, int)`), enabling callbacks, dispatch tables, and generic algorithms like `<stdlib.h>` `qsort()`:

```c
#include <stdio.h>
#include <stdlib.h>

int compare_asc(const void *a, const void *b) {
    int va = *(const int *)a;
    int vb = *(const int *)b;
    return (va > vb) - (va < vb);  // Overflow-safe three-way comparison
}

int main(void) {
    int nums[] = {42, 7, 19, 3, 88};
    size_t n = sizeof(nums) / sizeof(nums[0]);
    qsort(nums, n, sizeof(int), compare_asc);
    for (size_t i = 0; i < n; ++i) {
        printf("%d ", nums[i]);
    }
    putchar('\n');
    return 0;
}
```
