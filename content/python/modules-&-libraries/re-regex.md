+++
title = "re (Regex)"
weight = 2
+++

{{< complexity time="Compiled NFA Engine" space="O(Pattern)" level="Intermediate" >}}

## Pattern Matching & Extraction with `re`

Precompile frequently used regular expressions with `re.compile()` and always use **raw strings (`r"..."`)** so backslashes are not swallowed by Python string escaping.

```python
import re

EMAIL_RE = re.compile(r"([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)")

text = "Contact support@minilearn.dev or admin@university.edu.in for access."

# 1. Find all matches as (username, domain) tuples
matches = EMAIL_RE.findall(text)

# 2. Named Capture Groups & Substitution
LOG_RE = re.compile(r"\[(?P<level>INFO|ERROR)\]\s+(?P<msg>.+)")
m = LOG_RE.search("[ERROR] Database connection timeout")
if m:
    print(m.group("level"), "->", m.group("msg"))
```
