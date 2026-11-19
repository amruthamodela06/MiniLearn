+++
title = "Operators"
weight = 3
+++

{{< complexity time="Single CPU Instruction" space="Registers" level="Beginner" >}}

## Arithmetic, Relational, Logical, and Bitwise Operators in C

- **Bitwise Operators**: `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (left shift), `>>` (right shift).
- **Pre vs Post Increment**: `++i` increments `i` and evaluates to the **new** value; `i++` evaluates to the **old** value and increments `i`.
- **`sizeof` Operator**: Evaluated at **compile time** (except for Variable-Length Arrays) and returns `size_t` bytes.

```c
#include <stdio.h>
#include <stdint.h>

int main(void) {
    uint32_t flags = 0;
    const uint32_t READ_BIT  = (1u << 0);
    const uint32_t WRITE_BIT = (1u << 1);

    flags |= (READ_BIT | WRITE_BIT);   // Set bits
    flags &= ~WRITE_BIT;               // Clear WRITE_BIT
    int can_read = (flags & READ_BIT) != 0;
    printf("Read permission: %d\n", can_read);
    return 0;
}
```
