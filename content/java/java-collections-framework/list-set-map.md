+++
title = "List, Set, Map"
weight = 1
+++

{{< complexity time="Interface Hierarchy" space="Generics <T>" level="Intermediate" >}}

## Core JCF Interfaces & Contracts

- **`List<E>`**: Ordered sequence allowing duplicate elements and positional index access (`ArrayList`, `LinkedList`).
- **`Set<E>`**: Collection containing no duplicate elements (`e1.equals(e2)` is never true for two members) (`HashSet`, `LinkedHashSet`, `TreeSet`).
- **`Map<K, V>`**: Key-to-value dictionary with unique keys (`HashMap`, `LinkedHashMap`, `TreeMap`, `ConcurrentHashMap`).

```java
import java.util.List;
import java.util.Map;
import java.util.Set;

public class ImmutableCollectionsDemo {
    public static void main(String[] args) {
        List<String> tracks = List.of("DSA", "Python", "Java");
        Set<Integer> primes = Set.of(2, 3, 5, 7);
        Map<String, Integer> scores = Map.of("Ada", 99, "Alan", 97);
        System.out.println(tracks.size() + primes.size() + scores.get("Ada"));
    }
}
```
