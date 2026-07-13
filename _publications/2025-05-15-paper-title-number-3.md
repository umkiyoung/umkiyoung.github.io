---
title: "Diffusion Alignment as Variational Expectation-Maximization"
collection: publications
category: conferences
permalink: /publication/2026-iclr-dav
excerpt: ''
date: 2026-01-26
venue: 'ICLR (Poster)'
paperurl: 'https://openreview.net/forum?id=aBeIFDshvZ'
arxivurl: 'https://arxiv.org/abs/2510.00502'
codeurl: 'https://github.com/Jaewoopudding/dav'
short_title: 'DAV'
authors: 'Lee, J., Kim, M., Choi, S., Song, I., Yun, S., Kang, H., Shin, W., Yun, T., <strong>Om, K.</strong>, and Park, J.'
citation: 'Lee, J., Kim, M., Choi, S., Song, I., Yun, S., Kang, H., Shin, W., Yun, T., Om, K., &amp; Park, J. (2026). &quot;Diffusion Alignment as Variational Expectation-Maximization.&quot; <i>ICLR</i>.'
bibtex: |
  @inproceedings{lee2026dav,
    title={Diffusion Alignment as Variational Expectation-Maximization},
    author={Lee, J. and Kim, M. and Choi, S. and Song, I. and Yun, S. and Kang, H. and Shin, W. and Yun, T. and Om, K. and Park, J.},
    booktitle={International Conference on Learning Representations},
    year={2026}
  }
---

Diffusion alignment aims to optimize diffusion models for the downstream objective. While existing methods based on reinforcement learning or direct backpropagation achieve considerable success in maximizing rewards, they often suffer from reward over-optimization and mode collapse. We introduce Diffusion Alignment as Variational Expectation-Maximization (DAV), a framework that formulates diffusion alignment as an iterative process alternating between two complementary phases: the E-step and the M-step. In the E-step, we employ test-time search to generate diverse and reward-aligned samples. In the M-step, we refine the diffusion model using samples discovered by the E-step. We demonstrate that DAV can optimize reward while preserving diversity for both continuous and discrete tasks: text-to-image synthesis and DNA sequence design.

You can find the paper on [OpenReview](https://openreview.net/forum?id=aBeIFDshvZ), the preprint on [arXiv](https://arxiv.org/abs/2510.00502), and the code on [GitHub](https://github.com/Jaewoopudding/dav).
