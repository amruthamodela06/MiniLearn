+++
title = "pandas, numpy, matplotlib (for data)"
weight = 3
+++

{{< complexity time="Columnar DataFrames" space="In-Memory Arrow/NumPy" level="Intermediate" >}}

## Data Analysis & Visualization Pipeline

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# 1. Create & Aggregate a Pandas DataFrame
df = pd.DataFrame({
    "track": ["DSA", "Python", "DSA", "C++", "Python"],
    "score": [92, 88, 96, 85, 94],
    "minutes": [45, 30, 50, 40, 35],
})

summary = (
    df.groupby("track", as_index=False)
    .agg(avg_score=("score", "mean"), total_minutes=("minutes", "sum"))
    .sort_values("avg_score", ascending=False)
)

# 2. Plot with Matplotlib
fig, ax = plt.subplots(figsize=(6, 4))
ax.bar(summary["track"], summary["avg_score"], color="#6c63ff")
ax.set_ylabel("Average Quiz Score")
ax.set_title("MiniLearn Track Performance")
```
