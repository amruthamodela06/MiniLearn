+++
title = "Operators"
weight = 2
+++

{{< complexity time="O(1) Scalar Ops" space="O(1)" level="Beginner" >}}

## Python Operator Categories

1. **Arithmetic**: `+`, `-`, `*`, `/` (true float division), `//` (floor division), `%` (modulo), `**` (exponentiation).
2. **Comparison (Chainable)**: `1 < x < 10`, `==`, `!=`, `<=`, `>=`.
3. **Logical (Short-Circuiting)**: `and`, `or`, `not`.
4. **Identity vs Equality**:
   - `a == b` checks **value equality** (`__eq__`).
   - `a is b` checks **object identity** (`id(a) == id(b)` in memory).
5. **Membership**: `x in container` (`O(1)` average for `set`/`dict`, `O(N)` for `list`/`tuple`).
6. **Walrus Assignment Expression (`:=`, Python 3.8+)**: Assigns and returns a value inside an expression.

```python
# Division difference
print(7 / 2)   # 3.5 (float division)
print(7 // 2)  # 3   (floor division)
print(-7 // 2) # -4  (floors toward negative infinity)

# Walrus operator := inside a condition
data = [12, 18, 25, 30]
if (n := len(data)) > 3:
    print(f"List has {n} items")
```

{{< callout type="warning" title="Always Use 'is None' Instead of '== None'" >}}
`None` is a singleton object in Python. Checking `if x is None:` is faster and avoids custom `__eq__` overrides.
{{< /callout >}}
