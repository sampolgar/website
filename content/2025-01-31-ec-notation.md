# Additive vs. Multiplicative Notation in Elliptic Curve Cryptography

Working with Elliptic Curve Crypto, there are 2 (main) different notations - additive and multiplicative, representing different ways to think about group operations. Which one is better? We'll see the difference and identify which one is better for which protocol.

## TLDR: Side-by-Side Comparison

| Operation           | Additive Notation   | Multiplicative Notation   | Meaning                                   |
| ------------------- | ------------------- | ------------------------- | ----------------------------------------- |
| Group Operation     | $P + Q$             | $g \cdot h$               | Combine two group elements                |
| Scalar Action       | $[k]P$              | $g^k$                     | Add $P$ to itself $k$ times               |
| Identity Element    | $\mathcal{O}$       | $1$                       | Neutral element                           |
| Inverse             | $-P$                | $g^{-1}$ or $\frac{1}{g}$ | Element that gives identity when combined |
| Pedersen Commitment | $[r]H + [m]G$       | $h^r \cdot g^m$           | Hiding and binding commitment             |
| Pairing             | $e([a]G_1, [b]G_2)$ | $e(g^a, h^b)$             | Bilinear map evaluation                   |

## Understanding Scalar Operations

### In Additive Notation

When we write $[k]P$, we're literally describing:
$P + P + ... + P$ ($k$ times)

For example, $[3]P = P + P + P$

This matches the geometric intuition of point addition on elliptic curves. When we compute $[k]P$, we're performing $k-1$ point additions.

### In Multiplicative Notation

When we write $g^k$, we're using notation from finite field multiplication, but it represents the same operation:
$g \cdot g \cdot ... \cdot g$ ($k$ times)

For example:

- $g^3 = g \cdot g \cdot g$
- $g^x \cdot g^y = g^{x+y}$ (because $(g \cdot g \cdot ... \cdot g) \cdot (g \cdot g \cdot ... \cdot g) = g^{x+y}$)

To understand this intuitively, consider regular integers:

- $2^3 \cdot 2^4 = (2 \cdot 2 \cdot 2) \cdot (2 \cdot 2 \cdot 2 \cdot 2) = 2^7$

## Group Structure and Fields

### Additive Groups ($\mathbb{G}_1, \mathbb{G}_2$)

- Elements are points on elliptic curves
- Operations are geometric point additions
- Scalar multiplication is repeated addition

### Multiplicative Target Group ($\mathbb{G}_T$)

- Elements are in a finite field
- Operations are field multiplications
- Exponentiation is repeated multiplication

$$
P \in E(\F_p): y^2 = x^3 + ax + b
$$

### Pairing Maps

$e: \mathbb{G}_1 \times \mathbb{G}_2 \rightarrow \mathbb{G}_T$

In additive notation:
$e([a]P, [b]Q) = [ab]P_T$

In multiplicative notation:
$e(g^a, h^b) = g_T^{ab}$

## Inverse Operations and Their Representations

### Additive Group Inverses

In additive notation, inverse operations are geometrically intuitive:

- $-P$ represents the reflection of point $P$ over the x-axis
- $-[x]G = [-x]G$ represents scalar multiplication by the negative value
- For any point $P$: $P + (-P) = \mathcal{O}$ (the point at infinity)

This matches the geometric interpretation on elliptic curves where inverse points sum to infinity.

### Multiplicative Group Inverses

In multiplicative notation, we have equivalent concepts expressed differently:

- $g^{-1}$ or $\frac{1}{g}$ represents the group inverse of $g$
- $g^{-x}$ or $\frac{1}{g^x}$ represents exponentiation by the negative value
- For any element $g$: $g \cdot g^{-1} = 1$ (the multiplicative identity)

### Comparing Inverse Operations

Consider scalar multiplication by $x$ followed by $-x$:

Additive Notation:
$[x]G + [-x]G = [x-x]G = [0]G = \mathcal{O}$

Multiplicative Notation:
$g^x \cdot g^{-x} = g^{x-x} = g^0 = 1$

## Pedersen Commitments and Homomorphic Properties

### Additive Notation

Basic commitment:
$\mathsf{cm} = [r]H + [m]G$

Homomorphic addition of commitments:
$\mathsf{cm}_1 + \mathsf{cm}_2 = ([r_1]H + [m_1]G) + ([r_2]H + [m_2]G)$
$= [r_1 + r_2]H + [m_1 + m_2]G$

Rerandomization with $r_\Delta$:
$\mathsf{cm}' = \mathsf{cm} + [r_\Delta]H = [r + r_\Delta]H + [m]G$

### Multiplicative Notation

Basic commitment:
$\mathsf{cm} = h^r \cdot g^m$

Homomorphic addition (via multiplication):
$\mathsf{cm}_1 \cdot \mathsf{cm}_2 = (h^{r_1} \cdot g^{m_1}) \cdot (h^{r_2} \cdot g^{m_2})$
$= h^{r_1 + r_2} \cdot g^{m_1 + m_2}$

Rerandomization with $r_\Delta$:
$\mathsf{cm}' = \mathsf{cm} \cdot h^{r_\Delta} = h^{r + r_\Delta} \cdot g^m$

## Generator Representations in Both Worlds

### Additive Setting

For groups $\mathbb{G}_1, \mathbb{G}_2$:

- Base generators: $G_1 \in \mathbb{G}_1$, $G_2 \in \mathbb{G}_2$
- Multiple generators: $G_1, G_2, ..., G_n \in \mathbb{G}_1$
- Commitment key: $(H, G_1, ..., G_n)$

### Multiplicative Setting

For groups $\mathbb{G}_1, \mathbb{G}_2$:

- Base generators: $g_1 \in \mathbb{G}_1$, $g_2 \in \mathbb{G}_2$
- Multiple generators: $g_1, g_2, ..., g_n \in \mathbb{G}_1$
- Commitment key: $(h, g_1, ..., g_n)$

## Advantages of Each Notation

### Additive Notation (+)

- Mirrors the geometric nature of elliptic curves
- Makes scalar quantities visually prominent
- Clearer for understanding point arithmetic
- Better for implementing curve operations

### Multiplicative Notation (×)

- More compact for complex expressions
- Natural for pairing-based cryptography
- Familiar from classical cryptography
- Simpler for showing homomorphic properties

# Examples from papers

## Creative Notations in Academic Literature

### Example: PLONK's SRS Notation System

The PLONK paper uses a hybrid notation where $[x]_1$ and $[x]_2$ denotes elements $x \cdot g_1 \in \mathbb{G}_1$ and $x \cdot g_2 \in \mathbb{G}_2$. It handles additive notation nicely when there are longer strings of generators like a structured reference string.

| Concept                         | PLONK Notation                      | Standard Additive                 | Standard Multiplicative         |
| ------------------------------- | ----------------------------------- | --------------------------------- | ------------------------------- |
| $\mathbb{G}_1$                  | $[x]_1$                             | $[x]G_1$                          | $g_1^x$                         |
| $\mathbb{G}_2$                  | $[x]_2$                             | $[x]G_2$                          | $g_2^x$                         |
| Vector of powers $\mathbb{G}_1$ | {$[x^i]_1$} ${i\leq d}$             | $\\{[x^i]G_1\\}_{i\leq d}$        | $\\{g_1^{x^i}\\}_{i\leq d}$     |
| Pairing check                   | $e([x]_1, [1]_2) = e([1]_1, [x]_2)$ | $e([x]G_1, G_2) = e(G_1, [x]G_2)$ | $e(g_1^x, g_2) = e(g_1, g_2^x)$ |

### Key Insights

- The subscript notation $_1, _2$ provides immediate group context without needing to specify generators
- This becomes particularly powerful when dealing with polynomial commitments where you have many powers of the same element

## Case Study: Strengths and Limitations of PLONK-style Notation

### Advantage: Polynomial Commitments and Power Series

When working with polynomial commitments or structured reference strings, PLONK's notation shines. Consider a commitment to a polynomial of degree d:

Standard multiplicative:
$\prod_{i=0}^d (g^{\tau^i})^{a_i}$ where $a_i$ are the polynomial coefficients. Notice the exponents are the important things and pretty hard to see

Standard additive:
$\sum_{i=0}^d [a_i\tau^i]G$

PLONK style:
$\sum_{i=0}^d a_i[\tau^i]_1$ or simply $[p(\tau)]_1$

The elegance becomes even more apparent when expressing KZG opening proofs:

PLONK style:
$e([p(τ)]_1 - [y]_1, [1]_2) = e([π]_1, [x-τ]_2)$

Standard:
$e(p(τ)G_1 - [y]G_1, G_2) = e(πG_1, [x]G_2 - [τ]G_2)$

### Limitation: Multi-Generator Commitments

However, when dealing with schemes with different generators like e.g. Pedersen Commitment Schemes, the notation isn't as clean, e.g. a Pedersen vector commitment:

Standard multiplicative (clean):
$g_1^{m_1}g_2^{m_2}g_3^{m_3}h^r$

Standard additive (clean):
$[m_1]G_1 + [m_2]G_2 + [m_3]G_3 + [r]H$

PLONK style (awkward):
$$[m_1]_{g1} + [m_2]_{g2} + [m_3]_{g3} + [r]_h$$
(Note: This isn't even standard - we'd need to invent new subscript notation)

### Real-World Example from Vector Commitments

Consider the opening proof for a vector commitment where each position has a distinct generator. In your standard Pedersen-style commitment:

Multiplicative (natural):
$\mathsf{proof} = \prod_{i=1}^n g_i^{m_i} \cdot h^r$

PLONK style would require something like:
$\mathsf{proof} = \sum_{i=1}^n [m_i]_{gi} + [r]_h$

This clearly shows why papers like Groth16 and Bulletproofs stick to multiplicative notation for their vector commitments, while papers focused on polynomial commitments (like PLONK, Marlin, etc.) often prefer the bracket notation.

The key insight here, which I believe Jens Groth articulated well in his 2016 work, is that notation should serve the mathematical structure of your protocol. When your protocol primarily deals with powers of a single generator, PLONK-style notation is elegant. When you're working with vector commitments or multiple independent generators, traditional multiplicative or additive notation is often clearer.
