---
layout: post
title: Coin Toss Problem
date: 2025-11-07 10:10:00
description: My notes for the Coin Toss Problem
tags: probability counting symmetry
categories: quant-finance-prep
related_posts: false
pretty_table: true
toc:
  sidebar: left
---

A note for the probability problem on Coin Toss Problem.

---

### Problem Statement
> Two gamblers are playing a coin toss game. Gambler $A$ has $(n+1)$  fair coins; $B$ has $n$ fair coins. What is the probability that $A$ will have more heads than $B$ if both flip all their coins?

---

### Personal Approach
In this section, I’ll describe my own approach to solving the problem. The idea is to apply basic counting methods from probability theory.

#### Simplified problem
To start, I simplified the problem by setting $n = 2$. In this case, gambler $A$ has 3 fair coins, while gambler $B$ has 2.

Let $h_A$, $h_B$ denote the number of heads obtained by $A$ and $B$ respectively. The goal is to find all possible pairs ($h_A$, $h_B$) that satisfy the following conditions:
- $h_A > h_B$
- $0 \leq h_A \leq n+1$
- $0 \leq h_B \leq n$

With the simplified setup ($n=2$), I listed all possible combinations of $h_A$ and $h_B$ in a table, where **each column corresponds to each $h_A$ value** and **each row corresponds to each $h_B$ value**:

|       | **0** |  **1**  |  **2**  |  **3**  |
|:-----:|:-----:|:-------:|:-------:|:-------:|
| **0** |       | $A$ win | $A$ win | $A$ win |
| **1** |       |         | $A$ win | $A$ win |
| **2** |       |         |         | $A$ win |

<br>
To interpret the table, take the cell where the $column = 1$ and the $row = 0$. This cell corresponds to ($h_A = 1$, $h_B = 0$), meaning gambler $A$ gets one head while gambler $B$ gets none. In this case, $A$ wins, so I labeled this cell as `A win`.

To find the probability that $A$ wins, we simply count all the cells labeled `A win` and divide by the total number of cells.

In this simplified case:
- The 1st row has 3 cells labeled `A win`.
- The 2nd row has 2 such cells.
- The 3rd row has 1 such cell.

In total, there are $3+2+1=6$ winning cells for $A$.
Since the table has $4 \times 3 = 12$ cells in total, the probability that $A$ has more heads than $B$ is:

$$
    \mathbb{P}(\text{$A$ wins}) = \frac{6}{12} = 0.5 = 50\%
$$

---

#### Generalised problem
With this intuition, we can now extend the reasoning to a general case with any arbitrary $n$.

From the pattern observed:
- The 1st row contains $n$ `A win` cells.
- The 2nd row contains $n-1$ `A win` cells.
- ...
- The $n^{th}$ row contains just $1$ `A win` cell.

Adding them together gives:

$$
    n+(n-1)+(n-1)+...+2+1 = \frac{n\times(n+1)}{2}
$$

The total number of cells in the table is $n\times(n+1)$.

Therefore, the probability that gambler $A$ gets more heads than $B$ is:

$$
    \mathbb{P}(\text{$A$ wins}) = \frac{\frac{n\times(n+1)}{2}}{n\times(n+1)} = \frac{1}{2}
$$

In conclusion, regardless of the number of coins, gambler $A$ always has a **$50\%$ chance** of getting more heads than gambler $B$.