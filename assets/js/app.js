// ===== MAIN APPLICATION SCRIPT =====

// DOM helpers
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Theme toggle functionality
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme on page load
function initTheme() {
  const ls = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (ls === 'dark' || (!ls && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
}

// Mobile menu functionality
function initMobileMenu() {
  $('#mobileToggle')?.addEventListener('click', () => {
    $('#mobileMenu').classList.toggle('hidden');
  });
}

// Build Projects Grid
function buildProjectsGrid() {
  const grid = $('#project-grid');
  if (!grid || !projectData.projects) return;
  
  projectData.projects.forEach((project, idx) => {
    const card = document.createElement('div');
    card.className = 'group relative project-card border border-gray-200 dark:border-gray-800';
    card.setAttribute('data-tilt', '');
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String((idx % 3) * 100));
    
    // Create buttons HTML
    const hasLiveUrl = project.liveUrl && project.liveUrl.trim() !== '';
    const buttonsHTML = `
      <div class="project-actions">
        <a href="${project.repo}" 
           target="_blank" 
           rel="noopener" 
           class="project-btn project-btn-primary"
           aria-label="View ${project.title} source code">
          <i data-lucide="github" class="h-4 w-4"></i>
          <span data-i18n="projects.source_code">Source Code</span>
        </a>
        ${hasLiveUrl ? `
          <a href="${project.liveUrl}" 
             target="_blank" 
             rel="noopener" 
             class="project-btn project-btn-secondary"
             aria-label="View ${project.title} live demo">
            <i data-lucide="external-link" class="h-4 w-4"></i>
            <span data-i18n="projects.see_live">See Live</span>
          </a>
        ` : `
          <button class="project-btn project-btn-secondary" 
                  disabled 
                  title="Live demo not available">
            <i data-lucide="external-link" class="h-4 w-4"></i>
            <span data-i18n="projects.see_live">See Live</span>
          </button>
        `}
      </div>
    `;
    
    card.innerHTML = `
      <div class="relative">
        <img src="${project.image}" 
             alt="${project.title}" 
             class="w-full object-cover project-image" 
             loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent"></div>
      </div>
      <div class="project-content p-6 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
        <h3 class="font-semibold text-lg mb-3">${project.title}</h3>
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${project.tags.map(tag => `<span class='tag tag-light'>${tag}</span>`).join('')}
        </div>
        ${buttonsHTML}
      </div>`;
    
    grid.appendChild(card);
  });
}

// 3D Tilt effect for project cards
function initTiltEffect() {
  const tiltCards = $$('[data-tilt]');
  
  tiltCards.forEach(card => {
    // Reset any existing transforms on initialization
    card.style.transform = '';
    
    card.addEventListener('mouseenter', () => {
      card.style.willChange = 'transform';
    });
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      
      requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      });
    });
    
    card.addEventListener('mouseleave', () => {
      requestAnimationFrame(() => {
        card.style.transform = '';
        card.style.willChange = 'auto';
      });
    });
  });
}

// Active navigation link on scroll
function initScrollSpy() {
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
    .map(id => ({ id, el: document.getElementById(id) }));
  const navLinks = $$('header nav a[href^="#"]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('text-brand-500'));
        const activeLinks = $$(`header nav a[href="#${entry.target.id}"]`);
        activeLinks.forEach(link => link.classList.add('text-brand-500'));
      }
    });
  }, {
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0.01
  });
  
  sections.forEach(section => {
    if (section.el) observer.observe(section.el);
  });
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize theme
  initTheme();

  // Initialize Lucide icons
  if (window.lucide) lucide.createIcons();

  // Event listeners for theme toggles
  $('#themeToggle')?.addEventListener('click', toggleTheme);
  $('#themeToggleMobile')?.addEventListener('click', toggleTheme);

  // Initialize mobile menu
  initMobileMenu();

  // Language selector event listeners
  $('#langSelect')?.addEventListener('change', (e) => setLocale(e.target.value));
  $('#langSelectMobile')?.addEventListener('change', (e) => setLocale(e.target.value));

  // Initialize AOS (Animate on Scroll)
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true
    });
  }

  // Build dynamic content
  buildProjectsGrid();

  // Initialize interactive effects
  initTiltEffect();
  initScrollSpy();

  // Initialize internationalization (must be last)
  initLocale();
});
