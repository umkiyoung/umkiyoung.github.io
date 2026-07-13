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

<ul class="affiliation-list">
  <li>
    <p class="affiliation-line">
      <img class="affiliation-logo affiliation-logo--kaist" src="/images/logos/kaist-logo.gif" alt="KAIST logo">
      <strong>KAIST</strong>
      <span class="affiliation-separator">|</span>
      <span>M.S. in Data Science <em>(2024 – 2026)</em></span>
    </p>
    <ul>
      <li>Advisor: Prof. Jinkyoo Park</li>
      <li>Lab: <a href="http://silab.kaist.ac.kr/">System Intelligence Lab</a></li>
    </ul>
  </li>
  <li>
    <p class="affiliation-line">
      <img class="affiliation-logo affiliation-logo--ku" src="/images/logos/korea-university-logo.png" alt="Korea University logo">
      <strong>Korea University</strong>
      <span class="affiliation-separator">|</span>
      <span>B.S. in Industrial Management Engineering <em>(2018 – 2024)</em></span>
    </p>
    <ul>
      <li>Member of <a href="https://kubigkorea.com/">Korea University Data Science Society (KUBIG)</a></li>
    </ul>
  </li>
</ul>

<h2 id="experience">Experience</h2>

<ul class="affiliation-list">
  <li>
    <p class="affiliation-line">
      <img class="affiliation-logo affiliation-logo--naver" src="/images/logos/naver-labs-logo.png" alt="NAVER LABS logo">
      <strong>NAVER LABS</strong>
      <span class="affiliation-separator">|</span>
      <span>Research Intern, Robotics & Embodied AI Team <em>(Mar. 2026 – Present)</em></span>
    </p>
    <ul>
      <li>Working on learning and simulation methods for autonomous driving, with a focus on closed-loop traffic simulation.</li>
    </ul>
  </li>
</ul>

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
