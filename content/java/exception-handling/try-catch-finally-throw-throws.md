+++
title = "try, catch, finally, throw, throws"
weight = 1
+++

{{< complexity time="Checked vs Unchecked" space="AutoCloseable" level="Intermediate" >}}

## `Throwable` Hierarchy & `try-with-resources`

- **Checked Exceptions (`IOException`, `SQLException`)**: Subclasses of `Exception` (excluding `RuntimeException`); the compiler requires either catching them or declaring `throws` in the method signature.
- **Unchecked Exceptions (`NullPointerException`, `IllegalArgumentException`)**: Subclasses of `RuntimeException` representing programming bugs.
- **`try-with-resources` (Java 7+)**: Automatically closes any resource implementing `AutoCloseable` in reverse declaration order.

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class ResourceDemo {
    public static String readFirstLine(Path path) throws IOException {
        try (BufferedReader reader = Files.newBufferedReader(path)) {
            return reader.readLine();
        }
    }
}
```
