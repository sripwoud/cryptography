# XOR

Symmetric-key encryption often relies on the bitwise XOR (exclusive-or) operation (written as
⊕)[^1].

|  A  |  B  | A ⊕ B |
| :-: | :-: | :---: |
|  0  |  0  |   0   |
|  0  |  1  |   1   |
|  1  |  0  |   1   |
|  1  |  1  |   0   |

Its properties are:

$x \oplus 0 = x$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_identity_\
$x \oplus x = 0$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_inverse_\
$x \oplus y = y \oplus x$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_commutativity_\
$(x \oplus y) \oplus z = x \oplus (y \oplus z)$&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_associativity_

From which follows a useful property:\
$x \oplus y \oplus x = x \oplus x \oplus y = 0 \oplus y =y$\
**Given $x \oplus y$, we can get $y$ back when knowing $x$**.

This is the basis of the [one-time pad](otp.md) encryption/decryption.

[^1]: https://textbook.cs161.org/crypto/symmetric.html#62-xor-review
