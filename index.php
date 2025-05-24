<!-- index.php – v3.0.0 – 24/05/2025 22:00:00 – Page d'accueil principale avec menu -->
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>DigiRelik – Accueil</title>
  <link rel="stylesheet" href="style.css" />
  <script defer src="script.js"></script>
</head>
<body>
  <header>
    <h1 class="logo">DigiRelik</h1>
    <nav class="menu">
      <ul>
        <li><a href="#home" onclick="showSection('home')">Accueil</a></li>
        <li><a href="#project" onclick="showSection('project')">Projet</a></li>
        <li><a href="#about" onclick="showSection('about')">À propos</a></li>
        <li><a href="#contact" onclick="showSection('contact')">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home" class="section active">
      <h2>Bienvenue sur DigiRelik</h2>
      <p>Plongez dans l'univers des artefacts numériques NFT. DigiRelik est une passerelle vers la mémoire du futur.</p>
    </section>

    <section id="project" class="section">
      <h2>Notre Projet</h2>
      <p>Le projet <strong>Hexekta</strong> encapsule des fragments d'identité dans des artefacts numériques uniques.</p>
      <a href="hexekta.html">Voir la collection Hexekta</a>
    </section>

    <section id="about" class="section">
      <h2>À propos</h2>
      <p>DigiRelik est une initiative belge de préservation symbolique via la technologie blockchain.</p>
    </section>

    <section id="contact" class="section">
      <h2>Contact</h2>
      <p>Envoyez-nous un message via <a href="mailto:contact@digirelik.org">contact@digirelik.org</a></p>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 DigiRelik – Tous droits réservés</p>
  </footer>
</body>
</html>
