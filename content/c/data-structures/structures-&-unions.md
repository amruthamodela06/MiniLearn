+++
title = "Structures & Unions"
weight = 2
+++

{{< complexity time="Member Access O(1)" space="Struct Padding vs Shared Union" level="Intermediate" >}}

## `struct` Alignment Padding vs `union` Shared Memory

- **`struct`**: Allocates separate memory for every field; total `sizeof(struct)` is the sum of members **plus alignment padding**.
- **`union`**: All members share the **exact same starting memory address**; `sizeof(union)` equals the size of its **largest** member.

```c
#include <stdio.h>
#include <stdint.h>

typedef struct {
    uint32_t id;
    double score;
} StudentRecord;

typedef union {
    uint32_t raw_u32;
    uint8_t bytes[4];
} PacketWord;

int main(void) {
    StudentRecord s = {.id = 101, .score = 96.5};
    StudentRecord *ptr = &s;
    printf("Student #%u -> %.1f\n", ptr->id, ptr->score);
    return 0;
}
```
