+++
title = "Comparable & Comparator"
weight = 4
+++

{{< complexity time="O(N log N) TimSort" space="O(1) Comparator" level="Intermediate" >}}

## Natural Ordering (`Comparable<T>`) vs Custom Ordering (`Comparator<T>`)

- **`Comparable<T>` (`int compareTo(T other)`)**: Implemented inside the domain class itself to define its single default **natural ordering**.
- **`Comparator<T>` (`int compare(T a, T b)`)**: External strategy functional interface allowing multiple custom sort orders via `Comparator.comparing(...)`.

```java
import java.util.Comparator;
import java.util.List;

public class SortingDemo {
    public record Candidate(String name, int score, int penaltyMinutes) {}

    public static void sortCandidates(List<Candidate> list) {
        list.sort(
            Comparator.comparingInt(Candidate::score).reversed()
                .thenComparingInt(Candidate::penaltyMinutes)
                .thenComparing(Candidate::name)
        );
    }
}
```
