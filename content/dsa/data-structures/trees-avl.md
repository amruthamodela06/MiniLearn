+++
title = "Trees (AVL)"
weight = 23
+++

{{< complexity time="Search/Insert/Delete O(log N)" space="O(N)" level="Advanced" >}}

## Self-Balancing AVL Tree & Rotations

An **AVL Tree** enforces that for every node, the height difference (**Balance Factor**) between its left and right subtrees satisfies:

`BF(node) = height(node.left) - height(node.right) in {-1, 0, +1}`

When an insertion or deletion violates this invariant (`|BF| == 2`), one of **4 rotations** restores balance in `O(1)` local pointer updates:

| Imbalance Case | Condition | Rebalancing Rotation |
|---|---|---|
| **Left-Left (LL)** | `BF(u) > 1` and `BF(u.left) >= 0` | Single **Right Rotation** at `u` |
| **Right-Right (RR)** | `BF(u) < -1` and `BF(u.right) <= 0` | Single **Left Rotation** at `u` |
| **Left-Right (LR)** | `BF(u) > 1` and `BF(u.left) < 0` | **Left Rotate** `u.left`, then **Right Rotate** `u` |
| **Right-Left (RL)** | `BF(u) < -1` and `BF(u.right) > 0` | **Right Rotate** `u.right`, then **Left Rotate** `u` |

```python
def rotate_right(y):
    x = y.left
    t2 = x.right
    x.right = y
    y.left = t2
    y.height = 1 + max(get_h(y.left), get_h(y.right))
    x.height = 1 + max(get_h(x.left), get_h(x.right))
    return x


def get_h(node) -> int:
    return node.height if node else 0
```
