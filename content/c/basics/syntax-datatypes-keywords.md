+++
title = "Syntax, Datatypes, Keywords"
weight = 1
+++

{{< complexity time="Compiled Native Code" space="Static & Stack Layout" level="Beginner" >}}

## C Compilation Pipeline & Primitive Data Types

A C source file (`.c`) passes through four stages: **Preprocessing (`#include`, `#define`) -> Compilation (`.s` assembly) -> Assembly (`.o` object file) -> Linking (executable binary)**.

### Standard Data Types (64-bit LP64 / LLP64 Targets)

| Type | Typical Size | Format Specifier | Range / Precision |
|---|---|---|---|
| `char` / `uint8_t` | 1 byte (8 bits) | `%c` / `%u` | `-128..127` or `0..255` |
| `int` / `int32_t` | 4 bytes (32 bits) | `%d` | `-2,147,483,648 .. 2,147,483,647` |
| `long long` / `int64_t` | 8 bytes (64 bits) | `%lld` | `±9.22 × 10^18` |
| `float` | 4 bytes | `%f` | ~7 decimal digits (IEEE 754) |
| `double` | 8 bytes | `%lf` | ~15–17 decimal digits |
| `size_t` | 8 bytes (64-bit) | `%zu` | Unsigned byte size from `sizeof` |

```c
#include <stdio.h>
#include <stdint.h>

int main(void) {
    const int32_t max_users = 1024;
    double latency_ms = 1.42;
    printf("Max users: %d | sizeof(double): %zu bytes\n", max_users, sizeof(latency_ms));
    return 0;
}
```
