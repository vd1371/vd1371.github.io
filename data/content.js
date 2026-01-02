// Content data for the website
// Enhanced with categories and descriptions for better filtering and display

(function () {
  const quantNotebooks = [
    {
      title: "Bet Against Beta in HK Market",
      link: "posts/quantio/2024-03-20-bet_against_beta_HK.html",
      icon: "bi-activity",
      category: "statistical",
      description: "Exploring the low-beta anomaly in Hong Kong equities"
    },
    {
      title: "Cross-stock Momentum",
      link: "posts/quantio/2024-03-20-cross-stock-momentum.html",
      icon: "bi-arrow-up-right-circle",
      category: "momentum",
      description: "Lead-lag relationships and cross-asset momentum signals"
    },
    {
      title: "Technical Trading Strategies in Crypto",
      link: "posts/quantio/2024-03-20-technical-trading-strategies-in-crypto.html",
      icon: "bi-graph-up",
      category: "technical",
      description: "Applying technical indicators to cryptocurrency markets"
    },
    {
      title: "Stock Returns After Extreme Loss Events",
      link: "posts/quantio/2025-05-01-stock-returns-after-shock.html",
      icon: "bi-lightning-charge",
      category: "statistical",
      description: "Analyzing return patterns following market shocks"
    },
    {
      title: "Value and Momentum Everywhere",
      link: "posts/quantio/2025-05-01-value-and-momentum-everywhere.html",
      icon: "bi-currency-exchange",
      category: "momentum",
      description: "Cross-asset value and momentum factor analysis"
    },
    {
      title: "Predicting Indices Using ARIMA",
      link: "posts/quantio/2025-05-02-predicting-indices-using-arima.html",
      icon: "bi-graph-up-arrow",
      category: "forecasting",
      description: "Time series forecasting with ARIMA models"
    },
    {
      title: "Revisiting Momentum",
      link: "posts/quantio/2025-05-03-revisiting-momentum.html",
      icon: "bi-arrow-repeat",
      category: "momentum",
      description: "A fresh look at momentum factor strategies"
    },
    {
      title: "Asset Pricing: A Tale of Night and Day",
      link: "posts/quantio/2025-05-04-asset-pricing-a-tale-of-night-and-day.html",
      icon: "bi-moon-stars",
      category: "statistical",
      description: "Intraday vs overnight return patterns"
    },
    {
      title: "Combining Low Volatility with Momentum",
      link: "posts/quantio/2025-05-04-combining-low-volatility-with-momentum.html",
      icon: "bi-diagram-3",
      category: "momentum",
      description: "Multi-factor approach combining volatility and momentum"
    },
    {
      title: "Polynomial Moving Regression Band",
      link: "posts/quantio/2025-05-13-polynomial-moving-regression-band.html",
      icon: "bi-diagram-2",
      category: "technical",
      description: "Advanced regression-based technical indicator"
    },
    {
      title: "Dynamic Tactical Asset Allocation",
      link: "posts/quantio/2025-05-15-dynamic-tactical-asset-allocation.html",
      icon: "bi-pie-chart",
      category: "forecasting",
      description: "Adaptive portfolio allocation strategies"
    },
    {
      title: "MACD-based Signals",
      link: "posts/quantio/2025-05-16-MACD-based-signals.html",
      icon: "bi-graph-up",
      category: "technical",
      description: "Trading signals derived from MACD indicator"
    },
    {
      title: "Holt-Winter for Gold and BTC",
      link: "posts/quantio/2025-05-19-Holt-Winter-for-Gold-and-BTC.html",
      icon: "bi-lightning-charge",
      category: "forecasting",
      description: "Exponential smoothing forecasts for commodities and crypto"
    },
    {
      title: "Stock Returns After Extreme Loss Events",
      link: "posts/quantio/2025-05-21-stock-returns-after-extreme-loss-events.html",
      icon: "bi-graph-up-arrow",
      category: "statistical",
      description: "Post-crash recovery patterns in equity markets"
    },
    {
      title: "VIX-to-Market Statistical Arbitrage",
      link: "posts/quantio/2025-05-23-statistical-arbitrage-strategy-based-on-VIX-to-market-based-signal.html",
      icon: "bi-bar-chart-line",
      category: "statistical",
      description: "Volatility-based mean reversion strategy"
    },
    {
      title: "Stat Arb in Crude Oil Markets",
      link: "posts/quantio/2025-05-25-stat-arb-in-crude-Oil-markets.html",
      icon: "bi-droplet",
      category: "statistical",
      description: "Statistical arbitrage in energy commodities"
    },
    {
      title: "Pair Trading",
      link: "posts/quantio/2025-05-26-pair-trading.html",
      icon: "bi-arrows-angle-contract",
      category: "statistical",
      description: "Cointegration-based pairs trading strategies"
    },
  ];

  const researchPapers = [
    {
      title: "Estimating Monte Carlo Simulation Results with ML",
      link: "posts/papers/2025-05-17-estimating-monte-carlo.html",
      icon: "bi-cpu-fill",
      description: "Using deep neural networks to expedite life cycle cost analysis under multiple uncertainties"
    },
    {
      title: "Estimating Optimization Results with ML",
      link: "posts/papers/2025-05-17-estimating-optimization-results.html",
      icon: "bi-book",
      description: "Machine learning approaches for upscaling infrastructure intervention planning"
    },
    {
      title: "Open-source Platform for Infrastructure Asset Management",
      link: "posts/papers/2025-06-29-giams.html",
      icon: "bi-gear-wide-connected",
      description: "An extensible platform for general infrastructure asset management systems"
    },
    {
      title: "Multi-agent RL for Portfolio Management",
      link: "posts/papers/2025-06-29-RLAMNL.html",
      icon: "bi-diagram-2",
      description: "Network-level multiagent reinforcement learning for project-level intervention planning"
    },
  ];

  // Profile data for consistency
  const profile = {
    name: "Vahid Asghari",
    title: "Quant AI Specialist",
    company: "Premialab",
    email: "contact@vahidasghari.me",
    linkedin: "https://linkedin.com/in/asgharivahid",
    github: "https://github.com/vd1371",
    scholar: "https://scholar.google.com/citations?user=eUlLuc8AAAAJ&hl=en",
    meetup: "https://www.meetup.com/hong-kong-machine-learning-meetup",
    calendar: "https://calendar.app.google/UMZ7JpXbH4V94bMs9",
    newsletter: "https://forms.gle/isrRxsD94VtHXNKx5"
  };

  // Expose the variables globally
  window.quantNotebooks = quantNotebooks;
  window.researchPapers = researchPapers;
  window.profile = profile;
})();
