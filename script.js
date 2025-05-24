const artifacts = [
  { name: "Le Miroir de Vanta", image: "vanta.jpg" },
  { name: "Synapse 9", image: "synapse9.jpg" },
  // Ajoute les autres artefacts ici
];

const grid = document.getElementById('artifact-grid');
artifacts.forEach(item => {
  const div = document.createElement('div');
  div.innerHTML = `<img src="${item.image}" alt="${item.name}" style="width:100%;border-radius:8px;"><p>${item.name}</p>`;
  grid.appendChild(div);
});

function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = (section.id === id) ? 'block' : 'none';
  });
}

// Chargement JSON fictif (exemple)
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const nftList = document.getElementById('nft-list');
    nftList.innerHTML = '';
    data.artefacts.forEach(objet => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${objet.nom}</strong> – ${objet.description}`;
      nftList.appendChild(div);
    });
  });

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(artefact => {
      // Exemple de rendu dynamique
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${artefact.name}</h3>
        <img src="${artefact.image}" alt="${artefact.name}" style="max-width:200px">
        <p>${artefact.description}</p>
        <p><strong>Pouvoir :</strong> ${artefact.power}</p>
      `;
      document.getElementById('artifacts').appendChild(div);
    });
  });