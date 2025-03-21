---
layout: default
title: Publications
permalink: /publications/
---

<h1>{{ page.title }}</h1>

<ul>
  {% for pub in site.data.publications %}
    <li>
      <h2>{{ pub.title }}</h2>
      {% if pub.author %}
        <p><strong>Authors:</strong> {{ pub.author }}</p>
      {% endif %}
      {% if pub.journal %}
        <p><strong>Journal:</strong> {{ pub.journal }}</p>
      {% endif %}
      {% if pub.year %}
        <p><strong>Year:</strong> {{ pub.year }}</p>
      {% endif %}
      {% if pub.url %}
        <p><a href="{{ pub.url }}">View Publication</a></p>
      {% endif %}
    </li>
  {% endfor %}
</ul>