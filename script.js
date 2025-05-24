if (document.getElementById("collection-list")) {
  fetch("col.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("collection-list");
      data.forEach(collection => {
        const card = document.createElement("div");
        card.className = "collection-card";
        card.innerHTML = `
          <h3>${collection.nom} (${collection.ticker})</h3>
          <p><strong>Nombre :</strong> ${collection.nombre} NFT</p>
          <p><strong>Type :</strong> ${collection.type}</p>
          <p>${collection.description}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Erreur lors du chargement des collections :", error);
    });
}