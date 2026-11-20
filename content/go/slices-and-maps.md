+++
title = "Slices, Arrays & Maps"
weight = 2
+++

{{< complexity time="Slice Append O(1) Amortized • Map O(1)" space="3-Word Slice Header" level="Intermediate" >}}

## Go Slice Header (`ptr`, `len`, `cap`) & Built-In `map[K]V`

Unlike fixed-length Go arrays (`[4]int`), a **Slice (`[]T`)** is a lightweight 24-byte descriptor (`pointer` to backing array, `length`, and `capacity`).

```go
package main

import "fmt"

func main() {
    scores := make([]int, 0, 8)
    scores = append(scores, 95, 88, 92)

    langs := map[string]int{"Go": 2009, "Python": 1991}
    if year, ok := langs["Go"]; ok {
        fmt.Println("Go released in:", year)
    }
}
```

{{< quiz question="What are the three fields stored inside a Go slice header at runtime?" options="name, type, and size|Pointer to underlying array, length (len), and capacity (cap)|head pointer, tail pointer, and mutex|hash seed, bucket count, and load factor" answer="1" explanation="A Go slice header is a 3-word struct containing a pointer to the backing array, len, and cap." >}}
