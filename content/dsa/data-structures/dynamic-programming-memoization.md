+++
title = "Dynamic Programming (Memoization)"
weight = 34
+++

{{< complexity time="O(States × Transitions)" space="O(States) Cache + Stack" level="Intermediate" >}}

## Top-Down DP with Memoization

**Dynamic Programming (DP)** applies when a problem exhibits **Optimal Substructure** and **Overlapping Subproblems**. **Memoization** caches the result of each recursive state `dp(state)` so it is computed only once.

```python
from functools import lru_cache


def coin_change_min_coins(coins: list[int], amount: int) -> int:
    @lru_cache(maxsize=None)
    def solve(rem: int) -> int:
        if rem == 0:
            return 0
        if rem < 0:
            return 10**9
        return 1 + min(solve(rem - c) for c in coins)

    ans = solve(amount)
    return ans if ans < 10**9 else -1
```

{{< callout type="tip" title="When to Prefer Top-Down Memoization" >}}
Top-down memoization only visits **reachable states** from the initial query, making it ideal when the state space is sparse.
{{< /callout >}}
