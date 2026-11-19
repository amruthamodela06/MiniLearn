+++
title = "Mathematics (Prime Numbers, Sieve)"
weight = 43
+++

{{< complexity time="Primality O(√N) • Sieve O(N log log N)" space="O(N)" level="Fundamental" >}}

## Sieve of Eratosthenes (`O(N log log N)`)

Generates all prime numbers up to `N` by marking multiples of each prime `p` starting at `p * p`:

```python
def sieve_of_eratosthenes(n: int) -> list[int]:
    if n < 2:
        return []
    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False

    p = 2
    while p * p <= n:
        if is_prime[p]:
            for multiple in range(p * p, n + 1, p):
                is_prime[multiple] = False
        p += 1

    return [i for i, prime in enumerate(is_prime) if prime]
```

{{< callout type="tip" title="Why Start Marking at p * p?" >}}
Any smaller multiple `k * p` (with `2 <= k < p`) has a prime factor `<= k < p` and was already marked composite during an earlier iteration.
{{< /callout >}}
