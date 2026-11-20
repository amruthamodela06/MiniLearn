+++
title = "Streams, Lambda Expressions"
weight = 1
+++

{{< complexity time="Lazy Pipeline Evaluation" space="Non-Mutating Source" level="Intermediate" >}}

## Declarative Data Processing with `java.util.stream.Stream`

A **Stream Pipeline** consists of a **Source**, zero or more **lazy Intermediate Operations** (`filter`, `map`, `flatMap`, `sorted`, `distinct`), and one **eager Terminal Operation** (`collect`, `reduce`, `count`, `findFirst`).

```java
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class StreamPipelineDemo {
    public static Map<Character, List<String>> groupLongWords(List<String> words) {
        return words.stream()
            .filter(w -> w.length() >= 4)
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.groupingBy(w -> w.charAt(0)));
    }
}
```
