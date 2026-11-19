+++
title = "Recursion & Backtracking"
weight = 3
+++

{{< complexity time="O(b^d)" space="O(d) Call Stack" level="Intermediate" >}}

## 1. Recursion Fundamentals

**Recursion** solves a problem by reducing it to smaller instances of the same problem until reaching a terminating **base case**.

- **Base Case**: Condition that stops recursion and returns a direct value.
- **Recursive Step**: Breaks the problem down and combines subproblem results.
- **Call Stack**: Each active recursive call pushes a stack frame holding local variables and the return address.

## 2. Backtracking Template (Choose -> Explore -> Unchoose)

**Backtracking** is a systematic depth-first search over a decision tree that prunes invalid branches early (**bounding**).

```python
def generate_permutations(nums: list[int]) -> list[list[int]]:
    result: list[list[int]] = []
    used = [False] * len(nums)
    path: list[int] = []

    def backtrack() -> None:
        if len(path) == len(nums):
            result.append(path.copy())
            return

        for i in range(len(nums)):
            if used[i]:
                continue
            # 1. Choose
            used[i] = True
            path.append(nums[i])

            # 2. Explore
            backtrack()

            # 3. Unchoose (Backtrack)
            path.pop()
            used[i] = False

    backtrack()
    return result
```

### Classic Backtracking Problems

| Problem | State Representation | Pruning Condition | Complexity |
|---|---|---|---|
| **Subsets / Power Set** | `(index, current_subset)` | None (`2^N` leaves) | `O(N * 2^N)` |
| **Permutations** | `(path, used_mask)` | Skip already used elements | `O(N * N!)` |
| **N-Queens** | `(row, cols_set, diag1_set, diag2_set)` | Skip attacked columns/diagonals | `O(N!)` |
| **Sudoku Solver** | `(r, c, row_mask, col_mask, box_mask)` | Bitmask conflict check in `O(1)` | `O(9^m)` blanks |

{{< callout type="warning" title="Preventing Stack Overflow" >}}
Deep recursion exceeding ~1000 frames in Python raises `RecursionError`. Convert tail recursion to iteration or use explicit stacks for deep graphs.
{{< /callout >}}

{{< quiz question="Which step distinguishes backtracking from standard DFS traversal?" options="Using a queue instead of a stack|Undoing state mutations (unchoosing) after returning from a recursive branch|Sorting the input array first|Using dynamic programming tables" answer="1" explanation="Backtracking mutates shared state on the way down and restores (unchooses) it upon returning so sibling branches see a clean state." >}}
