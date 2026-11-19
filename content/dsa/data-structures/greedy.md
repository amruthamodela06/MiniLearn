+++
title = "Greedy"
weight = 39
+++

{{< complexity time="O(N log N) Sorting" space="O(1) or O(N)" level="Intermediate" >}}

## Greedy Choice Property & Interval Scheduling

A **Greedy Algorithm** makes the locally optimal decision at each step. When the problem satisfies the **Greedy Choice Property** and **Optimal Substructure**, the sequence of local optima yields a global optimum.

### Activity Selection / Non-Overlapping Intervals (`Sort by End Time`, `O(N log N)`)

To maximize the number of mutually compatible intervals, sort intervals by ascending **finish time** `end`:

```python
def max_non_overlapping_intervals(intervals: list[tuple[int, int]]) -> int:
    if not intervals:
        return 0
    intervals.sort(key=lambda iv: iv[1])
    count = 1
    last_end = intervals[0][1]

    for start, end in intervals[1:]:
        if start >= last_end:
            count += 1
            last_end = end
    return count
```
