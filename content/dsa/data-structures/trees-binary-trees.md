+++
title = "Trees (Binary Trees)"
weight = 21
+++

{{< complexity time="Traversal O(N)" space="O(H) Height" level="Fundamental" >}}

## Binary Tree Traversals & Lowest Common Ancestor (LCA)

A **Binary Tree** node has at most two children (`left` and `right`).

- **Preorder (`Root -> Left -> Right`)**: Serialization, prefix expression trees.
- **Inorder (`Left -> Root -> Right`)**: Visits BST nodes in sorted order.
- **Postorder (`Left -> Right -> Root`)**: Bottom-up tree height, diameter, deletion.
- **Level-Order (BFS Queue)**: Shortest depth, level averages, zigzag views.

```python
class TreeNode:
    def __init__(self, val: int = 0, left: "TreeNode | None" = None, right: "TreeNode | None" = None):
        self.val = val
        self.left = left
        self.right = right


def lowest_common_ancestor(root: TreeNode | None, p: TreeNode, q: TreeNode) -> TreeNode | None:
    if root is None or root is p or root is q:
        return root
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    if left and right:
        return root
    return left or right
```

{{< quiz question="Which binary tree traversal visits nodes in monotonically non-decreasing order when run on a valid Binary Search Tree?" options="Preorder|Inorder|Postorder|Level-order" answer="1" explanation="Inorder traversal processes Left Subtree (< root), then Root, then Right Subtree (> root)." >}}
