# AES-CBC-HMAC

One of the limitation of [AES-CBC](/primitives/symmetric-encryption/aes-cbc) is that it does not provide authenticity integrity/authenticity check.\
To prevent tampering of the ciphertext, we can use a [HMAC](/primitives/mac/hmac) to verify the integrity of the ciphertext.

This type of construction is also called _encrypt-then-MAC_

```mermaid
graph LR
    SK1([Symmetric Key 1<br><em>secret</em>]) --> CBC
    PT([Plaintext]) --> CBC[Cipher Block Chaining]
    IV([Initialization Vector]) --> CBC
    CBC --> C([Ciphertext<br><em>public</em>])
    C --> concat["➕ Concatenate"]
    IV --> concat
    concat --> HMAC[HMAC]
    SK2([Symmetric Key 2<br><em>secret</em>]) --> HMAC
    HMAC --> AT([Authenticated Ciphertext])

    style SK1 fill:#f9f,stroke:#333,stroke-width:4px
    style SK2 fill:#f9f,stroke:#333,stroke-width:4px
```

## Example

TODO

## Security

TODO

## Limitations/Caveats

TODO
