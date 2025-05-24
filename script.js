// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Navigation par data-section
  document.querySelectorAll('.menu-box').forEach(box => {
    box.addEventListener('click', function() {
      document.querySelectorAll('.menu-box').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      this.classList.add('active');
      document.getElementById(this.dataset.section).classList.add('active');
    });
  });

  // Galerie Hexekta (optionnel : ne s’active que si la div existe)
  const gallery = document.getElementById('hexekta-gallery');
  if (gallery) {
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        gallery.innerHTML = '';
        data.forEach((item, index) => {
          const id = index + 1;
          const element = document.createElement('div');
          element.className = 'artifact-box';
          element.innerHTML = `
            <h3><a href="art.html?id=${id}">${item.nom}</a></h3>
            <p>${item.description}</p>
          `;
          gallery.appendChild(element);
        });
      });
  }

  // Détail artefact (optionnel : ne s’active que si la div existe)
  const artifactDetail = document.getElementById('artifact-detail');
  if (artifactDetail) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const artifact = data[id - 1];
        if (!artifact) {
          artifactDetail.innerHTML = '<p>Artefact non trouvé.</p>';
          return;
        }
        artifactDetail.innerHTML = `
          <h2>Artefact ${id} : ${artifact.nom}</h2>
          <img src="artefact${id}.jpg" alt="Artefact ${id}" class="artifact-image">
          <p>${artifact.description}</p>
        `;
      })
      .catch(error => {
        artifactDetail.innerHTML = '<p>Erreur lors du chargement des données.</p>';
      });
  }
});