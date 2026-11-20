+++
title = "Variables, Operators"
weight = 2
+++

{{< complexity time="O(1) Primitive Ops" space="Stack / Heap Fields" level="Beginner" >}}

## Variable Scopes, `final`, and Java Operators

1. **Local Variables**: Declared inside methods; must be explicitly initialized before use. Can use `var` type inference (Java 10+).
2. **Instance Fields**: Belong to each object instance on the heap.
3. **`static` Class Fields**: Shared across all instances of a class.
4. **`final` Keyword**: Prevents variable reassignment, method overriding, or class inheritance.

### Signed (`>>`) vs Unsigned (`>>>`) Right Shift

- `x >> k`: Arithmetic shift (preserves the sign bit).
- `x >>> k`: Logical zero-fill shift (always shifts `0` into the top bits).
