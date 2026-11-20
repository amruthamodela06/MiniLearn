+++
title = "Declaration & Definition"
weight = 1
+++

{{< complexity time="Call Stack Frame" space="Pass-by-Value Default" level="Beginner" >}}

## Function Prototypes vs Definitions & Pass-by-Pointer

C passes **all arguments by value**. To mutate a caller's variable in-place, pass its memory address (`int *p`) and dereference it (`*p`):

```c
#include <stdio.h>

void swap_ints(int *a, int *b);

int main(void) {
    int x = 10, y = 25;
    swap_ints(&x, &y);
    printf("x = %d, y = %d\n", x, y);
    return 0;
}

void swap_ints(int *a, int *b) {
    int tmp = *a;
    *a = *b;
    *b = tmp;
}
```
