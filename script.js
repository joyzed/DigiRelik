document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");

  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      if (page === "hexekta") {
        const gallery = document.getElementById("gallery");
        data.forEach(artefact => {
          const card = document.createElement("div");
          card.className = "artefact-card";
          card.innerHTML = `
            <img src="DigiRelik.png" alt="${artefact.nom}">
            <h2>${artefact.nom}</h2>
            <p>${artefact.description}</p>
            <a href="art.html?id=${artefact.id}" class="lien-artefact">Voir l'artefact</a>
          `;
          gallery.appendChild(card);
        });
      }

      if (page === "art") {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        const artefact = data.find(a => a.id == id);
        const container = document.getElementById("artefact-detail");

        if (!artefact) {
          document.getElementById("artefact-nom").textContent = "Artefact introuvable";
          container.innerHTML = "<p>Impossible de trouver cet artefact.</p>";
          return;
        }

        document.getElementById("artefact-nom").textContent = artefact.nom;

        container.innerHTML = `
          <img src="DigiRelik.png" alt="${artefact.nom}" class="artefact-img-large">
          <h2>${artefact.nom}</h2>
          <p><strong>Description :</strong> ${artefact.description}</p>
          <p><strong>Origine :</strong> ${artefact.origine}</p>
          <p><strong>Pouvoirs :</strong> ${artefact.pouvoirs}</p>
          <p><strong>Histoire :</strong> ${artefact.histoire}</p>
          <p><strong>ID :</strong> ${artefact.id}</p>

          <div class="actions">
            <a class="btn" href="https://xecwallet.com/mint?artefact=${artefact.id}" target="_blank">Mint sur XEC</a>
            <a class="btn" href="https://digibyteblockexplorer.com/timestamp?artefact=${artefact.id}" target="_blank">Timestamp sur DGB</a>
          </div>

          <div class="ipfs-qr">
            <p><strong>IPFS :</strong> ${artefact.ipfs}</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://ipfs.io/ipfs/${artefact.ipfs}" alt="QR IPFS">
          </div>
        `;
      }
    })
    .catch(err => {
      console.error("Erreur JSON :", err);
      const target = document.getElementById("gallery") || document.getElementById("artefact-detail");
      target.innerHTML = "<p>Erreur lors du chargement des données.</p>";
    });
});