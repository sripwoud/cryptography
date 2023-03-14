---
sidebar_position: 2
---

# Hash Function

A hash function is any function that can be used to map data of arbitrary size to fixed-size values, though there are some hash functions that support variable length output[^1].

[^1]: https://en.wikipedia.org/wiki/Hash_function

```mermaid
graph LR

A([Input <br><em>arbitrary length</em>]) -->B[Hash Function]
B --> C([Digest<br><em>Fixed length</em><br> <code>c87a56d54..</code>])
```

## Example
```commandline
openssl dgst -sha256 -binary -out digest.bin file.txt
```

## Security
- pre-image resistance/one-way: given a digest, it is infeasible to find a message that hashes to the digest.
  ```mermaid
    graph LR
    
    A([Digest]) -->B[Hash Function]
    B --> C([Input])
    B -.-> A
    C -.-> B
    linkStyle 2 stroke:red, stroke-dasharray: 5;
    linkStyle 3 stroke:red, stroke-dasharray: 5;
  ```
- second pre-image resistance: given an input and the corresponding digest, it is infeasible to find a different input that hashes to the same digest.
    ```mermaid
     graph LR
    
     A([Input]) -->B[Hash Function]
     B --> C([Digest])
     D([?]) -.-> B -.-> C([Digest])
     linkStyle 2 stroke:red, stroke-dasharray: 5;
     linkStyle 3 stroke:red, stroke-dasharray: 5;
    ```
- collision resistance: given a digest, it is infeasible to find two different messages that hash to it.
    ```mermaid
     graph LR
    
     A([?]) -->B[Hash Function]
     B --> C([Digest])
     D([?]) -.-> B -.-> C([Digest])
     linkStyle 0 stroke:red, stroke-dasharray: 5;
     linkStyle 1 stroke:red, stroke-dasharray: 5;
     linkStyle 2 stroke:red, stroke-dasharray: 5;
     linkStyle 3 stroke:red, stroke-dasharray: 5;
    ```
## Limitations / Security
:::caution
  **Length of input matters to avoid being able to find a second pre-image.**  
  If the input space is small, it becomes easy to iterate over it to find a pre-image for the digest.
:::

:::caution
  **Length of digest matters to avoid collisions.**  
  This is why it is recommended to use a hash function with a digest length of at least 256 bits in practice (to have security of $128 = \frac{256}{2}$ bits).
:::

