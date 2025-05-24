:root {
  --main-bg: #0d1a26;
  --main-text: #dff6ff;
  --accent: #00ffff;
  --section-bg: #1a2633;
  --border: #00ffff99;
  --radius: 1.1em;
  --shadow: 0 4px 32px #00ffff22;
}

html, body {
  margin: 0;
  padding: 0;
  background: var(--main-bg);
  color: var(--main-text);
  font-family: 'Orbitron', Arial, sans-serif;
  min-height: 100vh;
}

header {
  background: var(--section-bg);
  box-shadow: var(--shadow);
  padding: 1.5em 0 1em 0;
  text-align: center;
  border-bottom: 2px solid var(--accent);
}

.site-title {
  font-size: 2.3em;
  color: var(--accent);
  letter-spacing: 0.08em;
  margin: 0;
}

nav.menu {
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-top: 1em;
}

.menu-link {
  background: transparent;
  border: 1.7px solid var(--border);
  color: var(--main-text);
  border-radius: var(--radius);
  padding: 0.7em 1.7em;
  font-weight: bold;
  font-size: 1.07em;
  box-shadow: 0 1px 10px #00ffff33 inset;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  display: inline-block;
}
.menu-link:hover,
.menu-link.active {
  background: var(--accent);
  color: #002233;
  border-color: #66faff;
}

main {
  max-width: 700px;
  margin: 2.5em auto;
  padding: 1.3em;
}

.section {
  background: var(--section-bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  padding: 2em 1.5em;
  margin-bottom: 2em;
}

a {
  color: var(--accent);
  text-decoration: underline;
  transition: color 0.2s;
}
a:hover {
  color: #fff;
}

/* Galerie Hexekta */
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2em;
  margin-top: 2em;
}
.artefact-card {
  display: flex;
  flex-direction: column;
  background: #112233;
  border: 1.5px solid var(--accent);
  border-radius: 1em;
  box-shadow: 0 2px 12px #00ffff33;
  padding: 1.2em 1em;
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.2s;
  align-items: center;
}
.artefact-card:hover {
  transform: scale(1.04);
  box-shadow: 0 4px 22px #00ffff55;
  border-color: #22ffff;
}
.artefact-card img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 0.7em;
  margin-bottom: 0.8em;
  background: #011b20;
  border: 1.5px solid #00ffff44;
}
.artefact-info {
  text-align: center;
}
.artefact-info h3 {
  margin: 0 0 0.3em 0;
  font-size: 1.1em;
  color: var(--accent);
  letter-spacing: 0.04em;
}
.artefact-price {
  font-size: 1em;
  color: #77faff;
  font-weight: bold;
}

/* Page détail artefact */
.artefact-detail .back-link {
  color: var(--accent);
  font-size: 1em;
  margin-bottom: 1.2em;
  display: inline-block;
}
.artefact-main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.7em;
  margin-bottom: 1.3em;
}
.artefact-image {
  width: 140px;
  height: 140px;
  border-radius: 1em;
  object-fit: cover;
  border: 2px solid var(--accent);
  background: #011b20;
  box-shadow: 0 2px 18px #00ffff33;
}
.artefact-meta {
  flex: 1;
  min-width: 180px;
}
.artefact-meta h2 {
  margin-top: 0;
  color: var(--accent);
  font-size: 1.35em;
  letter-spacing: 0.04em;
}
.artefact-meta p {
  margin: 0.15em 0;
  font-size: 1em;
}
.artefact-price {
  font-size: 1.12em;
  color: #0ff;
  font-weight: bold;
}
.artefact-desc {
  margin-top: 1.2em;
  font-size: 1.05em;
  color: #b1f6ff;
}

ul {
  margin: 1em 0 0.5em 2em;
}

@media (max-width: 700px) {
  main { padding: 0.7em; }
  .section { padding: 1.2em 0.7em; }
  nav.menu { flex-direction: column; gap: 0.6em; }
  .gallery { grid-template-columns: 1fr; }
  .artefact-main { flex-direction: column; gap: 1em; }
  .artefact-image { width: 90px; height: 90px; }
}