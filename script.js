document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) throw new Error("Erreur chargement data.json");
      return response.json();
    })
    .then((artefacts) => {
      const container = document.getElementById("artefacts-container");
      artefacts.forEach((artefact) => {
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

        container.appendChild(block);
      });
    })
    .catch((error) => {
      console.error("Erreur lors du chargement des artefacts :", error);
      const container = document.getElementById("artefacts-container");
      container.textContent = "Impossible de charger les artefacts.";
    });
});