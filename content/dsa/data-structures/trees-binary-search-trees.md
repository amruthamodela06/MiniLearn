+++
title = "Trees (Binary Search Trees)"
weight = 22
+++

{{< complexity time="Avg O(log N) • Skewed O(N)" space="O(H)" level="Intermediate" >}}

## BST Invariant & Range Validation

In a **Binary Search Tree (BST)**, every node `u` satisfies:
- All keys in `u.left` are strictly `< u.val`
- All keys in `u.right` are strictly `> u.val`

```python
def is_valid_bst(root, low: float = float("-inf"), high: float = float("inf")) -> bool:
    if root is None:
        return True
    if not (low < root.val < high):
        return False
    return is_valid_bst(root.left, low, root.val) and is_valid_bst(root.right, root.val, high)


def bst_insert(root, val: int):
    if root is None:
        from types import SimpleNamespace
        return SimpleNamespace(val=val, left=None, right=None)
    if val < root.val:
        root.left = bst_insert(root.left, val)
    elif val > root.val:
        root.right = bst_insert(root.right, val)
    return root
```
