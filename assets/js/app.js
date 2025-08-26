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
    const card = document.createElement('a');
    card.href = project.repo;
    card.target = '_blank';
    card.rel = 'noopener';
    card.setAttribute('aria-label', `${project.title} — GitHub repository`);
    card.className = 'group relative block rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden tilt';
    card.setAttribute('data-tilt', '');
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String((idx % 3) * 50));
    
    card.innerHTML = `
      <div class="relative h-52">
        <img src="${project.image}" alt="${project.title}" class="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent"></div>
        <div class="absolute top-3 right-3 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/90 dark:bg-black/60 text-gray-900 dark:text-white">
          <i data-lucide="github" class="h-3.5 w-3.5"></i><span>Repo</span>
        </div>
      </div>
      <div class="tilt-child p-5 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
        <h3 class="font-semibold">${project.title}</h3>
        <div class="mt-2 flex flex-wrap gap-1.5">
          ${project.tags.map(tag => `<span class='tag tag-light'>${tag}</span>`).join('')}
        </div>
      </div>`;
    
    grid.appendChild(card);
  });
}

// 3D Tilt effect for project cards
function initTiltEffect() {
  const tiltCards = $$('[data-tilt]');
  
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -6;
      const rotateY = ((x / rect.width) - 0.5) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
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
