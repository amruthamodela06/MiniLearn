+++
title = "File Handling"
weight = 1
+++

{{< complexity time="java.nio.file.Files" space="UTF-8 Streams" level="Intermediate" >}}

## Modern `java.nio.file.Path` and `Files` API (Java 11+)

```java
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

public class NioFilesDemo {
    public static void main(String[] args) throws IOException {
        Path file = Path.of("notes.txt");
        Files.writeString(file, "MiniLearn Java NIO.2\n", StandardCharsets.UTF_8);
        List<String> lines = Files.readAllLines(file, StandardCharsets.UTF_8);
        System.out.println("Lines read: " + lines.size());
    }
}
```
