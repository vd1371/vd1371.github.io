// Content card functionality for the website

// Function to create content cards
function createContentCard(item, sectionType) {
  try {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 col-sm-12';
    
    const card = document.createElement('div');
    card.className = 'content-card h-100 p-3 border-0 shadow-sm';
    
    const iconClass = getIconClass(sectionType);
    const iconColor = getIconColor(sectionType);
    
    card.innerHTML = `
      <div class="d-flex align-items-start mb-2">
        <div class="me-2">
          <i class="bi ${item.icon || iconClass} ${iconColor} fs-5"></i>
        </div>
        <div class="flex-grow-1">
          <h6 class="fw-semibold mb-1">
            <a href="${item.link}" class="text-decoration-none text-dark stretched-link">
              ${item.title}
            </a>
          </h6>
          ${item.date ? `<small class="text-muted">${item.date}</small>` : ''}
        </div>
      </div>
    `;
    
    col.appendChild(card);
    return col;
  } catch (error) {
    console.error('Error creating content card:', error, item, sectionType);
    // Return a fallback card if there's an error
    const fallbackCol = document.createElement('div');
    fallbackCol.className = 'col-lg-4 col-md-6 col-sm-12';
    fallbackCol.innerHTML = `
      <div class="content-card h-100 p-3 border-0 shadow-sm">
        <div class="d-flex align-items-start mb-2">
          <div class="me-2">
            <i class="bi bi-exclamation-triangle text-warning fs-5"></i>
          </div>
          <div class="flex-grow-1">
            <h6 class="fw-semibold mb-1 text-muted">Error loading content</h6>
          </div>
        </div>
      </div>
    `;
    return fallbackCol;
  }
}

function getIconClass(sectionType) {
  const iconMap = {
    'quant': 'bi-journal-text',
    'papers': 'bi-book'
  };
  return iconMap[sectionType] || 'bi-file-text';
}

function getIconColor(sectionType) {
  const colorMap = {
    'quant': 'text-primary',
    'papers': 'text-info'
  };
  return colorMap[sectionType] || 'text-secondary';
}

// Function to populate sections
function populateSections() {
  const quantNotebooksContainer = document.getElementById('quant-notebooks');
  const researchPapersContainer = document.getElementById('research-papers');

  if (quantNotebooksContainer && quantNotebooks) {
    quantNotebooks.forEach(item => {
      quantNotebooksContainer.appendChild(createContentCard(item, 'quant'));
    });
  }

  if (researchPapersContainer && researchPapers) {
    researchPapers.forEach(item => {
      researchPapersContainer.appendChild(createContentCard(item, 'papers'));
    });
  }
}

// Wait for the DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', populateSections);
} else {
  populateSections();
}
