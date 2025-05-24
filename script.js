// Version : v2.0.5

// Chargement des artefacts depuis data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {

    // Affichage liste (hexekta.html)
    if (document.getElementById('artefact-list')) {
      const container = document.getElementById('artefact-list');
      data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'artefact-card';
        div.innerHTML = `
          <a href="art.html?id=${item.id}">
            <img src="${item.image}" alt="${item.nom}">
            <h3>${item.nom}</h3>
            <p>${item.price}</p>
          </a>
        `;
        container.appendChild(div);
      });
    }

    // Affichage détail (art.html)
    if (document.getElementById('artefact-detail')) {
      const params = new URLSearchParams(window.location.search);
      const id = parseInt(params.get('id'));
      const artefact = data.find(a => a.id === id);

      if (artefact) {
        document.getElementById('artefact-detail').innerHTML = `
          <div class="top-line">
            <h2>${artefact.nom}</h2>
            <div class="price">${artefact.price}</div>
          </div>

          <img src="${artefact.image}" alt="${artefact.nom}" />

          <p>${artefact.description}</p>

          <div class="price" style="text-align:right; margin-top: 1rem;">${artefact.price}</div>

          <div class="identity-block">
            <div><strong>Origine :</strong> ${artefact.origine}</div>
            <div><strong>Type :</strong> ${artefact.type}</div>
            <div><strong>Fonction :</strong> ${artefact.fonction}</div>
            <div><strong>Pouvoir :</strong> ${artefact.pouvoir}</div>
            <div><strong>Niveau :</strong> ${artefact.niveau}</div>
            <div><strong>Couleurs :</strong> ${artefact.couleurs.join(', ')}</div>
          </div>

          <a href="${artefact.mintUrl}" target="_blank" class="cta-link">→ Mint cet artefact</a>
        `;
      } else {
        document.getElementById('artefact-detail').innerHTML = '<p>Artefact introuvable.</p>';
      }
    }

  })
  .catch(error => {
    console.error('Erreur de chargement des artefacts :', error);
  });