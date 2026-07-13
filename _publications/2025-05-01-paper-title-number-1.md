---
title: "Posterior Inference with Diffusion Models for High-dimensional Black-box Optimization (DiBO)"
collection: publications
category: conferences
permalink: /publication/2025-05-01-dibo
excerpt: ''
date: 2025-05-01
venue: 'ICML (Poster)'
paperurl: 'https://openreview.net/forum?id=EXds2NBOoq'
codeurl: 'https://github.com/umkiyoung/DiBO'
image: '/images/publication/dibo.png'
image_alt: 'DiBO framework overview'
short_title: 'DiBO'
authors: 'Taeyoung Yun*, <strong>Kiyoung Om*</strong>, Jaewoo Lee, Sujin Yun, and Jinkyoo Park'
citation: 'Yun, T.*, Om, K.*, Lee, J., Yun, S., &amp; Park, J. (2025). &quot;Posterior Inference with Diffusion Models for High-dimensional Black-box Optimization.&quot; <i>ICML</i> (Poster).'
bibtex: |
  @inproceedings{yun2025dibo,
    title={Posterior Inference with Diffusion Models for High-dimensional Black-box Optimization},
    author={Yun, T. and Om, K. and Lee, J. and Yun, S. and Park, J.},
    booktitle={Proceedings of the 42nd International Conference on Machine Learning},
    year={2025}
  }
---
## Abstract

Optimizing high-dimensional and complex black-box functions is crucial in numerous scientific applications. While Bayesian optimization (BO) is a powerful method for sample-efficient optimization, it struggles with the curse of dimensionality and scaling to thousands of evaluations. Recently, leveraging generative models to solve black-box optimization problems has emerged as a promising framework. However, those methods often underperform compared to BO methods due to limited expressivity and difficulty of uncertainty estimation in high-dimensional spaces. To overcome these issues, we introduce **DiBO**, a novel framework for solving high-dimensional black-box optimization problems. Our method iterates two stages. First, we train a diffusion model to capture the data distribution and deep ensembles to predict function values with uncertainty quantification. Second, we cast the candidate selection as a posterior inference problem to balance exploration and exploitation in high-dimensional spaces. Concretely, we fine-tune diffusion models to amortize posterior inference. Extensive experiments demonstrate that our method outperforms state-of-the-art baselines across synthetic and real-world tasks. Our code is publicly available [here](https://github.com/umkiyoung/DiBO).

For a visual explanation of the DiBO framework, please see the image below:
![DiBO Framework](../images/publication/dibo.png)

You can find the paper on [OpenReview](https://openreview.net/forum?id=EXds2NBOoq) and the code on [GitHub](https://github.com/umkiyoung/DiBO).
