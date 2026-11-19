+++
title = "Control Structures (if, switch, loops)"
weight = 4
+++

{{< complexity time="Branching & Iteration" space="O(1)" level="Beginner" >}}

## `if-else`, `switch-case`, `for`, `while`, and `do-while`

In `switch(expr)`, `expr` must be an **integer or enum type**, and each `case` requires an explicit `break` to prevent fall-through into subsequent cases.

```c
#include <stdio.h>

int main(void) {
    int cmd = 2;
    switch (cmd) {
        case 1:
            puts("Starting service...");
            break;
        case 2:
            puts("Reloading configuration...");
            break;
        default:
            puts("Unknown command");
            break;
    }

    // Reverse countdown loop
    for (int i = 5; i > 0; --i) {
        printf("%d ", i);
    }
    putchar('\n');
    return 0;
}
```
