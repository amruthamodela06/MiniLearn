+++
title = "Inheritance"
weight = 3
+++

{{< complexity time="extends & super()" space="Single Class Hierarchy" level="Intermediate" >}}

## Single Inheritance (`extends`), `super`, and `final` Classes

Java supports **single class inheritance** (`class Dog extends Animal`) to avoid the Diamond Problem of stateful multiple inheritance, while allowing a class to implement **multiple interfaces**.

```java
public class Account {
    protected double balance;

    public Account(double initialBalance) {
        this.balance = initialBalance;
    }
}

public class SavingsAccount extends Account {
    private final double interestRate;

    public SavingsAccount(double initialBalance, double interestRate) {
        super(initialBalance);  // Must be the first statement in subclass constructor
        this.interestRate = interestRate;
    }

    public void applyInterest() {
        this.balance += this.balance * interestRate;
    }
}
```
