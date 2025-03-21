---
layout: default
title: Publications
permalink: /publications/
---

<h1>{{ page.title }}</h1>

<div class="panel-group" id="accordion">
  {% for publi in site.data.publications %}
    <div class="panel panel-default mb-3 p-3 border rounded">
      <div class="panel-heading">
        <h4>
          {{ forloop.index }}. 
          <!-- Authors -->
          {% assign authors = "" | split:"/" %}
          {% for author in publi.author %}
            {% assign authors = authors | push: author.family %}
          {% endfor %}
          {{ authors | array_to_sentence_string }},

          <!-- Title with link -->
          "<i>{{ publi.title }}</i>",

          <!-- Container -->
          <b>{{ publi['container-title'] }}</b>

          <!-- Year -->
          {% assign year = publi.issued['date-parts'][0][0] %}
          ({{ year }})

          <!-- DOI -->
          {% if publi.DOI %}
            — <a href="https://doi.org/{{ publi.DOI }}">DOI: {{ publi.DOI }}</a>
          {% endif %}
        </h4>
      </div>

      <div id="collapse{{ forloop.index }}" class="panel-collapse collapse">
        <div class="panel-body">
          {% if publi.abstract %}
            <p><strong>Abstract:</strong> {{ publi.abstract }}</p>
          {% endif %}

          {% if publi.DOI %}
            <a class="btn btn-sm btn-outline-primary" href="https://doi.org/{{ publi.DOI }}" target="_blank">View Publication</a>
          {% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>