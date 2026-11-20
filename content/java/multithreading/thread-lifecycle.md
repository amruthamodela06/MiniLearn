+++
title = "Thread Lifecycle"
weight = 2
+++

{{< complexity time="6 JVM Thread.State Values" space="OS / Virtual Thread Stack" level="Intermediate" >}}

## The 6 States in `java.lang.Thread.State`

1. **`NEW`**: Thread object created (`new Thread(...)`), `start()` not yet called.
2. **`RUNNABLE`**: Executing on CPU or ready in the OS run queue.
3. **`BLOCKED`**: Waiting to acquire a monitor lock to enter a `synchronized` block.
4. **`WAITING`**: Waiting indefinitely for another thread (`Object.wait()`, `Thread.join()`).
5. **`TIMED_WAITING`**: Waiting with a timeout (`Thread.sleep(ms)`, `wait(timeout)`).
6. **`TERMINATED`**: Completed execution of `run()` or exited with an uncaught exception.
