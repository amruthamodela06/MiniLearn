+++
title = "Decorators"
weight = 4
+++

{{< complexity time="Higher-Order Closure" space="Wrapper Frame" level="Advanced" >}}

## Function Decorators & `@functools.wraps`

A **Decorator** is a callable that takes a function as input, wraps it with cross-cutting behavior (logging, timing, caching, authentication, retry logic), and returns the enhanced callable.

```python
from functools import wraps
import time


def timed_execution(func):
    @wraps(func)  # Preserves __name__, __doc__, and __annotations__
    def wrapper(*args, **kwargs):
        t0 = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed_ms = (time.perf_counter() - t0) * 1000
        print(f"[TIMER] {func.__name__} took {elapsed_ms:.2f} ms")
        return result
    return wrapper


@timed_execution
def compute_squares(n: int) -> int:
    return sum(i * i for i in range(n))
```

{{< quiz question="Why should you always annotate a decorator's inner wrapper function with @functools.wraps(func)?" options="To make the function run in parallel|To preserve the original function's __name__, __doc__, and metadata for introspection|To disable garbage collection|To convert the function into a generator" answer="1" explanation="Without @wraps(func), the decorated function's __name__ and __doc__ get replaced by 'wrapper'." >}}
