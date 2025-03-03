---
sidebar_position: 6
title: AES
---

# Advanced Encryption Standard (AES)

The Advanced Encryption Standard (original name Rijndael) is Block Cipher implementation specified by the U.S. National Institute of Standards and Technology (NIST) in 2001[^1].

```mermaid
graph LR

    PT([Plaintext<br><em>128 bits</em>]) --> AES[AES]
    SK(["Key<br><em>secret<br>128|192|256 bits</em>"]) --> AES
    AES --> |encryption|C([Ciphertext<br><em>128 bits</em>])
    
    style SK fill:#f9f,stroke:#333,stroke-width:4px
```

Under the hood, AES uses a round function composed of 4 steps to encrypt a block of data. The round function is applied 10, 12 or 14 times depending on the key size.

```mermaid
flowchart LR
    sk([Key])--> xor
    sk([Key])--> rf1
    sk([Key])--> rf2
    pt([Plaintext])--> sb
    subgraph rf [Round Function]
        sb[SubBytes]-->sr[ShiftRows]-->mc[MixColumns]--> xor(["⊕"]) -->ad[AddRoundKey]
    end
    ad --> rf1
    rf1[Round Function] -.-> rf2[Round Function]
    rf2 --> cipher(Ciphertext)

    style sk fill:#f9f,stroke:#333,stroke-width:4px
    style rf1 fill:#ffffde,stroke:#aaaa33
    style rf2 fill:#ffffde,stroke:#aaaa33
```

## Limitations/Caveats

:::caution
**Is a block cipher**.\
As-is it can only encrypt/decrypt fixed-length blocks of data. So a block cipher mode of operation must be applied for it to become an encryption/decryption algorithm applicable to messages of arbitrary length.
:::

[^1]: https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf
