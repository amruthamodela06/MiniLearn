+++
title = "Abstraction"
weight = 5
+++

{{< complexity time="Contract Driven Design" space="Decoupled Architecture" level="Intermediate" >}}

## Hiding Implementation Details Behind Abstract Contracts

**Abstraction** separates *what* an object does (its public method contract) from *how* it accomplishes it (its internal data structures and algorithms).

```java
public abstract class PaymentProcessor {
    // Template Method Pattern: concrete workflow calling abstract hook
    public final boolean process(double amount) {
        if (amount <= 0) return false;
        return executeCharge(amount);
    }

    protected abstract boolean executeCharge(double amount);
}
```
