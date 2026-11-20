+++
title = "Threads, Runnable, Synchronization"
weight = 1
+++

{{< complexity time="Monitor Locks & Atomics" space="Happens-Before Memory Model" level="Intermediate–Advanced" >}}

## `Runnable`, `synchronized` Monitor Locks & `AtomicInteger`

Always prefer implementing **`Runnable`** (or `Callable<V>`) over subclassing `Thread`, and submit tasks to an `ExecutorService` thread pool.

```java
import java.util.concurrent.atomic.AtomicInteger;

public class SafeCounter {
    private int syncCount = 0;
    private final AtomicInteger atomicCount = new AtomicInteger(0);

    public synchronized void incrementSync() {
        syncCount++;
    }

    public int incrementLockFree() {
        return atomicCount.incrementAndGet();  // Hardware CAS (Compare-And-Swap)
    }
}
```
