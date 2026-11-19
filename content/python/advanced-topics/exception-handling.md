+++
title = "Exception Handling"
weight = 5
+++

{{< complexity time="Zero-Cost Try (Python 3.11+)" space="Traceback Frame" level="Intermediate" >}}

## `try`, `except`, `else`, `finally` & Custom Exception Hierarchies

```python
class ValidationError(ValueError):
    """Custom domain-specific exception."""


def parse_percentage(raw: str) -> float:
    try:
        val = float(raw)
        if not (0.0 <= val <= 100.0):
            raise ValidationError(f"Percentage out of range [0, 100]: {val}")
    except ValueError as exc:
        raise ValidationError(f"Invalid numeric input '{raw}'") from exc
    else:
        return round(val / 100.0, 4)
    finally:
        # Always executes whether an exception occurred or not
        pass
```
