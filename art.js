function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
  const idStr = getQueryParam("id");
  const id = parseInt(idStr, 10);
  const container = document.getElementById("artefact-detail");

  if (!id || isNaN(id)) {
    container.textContent = "ID d'artefact invalide.";
    return;
  }

  fetch("data.json")
    .then((resp) => {
      if (!resp.ok) throw new Error("Erreur chargement data.json");
      return resp.json();
    })
    .then((data) => {
      const artefact = data.find((item) => item.id === id);
      if (!artefact) {
        container.textContent = "Artefact non trouvé.";
        return;
      }

      container.innerHTML = `
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
    })
    .catch((err) => {
      container.textContent = "Erreur lors du chargement des données.";
      console.error(err);
    });
});