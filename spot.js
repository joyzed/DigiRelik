// spot.js – v1.0.0

async function fetchRates() {
  try {
    // USD -> EUR (local API)
    const usdEurResp = await fetch('http://localhost/api/exchange/usd-eur');
    const usdEurData = await usdEurResp.json();
    const usdEur = usdEurData.rate.toFixed(4);
    document.getElementById('usd-eur').textContent = usdEur;

    // XEC -> USD (local API)
    const xecResp = await fetch('http://localhost/api/price/xec-usd');
    const xecData = await xecResp.json();
    const xecUsd = xecData.price.toFixed(6);
    document.getElementById('xec-usd').textContent = xecUsd;

    // DGB -> USD (local API)
    const dgbResp = await fetch('http://localhost/api/price/dgb-usd');
    const dgbData = await dgbResp.json();
    const dgbUsd = dgbData.price.toFixed(6);
    document.getElementById('dgb-usd').textContent = dgbUsd;

    // DRK -> USD (local API)
    const drkResp = await fetch('http://localhost/api/price/drk-usd');
    const drkData = await drkResp.json();
    const drkUsd = drkData.price;

    if (drkUsd) {
      const drkXec = (drkUsd / xecUsd).toFixed(6);
      document.getElementById('drk-xec').textContent = drkXec;
      const drkDgb = (drkUsd / dgbUsd).toFixed(6);
      document.getElementById('drk-dgb').textContent = drkDgb;
    } else {
      document.getElementById('drk-xec').textContent = 'N/A';
      document.getElementById('drk-dgb').textContent = 'N/A';
    }

  } catch (error) {
    console.error('Erreur chargement cours:', error);
    ['usd-eur', 'xec-usd', 'dgb-usd', 'drk-xec', 'drk-dgb'].forEach(id => {
      document.getElementById(id).textContent = 'Erreur';
    });
  }
}

// Chargement initial et actualisation toutes les 60 secondes
fetchRates();
setInterval(fetchRates, 60000);