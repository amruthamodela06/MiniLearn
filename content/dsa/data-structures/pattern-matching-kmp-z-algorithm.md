+++
title = "Pattern Matching (KMP, Z-Algorithm)"
weight = 12
+++

{{< complexity time="O(N + M)" space="O(M)" level="Advanced" >}}

## 1. Knuth-Morris-Pratt (KMP) Algorithm

Naive substring search takes `O(N * M)` because it re-scans characters after a mismatch. **KMP** precomputes the **Longest Proper Prefix which is also a Suffix (LPS)** table `pi[0..M-1]` in `O(M)` time so the text pointer never moves backward.

```python
def compute_lps(pattern: str) -> list[int]:
    m = len(pattern)
    lps = [0] * m
    length = 0
    i = 1
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length != 0:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
    return lps


def kmp_search(text: str, pattern: str) -> list[int]:
    if not pattern:
        return [0]
    lps = compute_lps(pattern)
    matches: list[int] = []
    i = j = 0
    while i < len(text):
        if text[i] == pattern[j]:
            i += 1
            j += 1
            if j == len(pattern):
                matches.append(i - j)
                j = lps[j - 1]
        elif j != 0:
            j = lps[j - 1]
        else:
            i += 1
    return matches
```

## 2. Z-Algorithm (`O(N + M)`)

For a string `S`, the Z-array `Z[i]` stores the length of the longest substring starting at `S[i]` that is also a prefix of `S`. Concatenating `P + "$" + T` yields all occurrences where `Z[i] == len(P)`.

```python
def compute_z_array(s: str) -> list[int]:
    n = len(s)
    z = [0] * n
    l = r = 0
    for i in range(1, n):
        if i <= r:
            z[i] = min(r - i + 1, z[i - l])
        while i + z[i] < n and s[z[i]] == s[i + z[i]]:
            z[i] += 1
        if i + z[i] - 1 > r:
            l, r = i, i + z[i] - 1
    return z
```

{{< quiz question="What does LPS[i] store in the KMP algorithm?" options="The index of the first vowel in the pattern|The length of the longest proper prefix of pattern[0..i] that is also a suffix of pattern[0..i]|The total occurrences of the pattern|The ASCII sum of the pattern" answer="1" explanation="LPS[i] tells KMP how many characters of the pattern are already matched when a mismatch occurs at index i+1." >}}
