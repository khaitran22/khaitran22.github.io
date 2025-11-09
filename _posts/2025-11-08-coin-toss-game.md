---
layout: post
title: Coin Toss Problem
date: 2025-11-07 10:10:00
description: My notes for the Coin Toss Problem
tags: probability counting symmetry
categories: prob-and-stats
related_posts: false
pretty_table: true
toc:
  sidebar: left
---

A note for the probability problem on **Coin Toss Problem** from the *A Practical Guide to Quantitative Finance Interviews* by Xinfeng Zhou.

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

---

### Standard Approach

Another way to solve this problem is by leveraging the **symmetry** of the setup.

Notice that the extra coin is what makes gambler $ A $ different from gambler $ B $. If we remove that extra coin, both gamblers become symmetric, which makes the analysis much simpler.

Now, if both $ A $ and $ B $ have the same $ n $ fair coins, there are three possible outcomes:

- $ S_1 $: $ h_A^n > h_B $
- $ S_2 $: $ h_A^n = h_B $
- $ S_3 $: $ h_A^n < h_B $

where $ h_A^n $ denotes the number of heads obtained by gambler $ A $ **after removing the extra coin**.

By symmetry, we have:

$$
\mathbb{P}(S_1) = \mathbb{P}(S_3)
$$

Let:

$$
\mathbb{P}(S_1) = \mathbb{P}(S_3) = x, \quad \mathbb{P}(S_2) = y
$$

Since these are all the possible outcomes:

$$
\mathbb{P}(S_1) + \mathbb{P}(S_2) + \mathbb{P}(S_3) = 2x + y = 1
$$

If either $ S_1 $ or $ S_3 $ occurs, gambler $ A $ will either **definitely win** or **definitely lose**, respectively, regardless of the extra coin.

However, if $ S_2 $ occurs, the outcome depends on the extra coin. In this case, gambler $ A $ wins if the extra coin shows heads. Since it’s a fair coin, this happens with probability $ 0.5 $. Therefore, the probability of $ A $ winning in this scenario is $ 0.5y $.

Putting it all together, the total probability that $ A $ wins is:

$$
    x + 0.5y = x + 0.5(1 - 2x) = \frac{1}{2}
$$

**Conclusion:**  
The result is the same as before — gambler $ A $ has a **50% chance** of getting more heads than gambler $ B $.

---

### Simulation in Python
To verify the analytical result, we can run a simple simulation in Python as shown below:

``` python
import numpy as np

def run_simulation(n, num_simulations):
    """
    Runs a simulation by looping 'num_simulations' times.
    """
    A_win_times = 0

    for _ in range(num_simulations):
        # Generate coin flips (1 = Heads, 0 = Tails)
        # Gambler A has n+1 coins, Gambler B has n coins
        A_coins = np.random.randint(0, 2, size=n + 1)
        B_coins = np.random.randint(0, 2, size=n)

        # Count the number of heads
        A_heads = np.sum(A_coins)
        B_heads = np.sum(B_coins)

        if A_heads > B_heads:
            A_win_times += 1

    # Return the calculated probability
    return A_win_times / num_simulations

def main():
    """
    Main function to set parameters and print results.
    """
    # Parameters
    n_coins = 10000
    simulation_times = 100000

    print(f"Running {simulation_times:,} simulations...")
    print(f"Gambler A has {n_coins + 1} coins.")
    print(f"Gambler B has {n_coins} coins.\n")

    # Run simulation
    win_probability = run_simulation(n_coins, simulation_times)

    print(f"Probability of A winning: {win_probability:.4f}")

# Standard Python entry point
if __name__ == "__main__":
    main()
```

When running this script, the output is:
```
Running 100,000 simulations...
Gambler A has 10,001 coins.
Gambler B has 10,000 coins.

Probability of A winning: 0.50003
```

As expected, the simulation confirms that gambler $A$ has roughly a $50\%$ chance of getting more heads than gambler $B$.