+++
title = "Functional Interfaces"
weight = 2
+++

{{< complexity time="invokedynamic Target" space="Single Abstract Method (SAM)" level="Intermediate" >}}

## Core `java.util.function` Interfaces

A **Functional Interface** has **exactly one abstract method (SAM)** and can be instantiated via a lambda expression or method reference (`Class::method`):

| Interface | Abstract Method | Signature | Use Case |
|---|---|---|---|
| `Predicate<T>` | `boolean test(T t)` | `T -> boolean` | Filtering (`stream.filter(...)`) |
| `Function<T, R>` | `R apply(T t)` | `T -> R` | Transformation (`stream.map(...)`) |
| `Consumer<T>` | `void accept(T t)` | `T -> void` | Side-effects (`forEach(...)`) |
| `Supplier<T>` | `T get()` | `() -> T` | Lazy factory (`orElseGet(...)`) |
