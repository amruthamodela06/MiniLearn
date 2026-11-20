+++
title = "Encapsulation"
weight = 2
+++

{{< complexity time="Access Modifiers" space="Private State" level="Beginner–Intermediate" >}}

## Access Visibility Matrix & Defensive Copying

| Modifier | Same Class | Same Package | Subclass (Other Pkg) | Everywhere |
|---|---|---|---|---|
| `private` | ✅ | ❌ | ❌ | ❌ |
| *(package-private)* | ✅ | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| `public` | ✅ | ✅ | ✅ | ✅ |

```java
import java.util.List;

public final class Enrollment {
    private final String studentId;
    private final List<String> tracks;

    public Enrollment(String studentId, List<String> tracks) {
        this.studentId = studentId;
        this.tracks = List.copyOf(tracks);  // Defensive unmodifiable copy
    }

    public List<String> getTracks() {
        return tracks;
    }
}
```
