+++
title = "Polymorphism"
weight = 4
+++

{{< complexity time="invokevirtual Dynamic Dispatch" space="Method Table" level="Intermediate" >}}

## Method Overloading vs Method Overriding (`@Override`)

In Java, **all non-`static`, non-`final`, non-`private` instance methods are polymorphic (`virtual`) by default**.

- **Overloading (Compile-Time)**: Same method name, different parameter list within the same class.
- **Overriding (Runtime `invokevirtual`)**: Subclass provides a specialized implementation of an inherited method with the exact same signature (or a covariant return type).

```java
public interface NotificationSender {
    void send(String recipient, String message);
}

public class EmailSender implements NotificationSender {
    @Override
    public void send(String recipient, String message) {
        System.out.println("Email to " + recipient + ": " + message);
    }
}
```
