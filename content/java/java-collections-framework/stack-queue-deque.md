+++
title = "Stack, Queue, Deque"
weight = 3
+++

{{< complexity time="ArrayDeque O(1) • PriorityQueue O(log N)" space="O(N)" level="Intermediate" >}}

## Why `ArrayDeque` Replaces Legacy `java.util.Stack`

Legacy `java.util.Stack` extends `Vector`, synchronizing every method call with unnecessary lock overhead. Always use **`Deque<T> stack = new ArrayDeque<>()`** for both LIFO stacks (`push`, `pop`, `peek`) and FIFO queues (`offer`, `poll`, `peek`)!

```java
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.PriorityQueue;

public class DequeAndHeapDemo {
    public static void main(String[] args) {
        Deque<String> stack = new ArrayDeque<>();
        stack.push("First");
        stack.push("Second");
        System.out.println(stack.pop());  // "Second"

        // Max-Heap PriorityQueue using Comparator.reverseOrder()
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> Integer.compare(b, a));
        maxHeap.offer(15);
        maxHeap.offer(42);
        System.out.println(maxHeap.poll());  // 42
    }
}
```
