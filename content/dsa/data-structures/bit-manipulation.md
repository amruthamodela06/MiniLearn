+++
title = "Bit Manipulation"
weight = 41
+++

{{< complexity time="O(1) Bitwise Ops" space="O(1)" level="Intermediate" >}}

## Essential Bitwise Tricks for Interviews

| Operation | Expression | Explanation |
|---|---|---|
| **Check if `x` is odd** | `(x & 1) == 1` | Tests least-significant bit |
| **Clear lowest set bit** | `x & (x - 1)` | Brian Kernighan's set-bit counter |
| **Isolate lowest set bit** | `x & -x` | Used in Fenwick Trees (BIT) |
| **Check if power of 2** | `x > 0 and (x & (x - 1)) == 0` | Exactly one bit is set |
| **XOR self-inverse** | `x ^ x == 0` and `x ^ 0 == x` | Finds single non-duplicate element |

```python
def count_set_bits(n: int) -> int:
    count = 0
    while n > 0:
        n &= n - 1  # Clears the lowest set bit in each step
        count += 1
    return count


def single_number(nums: list[int]) -> int:
    xor_val = 0
    for x in nums:
        xor_val ^= x
    return xor_val
```

{{< quiz question="How many iterations does Brian Kernighan's loop (n &= n - 1) perform on an integer n?" options="Always 32 iterations|Exactly the number of set (1) bits in n|n / 2 iterations|log2(n) iterations" answer="1" explanation="Each evaluation of n &= (n - 1) clears one set bit, so the loop runs k times where k is the Hamming weight (popcount) of n." >}}
