// Content data for the website
(function () {
  const quantNotebooks = [
    {
      title: 'Value and Momentum Everywhere',
      link: 'posts/quantio/2025-05-01-value-and-momentum-everywhere.html',
      date: 'May 1, 2025',
      icon: 'bi-graph-up',
    },
    {
      title: 'Stock Returns After Extreme Loss Events',
      link: 'posts/quantio/2025-05-01-stock-returns-after-shock.html',
      date: 'May 1, 2025',
      icon: 'bi-bar-chart',
    },
    {
      title: 'Predicting Indices Using ARIMA',
      link: 'posts/quantio/2025-05-02-predicting-indices-using-arima.html',
      date: 'May 2, 2025',
      icon: 'bi-calculator',
    },
    {
      title: 'Revisiting Momentum',
      link: 'posts/quantio/2025-05-03-revisiting-momentum.html',
      date: 'May 3, 2025',
      icon: 'bi-graph-up',
    },
  ];

  const projects = [
    {
      title: 'Quant Strategies',
      link: 'projects/quant-strategies.html',
      icon: 'bi-code-slash',
      date: 'To be updated',
    },
    {
      title: 'Crypto News Sentiment',
      date: 'May 2, 2025',
      link: 'posts/projects/2025-05-02-crypto-news-sentiment.html',
      icon: 'bi-tools',
    },
  ];

  const researchPapers = [
    {
      // Expediting life cycle cost analysis of infrastructure assets under multiple uncertainties by deep neural networks
      title: 'Estimating Monte Carlo Simulation results with ML',
      link: 'resources/tutorials.html',
      icon: 'bi-cpu',
    },
    {
      // Machine learning modeling for spectral transient-based leak detection
      // Upscaling complex project-level infrastructure intervention planning to network assets
      title: 'Estimating Optimization Results with ML',
      link: 'resources/books.html',
      icon: 'bi-journal-text',
    },
    {
      // An open-source and extensible platform for general infrastructure asset management system
      title: 'An open-source and extensible platform for general infrastructure asset management system',
      link: 'resources/tools.html',
      icon: 'bi-layers',
    },
    {
      // The Network Level Multiagent reinforcement learning for project-level intervention planning under multiple uncertainties
      title:
        'The Network Level Multiagent reinforcement learning for project-level intervention planning under multiple uncertainties',
      link: 'resources/tools.html',
      icon: 'bi-cpu',
    },
  ];

  // Expose the variables globally
  window.quantNotebooks = quantNotebooks;
  window.projects = projects;
  window.researchPapers = researchPapers;
})();
