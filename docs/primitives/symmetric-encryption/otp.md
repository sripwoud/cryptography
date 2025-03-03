The one-time pad (OTP) is a symmetric-key encryption algorithm that relies on the bitwise XOR (exclusive-or) operation (written as ⊕) to "scramble" a message into a ciphertext.

```mermaid
graph LR

    PT([Plaintext<br><em>Length<code>L</code>]) --> XOR["⊕"]
    SK([Key<br><em>secret<br><em>Length<code>L</code>]) --> XOR
    XOR --> |encryption|C([Ciphertext<br><em>Length<code>L</code>])

    style SK fill:#f9f,stroke:#333,stroke-width:4px
```

```mermaid
graph RL

    SK([Key<br><em>secret<br><em>Length<code>L</code>]) --> XOR
    C([Ciphertext<br><em>Length<code>L</code>]) --> XOR["⊕"]
    XOR --> |decryption|PT([Plaintext<br><em>Length<code>L</code>])

    style SK fill:#f9f,stroke:#333,stroke-width:4px
```

## Limitations/Caveats

!> **The key must be random.** (uniform distribution)

!> **The key and plaintext must have the same length.**\
This is not a problem for small messages, but it becomes a problem for large messages. For example, if we want to encrypt a 1GB file, we need a 1GB key. This is not practical.

!> **The secret key must not be reused.** ("one-time")\
Because anyone who knows a plaintext and its ciphertext can reconstruct the key.\
Because anyone who knows 2 ciphertexts $C$ and $C'$ can deduce $C \oplus C' = M \oplus M'$, which leaks information about $M$ and $M'$ and can be enough to deduce $M$ or $M'$[^1].

[^1]: https://crypto.stackexchange.com/a/108
