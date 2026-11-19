+++
title = "Asymptotic Notations (Big-O, Big-Θ, Big-Ω)"
weight = 2
+++

{{< complexity time="Asymptotic Bounds" space="Mathematical Analysis" level="Fundamental" >}}

## Overview

Asymptotic notations describe the limiting behavior of a function `f(n)` as the input size `n` approaches infinity, stripping away machine-dependent constants and lower-order terms.

### 1. Big-O Notation — `O(g(n))` (Asymptotic Upper Bound)

Represents the **worst-case** growth rate. Formally, `f(n) = O(g(n))` if there exist positive constants `c` and `n0` such that:

`0 <= f(n) <= c * g(n)` for all `n >= n0`.

- **Example**: If `f(n) = 4n^2 + 10n + 12`, then `f(n) = O(n^2)`.

### 2. Big-Omega Notation — `Ω(g(n))` (Asymptotic Lower Bound)

Represents the **best-case** minimum work required. Formally, `f(n) = Ω(g(n))` if:

`0 <= c * g(n) <= f(n)` for all `n >= n0`.

- **Example**: Insertion sort on an already-sorted array takes `Ω(n)` comparisons.

### 3. Big-Theta Notation — `Θ(g(n))` (Asymptotic Tight Bound)

Represents both an upper and lower bound simultaneously (`f(n) = O(g(n))` and `f(n) = Ω(g(n))`):

`c1 * g(n) <= f(n) <= c2 * g(n)` for all `n >= n0`.

### Master Theorem for Divide & Conquer Recurrences

For recurrences of the form `T(n) = a * T(n / b) + O(n^d)` where `a >= 1, b > 1`:

1. If `d > log_b(a)` -> `T(n) = Θ(n^d)`
2. If `d == log_b(a)` -> `T(n) = Θ(n^d log n)`
3. If `d < log_b(a)` -> `T(n) = Θ(n^(log_b(a)))`

```python
# Binary Search: T(n) = 1 * T(n/2) + O(1) -> a=1, b=2, d=0
# Since d == log_2(1) == 0 -> T(n) = Θ(log n)
def binary_search(nums: list[int], target: int) -> int:
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
```

{{< quiz question="Using the Master Theorem, what is the tight bound for T(n) = 2T(n/2) + O(n)?" options="Θ(n)|Θ(n log n)|Θ(n^2)|Θ(log n)" answer="1" explanation="Here a=2, b=2, d=1. Since log_b(a) = log_2(2) = 1 == d, Case 2 applies: Θ(n^1 log n) = Θ(n log n)." >}}
