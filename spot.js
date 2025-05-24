// spot.js – v1.0.1 – 24/05/2025 12:13:53 – Initialisation du script spot pour données de marché

async function fetchSpotRates() {
  try {
    const [xec, dgb] = await Promise.all([
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=ecash&vs_currencies=usd'),
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=digibyte&vs_currencies=usd')
    ]);

    const xecUsd = (await xec.json()).ecash.usd.toFixed(6);
    const dgbUsd = (await dgb.json()).digibyte.usd.toFixed(6);

    console.log("XEC/USD:", xecUsd);
    console.log("DGB/USD:", dgbUsd);

    // Exemple d'affichage dans des éléments HTML
    const xecEl = document.getElementById('spot-xec');
    const dgbEl = document.getElementById('spot-dgb');
    if (xecEl) xecEl.textContent = xecUsd;
    if (dgbEl) dgbEl.textContent = dgbUsd;

  } catch (e) {
    console.error("Erreur spot.js :", e);
  }
}

// Lancer au chargement
fetchSpotRates();
setInterval(fetchSpotRates, 60000);


// Ajout des ratios DRK
function updateDRKTickers(xecUsd, dgbUsd) {
  const drkValue = 1; // 1 DRK de base
  const drkXec = (drkValue / xecUsd).toFixed(2);
  const drkDgb = (drkValue / dgbUsd).toFixed(2);
  const drkBtc = (drkValue / 67000).toFixed(8); // base BTC fictive

  const elXec = document.getElementById('drk-xec');
  const elDgb = document.getElementById('drk-dgb');
  const elBtc = document.getElementById('drk-btc');

  if (elXec) elXec.textContent = drkXec;
  if (elDgb) elDgb.textContent = drkDgb;
  if (elBtc) elBtc.textContent = drkBtc;
}

// Injecter les nouvelles valeurs après récupération
fetchSpotRates = async function () {
  try {
    const [xec, dgb] = await Promise.all([
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=ecash&vs_currencies=usd'),
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=digibyte&vs_currencies=usd')
    ]);

    const xecUsd = (await xec.json()).ecash.usd.toFixed(6);
    const dgbUsd = (await dgb.json()).digibyte.usd.toFixed(6);

    document.getElementById('spot-xec').textContent = xecUsd;
    document.getElementById('spot-dgb').textContent = dgbUsd;

    updateDRKTickers(xecUsd, dgbUsd);

  } catch (e) {
    console.error("Erreur spot.js :", e);
  }
}
