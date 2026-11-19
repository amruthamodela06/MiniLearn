+++
title = "Loops (for, while)"
weight = 5
+++

{{< complexity time="O(N) Iteration" space="O(1) Iterator" level="Beginner" >}}

## Pythonic Iteration with `enumerate`, `zip`, and `for-else`

In Python, `for` loops iterate directly over any **Iterable** (`list`, `tuple`, `dict`, `set`, `str`, `range`, generator) without manual index management.

```python
names = ["Ada", "Grace", "Alan"]
scores = [98, 95, 99]

# 1. enumerate() provides (index, value) pairs
for idx, name in enumerate(names, start=1):
    print(f"#{idx}: {name}")

# 2. zip() iterates over multiple sequences in lockstep
for name, score in zip(names, scores):
    print(f"{name} scored {score}")

# 3. for...else executes the 'else' block ONLY if the loop did NOT hit 'break'
def find_divisor(n: int) -> int | None:
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            print(f"Found factor: {d}")
            return d
    else:
        print(f"{n} is prime!")
        return None
```

{{< quiz question="When does the 'else' clause of a Python 'for' or 'while' loop execute?" options="When the loop body throws an exception|Only when the loop finishes normally without encountering a 'break' statement|Every time an iteration completes|Only when the iterable is empty" answer="1" explanation="In Python, a loop's else block runs if and only if the loop terminated naturally without hitting break." >}}
