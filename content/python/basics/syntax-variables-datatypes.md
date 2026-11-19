+++
title = "Syntax, Variables, Datatypes"
weight = 1
+++

{{< complexity time="Dynamic Typing" space="Object References" level="Beginner" >}}

## Python's Dynamic Object Model

In Python, **variables are names bound to heap-allocated objects**, not fixed memory boxes. Types are attached to objects at runtime (**dynamic typing**) and enforced without implicit unsafe coercion (**strong typing**).

### Core Built-in Data Types

| Category | Type | Mutable? | Example Literal |
|---|---|---|---|
| **Numeric** | `int`, `float`, `complex` | Immutable | `42`, `3.1415`, `2 + 3j` |
| **Boolean** | `bool` (subclass of `int`) | Immutable | `True`, `False` |
| **Text Sequence** | `str` | Immutable | `"MiniLearn"` |
| **Sequence** | `list`, `tuple`, `range` | `list`: Mutable | `[1, 2, 3]`, `(10, 20)` |
| **Mapping** | `dict` | Mutable | `{"lang": "Python", "v": 3.12}` |
| **Set** | `set`, `frozenset` | `set`: Mutable | `{1, 2, 3}` |

```python
# Multiple assignment & tuple unpacking
x, y, z = 10, 20.5, "Python"
x, y = y, x  # Swap in O(1) without temporary variable

# Type annotations (PEP 484)
def greet(name: str,excited: bool = True) -> str:
    suffix = "!" if excited else "."
    return f"Hello, {name}{suffix}"
```

{{< quiz question="Which of the following built-in Python data types is IMMUTABLE?" options="list|dict|set|tuple" answer="3" explanation="Tuples, strings, ints, floats, and frozensets are immutable and therefore hashable (if their elements are also hashable)." >}}
