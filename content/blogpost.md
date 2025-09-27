# Introduction

The foundations of modern cryptography rest upon a remarkable paradigm shift: moving from Shannon's perfect secrecy to computational security. While Shannon's 1949 work established the mathematical foundations of perfect secrecy, it also revealed a fundamental limitation - the key length must be at least as long as the message. This constraint, while theoretically elegant, severely limited practical applications.

Goldwasser and Micali's seminal work in the 1980s revolutionized this landscape by introducing three crucial relaxations that would become the cornerstone of modern cryptographic constructions:

1. Restriction to polynomial-time adversaries, acknowledging that real-world attackers are computationally bounded
2. Acceptance of negligible success probabilities, replacing perfect security with computational security
3. Adoption of asymptotic analysis through security parameters, enabling scalable security definitions

These relaxations enabled a new framework where security could be based on computational assumptions rather than information-theoretic guarantees. Consider the contrast:

Shannon: ∀A: Pr[A breaks scheme] = 0
GM: ∀A ∈ PPT: Pr[A breaks scheme] ≤ negl(λ)

This transition fundamentally changed how we construct secure systems, leading to practical primitives like pseudorandom functions, public-key encryption, and zero-knowledge proofs.

# Polynomial-Time Adversaries

## Security Game Framework

Consider a PRF F_k: {0,1}^n → {0,1}^n with key k ∈ {0,1}^λ. The standard security game PRF_A(λ) proceeds as:

1. Challenger samples k ← {0,1}^λ, f ← Func_n
2. Samples bit b ← {0,1}
3. If b = 0: A gets oracle access to F_k
4. If b = 1: A gets oracle access to f
5. A outputs guess b'

### Algorithm: PRF Security Game PRF_A(λ)

Input: Security parameter λ

1. k ← {0,1}^λ, f ← Func_n
2. b ← {0,1}
3. If b = 0:
   - Give A oracle access to F_k
4. Else:
   - Give A oracle access to f
5. Receive guess b' from A

## Unbounded Adversary Analysis

Without polynomial-time restriction, consider this attack strategy:

1. Construct table T where T[x] = F_k(x) for all x ∈ {0,1}^n
2. Query oracle O on chosen input x
3. If ∃k such that T[x] matches all queries: output 0
4. Otherwise: output 1

### Algorithm: Exponential-time Attack Strategy

Input: Oracle access to O
Output: Bit b'

1. Construct table T where T[x] = F_k(x) for all x ∈ {0,1}^n
2. Query oracle O on chosen input x
3. If ∃k: T[x] matches all queries:
   - Return 0
4. Else:
   - Return 1

This achieves advantage 1 - 2^(-λ) but requires O(2^n) time and space.

## Uniform vs Non-uniform Adversaries

We distinguish between two types of polynomial-time adversaries:

- **Uniform PPT**: A probabilistic polynomial-time Turing machine A that runs in time p(λ) for some polynomial p. The same algorithm works for all input lengths.

- **Non-uniform PPT** (P/poly): A sequence of circuits {C*λ}*λ∈ℕ where:
  - |C_λ| ≤ p(λ) for some polynomial p
  - Each C_λ may have hardwired advice specific to input length λ

**Implications:**

1. Non-uniform adversaries can have different strategies for each input length
2. They can incorporate preprocessed information about the security parameter
3. Most modern cryptographic schemes require security against non-uniform adversaries
4. Example: PRF security against non-uniform adversaries implies security against preprocessing attacks

With either type of poly-time restriction:

- Queries limited to q = poly(λ)
- Storage bounded by poly(λ) bits
- Advantage must be negligible: Adv^PRF_A(λ) ≤ negl(λ)

[Continued in next part due to length...]
Would you like me to continue with the remaining sections? I can help convert the sections on Negligible Success Probability and Asymptotic Security as well. I've maintained the mathematical notation while making it readable in Markdown format. We could also explore using MathJax or KaTeX syntax if you need more precise mathematical formatting. CopyRetrySYes, I am using mathjax, sorryEditAh excellent, let me help you convert this with proper MathJax formatting. This is a fundamental text in computational security - let's render it properly.
markdownCopy# Introduction

The foundations of modern cryptography rest upon a remarkable paradigm shift: moving from Shannon's perfect secrecy to computational security. While Shannon's 1949 work established the mathematical foundations of perfect secrecy, it also revealed a fundamental limitation - the key length must be at least as long as the message. This constraint, while theoretically elegant, severely limited practical applications.

Goldwasser and Micali's seminal work in the 1980s revolutionized this landscape by introducing three crucial relaxations that would become the cornerstone of modern cryptographic constructions:

1. Restriction to polynomial-time adversaries, acknowledging that real-world attackers are computationally bounded
2. Acceptance of negligible success probabilities, replacing perfect security with computational security
3. Adoption of asymptotic analysis through security parameters, enabling scalable security definitions

These relaxations enabled a new framework where security could be based on computational assumptions rather than information-theoretic guarantees. Consider the contrast:

$$ \text{Shannon: } \forall \mathcal{A}: \Pr[\mathcal{A} \text{ breaks scheme}] = 0 $$
$$ \text{GM: } \forall \mathcal{A} \in \mathsf{PPT}: \Pr[\mathcal{A} \text{ breaks scheme}] \leq \mathsf{negl}(\lambda) $$

# Polynomial-Time Adversaries

## Security Game Framework

Consider a PRF $F_k: \{0,1\}^n \rightarrow \{0,1\}^n$ with key $k \in \{0,1\}^\lambda$. The standard security game $\mathsf{PRF}_{\mathcal{A}}(\lambda)$ proceeds as:

1. Challenger samples $k \leftarrow \{0,1\}^\lambda$, $f \leftarrow \mathsf{Func}_n$
2. Samples bit $b \leftarrow \{0,1\}$
3. If $b = 0$: $\mathcal{A}$ gets oracle access to $F_k$
4. If $b = 1$: $\mathcal{A}$ gets oracle access to $f$
5. $\mathcal{A}$ outputs guess $b'$

### Algorithm: PRF Security Game $\mathsf{PRF}_{\mathcal{A}}(\lambda)$

**Input**: Security parameter $\lambda$

1. $k \leftarrow \{0,1\}^\lambda$, $f \leftarrow \mathsf{Func}_n$
2. $b \leftarrow \{0,1\}$
3. If $b = 0$:
   - Give $\mathcal{A}$ oracle access to $F_k$
4. Else:
   - Give $\mathcal{A}$ oracle access to $f$
5. Receive guess $b'$ from $\mathcal{A}$

## Unbounded Adversary Analysis

Without polynomial-time restriction, consider this attack strategy:

1. Construct table $T$ where $T[x] = F_k(x)$ for all $x \in \{0,1\}^n$
2. Query oracle $\mathcal{O}$ on chosen input $x$
3. If $\exists k$ such that $T[x]$ matches all queries: output 0
4. Otherwise: output 1

This achieves advantage $1 - 2^{-\lambda}$ but requires $O(2^n)$ time and space.

## Uniform vs Non-uniform Adversaries

We distinguish between two types of polynomial-time adversaries:

- **Uniform PPT**: A probabilistic polynomial-time Turing machine $\mathcal{A}$ that runs in time $p(\lambda)$ for some polynomial $p$. The same algorithm works for all input lengths.

- **Non-uniform PPT** ($\mathsf{P}/\mathsf{poly}$): A sequence of circuits $\{\mathcal{C}_\lambda\}_{\lambda \in \mathbb{N}}$ where:
  - $|\mathcal{C}_\lambda| \leq p(\lambda)$ for some polynomial $p$
  - Each $\mathcal{C}_\lambda$ may have hardwired advice specific to input length $\lambda$

**Implications:**

1. Non-uniform adversaries can have different strategies for each input length
2. They can incorporate preprocessed information about the security parameter
3. Most modern cryptographic schemes require security against non-uniform adversaries
4. Example: PRF security against non-uniform adversaries implies security against preprocessing attacks

With either type of poly-time restriction:

- Queries limited to $q = \mathsf{poly}(\lambda)$
- Storage bounded by $\mathsf{poly}(\lambda)$ bits
- Advantage must be negligible: $\mathsf{Adv}^{\mathsf{PRF}}_{\mathcal{A}}(\lambda) \leq \mathsf{negl}(\lambda)$

# Negligible Success Probability

## Formal Definition

A function $\epsilon: \mathbb{N} \rightarrow \mathbb{R}^+$ is negligible if for every polynomial $p$:

$$ \exists n_0 \in \mathbb{N}: \forall n > n_0: \epsilon(n) < \frac{1}{p(n)} $$

## Why Not "Almost Zero"?

Consider these candidate success probabilities:

1. $\epsilon_1(n) = 2^{-n}$ (negligible)
2. $\epsilon_2(n) = \frac{1}{n^{\log n}}$ (negligible)
3. $\epsilon_3(n) = \frac{1}{n^2}$ (negligible)
4. $\epsilon_4(n) = \frac{1}{\log n}$ (not negligible)

## Analysis of Negligible Functions

For polynomial $p(n)$:

- $\epsilon_1(n) = 2^{-n}$: Negligible since $2^{-n} < \frac{1}{n^c}$ for any constant $c$ and large enough $n$
- $\epsilon_2(n) = \frac{1}{n^{\log n}}$: Negligible as it decreases faster than any polynomial
- $\epsilon_3(n) = \frac{1}{n^2}$: Negligible as $\frac{1}{n^2} < \frac{1}{n^c}$ for $c \leq 2$
- $\epsilon_4(n) = \frac{1}{\log n}$: Not negligible as $p(n) = n$ gives $\frac{1}{\log n} > \frac{1}{n}$ infinitely often

## Composition and Amplification

Key property: Polynomial repetition of negligible probability remains negligible.

**Theorem (Composition)**: If $\epsilon(n)$ is negligible and $p(n)$ is polynomial, then $p(n)\epsilon(n)$ is negligible.

**Proof Sketch**: Given polynomial $q(n)$, choose $p'(n) = p(n)q(n)$. Since $\epsilon(n) < \frac{1}{p'(n)}$ for large enough $n$:

$$ p(n)\epsilon(n) < \frac{p(n)}{p(n)q(n)} = \frac{1}{q(n)} $$
