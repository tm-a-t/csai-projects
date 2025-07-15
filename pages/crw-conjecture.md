---
title: "Toward Better Depth Lower Bounds: Composition of Boolean Functions and the KRW Conjecture"
term: Spring 2025
type: Diploma Project
mentors: [ Alexander S. Kulikov, Ivan Mihajlin ]
students: [ Nikolai Chukhin ]
keywords: [ complexity, formula complexity, lower bounds ]
picture: /assets/composition.png
pictureAlt: 
---

Proving formula depth lower bounds is a&nbsp;fundamental challenge in&nbsp;complexity theory, with the strongest known bound of roughly $3\log n$ established by Håstad over 25 years ago. The Karchmer--Raz--Wigderson (KRW) conjecture offers a&nbsp;promising approach to&nbsp;advance these bounds and separate
$\mathsf{P}$&nbsp;from&nbsp;$\mathsf{NC}^{1}$. It&nbsp;suggests that the depth complexity of a&nbsp;function composition
$f \diamond g$ approximates the sum of the depth complexities of $f$&nbsp;and&nbsp;$g$.

The Karchmer--Wigderson (KW) relation framework translates formula depth into communication complexity, restating the KRW conjecture as $\mathsf{CC}(\mathsf{KW}_f \diamond \mathsf{KW}_g) \approx \mathsf{CC}(\mathsf{KW}_f) + \mathsf{CC}(\mathsf{KW}_g)$. Prior work has confirmed the conjecture under various relaxations, often replacing one or both KW relations with the universal relation or constraining the communication game through strong composition.

The goal of&nbsp;this project is to&nbsp;resolve the KRW&nbsp;conjecture in&nbsp;the setting where the outer function is&nbsp;simple (for example,&nbsp;$\mathsf{XOR}$).

## Report

In this work, we examine the strong composition $\mathsf{KW}_{\mathsf{XOR}} \mathbin{\bigcirc\mkern-13.5mu\ast} \mathsf{KW}_f$ of the parity function and a&nbsp;random Boolean function&nbsp;$f$.
During the project, we &nbsp;proved that with probability $1-o(1)$, any protocol solving this composition requires at&nbsp;least $n^{3 - o(1)}$ leaves (almost matching the upper bound). This result establishes a&nbsp;depth lower bound of $\approx 3\log n$, matching Håstad's bound, but is&nbsp;applicable to a&nbsp;broader class of&nbsp;inner functions, even when the outer function is simple.
While strong composition bounds do&nbsp;not directly yield formula depth bounds, they are often instrumental in analyzing the standard composition (of the corresponding two functions), which directly relates to formula depth.

Our proof utilizes formal complexity measures. First, we apply Khrapchenko's method to&nbsp;show that numerous instances of&nbsp;$f$ remain unsolved after several communication steps. Subsequently, we&nbsp;transition to a&nbsp;different formal complexity measure to&nbsp;demonstrate that the remaining communication problem is at least as&nbsp;hard 
as&nbsp;$\mathsf{KW}_{\mathsf{OR}} \mathbin{\bigcirc\mkern-13.5mu\ast} \mathsf{KW}_f$. This hybrid approach not only achieves the desired lower bound, but also introduces a&nbsp;novel technique for analyzing formula depth, potentially informing future research in complexity theory.

The results has been [published](https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.STACS.2025.26) in&nbsp;the proceedings of&nbsp;the 42nd International Symposium on&nbsp;Theoretical Aspects of Computer Science (STACS 2025).
