DigiRelik – Version 1.0.1.3
===========================

Date : 24/05/2025 16:07:01

Objectifs :
- Uniformisation et enrichissement du fichier col.json
  → Structure alignée avec data.json
  → Ajout des 6 collections NFT officielles (Hexekta + 5 nouvelles)
  → Ajout du champ "drkid" calculé automatiquement

- Mise à jour de data.json
  → Ajout du champ "code": "DCT" pour tous les artefacts
  → Ajout du champ "drkid" (valeurs de 101 à 114)

- Mises à jour HTML
  → hexekta.html : chargement dynamique des artefacts depuis data.json
  → art.html : affichage dynamique du détail d’un artefact via ?id=
  → Nettoyage complet et conformité avec la structure du site

- JavaScript (script.js)
  → Fonction de chargement des artefacts depuis data.json
  → Intégration dynamique sur hexekta.html et art.html
  → Fonction showSection() conservée

Fichiers modifiés :
- data.json
- col.json
- hexekta.html
- art.html
- script.js
- readme.txt

Version précédente : v1.0.1.2
Version actuelle : v1.0.1.3
