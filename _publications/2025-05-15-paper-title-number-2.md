---
title: "Posterior Inference in Latent Space for Scalable Constrained Black-box Optimization (CiBO)"
collection: publications
category: conferences
permalink: /publication/2025-05-15-cibo
excerpt: ''
date: 2025-09-23
venue: 'NeurIPS SPIGM Workshop (Oral)'
paperurl: 'https://openreview.net/forum?id=X4DFcAfkFS'
citation: 'Om, K.*, Sim, K.*, Yun, T.*, Kang, H., &amp; Park, J. (2025). &quot;Posterior Inference in Latent Space for Scalable Constrained Black-box Optimization.&quot; <i>NeurIPS Workshop on Structured Probabilistic Inference &amp; Generative Modeling</i> (Oral).'
---

CiBO introduces a novel framework that combines flow-based models with posterior inference in latent space to solve high-dimensional constrained black-box optimization problems. By iteratively training flow-based models to capture data distributions and surrogate models to predict function values and constraint violations, our method effectively handles the challenges of high-dimensional constrained optimization. The key innovation lies in performing posterior inference in the latent space of flow-based models, which helps overcome the multi-modality and plateau issues in the posterior distribution, especially when dealing with binary constraint feedback. Our approach demonstrates superior performance across various synthetic and real-world tasks, offering a scalable solution to constrained black-box optimization problems.

For a visual explanation of the CiBO framework, please see the image below:


![CiBO Motivation](../images/publication/cibo.png)
![CiBO Framework](../images/publication/cibo2.png)

You can find the workshop paper on [OpenReview](https://openreview.net/forum?id=X4DFcAfkFS), the latest preprint on [arXiv](https://arxiv.org/abs/2507.00480), and the code on [GitHub](https://github.com/umkiyoung/CiBO).
