---
title: "Posterior Inference with Diffusion Models for High-dimensional Black-box Optimization (DiBO)"
collection: publications
category: conferences
permalink: /publication/2025-05-01-dibo
excerpt: ''
date: 2025-05-01
venue: 'ICML; FPI @ ICLR Workshop'
paperurl: 'https://openreview.net/forum?id=EXds2NBOoq'
codeurl: 'https://github.com/umkiyoung/DiBO'
image: '/images/publication/dibo.png'
image_alt: 'DiBO framework overview'
short_title: 'DiBO'
authors: 'Yun, T.*, <strong>Om, K.*</strong>, Lee, J., Yun, S., and Park, J.'
citation: 'Yun, T.*, Om, K.*, Lee, J., Yun, S., &amp; Park, J. (2025). &quot;Posterior Inference with Diffusion Models for High-dimensional Black-box Optimization.&quot; <i>ICML</i>; <i>FPI @ ICLR Workshop</i>.'
bibtex: |
  @inproceedings{yun2025dibo,
    title={Posterior Inference with Diffusion Models for High-dimensional Black-box Optimization},
    author={Yun, T. and Om, K. and Lee, J. and Yun, S. and Park, J.},
    booktitle={Proceedings of the 42nd International Conference on Machine Learning},
    year={2025}
  }
---
DiBO introduces a novel framework that combines diffusion models with ensemble-based uncertainty quantification to solve high-dimensional black-box optimization problems. By iteratively training diffusion models to capture data distributions and fine-tuning them for posterior inference, our method effectively balances exploration and exploitation in high-dimensional spaces, outperforming existing approaches across various synthetic and real-world tasks.

For a visual explanation of the DiBO framework, please see the image below:
![DiBO Framework](../images/publication/dibo.png)

You can find the paper on [OpenReview](https://openreview.net/forum?id=EXds2NBOoq) and the code on [GitHub](https://github.com/umkiyoung/DiBO).
