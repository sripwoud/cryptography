# ECDH

Building on the previous [generalization framework](/primitives/key-exchange/#generalized-framework), the Elliptic Curve Diffie-Hellman key exchange uses:  

$$\begin{equation}\begin{aligned}
f: \mathbb{Z} &\rightarrow E(\mathbb{F_p}) \\
x &\rightarrow x.G
\end{aligned}\end{equation}$$

that is  the set of points on a chosen elliptic curve[^1] over a finite field $E(\mathbb{F}_p)$, of base point/generator $G$, equipped with the elliptic curve point addition.

<p align="center">
<img src="https://cdn.arstechnica.net/wp-content/uploads/2013/10/elliptic-curve-crypt-image01.gif" width="400" alt="point addition on anelliptic curve over a finite field">
</p>

## Protocol
1. Key generation:
    1. Alice chooses a secret scalar $a$ and computes her public key $A \equiv aG$.
    2. Bob chooses a secret scalar $b$ and computes his public key $B \equiv bG$.
2. Exchange  
    1. Alice sends $A$ to Bob.
    2. Bob sends $B$ to Alice.
3. Shared Secret Computation  
    1. Alice computes $S_A = aB$
    2. Bob computes $S_B = bA$

Indeed they will match because:
$$\begin{align}
S_A &= aB \\
&= a(bG) \\
&= a(bG) \\
&= (ab)G \text{ (}E(\mathbb{F_p}) \text{ is a group so point addition is associative}) \\
&= (ba)G \text{  (scalars multiplication is commutative)} \\
&= b(aG) \text{ (}E(\mathbb{F_p}) \text{ is a group so point addition is associative}) \\
&= bA \\
&= S_A
\end{align}$$

?> Curves used have been standardized[^2].  
Most applications (openssh, gnupg...) use [P-256](https://neuromancer.sk/std/nist/P-256) or [Curve25519](https://neuromancer.sk/std/other/Curve25519).

?> ECDH has much smaller keys than [DH](/primitives/key-exchange/dh).  
It needs 256-bit parameters to offer 128 bits of security.  

## Security
!> Similarly to DH being secured under the discrete logarithm assumption, ECDH is secure under the elliptic curve discrete logarithm problem (ECDLP) assumption.

!> ECDH is not post-quantum secure (because the ECDLP assumption is not).

!> Public keys need to be validate in order to protect against [small subgroup attacks](https://crypto.stackexchange.com/questions/3820/why-do-public-keys-need-to-be-validated).

## Limitations/Caveats

!> ECDH is an **unauthenticated** key exchange protocol.

[^1]: Points over a finite field (rather than real numbers) satisfying the equation $y^2 = x^3 + ax + b$ .
[^2]: [NIST SP 800-186](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-186.pdf)
