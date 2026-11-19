+++
title = "Palindromes & Anagrams"
weight = 11
+++

{{< complexity time="O(N)" space="O(1) or O(Σ)" level="Easy–Medium" >}}

## 1. Palindrome Verification & Expansion Around Center

A string is a **palindrome** if it reads the same forward and backward. To find the **Longest Palindromic Substring** in `O(N^2)` time and `O(1)` auxiliary space, expand outward from each of the `2N - 1` possible centers (odd and even lengths):

```python
def longest_palindromic_substring(s: str) -> str:
    if not s:
        return ""
    start, max_len = 0, 1

    def expand(left: int, right: int) -> None:
        nonlocal start, max_len
        while left >= 0 and right < len(s) and s[left] == s[right]:
            cur_len = right - left + 1
            if cur_len > max_len:
                start = left
                max_len = cur_len
            left -= 1
            right += 1

    for i in range(len(s)):
        expand(i, i)       # Odd-length palindromes
        expand(i, i + 1)   # Even-length palindromes
    return s[start : start + max_len]
```

## 2. Anagram Detection via Frequency Signature

Two strings are **anagrams** if they contain identical character counts.

```python
def are_anagrams(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    counts = [0] * 26
    for cs, ct in zip(s, t):
        counts[ord(cs) - ord('a')] += 1
        counts[ord(ct) - ord('a')] -= 1
    return all(c == 0 for c in counts)
```

{{< quiz question="What is the optimal time complexity to find the Longest Palindromic Substring using Manacher's Algorithm?" options="O(N^2)|O(N log N)|O(N)|O(N^3)" answer="2" explanation="Manacher's Algorithm exploits palindrome symmetry inside previously computed palindrome bounds to achieve linear O(N) time." >}}
