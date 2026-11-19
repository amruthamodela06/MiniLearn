+++
title = "Trees (Fenwick Tree / BIT)"
weight = 25
+++

{{< complexity time="Update/Prefix Query O(log N)" space="O(N)" level="Advanced" >}}

## Binary Indexed Tree (Fenwick Tree)

A **Fenwick Tree (BIT)** computes prefix sums and point updates in `O(log N)` time using only `N + 1` integers by isolating the lowest set bit `i & -i`:

```python
class FenwickTree:
    def __init__(self, n: int):
        self.n = n
        self.bit = [0] * (n + 1)

    def add(self, idx_1based: int, delta: int) -> None:
        i = idx_1based
        while i <= self.n:
            self.bit[i] += delta
            i += i & -i

    def prefix_sum(self, idx_1based: int) -> int:
        i = idx_1based
        total = 0
        while i > 0:
            total += self.bit[i]
            i -= i & -i
        return total

    def range_sum(self, left_1based: int, right_1based: int) -> int:
        return self.prefix_sum(right_1based) - self.prefix_sum(left_1based - 1)
```

{{< quiz question="What bitwise expression isolates the lowest set bit (LSB) of a positive integer i in a Fenwick Tree?" options="i & (i - 1)|i & -i|i ^ -i|i | (i + 1)" answer="1" explanation="In two's complement arithmetic, -i == ~i + 1, so i & -i retains only the rightmost 1-bit." >}}
