+++
title = "Syntax, Datatypes"
weight = 1
+++

{{< complexity time="JVM Bytecode + JIT" space="8 Primitives + Heap Objects" level="Beginner" >}}

## Java's 8 Primitive Data Types & Autoboxing

Unlike objects on the JVM heap, Java's **8 primitive types** are stored directly by value:

| Type | Size | Default | Wrapper Class |
|---|---|---|---|
| `byte` | 8-bit signed | `0` | `Byte` |
| `short` | 16-bit signed | `0` | `Short` |
| `int` | 32-bit signed | `0` | `Integer` |
| `long` | 64-bit signed | `0L` | `Long` |
| `float` | 32-bit IEEE 754 | `0.0f` | `Float` |
| `double` | 64-bit IEEE 754 | `0.0d` | `Double` |
| `char` | 16-bit UTF-16 code unit | `'\u0000'` | `Character` |
| `boolean` | 1 bit logical | `false` | `Boolean` |

```java
public class HelloMiniLearn {
    public static void main(String[] args) {
        int lessons = 160;
        double rating = 4.95;
        System.out.printf("MiniLearn: %d lessons (Rating: %.2f)%n", lessons, rating);
    }
}
```
