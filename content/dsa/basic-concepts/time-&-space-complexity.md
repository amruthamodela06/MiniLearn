+++
title = "Time & Space Complexity"
weight = 1
+++

{{< complexity time="O(1) to O(N!)" space="O(1) to O(N)" level="Fundamental" >}}

## Overview

**Time Complexity** quantifies the number of elementary operations an algorithm performs as a function of input size `N`. **Space Complexity** measures the total memory (auxiliary space + input space) required during execution.

### Common Growth Rates (Fastest to Slowest)

| Complexity | Name | Example Algorithm | Max `N` for ~1 sec (`10^8` ops) |
|---|---|---|---|
| `O(1)` | Constant | Hash map lookup, array index access | Any `N` |
| `O(log N)` | Logarithmic | Binary search, balanced BST lookup | `N > 10^18` |
| `O(N)` | Linear | Single pass array scan, Kadane's algorithm | `10^7 - 10^8` |
| `O(N log N)` | Linearithmic | Merge sort, Heap sort, Quick sort (avg) | `10^5 - 10^6` |
| `O(N^2)` | Quadratic | Nested loops, Bubble/Insertion sort | `10^3 - 10^4` |
| `O(2^N)` | Exponential | Subsets generation, unmemoized recursion | `N <= 25` |
| `O(N!)` | Factorial | All permutations, brute-force TSP | `N <= 11` |

### Analyzing Loop Patterns

```python
def analyze_examples(arr: list[int]) -> int:
    n = len(arr)
    total = 0

    # 1. O(N) Linear loop
    for x in arr:
        total += x

    # 2. O(log N) Multiplicative / Halving loop
    step = 1
    while step < n:
        total += arr[step]
        step *= 2

    return total
```

{{< callout type="tip" title="Auxiliary Space vs Total Space" >}}
In coding interviews, **Space Complexity** almost always refers to **Auxiliary Space** — the extra memory allocated beyond the input data (including recursion call stack frames!).
{{< /callout >}}

{{< quiz question="What is the time and auxiliary space complexity of Merge Sort on an array of size N?" options="O(N log N) time, O(1) space|O(N log N) time, O(N) space|O(N^2) time, O(N) space|O(N) time, O(log N) space" answer="1" explanation="Merge Sort divides the array in log N levels and merges N elements per level using an O(N) temporary buffer." >}}
