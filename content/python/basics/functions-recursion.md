+++
title = "Functions & Recursion"
weight = 6
+++

{{< complexity time="First-Class Functions" space="Closures & Stack" level="Beginner–Intermediate" >}}

## Positional, Keyword, `*args`, and `**kwargs` Parameters

Functions in Python are **first-class objects**: they can be passed as arguments, returned from other functions, and stored in data structures.

```python
def build_profile(
    username: str,
    role: str = "learner",
    *tags: str,
    **metadata: str | int,
) -> dict:
    return {
        "username": username,
        "role": role,
        "tags": list(tags),
        "metadata": metadata,
    }
```

{{< callout type="warning" title="Never Use Mutable Default Arguments!" >}}
Default parameter values are evaluated **once** when `def` is executed, not on each call. Writing `def append_item(x, items=[]):` shares the same list across calls! Always default to `None`:

```python
def append_item(x: int, items: list[int] | None = None) -> list[int]:
    if items is None:
        items = []
    items.append(x)
    return items
```
{{< /callout >}}
