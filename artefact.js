document.addEventListener("DOMContentLoaded", () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const gallery = document.getElementById('gallery');
      data.forEach(artefact => {
        const card = document.createElement('div');
        card.className = 'artefact-card';
        card.innerHTML = `
          <img src="DigiRelik.jpg" alt="${artefact.nom}" class="artefact-img">
          <h2>${artefact.nom}</h2>
          <p>${artefact.description}</p>
        `;
        gallery.appendChild(card);
      });
    })
    .catch(err => {
      document.getElementById('gallery').innerHTML = `<p>Erreur lors du chargement des artefacts.</p>`;
      console.error("Erreur JSON :", err);
    });
});