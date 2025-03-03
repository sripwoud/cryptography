:::caution
SHA-2 is not suited to hash secrets (not be used e.g. for MACs) because it is vulnerable to length extension attacks.
Indeed the secret/IV is only hashed once for the 1st round. One can use a previous digest and a new input to extend the hash to more data.
If you want to use SHA-2, you to somehow hash a secret at each block, which what HMAC does.
:::
