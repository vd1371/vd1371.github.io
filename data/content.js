// Content data for the website
(function () {
  const quantNotebooks = [
    {
      title: 'Value and Momentum Everywhere',
      link: 'posts/quantio/2025-05-01-value-and-momentum-everywhere.html',
      date: 'May 1, 2024',
      icon: 'bi-arrow-right-circle',
    },
    {
      title: 'Stock Returns After Extreme Loss Events',
      link: 'posts/quantio/2025-05-01-stock-returns-after-shock.html',
      date: 'May 1, 2024',
      icon: 'bi-arrow-right-circle',
    },
    {
      title: 'Predicting Indices Using ARIMA',
      link: 'posts/quantio/2025-05-02-predicting-indices-using-arima.html',
      date: 'May 2, 2024',
      icon: 'bi-arrow-right-circle',
    },
  ];

  const projects = [
    {
      title: 'Latest Project',
      link: 'projects/latest-project.html',
      icon: 'bi-github',
    },
    {
      title: 'Previous Project',
      link: 'projects/previous-project.html',
      icon: 'bi-github',
    },
    {
      title: 'Project Archive',
      link: 'projects/archive.html',
      icon: 'bi-archive',
    },
  ];

  const researchPapers = [
    {
      title: 'Tutorials',
      link: 'resources/tutorials.html',
      icon: 'bi-mortarboard',
    },
    {
      title: 'Recommended Books',
      link: 'resources/books.html',
      icon: 'bi-book',
    },
    {
      title: 'Useful Tools',
      link: 'resources/tools.html',
      icon: 'bi-tools',
    },
  ];

  // Expose the variables globally
  window.quantNotebooks = quantNotebooks;
  window.projects = projects;
  window.researchPapers = researchPapers;
})();
