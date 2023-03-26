---
sidebar_position: 5
title: CBC
---

# Cipher Block Chaining (CBC)
CBC recursively encrypts a plaintext by XORing it with the previous ciphertext block to randomize the encryption (and avoid the pitfall of e.g. the Electronic Codebook mode, see [ECB Penguin](https://words.filippo.io/the-ecb-penguin/)).  
This is done by first encrypting the IV with the key and then XORing the result with the first plaintext block.  
The result is then encrypted with the key and XORed with the second plaintext block.  
This process is repeated until the last plaintext block is reached.  
The last ciphertext block is then the ciphertext.

```mermaid
graph TD

pt([Plaintext<br><em>Chunk <code>1</code><br>Length<code>L</code></em>]) --> XOR["⊕"]
iv([IV<br><em>Length<code>L</code>]) --> XOR
XOR --> BCE(Block Cipher Encryption)
SK([Key]) --> BCE
BCE --> c([Ciphertext <br><em>Chunk <code>1</code></em>])
c --> XOR2["⊕"]
pt2([Plaintext<br><em>Chunk<code>2</code></em>]) --> XOR2
XOR2 --> BCE2(Block Cipher Encryption)
SK2([Key]) --> BCE2
BCE2 -.-> c2([Ciphertext <br><em>Chunk <code>N</code></em>])
c2 -.-> XOR3["⊕"]
pt3([Plaintext<br><em>Chunk <code>N</code></em>]) -.-> XOR3
XOR3 -.-> BCE3(Block Cipher Encryption)
SK3([Key]) --> BCE3
BCE3 -.-> c3([Ciphertext <br><em>Chunk <code>N</code></em>])
c --> res(["<code>Ciphertext1|...|Ciphertext N</code>"])
c2 --> res
c3 --> res

style SK fill:#f9f,stroke:#333,stroke-width:4px
style SK2 fill:#f9f,stroke:#333,stroke-width:4px
style SK3 fill:#f9f,stroke:#333,stroke-width:4px
```
---
```mermaid
graph TD

C1([Ciphertext<br><em>Chunk <code>1</code><br>Length<code>L</code></em>]) --> BCD1(Block Cipher Decryption)
BCD1 --> XOR1["⊕"]
IV([IV<br><em>Length<code>L</code>]) --> XOR1
SK1([Key]) --> BCD1
XOR1 --> pt1([Plaintext<br><em>Chunk <code>1</code></em>])
C2([Ciphertext<br><em>Chunk <code>2</code></em>]) --> BCD2(Block Cipher Decryption)
BCD2 --> XOR2["⊕"]
C1 --> XOR2
SK2([Key]) --> BCD2
XOR2 --> pt2([Plaintext<br><em>Chunk <code>2</code></em>])
SK3([Key]) -.-> BCD3
C3([Ciphertext<br><em>Chunk <code>N</code></em>]) -.-> BCD3(Block Cipher Decryption)
BCD3 -.-> XOR3["⊕"]
C2 -.-> XOR3
XOR3 -.-> pt3([Plaintext<br><em>Chunk <code>N</code></em>])

pt1 --> res(["<code>Plaintext1|...|Plaintext N</code>"])
pt2 --> res
pt3 --> res

style SK1 fill:#f9f,stroke:#333,stroke-width:4px
style SK2 fill:#f9f,stroke:#333,stroke-width:4px
style SK3 fill:#f9f,stroke:#333,stroke-width:4px
```