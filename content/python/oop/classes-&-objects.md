+++
title = "Classes & Objects"
weight = 1
+++

{{< complexity time="Object Instantiation" space="__dict__ or __slots__" level="Intermediate" >}}

## Custom Classes, Dunder Methods & `@dataclass`

```python
from dataclasses import dataclass


class Vector2D:
    __slots__ = ("x", "y")  # Eliminates per-instance __dict__ memory overhead

    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def __add__(self, other: "Vector2D") -> "Vector2D":
        return Vector2D(self.x + other.x, self.y + other.y)

    def __repr__(self) -> str:
        return f"Vector2D(x={self.x}, y={self.y})"


@dataclass(frozen=True)
class CourseLesson:
    track: str
    title: str
    minutes: int = 10
```

### Instance vs `@classmethod` vs `@staticmethod`

- **Instance method (`def m(self)`)**: Operates on a specific object instance `self`.
- **Class method (`@classmethod def from_dict(cls, d)`)**: Receives the class `cls` as first argument; ideal for alternative factory constructors.
- **Static method (`@staticmethod def helper()`)**: Namespaced utility function with no `self` or `cls`.
