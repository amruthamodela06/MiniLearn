+++
title = "Goroutines, Channels & select Concurrency"
weight = 4
+++

{{< complexity time="M:N Work-Stealing Scheduler" space="~2KB Initial Stack" level="Intermediate–Advanced" >}}

## CSP Concurrency: Goroutines (`go`), Channels (`chan T`), and `select`

*"Do not communicate by sharing memory; instead, share memory by communicating."*

- **Goroutine (`go fn()`)**: Lightweight user-space thread (~2 KB growable stack) multiplexed onto OS threads by the Go M:N runtime scheduler.
- **Unbuffered vs Buffered Channel**: `make(chan int)` synchronizes sender and receiver on handoff; `make(chan int, 16)` buffers up to 16 items without blocking.

```go
package main

import (
    "fmt"
    "sync"
)

func worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {
    defer wg.Done()
    for j := range jobs {
        results <- j * j
    }
}

func main() {
    jobs := make(chan int, 4)
    results := make(chan int, 4)
    var wg sync.WaitGroup

    for w := 1; w <= 2; w++ {
        wg.Add(1)
        go worker(w, jobs, results, &wg)
    }
    for j := 1; j <= 4; j++ {
        jobs <- j
    }
    close(jobs)
    wg.Wait()
    close(results)

    for res := range results {
        fmt.Println("Result:", res)
    }
}
```
