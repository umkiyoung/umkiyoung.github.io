---
title: "Diffusion Fine-Tuning via Reparameterized Policy Gradient of the Soft Q-Function"
collection: publications
category: conferences
permalink: /publication/2026-iclr-sqdf
excerpt: ''
date: 2026-01-26
venue: 'ICLR (Poster)'
paperurl: 'https://openreview.net/forum?id=8zoxC9e23q'
arxivurl: 'https://arxiv.org/abs/2512.04559'
codeurl: 'https://github.com/Shin-woocheol/SQDF'
short_title: 'SQDF'
authors: 'Hyeongyu Kang*, Jaewoo Lee*, Woocheol Shin*, <strong>Kiyoung Om</strong>, and Jinkyoo Park'
citation: 'Kang, H.*, Lee, J.*, Shin, W.*, Om, K., &amp; Park, J. (2026). &quot;Diffusion Fine-Tuning via Reparameterized Policy Gradient of the Soft Q-Function.&quot; <i>ICLR</i>.'
bibtex: |
  @inproceedings{kang2026sqdf,
    title={Diffusion Fine-Tuning via Reparameterized Policy Gradient of the Soft Q-Function},
    author={Kang, H. and Lee, J. and Shin, W. and Om, K. and Park, J.},
    booktitle={International Conference on Learning Representations},
    year={2026}
  }
---
## Abstract

Diffusion models excel at generating high-likelihood samples but often require alignment with downstream objectives. Existing fine-tuning methods for diffusion models significantly suffer from reward over-optimization, resulting in high-reward but unnatural samples and degraded diversity. To mitigate over-optimization, we propose Soft Q-based Diffusion Finetuning (SQDF), a novel KL-regularized RL method for diffusion alignment that applies a reparameterized policy gradient of a training-free, differentiable estimation of the soft Q-function. SQDF is further enhanced with three innovations: a discount factor for proper credit assignment in the denoising process, the integration of consistency models to refine Q-function estimates, and the use of an off-policy replay buffer to improve mode coverage and manage the reward-diversity trade-off. Our experiments demonstrate that SQDF achieves superior target rewards while preserving diversity in text-to-image alignment. Furthermore, in online black-box optimization, SQDF attains high sample efficiency while maintaining naturalness and diversity. Our code is available at https://github.com/Shin-woocheol/SQDF.

You can find the paper on [OpenReview](https://openreview.net/forum?id=8zoxC9e23q), the preprint on [arXiv](https://arxiv.org/abs/2512.04559), and the code on [GitHub](https://github.com/Shin-woocheol/SQDF).
