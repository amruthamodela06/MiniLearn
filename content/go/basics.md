+++
title = "Go Basics, Packages & Functions"
weight = 1
+++

{{< complexity time="Fast AOT Compilation" space="Static Binary" level="Beginner" >}}

## Go Syntax, Zero Values, Short Variable Declarations (`:=`), and Multiple Return Values

In Go, every variable declared without an explicit initializer receives its deterministic **zero value** (`0` for numeric types, `false` for `bool`, `""` for `string`, and `nil` for pointers, slices, maps, channels, and interfaces).

```go
package main

import "fmt"

func divideAndRemainder(a, b int) (quotient int, remainder int) {
    quotient = a / b
    remainder = a % b
    return
}

func main() {
    q, r := divideAndRemainder(29, 5)
    fmt.Printf("29 / 5 = %d (rem %d)\n", q, r)
}
```
