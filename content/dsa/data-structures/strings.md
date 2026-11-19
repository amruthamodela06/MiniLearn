+++
title = "Strings"
weight = 2
+++

{{< complexity time="Lookup O(1) • Concat O(N)" space="O(N)" level="Fundamental" >}}

## String Representation & Immutability

In **Python** and **Java**, strings are **immutable** sequences of Unicode characters. In **C**, strings are `NUL`-terminated (`'\0'`) `char` arrays, whereas **C++** `std::string` is a mutable dynamic buffer.

{{< callout type="warning" title="Avoid Repeated String Concatenation in Loops" >}}
In Python or Java, `s += ch` inside a loop of size `N` allocates a new string each iteration, resulting in `O(N^2)` time. Always collect parts in a list and call `"".join(parts)` (or `StringBuilder` in Java) for `O(N)` performance!
{{< /callout >}}

### Rolling Hash (Rabin-Karp Substring Search)

Computes a polynomial hash over a sliding window of length `M` in `O(1)` per shift:

```python
def rabin_karp_search(text: str, pattern: str) -> list[int]:
    n, m = len(text), len(pattern)
    if m == 0 or m > n:
        return []

    base, mod = 256, 1_000_000_007
    high_pow = pow(base, m - 1, mod)
    p_hash = 0
    t_hash = 0

    for i in range(m):
        p_hash = (p_hash * base + ord(pattern[i])) % mod
        t_hash = (t_hash * base + ord(text[i])) % mod

    matches: list[int] = []
    for i in range(n - m + 1):
        if p_hash == t_hash and text[i : i + m] == pattern:
            matches.append(i)
        if i < n - m:
            t_hash = (t_hash - ord(text[i]) * high_pow) % mod
            t_hash = (t_hash * base + ord(text[i + m])) % mod
    return matches
```
