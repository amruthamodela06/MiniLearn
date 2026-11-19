+++
title = "math, datetime, os, sys, random"
weight = 1
+++

{{< complexity time="Standard Library" space="Cross-Platform Utilities" level="Beginner–Intermediate" >}}

## Essential Python Standard Library Modules

```python
import math
import os
import random
import sys
from datetime import datetime, timezone, timedelta

# 1. math: Number theory & floating-point precision
print(math.gcd(48, 18))         # 6
print(math.comb(10, 3))         # 120 (nCr binomial coefficient)
print(math.isclose(0.1 + 0.2, 0.3))  # True

# 2. datetime: Timezone-aware UTC timestamps
now_utc = datetime.now(timezone.utc)
tomorrow = now_utc + timedelta(days=1)

# 3. random: Reproducible sampling
random.seed(42)
sample = random.sample(range(100), k=5)

# 4. os & sys: Environment & runtime arguments
api_port = int(os.environ.get("PORT", "8000"))
python_ver = sys.version_info[:2]
```
