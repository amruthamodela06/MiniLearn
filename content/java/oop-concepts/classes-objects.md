+++
title = "Classes & Objects"
weight = 1
+++

{{< complexity time="Heap Allocation" space="Object Header + Fields" level="Beginner–Intermediate" >}}

## Classes, Constructors, `equals()` / `hashCode()`, and Java 16+ `record`

In Java, every class implicitly extends `java.lang.Object`. Java 16+ introduced **`record`** classes to declare immutable data carriers with auto-generated constructors, accessors, `equals()`, `hashCode()`, and `toString()` in a single line:

```java
// Immutable Java 16+ Record with compact validation constructor
public record CourseModule(String id, String title, int durationMinutes) {
    public CourseModule {
        if (durationMinutes <= 0) {
            throw new IllegalArgumentException("Duration must be positive");
        }
    }
}
```
