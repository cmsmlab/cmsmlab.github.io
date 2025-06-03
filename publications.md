---
layout: default
full-width: true
title: Publications
permalink: /publications/
---

<style>
  /* Custom styles for APA-style citation */
  .pub-number {
    font-weight: bold;
    font-size: 1rem;
    margin-right: 5px;
    color: #333;
  }
  .pub-citation {
    font-size: 1rem;
    line-height: 1.4;
  }
  .pub-authors,
  .pub-date,
  .pub-title,
  .pub-container,
  .pub-doi {
    font-family: inherit;
    font-style: normal;
  }
  .pub-title i {
    font-weight: bold;
    font-style: italic;
  }
  .pub-date {
    color: #666;
  }
  /* Increase spacing between panels */
  .panel {
    margin-bottom: 2rem;
  }
  .panel-heading {
    padding: 0.5rem;
    background-color: #f7f7f7;
  }
  /* Publications wrapper for wider content */
  .publications-wrapper {
    max-width: 1000px;
    margin: 0 auto;
  }
  /* Extra buttons styling (no horizontal line) */
  .extra-buttons {
    padding: 0.5rem 1rem;
    text-align: right;
  }
  .extra-buttons .btn {
    margin-left: 0.5rem;
  }
  /* BibTeX modal body preserves line breaks */
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
        <img src="/assets/gifs/output_20250121_1632.gif" class="card-img-top" alt="Featured Paper 1" style="height:200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">Modeling droplet interface bilayers (DIBs) [21]</h5>
          <p class="card-text">
This paper introduces a new class of ultra-soft, solid-like materials—Jammed Interconnected Bilayer Emulsions (JIBEs)—comprising billions of bilayer-separated aqueous compartments that self-assemble into a robust, solid-like network. We model these materials as a network of springs, where each spring represents the droplet stiffness and governs water transport across the bilayers, capturing the unique coupled mechanics of the system.
          </p>
 <a href="https://github.com/cmsmlab/JIBEs_Diffusion" class="btn btn-dark" target="_blank">
          <i class="fab fa-github"></i> JIBEs
          </a>
 <a href="https://github.com/cmsmlab/natedrop-droplet-network-simulator" class="btn btn-dark" target="_blank">
          <i class="fab fa-github"></i> Droplet networks
          </a>
        </div>
      </div>
    </div>
    <!-- Featured Paper 2 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="/assets/gifs/Gifs2.gif" class="card-img-top" alt="Featured Paper 1" style="height:200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">Material point method for soft materials [19]</h5>
          <p class="card-text">
This paper proposes a new stabilization method within a mixed Material Point Method (MPM) framework that achieves linear-linear as well as higher-order B-spline mixed interpolations. MPM is a hybrid Eulerian-Lagrangian particle-based approach. Our work advances MPM development for multiphysics simulations of soft polymeric materials.
          </p>
         <a href="https://github.com/cmsmlab/Material-Point-Generator" class="btn btn-dark" target="_blank">
          <i class="fab fa-github"></i> Material point mesher
          </a>
        </div>
      </div>
    </div>
    <!-- Featured Paper 3 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="/assets/gifs/out1.gif" class="card-img-top" alt="Featured Paper 3" style="height:200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title"> Curvature-resisting material surfaces using IGA [12]</h5>
          <p class="card-text">
            This paper develops a 3D computational model for curvature-resisting material surfaces using surface-enriched isogeometric analysis. By introducing an elastobending length scale, the method captures surface bending effects that stiffen overall material response and enables accurate modeling of complex deformations in soft solids and biological membranes.
          </p>
              <!-- <a href="https://github.com/yourusername/your-repo" class="btn btn-dark" target="_blank">
          <i class="fab fa-github"></i> View on GitHub
          </a>-->
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 
Publications List


<style>
  /* Custom styles for APA-style citation */
  .pub-number {
    font-weight: bold;
    margin-right: 5px;
    font-size: 1rem;
    color: #333;
  }
  .pub-citation {
    font-size: 1rem;
    line-height: 1.4;
  }
  .pub-authors,
  .pub-date,
  .pub-title,
  .pub-container,
  .pub-doi {
    font-family: inherit;
    font-style: normal;
  }
  .pub-title i {
    font-weight: bold;
    font-style: italic;
  }
  .pub-date {
    color: #666;
  }
  /* Increase spacing between panels */
  .panel {
    margin-bottom: 2rem;
  }
  .panel-heading {
    background-color: #f7f7f7;
    padding: 0.5rem;
  }
  /* Publications wrapper for wider content */
  .publications-wrapper {
    max-width: 1000px;
    margin: 0 auto;
  }
  /* Extra buttons styling */
  .extra-buttons {
    text-align: right;
    padding: 0.5rem 1rem;
  }
  .extra-buttons .btn {
    margin-left: 0.5rem;
  }
  /* BibTeX modal */
  .modal-body pre {
    white-space: pre-wrap;
  }
</style>
 -->

<div class="container-fluid">
  <div class="publications-wrapper">
    <h1 class="text-center my-4">{{ page.title }}</h1>

    {% assign sorted_publications = site.data.publications | sort: "year" | reverse %}
    {% assign total = sorted_publications | size %}
    <div class="panel-group" id="accordion">
      {% for publi in sorted_publications %}
        {% assign pub_number = total | minus: forloop.index0 %}
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <!-- Expand/Collapse Link -->
              <a data-toggle="collapse" data-parent="#accordion"
                 href="#collapse{{ forloop.index }}"
                 style="color: inherit; text-decoration: none;">
                <span class="pub-number">{{ pub_number }}.</span>
                <span class="pub-citation">
                  <span class="pub-authors">{{ publi.author }}</span>
                  <span class="pub-date"> ({{ publi.year }})</span>.
                  <span class="pub-title"> <i>{{ publi.title }}</i></span>.
                  <span class="pub-container">{{ publi.journal }}</span>.
                  {% if publi.doi %}
                    <span class="pub-doi">
                      DOI: <a href="https://doi.org/{{ publi.doi }}" target="_blank">{{ publi.doi }}</a>
                    </span>
                  {% endif %}
                </span>
              </a>
            </h4>
          </div>
          <!-- Extra Buttons Always Visible -->
          <div class="extra-buttons">
            <a class="btn btn-outline-secondary"
               href="https://scholar.google.com/scholar?q={{ publi.title | url_encode }}"
               role="button" target="_blank">Google Scholar</a>
            <button type="button" class="btn btn-outline-secondary"
                    data-toggle="modal" data-target="#bibtexModal{{ forloop.index }}">
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
          </div>
          <div id="collapse{{ forloop.index }}" class="panel-collapse collapse">
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
        <div class="modal fade" id="bibtexModal{{ forloop.index }}" tabindex="-1" role="dialog"
             aria-labelledby="bibtexModalLabel{{ forloop.index }}" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="bibtexModalLabel{{ forloop.index }}">
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
    </div>
  </div>
</div>