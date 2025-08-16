function loadSidebar() {
  const sidebarContainer = document.querySelector('.sidebar-container');
  if (sidebarContainer) {
    // Determine the base path for assets and links based on current page location
    const currentPath = window.location.pathname;
    let basePath = '';
    
    // Check if we're in a subdirectory (posts/projects/, posts/papers/, etc.)
    if (currentPath.includes('/posts/')) {
      // Count directory levels to determine relative path
      const pathParts = currentPath.split('/');
      const depth = pathParts.length - 2; // -2 because we want to go up to root
      basePath = '../'.repeat(depth);
    }
    
    sidebarContainer.innerHTML = `
      <!-- Sidebar -->
      <div class="col-lg-3 col-md-4 sidebar p-0">
        <div class="sidebar-content h-100">
          <!-- Profile Section -->
          <div class="profile-section text-center p-4">
            <div class="profile-image mb-3">
              <img src="${basePath}public/Vahid2024-Square.jpg" alt="Vahid Asghari" class="rounded-circle border border-3 border-white shadow">
            </div>
            <h1 class="h4 fw-bold text-white mb-2">Vahid Asghari</h1>
            <p class="text-light mb-3">Quant AI Specialist at Premialab</p>
          </div>

          <!-- About Description -->
          <div class="about-description p-3">
            <h6 class="text-white mb-3 fw-semibold d-flex align-items-center justify-content-between" 
                data-bs-toggle="collapse" 
                data-bs-target="#aboutMeCollapse" 
                aria-expanded="false" 
                aria-controls="aboutMeCollapse"
                style="cursor: pointer;">
              About
              <i class="bi bi-chevron-down" id="aboutMeIcon"></i>
            </h6>
            <div class="collapse" id="aboutMeCollapse">
              <p class="text-white-50 small mb-3">
                I'm a quantitative developer and researcher with experience in equity space and equity derivatives. 
                Currently working as a Quant AI Specialist at Premialab, responsible for developing in-house 
                computational/quantitative tools and enriching the firm's products with AI and ML.
              </p>
              <p class="text-white-50 small mb-3">
                Interested in building scalable and efficient quantitative systems that can handle large amounts 
                of data and complex computations.
              </p>
              <p class="text-white-50 small mb-3">
                In my free time, I run bi-monthly Hong Kong Machine Learning Meetups, replicate academic papers, 
                build small full-stack applications, and cook for my family and friends.
              </p>
            </div>
          </div>

          <!-- Navigation -->
          <nav class="sidebar-nav p-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a class="nav-link text-white-50 d-flex align-items-center" href="${basePath}index.html#quant">
                  <i class="bi bi-journal-text me-2"></i>
                  <span>Quant Notebooks</span>
                </a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link text-white-50 d-flex align-items-center" href="${basePath}index.html#projects-section">
                  <i class="bi bi-code-square me-2"></i>
                  <span>Projects</span>
                </a>
              </li>
              <li class="nav-item mb-2">
                <a class="nav-link text-white-50 d-flex align-items-center" href="${basePath}index.html#papers">
                  <i class="bi bi-book me-2"></i>
                  <span>Research Papers</span>
                </a>
              </li>
            </ul>
          </nav>

          <!-- Social Links -->
          <div class="sidebar-footer p-3 mt-auto">
            <h6 class="text-white mb-2 fw-semibold text-center">Connect With Me</h6>
            <div class="d-flex flex-wrap justify-content-center gap-1">
              <a href="https://linkedin.com/in/asgharivahid" class="btn btn-outline-light btn-sm px-2 py-1" target="_blank" title="LinkedIn">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="mailto:contact@vahidasghari.me" class="btn btn-outline-light btn-sm px-2 py-1" title="Email">
                <i class="bi bi-envelope"></i>
              </a>
              <a href="https://forms.gle/isrRxsD94VtHXNKx5" class="btn btn-outline-light btn-sm px-2 py-1" target="_blank" title="Subscribe">
                <i class="bi bi-newspaper"></i>
              </a>
              <a href="https://github.com/vd1371" class="btn btn-outline-light btn-sm px-2 py-1" target="_blank" title="GitHub">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://www.meetup.com/hong-kong-machine-learning-meetup" class="btn btn-outline-light btn-sm px-2 py-1" target="_blank" title="Meetup">
                <i class="bi bi-people"></i>
              </a>
              <a href="https://scholar.google.com/citations?user=eUlLuc8AAAAJ&hl=en" class="btn btn-outline-light btn-sm px-2 py-1" target="_blank" title="Google Scholar">
                <i class="bi bi-mortarboard"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Add event listener for the About Me collapse to rotate the chevron icon
    const aboutMeCollapse = document.getElementById('aboutMeCollapse');
    const aboutMeIcon = document.getElementById('aboutMeIcon');
    
    if (aboutMeCollapse && aboutMeIcon) {
      aboutMeCollapse.addEventListener('show.bs.collapse', function () {
        aboutMeIcon.classList.remove('bi-chevron-down');
        aboutMeIcon.classList.add('bi-chevron-up');
      });
      
      aboutMeCollapse.addEventListener('hide.bs.collapse', function () {
        aboutMeIcon.classList.remove('bi-chevron-up');
        aboutMeIcon.classList.add('bi-chevron-down');
      });
    }
  }
}

// Auto-load sidebar when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadSidebar);
} else {
  loadSidebar();
}
