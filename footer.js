function injectFooter() {
    const footer = `
        <footer class="bg-white shadow-sm mt-auto py-3">
            <div class="container text-center">
                <p class="mb-0">&copy; <span id="current-year"></span> Vahid Asghari. All rights reserved.</p>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footer);
    
    // Set the year after the footer is injected
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Add necessary CSS classes to body and main content
    document.body.classList.add('d-flex', 'flex-column', 'min-vh-100');
    const main = document.querySelector('main');
    if (main) {
        main.classList.add('flex-grow-1');
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', injectFooter); 