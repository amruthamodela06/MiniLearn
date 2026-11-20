+++
title = "Scanner, BufferedReader, FileWriter"
weight = 2
+++

{{< complexity time="8KB Buffer Cache" space="Buffered Character Streams" level="Intermediate" >}}

## `BufferedReader` vs `Scanner` & `BufferedWriter`

- **`Scanner`**: Convenient regex-based token parser (`nextInt()`, `nextLine()`), but slower due to regex overhead and smaller buffer (`1024` chars).
- **`BufferedReader`**: Uses an `8192`-character buffer and is significantly faster for line-by-line file and competitive programming I/O.

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedIoDemo {
    public static void copyUpperCase(String src, String dst) throws IOException {
        try (
            BufferedReader br = new BufferedReader(new FileReader(src));
            BufferedWriter bw = new BufferedWriter(new FileWriter(dst))
        ) {
            String line;
            while ((line = br.readLine()) != null) {
                bw.write(line.toUpperCase());
                bw.newLine();
            }
        }
    }
}
```
