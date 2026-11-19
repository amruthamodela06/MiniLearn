+++
title = "Dynamic Programming (2D DP)"
weight = 37
+++

{{< complexity time="O(N × M)" space="O(min(N, M))" level="Intermediate–Advanced" >}}

## 2D Grid & Dual-Sequence Dynamic Programming

### 1. Longest Common Subsequence (LCS)

Given strings `s1` and `s2`, `dp[i][j]` is the LCS length of `s1[:i]` and `s2[:j]`:

- If `s1[i-1] == s2[j-1]`: `dp[i][j] = 1 + dp[i-1][j-1]`
- Else: `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`

```python
def longest_common_subsequence(text1: str, text2: str) -> int:
    n, m = len(text1), len(text2)
    prev = [0] * (m + 1)
    for i in range(1, n + 1):
        curr = [0] * (m + 1)
        for j in range(1, m + 1):
            if text1[i - 1] == text2[j - 1]:
                curr[j] = 1 + prev[j - 1]
            else:
                curr[j] = max(prev[j], curr[j - 1])
        prev = curr
    return prev[m]
```

### 2. Edit Distance (Levenshtein Distance)

Minimum insertions, deletions, and replacements to convert `word1` into `word2` in `O(N * M)` time.
