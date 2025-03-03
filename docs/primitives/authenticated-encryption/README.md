# Authenticated Encryption

| Primitive                | Confidentiality | Integrity/Authenticity |
| :----------------------- | :-------------: | :--------------------: |
| Symmetric Encryption     |       ✅        |           ❌           |
| MAC                      |       ❌        |           ✅           |
| Authenticated Encryption |       ✅        |           ✅           |

[Symmetric encryption](/primitives/symmetric-encryption/) provides confidentiality, but not authenticity.\
[MACs](/primitives/mac/) provide authenticity, but not confidentiality.\
Authenticated Encryption is about combining both symmetric encryption and MACs primitives to achieve both confidentiality and authenticity.

The encryption of plaintext is done using a symmetric key.
The MAC is built using a separate symmetric key. This MAC is used to verify the authenticity of the ciphertext. So the ciphertext is authenticated: authenticated encryption.
