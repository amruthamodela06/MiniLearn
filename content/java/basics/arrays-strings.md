+++
title = "Arrays, Strings"
weight = 4
+++

{{< complexity time="Array Access O(1) • StringBuilder Append O(1)" space="O(N)" level="Beginner–Intermediate" >}}

## Immutable `String`, String Pool, and `StringBuilder`

In Java, `String` objects are **immutable**. String literals (`"MiniLearn"`) are interned in the JVM **String Constant Pool**.
- Always compare string contents with **`s1.equals(s2)`**, never `s1 == s2` (which compares object reference addresses).
- Use **`StringBuilder`** for `O(N)` mutable string assembly inside loops.

```java
import java.util.Arrays;

public class ArrayStringDemo {
    public static String buildCsv(int[] scores) {
        Arrays.sort(scores);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < scores.length; i++) {
            if (i > 0) sb.append(", ");
            sb.append(scores[i]);
        }
        return sb.toString();
    }
}
```

{{< quiz question="Why should you use s1.equals(s2) instead of s1 == s2 when comparing two String objects in Java?" options="== causes a compile-time error on Strings|== compares memory reference addresses, whereas .equals() compares the actual character sequences|equals() is O(1) while == is O(N)|== only works on integers" answer="1" explanation="In Java, == on reference types checks whether both variables point to the exact same heap object, not whether their character contents match." >}}
