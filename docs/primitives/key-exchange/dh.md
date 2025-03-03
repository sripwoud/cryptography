# DH

The Diffie-Hellman key exchange relies on the exponentation modulo a prime as a one way function:  
- it is easy to compute the exponent result of a number.
- but it is very hard[^1] ("intractable"[^2]) to go back to the original number fromt the result.  

## Protocol

1. Establish public parameters (often hardcoded in protocol standards)
   - pick a large prime $p$
   - another prime  $g$ (generator) such that $1 \lt g \lt p -1$.

2. Pick a random secret $a$ (private key) and compute $A = g^a \mod p$.
3. Pick a random secret $b$ (private key) and compute $B = g^b \mod p$.
4. Each party sends $A$ and $B$ to the other party.
5. Each party computes $A^b \mod p$ and $B^a \mod p$ and compares them to the received values.
6. If they match, the key exchange is successful.

## Limitations/Caveats

!> **Large primes**  
In "modern" cryptography, this means at least 2048 bits long (2048-bit RSA key, TLS 1.2...).

!> Diffie-Hellman is an **unauthenticated** key exchange.

[^1]: [Discrete Logarithm Problem](https://en.wikipedia.org/wiki/Discrete_logarithm)
[^2]: [Intractability](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability)
