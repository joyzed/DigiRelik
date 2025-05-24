// Récupérer le paramètre id dans l'URL
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
  const artefacts = [
    {
      "id":1,
      "name":"Le Miroir de Vanta",
      "type":"Interface psychique",
      "origine":"Société secrète post-humaine",
      "fonction":"Permet l'accès aux mémoires numériques collectives",
      "pouvoir":"Absorbe la lumière et projette la conscience dans le réseau",
      "niveau":"Alpha",
      "couleurs":["noir absolu","bleu cyan"],
      "image":"DigiRelik.png",
      "price":"300 XEC",
      "description":"Surface noire absorbant toute lumière, utilisée pour explorer les souvenirs collectifs. Certains y laissent leur esprit, devenant des ombres conscientes."
    },
    {
      "id":2,
      "name":"Synapse 9",
      "type":"Implant neural",
      "origine":"Laboratoire clandestin de Neo-Tokyo",
      "fonction":"Augmente la vitesse de pensée",
      "pouvoir":"Double la conscience, crée une version parallèle du porteur",
      "niveau":"Beta",
      "couleurs":["argent","rouge néon"],
      "image":"DigiRelik.png",
      "price":"420 XEC",
      "description":"Implant piraté par un prodige, provoquant un dédoublement de conscience incontrôlable."
    }
    // Ajouter les autres artefacts ici comme dans le script.js
  ];

  const container = document.getElementById("artefact-detail");
  const idStr = getQueryParam("id");
  const id = parseInt(idStr, 10);

  if (!id || isNaN(id)) {
    container.textContent = "ID d'artefact invalide.";
    return;
  }

  const artefact = artefacts.find(a => a.id === id);

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
});