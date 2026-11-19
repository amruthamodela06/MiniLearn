+++
title = "Mathematics (Modular Arithmetic)"
weight = 44
+++

{{< complexity time="Mod Exp O(log E)" space="O(1)" level="Intermediate" >}}

## Modular Arithmetic & Binary Exponentiation

To prevent integer overflow in combinatorics and cryptography, compute results modulo `M = 10^9 + 7`:

- `(a + b) mod M = ((a mod M) + (b mod M)) mod M`
- `(a * b) mod M = ((a mod M) * (b mod M)) mod M`
- **Modular Inverse (Fermat's Little Theorem for Prime `M`)**: `a^(-1) ≡ a^(M - 2) (mod M)`

```python
def mod_pow(base: int, exp: int, mod: int = 1_000_000_007) -> int:
    result = 1
    base %= mod
    while exp > 0:
        if exp & 1:
            result = (result * base) % mod
        base = (base * base) % mod
        exp >>= 1
    return result


def mod_inverse(a: int, prime_mod: int = 1_000_000_007) -> int:
    return mod_pow(a, prime_mod - 2, prime_mod)
```
