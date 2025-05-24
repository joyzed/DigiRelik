document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const artefact = data.find(a => a.id == id);
      if (!artefact) {
        document.getElementById("artefact-detail").innerHTML = "<p>Artefact introuvable.</p>";
        return;
      }

      document.getElementById("artefact-nom").textContent = artefact.nom;

      const ipfsHash = artefact.ipfs || "QmExampleHash";

      document.getElementById("artefact-detail").innerHTML = `
        <img src="DigiRelik.jpg" alt="${artefact.nom}" class="artefact-img-large">
        <h2>${artefact.nom}</h2>
        <p><strong>Description :</strong> ${artefact.description}</p>
        <p><strong>Origine :</strong> ${artefact.origine || "Non spécifiée"}</p>
        <p><strong>Pouvoirs :</strong> ${artefact.pouvoirs || "Inconnu"}</p>
        <p><strong>Histoire :</strong> ${artefact.histoire || "N/A"}</p>
        <p><strong>ID Hexekta :</strong> ${artefact.id}</p>

        <div class="actions">
          <a class="btn" href="https://xecwallet.com/mint?artefact=${artefact.id}" target="_blank">Mint on XEC</a>
          <a class="btn" href="https://digibyteblockexplorer.com/timestamp?artefact=${artefact.id}" target="_blank">Timestamp on DGB</a>
        </div>

        <div class="ipfs-qr">
          <p><strong>IPFS :</strong> ${ipfsHash}</p>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://ipfs.io/ipfs/${ipfsHash}" alt="QR IPFS">
        </div>
      `;
    })
    .catch(err => {
      document.getElementById("artefact-detail").innerHTML = "<p>Erreur de chargement.</p>";
      console.error(err);
    });
});