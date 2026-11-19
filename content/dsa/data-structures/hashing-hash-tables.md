+++
title = "Hashing (Hash Tables)"
weight = 18
+++

{{< complexity time="Avg O(1) • Worst O(N)" space="O(N)" level="Fundamental" >}}

## Hash Functions, Load Factor & Collision Resolution

A **Hash Table** maps keys to bucket indices via `index = hash(key) % capacity`. When two distinct keys map to the same slot (**collision**), two primary resolution strategies are used:

1. **Separate Chaining**: Each bucket holds a linked list (or balanced Red-Black Tree when bucket length exceeds 8, as in Java 8+ `HashMap`).
2. **Open Addressing (Linear / Quadratic Probing & Double Hashing)**: All entries live directly in the table array; collisions probe `(h(k) + i) % M` until an empty or tombstone slot is found.

```python
class ChainedHashTable:
    def __init__(self, capacity: int = 16):
        self.cap = capacity
        self.buckets: list[list[tuple[str, int]]] = [[] for _ in range(capacity)]

    def _idx(self, key: str) -> int:
        return hash(key) % self.cap

    def put(self, key: str, value: int) -> None:
        bucket = self.buckets[self._idx(key)]
        for i, (k, _) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        bucket.append((key, value))

    def get(self, key: str) -> int | None:
        for k, v in self.buckets[self._idx(key)]:
            if k == key:
                return v
        return None
```

{{< callout type="tip" title="Load Factor α = N / M" >}}
Maintaining load factor `α <= 0.75` via table resizing keeps average lookup, insertion, and deletion at `O(1)`.
{{< /callout >}}
