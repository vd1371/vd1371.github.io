function loadHeader() {
  const header = document.querySelector('header');

  // Determine if we're on GitHub Pages or local
  const isInPosts = window.location.pathname.includes('posts');
  const basePath = isInPosts ? '../../' : '';

  header.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top" style="background-color: rgba(255, 255, 255, 0.95) !important;">
            <div class="container" style="max-width: 800px; margin: 0 auto">
                <a class="navbar-brand" href="${basePath}index.html">Vahid Asghari</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="${basePath}about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${basePath}index.html">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

  // Add padding to body to prevent content from hiding behind fixed header
  document.body.style.paddingTop = '76px';
}

document.addEventListener('DOMContentLoaded', loadHeader);