---
title: "Posterior Inference in Latent Space for Scalable Constrained Black-box Optimization (CiBO)"
collection: publications
category: conferences
permalink: /publication/2025-05-15-cibo
excerpt: ''
date: 2025-05-15
venue: 'NeurIPS2025 Workshop on Structured Probabilisitic Inference & Generative Modeling (Oral)'
paperurl: 'https://arxiv.org/abs/2507.00480'
# citation: ''
---

CiBO introduces a novel framework that combines flow-based models with posterior inference in latent space to solve high-dimensional constrained black-box optimization problems. By iteratively training flow-based models to capture data distributions and surrogate models to predict function values and constraint violations, our method effectively handles the challenges of high-dimensional constrained optimization. The key innovation lies in performing posterior inference in the latent space of flow-based models, which helps overcome the multi-modality and plateau issues in the posterior distribution, especially when dealing with binary constraint feedback. Our approach demonstrates superior performance across various synthetic and real-world tasks, offering a scalable solution to constrained black-box optimization problems.

For a visual explanation of the CiBO framework, please see the image below:


![CiBO Motivation](../images/publication/cibo.png)
![CiBO Framework](../images/publication/cibo2.png)