---
title: "Diffusion Alignment as Variational Expectation-Maximization"
collection: publications
category: conferences
permalink: /publication/2025-10-01-dav
excerpt: ''
date: 2025-10-01
venue: 'Preprint'
paperurl: 'https://arxiv.org/abs/2507.00480'
# citation: ''
---

Diffusion alignment aims to optimize diffusion models for the downstream objective. While existing methods based on reinforcement learning or direct backpropagation achieve considerable success in maximizing rewards, they often suffer from reward over-optimization and mode collapse. We introduce Diffusion Alignment as Variational Expectation-Maximization (DAV), a framework that formulates diffusion alignment as an iterative process alternating between two complementary phases: the E-step and the M-step. In the E-step, we employ test-time search to generate diverse and reward-aligned samples. In the M-step, we refine the diffusion model using samples discovered by the E-step. We demonstrate that DAV can optimize reward while preserving diversity for both continuous and discrete tasks: text-to-image synthesis and DNA sequence design.
