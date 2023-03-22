---
sidebar_position: 1
---

# Authenticated Encryption
[Symmetric encryption](../symmetric-encryption/intro) provides confidentiality, but not authenticity.  
[MACs](../mac/intro) provide authenticity, but not confidentiality.  
Authenticated Encryption is about combining both symmetric encryption and MACs primitives to achieve both confidentiality and authenticity. 

The encryption of plaintext is done using a symmetric key.
The MAC is built using a separate symmetric key. This MAC is used to verify the authenticity of the ciphertext. So the ciphertext is authenticated: authenticated encryption.



