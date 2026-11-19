+++
title = "Lambda Functions"
weight = 2
+++

{{< complexity time="Inline Anonymous Function" space="O(1)" level="Beginner–Intermediate" >}}

## Anonymous `lambda` Expressions & Higher-Order Functions

A **`lambda`** expression creates an inline, single-expression anonymous function: `lambda arg1, arg2: expression`. It is most effective as a short callback key for `sorted()`, `min()`, `max()`, `map()`, and `filter()`.

```python
students = [
    {"name": "Amrutha", "gpa": 9.6, "projects": 8},
    {"name": "Rohan", "gpa": 9.6, "projects": 5},
    {"name": "Meera", "gpa": 9.8, "projects": 6},
]

# Sort by GPA descending, then projects descending
ranked = sorted(students, key=lambda s: (-s["gpa"], -s["projects"]))

# Functional pipeline with map() and filter()
nums = [1, 2, 3, 4, 5, 6]
evens_cubed = list(map(lambda x: x ** 3, filter(lambda x: x % 2 == 0, nums)))
```
