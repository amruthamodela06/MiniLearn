+++
title = "Idiomatic Error Handling, defer, panic & recover"
weight = 5
+++

{{< complexity time="Explicit error Values" space="LIFO Deferred Calls" level="Intermediate" >}}

## Explicit `error` Values, `errors.Is` / `errors.As`, and `defer`

In Go, errors are ordinary values implementing `type error interface { Error() string }`. Use **`fmt.Errorf("...: %w", err)`** to wrap errors and **`defer`** to schedule cleanup calls (executed in LIFO order when the surrounding function returns).

```go
package main

import (
    "errors"
    "fmt"
    "os"
)

var ErrEmptyConfig = errors.New("config file is empty")

func readFirstByte(path string) (byte, error) {
    f, err := os.Open(path)
    if err != nil {
        return 0, fmt.Errorf("open %s: %w", path, err)
    }
    defer f.Close()

    buf := make([]byte, 1)
    n, err := f.Read(buf)
    if err != nil || n == 0 {
        return 0, ErrEmptyConfig
    }
    return buf[0], nil
}
```
