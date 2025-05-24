// script.js – v1a.0.0.4 – 24/05/2025 21:00:00 – JSON dynamique Hexekta + Labs + Détail artefact
function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.replace("#", "");
  if (hash) showSection(hash);

  const artefactList = document.getElementById("artefact-list");
  const artefactDetail = document.getElementById("artefact-detail");
  const collectionList = document.getElementById("collection-list");

  if (artefactList) {
    fetch("data.json")
      .then(res => res.json())
      .then(data => {
        artefactList.innerHTML = data.map(art => `
          <div>
            <strong>${art.nom}</strong> – ${art.price}<br>
            <a href="art.html?id=${art.id}">Voir détail</a>
          </div><hr>
        `).join("");
      });
  }

  if (artefactDetail) {
    const id = new URLSearchParams(window.location.search).get("id");
    if (!id) return;
    fetch("data.json")
      .then(res => res.json())
      .then(data => {
        const art = data.find(a => a.id == id);
        if (!art) {
          artefactDetail.innerHTML = "<p>Artefact introuvable.</p>";
          return;
        }
        artefactDetail.innerHTML = `
          <h2>${art.nom}</h2>
          <img src="${art.image}" alt="${art.nom}" style="max-width:200px;"><br>
          <p><strong>Type :</strong> ${art.type}</p>
          <p><strong>Origine :</strong> ${art.origine}</p>
          <p><strong>Fonction :</strong> ${art.fonction}</p>
          <p><strong>Pouvoir :</strong> ${art.pouvoir}</p>
          <p><strong>Niveau :</strong> ${art.niveau}</p>
          <p><strong>Couleurs :</strong> ${art.couleurs.join(', ')}</p>
          <p><strong>Prix :</strong> ${art.price}</p>
          <p><strong>Description :</strong> ${art.description}</p>
          <p><a href="${art.mintUrl}">Lien de mint</a></p>
        `;
      });
  }

  if (collectionList) {
    fetch("col.json")
      .then(res => res.json())
      .then(data => {
        collectionList.innerHTML = data.map(col => `
          <div>
            <strong>${col.nom} (${col.code})</strong><br>
            ${col.description}<br>
            <em>Status : ${col.etat}</em>
          </div><hr>
        `).join("");
      });
  }
}
