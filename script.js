// script.js – vID2.2.0.0 – 2025-05-24T14:32:00Z

document.addEventListener("DOMContentLoaded", () => {
  const artefactList = document.getElementById("artefact-list");
  const artefactDetail = document.getElementById("artefact-detail");

  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      const params = new URLSearchParams(window.location.search);
      const id = parseInt(params.get("id"));

      if (artefactList) {
        data.forEach((item) => {
          const card = document.createElement("div");
          card.className = "artefact-card";
          card.innerHTML = `
            <a href="art.html?id=${item.id}">
              <img src="${item.image}" alt="${item.nom}" />
              <h3>${item.nom}</h3>
              <p class="price">${item.price}</p>
            </a>
          `;
          artefactList.appendChild(card);
        });
      }

      if (artefactDetail && id) {
        const artefact = data.find((a) => a.id === id);
        if (artefact) {
          artefactDetail.innerHTML = `
            <div class="artefact-detail-box">
              <img src="${artefact.image}" alt="${artefact.nom}" />
              <h2>${artefact.nom}</h2>
              <p><strong>Type :</strong> ${artefact.type}</p>
              <p><strong>Origine :</strong> ${artefact.origine}</p>
              <p><strong>Fonction :</strong> ${artefact.fonction}</p>
              <p><strong>Pouvoir :</strong> ${artefact.pouvoir}</p>
              <p><strong>Niveau :</strong> ${artefact.niveau}</p>
              <p><strong>Couleurs :</strong> ${artefact.couleurs.join(", ")}</p>
              <p><strong>Description :</strong> ${artefact.description}</p>
              <p class="price"><strong>Prix :</strong> ${artefact.price}</p>
              <p><a href="${artefact.mintUrl}" target="_blank">Mint NFT</a></p>
            </div>
          `;
        } else {
          artefactDetail.innerHTML = "<p>Artefact introuvable.</p>";
        }
      }
    })
    .catch((err) => {
      console.error("Erreur de chargement JSON", err);
      if (artefactList) artefactList.innerHTML = "<p>Erreur de chargement.</p>";
      if (artefactDetail) artefactDetail.innerHTML = "<p>Erreur de chargement.</p>";
    });
});