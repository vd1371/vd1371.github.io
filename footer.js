function injectFooter() {
    const footer = `
        <footer>
            <p>&copy; <span id="current-year"></span> Vahid Asghari. All rights reserved.</p>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footer);
    
    // Set the year after the footer is injected
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', injectFooter); 