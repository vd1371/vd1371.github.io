/**
 * Post Page Navigation Component
 * Creates a minimal navigation bar for post pages
 */

function loadSidebar() {
  const sidebarContainer = document.querySelector('.sidebar-container');
  if (!sidebarContainer) return;
  
  // Determine the base path for assets and links based on current page location
  const currentPath = window.location.pathname;
  let basePath = '';
  
  // Check if we're in a subdirectory (posts/projects/, posts/papers/, etc.)
  if (currentPath.includes('/posts/')) {
    // Count directory levels to determine relative path
    const pathParts = currentPath.split('/');
    const depth = pathParts.length - 2;
    basePath = '../'.repeat(depth);
  }
  
  // Create a minimal navigation for post pages
  sidebarContainer.innerHTML = `
    <nav class="post-nav" id="postNav">
      <div class="post-nav-container">
        <a href="${basePath}index.html" class="post-nav-logo">
          <span class="logo-bracket">[</span>
          <span class="logo-text">VA</span>
          <span class="logo-bracket">]</span>
        </a>
        
        <div class="post-nav-links">
          <a href="${basePath}index.html#notebooks" class="post-nav-link">
            <i class="bi bi-arrow-left"></i>
            Back to Home
          </a>
        </div>
      </div>
    </nav>
  `;
  
  // Add scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('postNav');
    if (nav) {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  });
}

// Auto-load sidebar when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadSidebar);
} else {
  loadSidebar();
}
