+++
title = "Encapsulation"
weight = 2
+++

{{< complexity time="O(1) Property Descriptor" space="O(1)" level="Intermediate" >}}

## Pythonic Encapsulation with `@property` Descriptors

Instead of verbose Java-style `getBalance()` / `setBalance()` methods, Python uses **naming conventions** (`_protected` and `__name_mangled`) paired with **`@property`** getters and validated setters:

```python
class BankAccount:
    def __init__(self, owner: str, initial_balance: float = 0.0):
        self.owner = owner
        self._balance = 0.0
        self.balance = initial_balance  # Triggers validated @balance.setter

    @property
    def balance(self) -> float:
        return self._balance

    @balance.setter
    def balance(self, amount: float) -> None:
        if amount < 0:
            raise ValueError("Account balance cannot be negative")
        self._balance = float(amount)
```

{{< callout type="tip" title="How Double-Underscore Name Mangling Works" >}}
An attribute named `__secret` inside class `Vault` is rewritten by the Python compiler to `_Vault__secret` to prevent accidental attribute collisions in subclasses.
{{< /callout >}}
