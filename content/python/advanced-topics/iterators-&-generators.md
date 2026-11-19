+++
title = "Iterators & Generators"
weight = 3
+++

{{< complexity time="Lazy Evaluation O(1)/step" space="O(1) Stream Memory" level="Intermediate–Advanced" >}}

## The Iterator Protocol (`__iter__`, `__next__`) & `yield` Generators

A **Generator Function** uses `yield` to suspend execution and preserve local state between calls, producing items lazily on demand in **`O(1)` memory** instead of materializing an entire list in RAM.

```python
from typing import Iterator


def fibonacci_stream(limit: int) -> Iterator[int]:
    a, b = 0, 1
    for _ in range(limit):
        yield a
        a, b = b, a + b


# Generator Expression: O(1) memory even over 10 million items!
sum_of_evens = sum(x * x for x in range(10_000) if x % 2 == 0)
```

### Delegating Sub-Generators with `yield from`

```python
def flatten_nested(nested: list) -> Iterator:
    for item in nested:
        if isinstance(item, list):
            yield from flatten_nested(item)
        else:
            yield item
```
