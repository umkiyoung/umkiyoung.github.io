---
title: "Posterior Inference in Latent Space for Scalable Constrained Black-box Optimization (CiBO)"
collection: publications
category: conferences
permalink: /publication/2025-05-15-cibo
excerpt: ''
date: 2026-09-25
venue: 'NeurIPS (Poster)'
paperurl: 'https://arxiv.org/abs/2507.00480'
arxivurl: 'https://arxiv.org/abs/2507.00480'
codeurl: 'https://github.com/umkiyoung/CiBO'
image: '/images/publication/cibo2.png'
image_alt: 'CiBO framework overview'
short_title: 'CiBO'
authors: '<strong>Kiyoung Om*</strong>, Kyuil Sim*, Taeyoung Yun*, Hyeongyu Kang, and Jinkyoo Park'
citation: 'Om, K.*, Sim, K.*, Yun, T.*, Kang, H., &amp; Park, J. (2026). &quot;Posterior Inference in Latent Space for Scalable Constrained Black-box Optimization.&quot; <i>Advances in Neural Information Processing Systems (NeurIPS)</i> (Poster).'
bibtex: |
  @inproceedings{om2026cibo,
    title={Posterior Inference in Latent Space for Scalable Constrained Black-box Optimization},
    author={Om, K. and Sim, K. and Yun, T. and Kang, H. and Park, J.},
    booktitle={Advances in Neural Information Processing Systems},
    year={2026},
    note={Poster}
  }
---
Accepted to **NeurIPS 2026 (Poster)**. An earlier version was presented as an **Oral** at the **NeurIPS 2025 SPIGM Workshop**.

## Abstract

Optimizing high-dimensional black-box functions under black-box constraints is a pervasive task in a wide range of scientific and engineering problems. These problems are typically harder than unconstrained problems due to hard-to-find feasible regions. In this work, we reformulate constrained black-box optimization as posterior inference, and perform this inference in the latent space of generative models. Our method iterates through two stages. First, we train flow-based models to capture the data distribution and surrogate models that predict both function values and constraint violations. Second, we cast the candidate selection problem as a posterior inference problem to effectively search for promising candidates that have high objective values while not violating the constraints. Concretely, we utilize outsourced diffusion models to amortize the sampling from the posterior distribution in the latent space of flow-based models, which can bypass the issue of mode collapse. We empirically demonstrate that our method achieves superior performance across synthetic and real-world tasks. Our code is available [here](https://github.com/umkiyoung/CiBO).

For a visual explanation of the CiBO framework, please see the image below:


![CiBO Motivation](../images/publication/cibo.png)
![CiBO Framework](../images/publication/cibo2.png)

You can find the workshop paper on [OpenReview](https://openreview.net/forum?id=X4DFcAfkFS), the latest preprint on [arXiv](https://arxiv.org/abs/2507.00480), and the code on [GitHub](https://github.com/umkiyoung/CiBO).
