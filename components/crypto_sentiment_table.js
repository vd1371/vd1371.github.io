// Vanilla JavaScript implementation
function createCryptoSentimentTable(containerId) {
  const container = document.getElementById(containerId);

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
                            </tr>
                        </thead>
                        <tbody>
                            ${parsedData
                              .map(
                                coin => `
                                <tr>
                                    <td class="text-center fw-bold">${coin.symbol}</td>
                                    <td class="text-center ${coin.sentiment_score > 0 ? 'text-success' : coin.sentiment_score < 0 ? 'text-danger' : ''}">
                                        ${parseFloat(coin.sentiment_score).toFixed(2)}
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
