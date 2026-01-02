/**
 * Main Application JavaScript
 * Handles all interactive functionality for the portfolio
 */

(function() {
  'use strict';

  // ========================================
  // CONFIGURATION
  // ========================================
  
  const CONFIG = {
    typewriterText: [
      'whoami',
      'Quant AI Specialist',
      'Building intelligent trading systems...',
      'Machine Learning Engineer',
      'Quantitative Researcher',
      './run backtest.py --strategy=momentum'
    ],
    typewriterSpeed: 80,
    typewriterPause: 2000,
    animationThreshold: 0.1
  };

  // ========================================
  // DOM ELEMENTS
  // ========================================
  
  const elements = {
    navbar: document.getElementById('navbar'),
    navToggle: document.getElementById('navToggle'),
    mobileMenu: document.getElementById('mobileMenu'),
    typewriter: document.getElementById('typewriter'),
    researchGrid: document.getElementById('research-grid'),
    notebooksGrid: document.getElementById('notebooks-grid'),
    filterTabs: document.querySelectorAll('.filter-tab'),
    statNumbers: document.querySelectorAll('.stat-number')
  };

  // ========================================
  // TYPEWRITER EFFECT
  // ========================================
  
  class Typewriter {
    constructor(element, texts, speed = 80, pause = 2000) {
      this.element = element;
      this.texts = texts;
      this.speed = speed;
      this.pause = pause;
      this.textIndex = 0;
      this.charIndex = 0;
      this.isDeleting = false;
      
      if (this.element) {
        this.type();
      }
    }
    
    type() {
      const currentText = this.texts[this.textIndex];
      
      if (this.isDeleting) {
        this.element.textContent = currentText.substring(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        this.element.textContent = currentText.substring(0, this.charIndex + 1);
        this.charIndex++;
      }
      
      let typeSpeed = this.speed;
      
      if (this.isDeleting) {
        typeSpeed /= 2;
      }
      
      if (!this.isDeleting && this.charIndex === currentText.length) {
        typeSpeed = this.pause;
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        typeSpeed = 500;
      }
      
      setTimeout(() => this.type(), typeSpeed);
    }
  }

  // ========================================
  // NAVIGATION
  // ========================================
  
  function initNavigation() {
    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
      if (elements.navbar) {
        if (window.scrollY > 50) {
          elements.navbar.classList.add('scrolled');
        } else {
          elements.navbar.classList.remove('scrolled');
        }
      }
    });
    
    // Mobile menu toggle
    if (elements.navToggle && elements.mobileMenu) {
      elements.navToggle.addEventListener('click', () => {
        elements.mobileMenu.classList.toggle('active');
        elements.navToggle.classList.toggle('active');
      });
      
      // Close mobile menu when clicking a link
      elements.mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
          elements.mobileMenu.classList.remove('active');
          elements.navToggle.classList.remove('active');
        });
      });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ========================================
  // CONTENT RENDERING
  // ========================================
  
  function renderResearchPapers() {
    if (!elements.researchGrid || !window.researchPapers) return;
    
    elements.researchGrid.innerHTML = window.researchPapers.map(paper => `
      <a href="${paper.link}" class="research-card fade-in">
        <div class="research-icon">
          <i class="bi ${paper.icon}"></i>
        </div>
        <div class="research-content">
          <h3>${paper.title}</h3>
          <p>${paper.description || ''}</p>
        </div>
        <i class="bi bi-arrow-up-right research-arrow"></i>
      </a>
    `).join('');
  }
  
  function renderNotebooks() {
    if (!elements.notebooksGrid || !window.quantNotebooks) return;
    
    elements.notebooksGrid.innerHTML = window.quantNotebooks.map(notebook => `
      <a href="${notebook.link}" class="notebook-card fade-in" data-category="${notebook.category}">
        <div class="notebook-header">
          <div class="notebook-icon">
            <i class="bi ${notebook.icon}"></i>
          </div>
          <span class="notebook-tag">${formatCategory(notebook.category)}</span>
        </div>
        <h3 class="notebook-title">${notebook.title}</h3>
        <p class="notebook-meta">
          <span>${notebook.description || ''}</span>
        </p>
      </a>
    `).join('');
  }
  
  function formatCategory(category) {
    const categoryMap = {
      'momentum': 'Momentum',
      'statistical': 'Stat Arb',
      'technical': 'Technical',
      'forecasting': 'Forecast'
    };
    return categoryMap[category] || category;
  }

  // ========================================
  // FILTERING
  // ========================================
  
  function initFiltering() {
    elements.filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active tab
        elements.filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Filter notebooks
        const filter = tab.dataset.filter;
        const notebooks = document.querySelectorAll('.notebook-card');
        
        notebooks.forEach(notebook => {
          if (filter === 'all' || notebook.dataset.category === filter) {
            notebook.classList.remove('hidden');
            notebook.style.animation = 'fadeInUp 0.5s ease forwards';
          } else {
            notebook.classList.add('hidden');
          }
        });
      });
    });
  }

  // ========================================
  // SCROLL ANIMATIONS
  // ========================================
  
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Animate stat numbers when visible
          if (entry.target.classList.contains('hero-stats')) {
            animateStats();
          }
        }
      });
    }, {
      threshold: CONFIG.animationThreshold,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe fade-in elements
    document.querySelectorAll('.fade-in, .stagger-children').forEach(el => {
      observer.observe(el);
    });
    
    // Observe hero stats
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
      observer.observe(heroStats);
    }
    
    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
  }

  // ========================================
  // STAT COUNTER ANIMATION
  // ========================================
  
  let statsAnimated = false;
  
  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;
    
    elements.statNumbers.forEach(stat => {
      const target = parseInt(stat.dataset.count);
      let current = 0;
      const increment = target / 30;
      const duration = 1500;
      const stepTime = duration / 30;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.textContent = target;
          clearInterval(counter);
        } else {
          stat.textContent = Math.floor(current);
        }
      }, stepTime);
    });
  }

  // ========================================
  // INTERSECTION OBSERVER FOR CARDS
  // ========================================
  
  function observeCards() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.research-card, .notebook-card, .about-card, .contact-card').forEach(card => {
      observer.observe(card);
    });
  }

  // ========================================
  // HERO ANIMATION ON LOAD
  // ========================================
  
  function initHeroAnimation() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      setTimeout(() => {
        heroContent.classList.add('visible');
      }, 300);
    }
  }

  // ========================================
  // PARALLAX EFFECT
  // ========================================
  
  function initParallax() {
    const bgGlow = document.querySelector('.bg-glow');
    
    if (bgGlow) {
      window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        bgGlow.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
      });
    }
  }

  // ========================================
  // KEYBOARD NAVIGATION
  // ========================================
  
  function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      // ESC to close mobile menu
      if (e.key === 'Escape' && elements.mobileMenu) {
        elements.mobileMenu.classList.remove('active');
        if (elements.navToggle) {
          elements.navToggle.classList.remove('active');
        }
      }
    });
  }

  // ========================================
  // INITIALIZATION
  // ========================================
  
  function init() {
    // Start typewriter effect
    new Typewriter(
      elements.typewriter,
      CONFIG.typewriterText,
      CONFIG.typewriterSpeed,
      CONFIG.typewriterPause
    );
    
    // Initialize components
    initNavigation();
    renderResearchPapers();
    renderNotebooks();
    initFiltering();
    initScrollAnimations();
    initHeroAnimation();
    initParallax();
    initKeyboardNav();
    
    // Observe cards after rendering
    setTimeout(observeCards, 100);
    
    // Add visible class to hero after a short delay
    setTimeout(() => {
      document.querySelectorAll('.hero-info > *').forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }, 500);
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

