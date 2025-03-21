---
layout: page
title: Publications
permalink: /publications/
---
<h1>{{ page.title }}</h1>

<div class="panel-group" id="accordion">
  {% for publi in site.data.publications %}
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse{{ forloop.index }}" style="color: inherit;">
            {%- comment -%}
              Gather author family names from the publication's author array.
            {%- endcomment -%}
            {% assign authors = "" | split:"/" %}
            {% for author in publi.author %}
              {% assign authors = authors | push: author.family %}
            {% endfor %}
            {{ authors | array_to_sentence_string }},
            
            <!-- Publication title -->
            "{{ publi.title }}",
            
            <!-- Container (e.g., journal name) -->
            <b>{{ publi["container-title"] }}</b>,
            
            <!-- Issued date: join the first date-parts array with hyphens -->
            ({{ publi.issued["date-parts"] | first | join: "-" }}),
            
            <!-- DOI link if available -->
            {% if publi.DOI %}
              DOI: <a href="https://doi.org/{{ publi.DOI }}" target="_blank">{{ publi.DOI }}</a>
            {% endif %}
          </a>
        </h4>
      </div>
      <div id="collapse{{ forloop.index }}" class="panel-collapse collapse">
        <div class="panel-body">
          <p>{{ publi.abstract }}</p>
          {% if publi.DOI %}
            <a class="btn btn-outline-primary" href="https://doi.org/{{ publi.DOI }}" role="button" target="_blank">Link</a>
          {% else %}
            <a class="btn btn-outline-primary" href="{{ publi.URL }}" role="button" target="_blank">Link</a>
          {% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>