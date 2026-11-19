+++
title = "Tries (Prefix Matching)"
weight = 3
+++

{{< complexity time="Insert/Search O(L) Word Length" space="O(Σ * L * N)" level="Intermediate" >}}

## Prefix Tree (Trie) for Autocomplete & Dictionary Lookup

A **Trie** stores strings character-by-character along root-to-leaf paths, enabling `O(L)` word lookup and prefix autocomplete independent of how many words are in the dictionary.

```python
class TrieNode:
    def __init__(self):
        self.children: dict[str, TrieNode] = {}
        self.is_end: bool = False


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def search(self, word: str) -> bool:
        node = self._find(word)
        return bool(node and node.is_end)

    def starts_with(self, prefix: str) -> bool:
        return self._find(prefix) is not None

    def _find(self, prefix: str) -> TrieNode | None:
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return None
            node = node.children[ch]
        return node
```
