+++
title = "Control Flow"
weight = 3
+++

{{< complexity time="Branching & Loops" space="O(1)" level="Beginner" >}}

## Enhanced `for-each` Loops & Modern Java 14+ `switch` Expressions

Java 14+ introduced arrow `switch` expressions (`case X -> ...`) that return values directly and cannot accidentally fall through!

```java
public class ControlFlowDemo {
    public static String describeDay(String day) {
        return switch (day.toUpperCase()) {
            case "MON", "TUE", "WED", "THU", "FRI" -> "Weekday Sprint";
            case "SAT", "SUN" -> "Weekend Deep Dive";
            default -> throw new IllegalArgumentException("Invalid day: " + day);
        };
    }

    public static int sumArray(int[] nums) {
        int total = 0;
        for (int x : nums) {
            total += x;
        }
        return total;
    }
}
```
