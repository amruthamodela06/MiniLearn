+++
title = "Input / Output"
weight = 3
+++

{{< complexity time="I/O Buffered" space="O(Line Length)" level="Beginner" >}}

## Console Input, `f-strings`, and Fast Competitive I/O

### 1. Standard `input()` and Type Parsing

`input()` reads a line from `stdin` as a `str` (stripping the trailing newline):

```python
# Parse space-separated integers on a single line
# Example input: "10 20 30"
a, b, c = map(int, input().split())

# Read an entire list of integers
nums = list(map(int, input().split()))
```

### 2. Modern `f-string` Formatting (Python 3.6+)

```python
pi = 3.14159265
balance = 1254300.5
print(f"Pi rounded: {pi:.3f}")             # 3.142
print(f"Balance: ${balance:,.2f}")         # $1,254,300.50
print(f"Debug expression: {2 ** 10 = }")   # 2 ** 10 = 1024
```

### 3. Fast Buffered I/O with `sys.stdin.readline`

For large inputs (`10^5+` lines), `sys.stdin.readline` avoids prompt overhead and is 5x faster than `input()`.
