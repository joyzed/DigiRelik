fetch('data.json')
  .then(response => response.json())
  .then(artefacts => {
    const container = document.getElementById('artifact-list');
    artefacts.forEach(item => {
      const div = document.createElement('div');
      div.className = 'artifact';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Erreur de chargement des artefacts :", error);
  });