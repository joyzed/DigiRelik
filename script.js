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
    // Ajoute les autres artefacts ici de la même façon
  ];

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
});