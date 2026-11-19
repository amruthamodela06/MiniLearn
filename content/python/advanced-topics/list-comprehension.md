+++
title = "List Comprehension"
weight = 1
+++

{{< complexity time="O(N) Bytecode Loop" space="O(N)" level="Beginner–Intermediate" >}}

## List, Set, and Dictionary Comprehensions

Comprehensions provide a concise, readable syntax `[expr for item in iterable if cond]` that executes via specialized `LIST_APPEND` CPython bytecode (~30% faster than an equivalent Python `for` loop with `.append()`).

```python
# 1. List Comprehension with filtering
squares_of_odds = [x ** 2 for x in range(10) if x % 2 == 1]

# 2. Dictionary Comprehension (invert key -> value mapping)
code_to_lang = {1: "Python", 2: "C++", 3: "Go"}
lang_to_code = {v: k for k, v in code_to_lang.items()}

# 3. Set Comprehension (unique normalized email domains)
emails = ["ada@mit.edu", "bob@MIT.EDU", "grace@navy.mil"]
domains = {e.split("@")[1].lower() for e in emails}

# 4. 2D Matrix Transposition
matrix = [[1, 2, 3], [4, 5, 6]]
transposed = [[row[c] for row in matrix] for c in range(len(matrix[0]))]
```
