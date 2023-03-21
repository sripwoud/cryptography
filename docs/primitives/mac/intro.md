---
sidebar_position: 1
---

# MAC
In cryptography, a message authentication code (MAC), sometimes known as an authentication tag, is a short piece of information used for authenticating a message.
In other words, to confirm that the message came from the stated sender (its authenticity) and has not been changed.
The MAC value protects a message's data integrity, as well as its authenticity, by allowing verifiers (who also possess the secret key) to detect any changes to the message content.
```mermaid
graph LR

A([Secret Key <br><em>arbitrary length</em>]) -->C[MAC]
B([Message <br><em>arbitrary length</em>]) -->C[MAC]
C --> F([Authentication Tag<br><em>Fixed length</em><br> <code>d56d54...123</code>])
```
The point of the secret key is to avoid tampering with the tag. Indeed, using a pre-computed (received) hash an authentication proof is  not secure, as the hash function is not a secret:
```mermaid
graph LR

A1([X<br><em>public</em>]) -->B[Hash Function <br><em>public</em>]
A2([<s>X</s> Y<br><em>public</em>]) -->B[Hash Function <br><em>public</em>]
B --> C1([Hash])
B --> C2([Hash])
C1 --> D{=?}
C2 --> D2{=?}
user1[(hash X)] --> D
user2[(hash Y)] --> D2
D --> success1{{Authenticated as X}}
D2 --> success2{{Authenticated as Y}}

style A2 stroke: red;
style C2 stroke: red;
style user2 stroke: red;
style D2 stroke: red;
style success2 stroke: red;
linkStyle 1 stroke:red;
linkStyle 3 stroke:red;
linkStyle 5 stroke:red;
linkStyle 7 stroke:red;
linkStyle 9 stroke:red;

```

## Example
```bash
printf "%s" "value" | openssl sha256 -hmac "key"
```

## Application(s)
MAC can be used to provide a **trusted channel**.

## Security

## Limitations / Caveats

