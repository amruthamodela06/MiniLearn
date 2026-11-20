+++
title = "Structs, Pointers & Implicit Interfaces"
weight = 3
+++

{{< complexity time="Structural Typing" space="2-Word Interface (itab, data)" level="Intermediate" >}}

## Composition via Struct Embedding & Implicit Interfaces

Go does not have class inheritance (`extends`) or an `implements` keyword. Instead:
1. **Composition over Inheritance**: Embed a struct inside another struct to promote its fields and methods.
2. **Implicit Interfaces**: Any type that defines all methods of an `interface` satisfies it automatically!

```go
package main

import "fmt"

type Notifier interface {
    Notify(msg string) error
}

type SlackClient struct {
    Channel string
}

func (s SlackClient) Notify(msg string) error {
    fmt.Printf("[#%s] %s\n", s.Channel, msg)
    return nil
}
```
