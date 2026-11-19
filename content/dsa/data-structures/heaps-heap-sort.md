+++
title = "Heaps (Heap Sort)"
weight = 28
+++

{{< complexity time="O(N log N) Guaranteed" space="O(1) In-Place" level="Intermediate" >}}

## In-Place Heap Sort Algorithm

**Heap Sort** sorts an array in-place in worst-case `O(N log N)` time and `O(1)` auxiliary memory:

1. **Bottom-Up Heapify (`O(N)`)**: Convert the array into a Max-Heap starting from the last non-leaf node `n // 2 - 1` down to `0`.
2. **Repeated Extraction (`O(N log N)`)**: Swap root `arr[0]` (the maximum) with `arr[end]`, shrink heap boundary `end`, and sift down the new root.

```python
def heap_sort(arr: list[int]) -> list[int]:
    n = len(arr)

    def sift_down(start: int, end: int) -> None:
        root = start
        while 2 * root + 1 < end:
            child = 2 * root + 1
            swap = root
            if arr[swap] < arr[child]:
                swap = child
            if child + 1 < end and arr[swap] < arr[child + 1]:
                swap = child + 1
            if swap == root:
                return
            arr[root], arr[swap] = arr[swap], arr[root]
            root = swap

    # 1. Build Max-Heap in O(N)
    for i in range(n // 2 - 1, -1, -1):
        sift_down(i, n)

    # 2. Extract elements one by one in O(N log N)
    for end in range(n - 1, 0, -1):
        arr[end], arr[0] = arr[0], arr[end]
        sift_down(0, end)

    return arr
```

{{< quiz question="What is the tight time complexity of building a binary heap bottom-up using Floyd's heapify method?" options="O(N log N)|O(N)|O(log N)|O(N^2)" answer="1" explanation="Because most nodes reside near the bottom of the tree and travel at most 1 or 2 levels, the sum of heights converges to O(N)." >}}
