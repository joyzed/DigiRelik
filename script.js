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