+++
title = "Mathematics (GCD, LCM)"
weight = 42
+++

{{< complexity time="O(log(min(A, B)))" space="O(1)" level="Fundamental" >}}

## Euclidean Algorithm for GCD & LCM

The **Greatest Common Divisor (GCD)** of two integers `a` and `b` satisfies `gcd(a, b) = gcd(b, a mod b)` with `gcd(a, 0) = a`. The **Least Common Multiple (LCM)** follows from:

`lcm(a, b) = (a // gcd(a, b)) * b`

```python
def gcd(a: int, b: int) -> int:
    while b != 0:
        a, b = b, a % b
    return abs(a)


def lcm(a: int, b: int) -> int:
    if a == 0 or b == 0:
        return 0
    return abs(a // gcd(a, b) * b)
```
