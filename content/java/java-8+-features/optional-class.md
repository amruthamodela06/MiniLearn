+++
title = "Optional Class"
weight = 3
+++

{{< complexity time="O(1) Value Wrapper" space="Explicit Absence API" level="Intermediate" >}}

## Null-Safe Return Types with `Optional<T>`

`Optional<T>` is a container object that either wraps a non-null value or is empty (`Optional.empty()`), eliminating `NullPointerException` guesswork in method return signatures.

```java
import java.util.Optional;

public class OptionalDemo {
    public static String normalizeUsername(Optional<String> rawName) {
        return rawName
            .map(String::trim)
            .filter(s -> !s.isEmpty())
            .map(String::toLowerCase)
            .orElse("guest_learner");
    }
}
```

{{< quiz question="What is the difference between opt.orElse(computeDefault()) and opt.orElseGet(() -> computeDefault())?" options="There is no difference|orElse() eagerly evaluates computeDefault() even when opt is non-empty, whereas orElseGet() lazily invokes the Supplier only when opt is empty|orElseGet() throws an exception if opt is empty|orElse() only accepts null" answer="1" explanation="Because Java evaluates method arguments before calling orElse(...), computeDefault() always runs; orElseGet(Supplier) defers evaluation until needed." >}}
