// Vanilla JavaScript implementation
function createCryptoSentimentTable(containerId) {
  const container = document.getElementById(containerId);

  const base_link = 'https://coinmarketcap.com/currencies/';
  const TOP_40_COINS = {
    BTC: base_link + 'bitcoin',
    ETH: base_link + 'ethereum',
    USDT: base_link + 'tether',
    SOL: base_link + 'solana',
    BNB: base_link + 'bnb',
    USDC: base_link + 'usd-coin',
    XRP: base_link + 'xrp',
    DOGE: base_link + 'dogecoin',
    ADA: base_link + 'ada',
    TRX: base_link + 'tron',
    AVAX: base_link + 'avalanche',
    SHIB: base_link + 'shiba-inu',
    LINK: base_link + 'chainlink',
    DOT: base_link + 'polkadot',
    BCH: base_link + 'bitcoin-cash',
    NEAR: base_link + 'near-protocol',
    LTC: base_link + 'litecoin',
    PEPE: base_link + 'pepe',
    MATIC: base_link + 'polygon-ecosystem-token',
    ICP: base_link + 'internet-computer',
    KAS: base_link + 'kaspa',
    APT: base_link + 'aptos',
    XMR: base_link + 'monero',
    XLM: base_link + 'stellar',
    ETC: base_link + 'ethereum-classic',
    CRO: base_link + 'cronos',
    SUI: base_link + 'sui',
    FIL: base_link + 'filecoin',
    OKB: base_link + 'okb',
    HBAR: base_link + 'hedera',
    ARB: base_link + 'arbitrum',
    ATOM: base_link + 'cosmos',
    IMX: base_link + 'immutable-x',
    RNDR: base_link + 'render',
    VET: base_link + 'vechain',
    SKY: base_link + 'sky',
    GRT: base_link + 'the-graph',
    OP: base_link + 'optimism-ethereum',
    INJ: base_link + 'injective',
  };

  // Show loading state
  container.innerHTML = '<div class="text-center my-4">Loading sentiment data...</div>';

  // Fetch and display data
  fetch('/data/projects/recent_sentiment.csv')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      // Parse CSV safely
      const rows = data
        .trim()
        .split('\n')
        .map(row => row.trim())
        .filter(row => row);
      if (rows.length <= 1) {
        throw new Error('CSV file is empty or only contains headers');
      }

      const headers = rows[0].split(',').map(header => header.trim());
      const parsedData = [];

      // Parse data rows
      for (let i = 1; i < rows.length; i++) {
        const values = rows[i].split(',').map(value => value.trim());
        if (values.length >= headers.length) {
          const entry = {
            symbol: values[0],
            sentiment_score: parseFloat(values[1]) || 0,
            uncertainty_score: parseFloat(values[2]) || 0,
            potential_market_impact: parseFloat(values[3]) || 0,
            count: parseInt(values[4]) || 0,
            link: TOP_40_COINS[values[0]],
          };
          if (!isNaN(entry.sentiment_score)) {
            parsedData.push(entry);
          }
        }
      }

      // Sort data by sentiment score (highest to lowest)
      parsedData.sort((a, b) => b.sentiment_score - a.sentiment_score);

      // Create table HTML
      const tableHTML = `
                <div class="table-responsive">
                    <table class="table table-hover table-bordered">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col" class="text-center">Cryptocurrency</th>
                                <th scope="col" class="text-center">Sentiment Score</th>
                                <th scope="col" class="text-center">Uncertainty</th>
                                <th scope="col" class="text-center">Market Impact</th>
                                <th scope="col" class="text-center">Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${parsedData
                              .map(
                                coin => `
                                <tr>
                                    <td class="text-center fw-bold">
                                      <a href="${coin.link}" target="_blank">${coin.symbol}</a>
                                    </td>
                                    <td class="text-center ${coin.sentiment_score > 0 ? 'text-success' : coin.sentiment_score < 0 ? 'text-danger' : ''}">
                                        ${parseFloat(coin.sentiment_score).toFixed(2)}
                                    </td>
                                    <td class="text-center">
                                        ${parseFloat(coin.uncertainty_score).toFixed(2)}
                                    </td>
                                    <td class="text-center">
                                        ${parseFloat(coin.potential_market_impact).toFixed(2)}
                                    </td>
                                    <td class="text-center">
                                        ${coin.count}
                                    </td>
                                </tr>
                            `
                              )
                              .join('')}
                        </tbody>
                    </table>
                </div>
            `;

      container.innerHTML = tableHTML;
    })
    .catch(error => {
      console.error('Error loading sentiment data:', error);
      container.innerHTML =
        '<div class="text-center my-4 text-danger">Failed to load sentiment data. Please try again later.</div>';
    });
}

// Export the function so it can be used in HTML
window.createCryptoSentimentTable = createCryptoSentimentTable;
