Block ciphers are a type of **symmetric** and **deterministic** encryption algorithms that encrypt **fixed-length** blocks of data. Because the secret key does not need to share the same length as the plaintext and can be reused, they address some limitations of the [OTP](otp).\
More formally they are a bijective mapping:
$$
E: \{0,1\}^k \times \{0,1\}^n \rightarrow \{0,1\}^n
$$

$$
D: \{0,1\}^k \times \{0,1\}^n \rightarrow \{0,1\}^n
$$

Today the most popular block cipher implementation/specification is the [AES](aes).

## Limitations/Caveats

:::caution
**Can only encrypt/decrypt fixed-length blocks of data.**\
In practice different ways (modes of operation) exist to split a plaintext of arbitrary length into chunks on which a block cipher can individually be applied.
:::
