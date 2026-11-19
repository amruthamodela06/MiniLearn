+++
title = "Hashing (Frequency Counting)"
weight = 20
+++

{{< complexity time="O(N)" space="O(U) Unique Elements" level="Fundamental" >}}

## Frequency Maps & Bucket Sort (`Top-K Frequent Elements`)

Counting occurrences of elements in an array or string enables `O(N)` grouping, majority element verification, and bucket sorting.

### Top-K Frequent Elements in `O(N)` Time (Bucket Sort by Frequency)

Instead of sorting frequencies in `O(N log N)`, create `N + 1` frequency buckets where `buckets[freq]` lists elements appearing `freq` times:

```python
from collections import Counter


def top_k_frequent(nums: list[int], k: int) -> list[int]:
    counts = Counter(nums)
    buckets: list[list[int]] = [[] for _ in range(len(nums) + 1)]
    for num, freq in counts.items():
        buckets[freq].append(num)

    res: list[int] = []
    for freq in range(len(buckets) - 1, 0, -1):
        for num in buckets[freq]:
            res.append(num)
            if len(res) == k:
                return res
    return res
```
