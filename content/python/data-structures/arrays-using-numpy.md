+++
title = "Arrays using numpy"
weight = 4
+++

{{< complexity time="Vectorized C Loops" space="Contiguous Typed Buffer" level="Intermediate" >}}

## Vectorized Numerical Computing with `numpy.ndarray`

Unlike Python lists (which store boxed object pointers), a **NumPy `ndarray`** stores unboxed, homogeneous C primitives (`float64`, `int32`, `uint8`) in contiguous memory with SIMD vectorization and broadcasting.

```python
import numpy as np

# 1. Creation & Reshaping
a = np.arange(1, 13, dtype=np.float64).reshape(3, 4)

# 2. Vectorized Broadcasting (no Python loops!)
normalized = (a - a.mean(axis=0)) / (a.std(axis=0) + 1e-8)

# 3. Boolean Masking & Matrix Multiplication
high_vals = a[a > 6.0]
cov_matrix = a @ a.T  # (3, 4) @ (4, 3) -> (3, 3)
```

### Memory View vs Copy

Slicing a NumPy array (`sub = a[:, 1:3]`) returns a **zero-copy view** sharing the underlying memory buffer. Use `a[:, 1:3].copy()` when an independent buffer is needed.
