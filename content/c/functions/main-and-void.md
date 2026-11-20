+++
title = "main and void"
weight = 2
+++

{{< complexity time="Process Entry Point" space="argc / argv Stack" level="Beginner" >}}

## Standard `main` Signatures & the `void` Keyword

In ISO C, `main` must return `int` (`0` / `EXIT_SUCCESS` on success, non-zero on error).

1. `int main(void)`: Explicitly takes **zero** arguments.
2. `int main(int argc, char *argv[])`: Receives command-line argument count `argc` and vector `argv`.

### Three Uses of `void` in C

- **Return Type (`void log_msg(const char *s)`)**: Function returns no value.
- **Parameter List (`int get_pid(void)`)**: Function accepts no parameters.
- **Generic Pointer (`void *ptr`)**: Type-erased memory address returned by `malloc()` and accepted by `qsort()` / `memcpy()`.
