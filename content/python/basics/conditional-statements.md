+++
title = "Conditional Statements"
weight = 4
+++

{{< complexity time="O(1) Branching" space="O(1)" level="Beginner" >}}

## `if`, `elif`, `else` & Structural Pattern Matching (`match / case`)

Python uses truthiness evaluation: empty containers (`[]`, `{}`, `""`, `set()`), `0`, `0.0`, `None`, and `False` evaluate to **falsy**; everything else is **truthy**.

```python
def classify_http_status(status: int) -> str:
    # Python 3.10+ Structural Pattern Matching
    match status:
        case 200 | 201:
            return "Success"
        case 400:
            return "Bad Request"
        case 401 | 403:
            return "Unauthorized / Forbidden"
        case 404:
            return "Not Found"
        case code if 500 <= code < 600:
            return f"Server Error ({code})"
        case _:
            return "Unhandled Status"
```

### Ternary Conditional Expression

```python
score = 84
verdict = "Pass" if score >= 60 else "Retake"
```
