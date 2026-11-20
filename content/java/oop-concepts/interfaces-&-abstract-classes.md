+++
title = "Interfaces & Abstract Classes"
weight = 6
+++

{{< complexity time="implements vs extends" space="Multiple Interface Inheritance" level="Intermediate" >}}

## `interface` vs `abstract class` Comparison

| Feature | `abstract class` | `interface` (Java 8+) |
|---|---|---|
| **Multiple Inheritance** | Single (`extends` one class) | Multiple (`implements A, B, C`) |
| **Instance Fields (State)** | Can have mutable non-static fields | Constants only (`public static final`) |
| **Constructors** | Yes (called via `super()`) | No constructors |
| **Method Implementations** | Abstract + concrete methods | Abstract + `default` + `static` + `private` helper methods |

{{< quiz question="How many classes can a Java class extend, and how many interfaces can it implement?" options="Extend multiple classes, implement one interface|Extend at most one class, implement any number of interfaces|Extend two classes, implement two interfaces|Extend zero classes if it implements an interface" answer="1" explanation="Java enforces single class inheritance (extends one superclass) while permitting a class to implement arbitrarily many interfaces." >}}
