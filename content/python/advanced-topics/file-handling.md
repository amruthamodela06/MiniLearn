+++
title = "File Handling"
weight = 6
+++

{{< complexity time="Streaming I/O" space="Context Manager (__enter__/__exit__)" level="Intermediate" >}}

## Context Managers (`with open(...)`) & `pathlib.Path`

Always open files using a **`with` statement** so the file descriptor is deterministically closed on block exit or exception.

```python
import json
from pathlib import Path

config_path = Path("data/settings.json")
config_path.parent.mkdir(parents=True, exist_ok=True)

# 1. Write UTF-8 JSON safely
payload = {"theme": "pastel", "version": 2}
with open(config_path, "w", encoding="utf-8") as f:
    json.dump(payload, f, indent=2)

# 2. Stream a large text file line-by-line in O(1) memory
def count_non_empty_lines(path: Path) -> int:
    with open(path, "r", encoding="utf-8") as f:
        return sum(1 for line in f if line.strip())
```
