document.addEventListener("DOMContentLoaded", () => {
  const containerList = document.getElementById("artefacts-container");
  const containerDetail = document.getElementById("artefact-detail");

  // Fonction pour récupérer un paramètre URL
  function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }

  fetch("data.json")
    .then(response => {
      if (!response.ok) throw new Error("Erreur lors du chargement de data.json");
      return response.json();
    })
    .then(artefacts => {
      if (containerList) {
        // Page liste : afficher tous les artefacts
        artefacts.forEach(artefact => {
          const block = document.createElement("div");
          block.className = "artefact-card";

          block.innerHTML = `
            <a href="art.html?id=${artefact.id}" class="artefact-tile" title="${artefact.name}">
              <img src="${artefact.image}" alt="${artefact.name}" class="artefact-img" />
              <div class="artefact-txt">
                <h3>${artefact.name}</h3>
                <span class="artefact-price">${artefact.price || "Prix inconnu"}</span>
              </div>
            </a>
          `;
          containerList.appendChild(block);
        });
      } else if (containerDetail) {
        // Page détail : afficher l’artefact correspondant à l’id
        const idStr = getQueryParam("id");
        const id = parseInt(idStr, 10);

        if (!id || isNaN(id)) {
          containerDetail.textContent = "ID d'artefact invalide.";
          return;
        }

        const artefact = artefacts.find(a => a.id === id);

        if (!artefact) {
          containerDetail.textContent = "Artefact non trouvé.";
          return;
        }

        containerDetail.innerHTML = `
          <div class="detail-card">
            <img src="${artefact.image}" alt="${artefact.name}" class="detail-image" />
            <h2>${artefact.name}</h2>
            <p><strong>Type :</strong> ${artefact.type}</p>
            <p><strong>Origine :</strong> ${artefact.origine}</p>
            <p><strong>Fonction :</strong> ${artefact.fonction}</p>
            <p><strong>Pouvoir :</strong> ${artefact.pouvoir}</p>
            <p><strong>Niveau :</strong> ${artefact.niveau}</p>
            <p><strong>Couleurs :</strong> ${artefact.couleurs.join(", ")}</p>
            <p><strong>Prix :</strong> ${artefact.price}</p>
            <p><strong>Description :</strong><br />${artefact.description}</p>
          </div>
        `;
      }
    })
    .catch(error => {
      console.error("Erreur:", error);
      if (containerList) containerList.textContent = "Erreur lors du chargement des artefacts.";
      if (containerDetail) containerDetail.textContent = "Erreur lors du chargement de l’artefact.";
    });
});