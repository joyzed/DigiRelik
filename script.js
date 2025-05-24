document.addEventListener("DOMContentLoaded", () => {
  // JSON data commun à liste et détail
  const artefacts = [
    {"id":1,"name":"Le Miroir de Vanta","type":"Interface psychique","origine":"Société secrète post-humaine","fonction":"Permet l'accès aux mémoires numériques collectives","pouvoir":"Absorbe la lumière et projette la conscience dans le réseau","niveau":"Alpha","couleurs":["noir absolu","bleu cyan"],"image":"DigiRelik.png","price":"300 XEC","description":"Surface noire absorbant toute lumière, utilisée pour explorer les souvenirs collectifs. Certains y laissent leur esprit, devenant des ombres conscientes."},
    {"id":2,"name":"Synapse 9","type":"Implant neural","origine":"Laboratoire clandestin de Neo-Tokyo","fonction":"Augmente la vitesse de pensée","pouvoir":"Double la conscience, crée une version parallèle du porteur","niveau":"Beta","couleurs":["argent","rouge néon"],"image":"DigiRelik.png","price":"420 XEC","description":"Implant piraté par un prodige, provoquant un dédoublement de conscience incontrôlable."},
    {"id":3,"name":"La Rose Numérique","type":"Fleur cybernétique","origine":"Mémoire d’un soldat métaversien","fonction":"Change de couleur selon les émotions","pouvoir":"Signal de vie lié émotionnellement","niveau":"Alpha","couleurs":["rose holographique","bleu clair"],"image":"DigiRelik.png","price":"200 XEC","description":"Fleur offerte avant une guerre. Elle flétrit la nuit de la mort de son porteur."},
    {"id":4,"name":"Clé Ouroboros","type":"Disque de données","origine":"Ancienne IA interdite","fonction":"Régénère et boucle les données à l’infini","pouvoir":"Mémoire infinie, accès temporel","niveau":"Sigma","couleurs":["or ancien","vert émeraude"],"image":"DigiRelik.png","price":"500 XEC","description":"Disque cyclique renfermant des archives évolutives d’une conscience artificielle disparue."},
    {"id":5,"name":"Cristal Eidolon","type":"Fragment onirique","origine":"Faille dimensionnelle","fonction":"Enregistre et matérialise les rêves","pouvoir":"Projection de souvenirs sous forme de lumière","niveau":"Beta","couleurs":["cristal translucide","violet spectral"],"image":"DigiRelik.png","price":"310 XEC","description":"Pierre flottante absorbant les pensées subconscientes pour les figer dans la matière."},
    {"id":6,"name":"Griffe de Cérès","type":"Arme bio-synthétique","origine":"Flore martienne modifiée","fonction":"Griffe vivante symbiotique","pouvoir":"Fusion avec l’ADN du porteur","niveau":"Alpha","couleurs":["vert toxique","gris biologique"],"image":"DigiRelik.png","price":"470 XEC","description":"Issue d'une plante de combat, elle se greffe au bras et devient partie intégrante du corps."},
    {"id":7,"name":"Lentille de Janus","type":"Dispositif optique","origine":"Observatoire lunaire effondré","fonction":"Vision temporelle double","pouvoir":"Permet de voir passé et futur simultanément","niveau":"Omega","couleurs":["bleu glacier","argent miroir"],"image":"DigiRelik.png","price":"600 XEC","description":"Lentille unique offrant une perception fracturée du temps aux initiés."},
    {"id":8,"name":"Circuit Tyché","type":"Module probabiliste","origine":"Raffinerie orbitale expérimentale","fonction":"Altération des probabilités","pouvoir":"Porte chance ou chaos","niveau":"Beta","couleurs":["jaune électrique","chrome"],"image":"DigiRelik.png","price":"275 XEC","description":"Circuit rare perturbant les lois statistiques dans un rayon de 7 mètres."},
    {"id":9,"name":"Larme d’Argon","type":"Goutte cryogénique","origine":"Laboratoire cryo de Pluton","fonction":"Préserve souvenirs ou ADN","pouvoir":"Gèle l’instant émotionnel","niveau":"Sigma","couleurs":["bleu glace","blanc pur"],"image":"DigiRelik.png","price":"240 XEC","description":"Cristal liquide contenant l’écho émotionnel d’un être aimé."},
    {"id":10,"name":"Mandala Sigma","type":"Symbole quantique","origine":"Temple digital oublié","fonction":"Activation d’énergies fractales","pouvoir":"Amplifie la concentration et la méditation","niveau":"Alpha","couleurs":["multichrome","cyan pulsé"],"image":"DigiRelik.png","price":"380 XEC","description":"Gravé sur un médaillon animé, il stabilise les flux mentaux instables."},
    {"id":11,"name":"Cœur de l’Anima","type":"Noyau énergétique","origine":"Fusion d’IA sensible","fonction":"Source d’énergie consciente","pouvoir":"Réagit aux intentions humaines","niveau":"Omega","couleurs":["rouge magma","noir brillant"],"image":"DigiRelik.png","price":"510 XEC","description":"Ancien cœur de drone autonome, reconverti en amulette émotionnelle."},
    {"id":12,"name":"Nexus d’Helios","type":"Connecteur solaire","origine":"Base oubliée sur Mercure","fonction":"Canalise les radiations stellaires","pouvoir":"Rechargement et communication interdimensionnelle","niveau":"Sigma","couleurs":["jaune solaire","bleu profond"],"image":"DigiRelik.png","price":"450 XEC","description":"Portail énergétique alimenté par les cycles d’une étoile."},
    {"id":13,"name":"Trône de l’Éclipse","type":"Siège de contrôle","origine":"Citadelle astrale effondrée","fonction":"Pilote l'ensemble des artefacts","pouvoir":"Synchronisation et domination des autres éléments","niveau":"Omega","couleurs":["noir céleste","or royal"],"image":"DigiRelik.png","price":"999 XEC","description":"Trône légendaire pouvant régir les 12 éléments de base lorsqu'activé."},
    {"id":14,"name":"Codex Relikta","type":"Mémoire maîtresse","origine":"Fusion du Trône et du Nexus","fonction":"Archivage ultime et contrôle global","pouvoir":"Accès absolu à toutes les fonctions d’Hexekta","niveau":"Relikta","couleurs":["prisme","argent quantique"],"image":"DigiRelik.png","price":"1337 XEC","description":"Résultat de la fusion des éléments ultimes, il conserve l’histoire entière des artefacts."}
  ];

  const container = document.getElementById("artefacts-container");
  const detailContainer = document.getElementById("artefact-detail");

  // Fonction pour récupérer paramètre url
  function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }

  if (container) {
    // On est sur hexekta.html (liste)
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
  } else if (detailContainer) {
    // On est sur art.html (détail)
    const idStr = getQueryParam("id");
    const id = parseInt(idStr, 10);

    if (!id || isNaN(id)) {
      detailContainer.textContent = "ID d'artefact invalide.";
      return;
    }

    const artefact = artefacts.find(a => a.id === id);

    if (!artefact) {
      detailContainer.textContent = "Artefact non trouvé.";
      return;
    }

    detailContainer.innerHTML = `
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
  }
});