---
permalink: /
title: "About Me"
title_id: "about-me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hi! I'm Kiyoung Om, a research intern on the Robotics & Embodied AI Team at [NAVER LABS](https://www.naverlabs.com/). I received my M.S. in Data Science from the [Graduate School of Data Science](https://gsds.kaist.ac.kr/) at the Korea Advanced Institute of Science and Technology (KAIST), where I worked in the [System Intelligence Lab](http://silab.kaist.ac.kr/) under the supervision of Professor [Jinkyoo Park](https://scholar.google.com/citations?user=sH2a0nkAAAAJ&hl=ko&oi=ao). Here is my recent [CV](/assets/files/CV_Kiyoung_Om.pdf).

<h2 id="news">News</h2>
* 🚗 **March 2026**: Joined NAVER LABS as a Research Intern on the Robotics & Embodied AI Team
* 📄 **January 2026**: Two papers accepted to ICLR 2026
* 🎓 **February 2026**: Completed my M.S. in Data Science at KAIST
* 📄 **Sep 2025**: One paper accepted at the NeurIPS 2025 workshop on SPIGM (Oral)
* 📄 **May 2025**: One paper accepted at the International Conference on Machine Learning (ICML) 2025
* 🎓 **March 2024**: Joined the System Intelligence Lab as a Master's student at KAIST

<h2 id="education">Education</h2>

* **KAIST** | M.S. in Data Science *(2024 – 2026)*

  * Advisor: Prof. Jinkyoo Park
  * Lab: [System Intelligence Lab](http://silab.kaist.ac.kr/)

* **Korea University** | B.S. in Industrial Management Engineering *(2018 – 2024)*

  * Member of [Korea University Data Science Society (KUBIG)](https://kubigkorea.com/) 

<h2 id="experience">Experience</h2>

* **NAVER LABS** | Research Intern, Robotics & Embodied AI Team *(Mar. 2026 – Present)*

  * Working on learning and simulation methods for autonomous driving, with a focus on closed-loop traffic simulation.

<h2 id="publications">Publications</h2>

{% include publications-list.html %}

<section class="is-hidden" aria-hidden="true">
<h2 id="talks">Talks</h2>

{% if site.talkmap_link == true %}

<p style="text-decoration:underline;"><a href="/talkmap.html">See a map of all the places I've given a talk!</a></p>

{% endif %}

{% for post in site.talks reversed %}
  {% include archive-single-talk.html %}
{% endfor %}
</section>

<h2 id="teaching">Teaching</h2>

{% for post in site.teaching reversed %}
  {% include teaching-item.html %}
{% endfor %}
