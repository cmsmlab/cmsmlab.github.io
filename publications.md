---
layout: default
full-width: true
title: Publications
permalink: /publications/
share-description: "Peer-reviewed publications from the Computational Mechanics of Soft Materials Lab at UT Austin, led by Berkin Dortdivanlioglu."
---

<style>
  /* APA-style citation */
  .pub-citation {
    font-size: 1rem;
    line-height: 1.4;
  }
  .pub-authors,
  .pub-date,
  .pub-title,
  .pub-container {
    font-family: inherit;
    font-style: normal;
  }
  .pub-container em {
    font-style: italic;
  }
  .pub-title {
    font-weight: 700;
  }
  /* Citation lives inside an h4; reset the inherited bold weight */
  .panel-title a {
    font-weight: normal;
  }
  /* Lab member highlight (applied by /assets/js/format-pubs.js).
     UT burnt orange, no bold — title stays as the only bold accent. */
  .pub-authors strong {
    font-weight: normal;
    color: #BF5700;
  }
  /* Year header above each year group */
  .year-header {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.25rem;
    margin: 2rem 0 1rem;
  }
  /* Chevron rotates when the panel expands */
  .toggle-icon {
    transition: transform 0.2s ease;
    margin-right: 8px;
    color: #888;
    font-size: 0.85em;
  }
  .pub-toggle:not(.collapsed) .toggle-icon {
    transform: rotate(90deg);
  }
  .pub-toggle:hover {
    text-decoration: none;
  }
  /* Pills (Preprint / Conference paper) */
  .pub-pill {
    font-size: 0.7rem;
    vertical-align: middle;
    margin-right: 0.4rem;
  }
  /* Panel spacing */
  .panel {
    margin-bottom: 1.25rem;
  }
  .panel-heading {
    padding: 0.5rem;
    background-color: #f7f7f7;
  }
  /* Publications wrapper width */
  .publications-wrapper {
    max-width: 1000px;
    margin: 0 auto;
  }
  /* Extra buttons */
  .extra-buttons {
    padding: 0.5rem 1rem;
    text-align: right;
  }
  .extra-buttons .btn {
    margin-left: 0.5rem;
  }
  /* BibTeX modal preserves line breaks */
  .modal-body pre {
    white-space: pre-wrap;
  }
</style>

<!-- Featured Papers Section -->
<div class="container my-4">
  <h2 class="text-center">Featured Papers</h2>
  <div class="row">
    <!-- Featured Paper 1 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="/assets/gifs/output_20250121_1632.gif" class="card-img-top" alt="Simulation of a jammed bilayer-stabilized emulsion network" style="height:200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">Modeling droplet interface bilayers (DIBs)</h5>
          <p class="card-text">
This paper introduces a new class of ultra-soft, solid-like materials—Jammed Interconnected Bilayer Emulsions (JIBEs)—comprising billions of bilayer-separated aqueous compartments that self-assemble into a robust, solid-like network. We model these materials as a network of springs, where each spring represents the droplet stiffness and governs water transport across the bilayers, capturing the unique coupled mechanics of the system.
          </p>
          <a href="https://github.com/cmsmlab/JIBEs_Diffusion" class="btn btn-dark btn-sm" target="_blank"><i class="fab fa-github"></i> JIBEs</a>
          <a href="https://github.com/cmsmlab/natedrop-droplet-network-simulator" class="btn btn-dark btn-sm" target="_blank"><i class="fab fa-github"></i> Droplet networks</a>
        </div>
      </div>
    </div>
    <!-- Featured Paper 2 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="/assets/gifs/Gifs2.gif" class="card-img-top" alt="Material point method simulation of a soft polymeric material" style="height:200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">Mixed material point method for soft materials</h5>
          <p class="card-text">
Two papers developing a stabilized mixed Material Point Method (MPM) framework for soft polymeric materials. The 2024 paper introduces a subdivision-stabilized B-spline mixed MPM achieving linear-linear and higher-order interpolations. The 2025 follow-up extends this with Nitsche's method for quasi-compressible soft materials.
          </p>
          <a href="https://github.com/cmsmlab/membrane-point-method" class="btn btn-dark btn-sm" target="_blank"><i class="fab fa-github"></i> membrane-point-method</a>
        </div>
      </div>
    </div>
    <!-- Featured Paper 3 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="/assets/gifs/out1.gif" class="card-img-top" alt="Curvature-resisting material surface deformation" style="height:200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">Curvature-resisting material surfaces using IGA</h5>
          <p class="card-text">
            This paper develops a 3D computational model for curvature-resisting material surfaces using surface-enriched isogeometric analysis. By introducing an elastobending length scale, the method captures surface bending effects that stiffen overall material response and enables accurate modeling of complex deformations in soft solids and biological membranes.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="container-fluid">
  <div class="publications-wrapper">
    <h1 class="text-center my-4">{{ page.title }}</h1>

    {% assign sorted_publications = site.data.publications | sort: "year" | reverse %}
    {% assign by_year = sorted_publications | group_by: "year" %}
    <div class="panel-group" id="accordion">
      {% for yr in by_year %}
        <h2 class="year-header">{{ yr.name }}</h2>
        {% for publi in yr.items %}
          {% assign j = publi.journal | default: '' %}
          {% assign p = publi.publisher | default: '' %}
          {% assign pill = '' %}
          {% if j contains 'SSRN' or j contains 'arXiv' or j contains 'ChemRxiv' or j contains 'bioRxiv' or j contains 'engrXiv' or j contains 'Research Square' or p contains 'ChemRxiv' or p contains 'arXiv' or p contains 'SSRN' or p contains 'bioRxiv' %}
            {% assign pill = 'Preprint' %}
          {% elsif publi.ENTRYTYPE == 'inproceedings' or j contains 'Proc.' or j contains 'Proceedings' or j contains 'Conference' %}
            {% assign pill = 'Conference paper' %}
          {% endif %}
          {% assign uid = forloop.parentloop.index | append: '-' | append: forloop.index %}
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion"
                   href="#collapse{{ uid }}"
                   class="collapsed pub-toggle"
                   aria-expanded="false"
                   style="color: inherit; text-decoration: none;">
                  <i class="fas fa-chevron-right toggle-icon"></i>
                  <span class="pub-citation">
                    {% if pill != '' %}<span class="badge {% if pill == 'Preprint' %}badge-warning{% else %}badge-info{% endif %} pub-pill">{{ pill }}</span> {% endif %}
                    <span class="pub-authors" data-pub-id="{{ publi.ID }}">{{ publi.author }}</span>
                    <span class="pub-date"> ({{ publi.year }}).</span>
                    <span class="pub-title"> {{ publi.title }}.</span>
                    {% if publi.journal and publi.journal != '' %}<span class="pub-container"> <em>{{ publi.journal }}</em>{% if publi.volume %}, <em>{{ publi.volume }}</em>{% if publi.number %}({{ publi.number }}){% endif %}{% endif %}{% if publi.pages %}, {{ publi.pages }}{% endif %}{% if publi.note and publi.note != '' %}, <strong>{{ publi.note }}</strong>{% endif %}.</span>{% endif %}
                  </span>
                </a>
              </h4>
            </div>
            <div class="extra-buttons">
              {% unless publi.note contains 'in press' or publi.note contains 'forthcoming' %}
              <a class="btn btn-outline-secondary"
                 href="https://scholar.google.com/scholar?q={{ publi.title | url_encode }}"
                 role="button" target="_blank">Google Scholar</a>
              {% endunless %}
              <button type="button" class="btn btn-outline-secondary"
                      data-toggle="modal" data-target="#bibtexModal{{ uid }}">
                Export BibTeX
              </button>
              {% if publi.doi %}
                <a class="btn btn-outline-primary"
                   href="https://doi.org/{{ publi.doi }}"
                   role="button" target="_blank">Link</a>
              {% elsif publi.url %}
                <a class="btn btn-outline-primary"
                   href="{{ publi.url }}"
                   role="button" target="_blank">Link</a>
              {% endif %}
              {% if publi.preprint_url %}
                <a class="btn btn-outline-secondary"
                   href="{{ publi.preprint_url }}"
                   role="button" target="_blank">Preprint</a>
              {% elsif publi.preprint_doi %}
                <a class="btn btn-outline-secondary"
                   href="https://doi.org/{{ publi.preprint_doi }}"
                   role="button" target="_blank">Preprint</a>
              {% endif %}
              {% if publi.code_url %}
                <a class="btn btn-dark"
                   href="{{ publi.code_url }}"
                   role="button" target="_blank"><i class="fab fa-github"></i> {{ publi.code_label | default: 'Code' }}</a>
              {% endif %}
            </div>
            <div id="collapse{{ uid }}" class="panel-collapse collapse">
              <div class="panel-body">
                {% if publi.image %}
                  <div style="float: left; margin-right: 15px; max-width: 150px;">
                    <img src="{{ publi.image | absolute_url }}" alt="{{ publi.title }}" style="width: 100%; height: auto;">
                  </div>
                {% endif %}
                <p>{{ publi.abstract }}</p>
                <div style="clear: both;"></div>
              </div>
            </div>
          </div>

          <!-- BibTeX Modal -->
          <div class="modal fade" id="bibtexModal{{ uid }}" tabindex="-1" role="dialog"
               aria-labelledby="bibtexModalLabel{{ uid }}" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="bibtexModalLabel{{ uid }}">
                    BibTeX for "{{ publi.title }}"
                  </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <pre>{{ publi.bibtex }}</pre>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        {% endfor %}
      {% endfor %}
    </div>
  </div>
</div>

<script src="{{ '/assets/js/format-pubs.js' | relative_url }}"></script>