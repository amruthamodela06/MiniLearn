+++
title = "Inheritance, Polymorphism"
weight = 3
+++

{{< complexity time="C3 Linearization MRO" space="Class Hierarchy" level="Intermediate" >}}

## Inheritance, `super()`, Abstract Base Classes & Duck Typing

Python supports single and multiple inheritance resolved via **C3 Linearization Method Resolution Order (`Cls.__mro__`)**, as well as formal interfaces using `abc.ABC` and structural **Duck Typing** (`typing.Protocol`).

```python
from abc import ABC, abstractmethod
import math


class Shape(ABC):
    @abstractmethod
    def area(self) -> float:
        pass


class Circle(Shape):
    def __init__(self, radius: float):
        self.radius = radius

    def area(self) -> float:
        return math.pi * (self.radius ** 2)


class Rectangle(Shape):
    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height

    def area(self) -> float:
        return self.width * self.height


def total_area(shapes: list[Shape]) -> float:
    return sum(s.area() for s in shapes)  # Polymorphic dispatch
```

{{< quiz question="Which algorithm does Python 3 use to compute the Method Resolution Order (MRO) in multiple inheritance hierarchies?" options="Depth-First Left-to-Right|C3 Linearization|Breadth-First Search|Dijkstra's Shortest Path" answer="1" explanation="C3 Linearization preserves local precedence order and monotonicity across diamond inheritance hierarchies." >}}
