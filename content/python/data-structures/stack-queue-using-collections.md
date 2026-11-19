+++
title = "Stack, Queue using collections"
weight = 3
+++

{{< complexity time="Push/Pop Both Ends O(1)" space="O(N)" level="Intermediate" >}}

## Why `collections.deque` Beats `list` for Queues

Calling `list.pop(0)` shifts all `N - 1` remaining elements left in memory, costing **`O(N)`** per dequeue. `collections.deque` is implemented as a doubly-linked list of fixed-size memory blocks, guaranteeing **`O(1)`** `append`, `appendleft`, `pop`, and `popleft`!

```python
from collections import deque

# 1. LIFO Stack using deque or list
stack = deque()
stack.append("first")
stack.append("second")
top_item = stack.pop()  # "second" in O(1)

# 2. FIFO Queue using deque
queue = deque(["task_1", "task_2"])
queue.append("task_3")        # Enqueue at back in O(1)
next_task = queue.popleft()   # Dequeue from front in O(1)

# 3. Bounded Ring Buffer with maxlen
recent_logs = deque(maxlen=3)
for i in range(5):
    recent_logs.append(f"event_{i}")
# recent_logs automatically retains ['event_2', 'event_3', 'event_4']
```

{{< quiz question="What is the time complexity of list.pop(0) vs collections.deque.popleft() on a container of size N?" options="Both are O(1)|list.pop(0) is O(N) whereas deque.popleft() is O(1)|list.pop(0) is O(1) whereas deque.popleft() is O(N)|Both are O(log N)" answer="1" explanation="Removing index 0 from a contiguous Python list shifts N-1 pointers left in O(N), whereas deque unlinks the head pointer in O(1)." >}}
