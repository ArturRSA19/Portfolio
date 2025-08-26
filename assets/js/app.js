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
  
  // Clear existing content
  grid.innerHTML = '';
  
  projectData.projects.forEach((project, idx) => {
    const card = document.createElement('div');
    card.className = 'group relative project-card border border-gray-200 dark:border-gray-800';
    // Add unique identifier for debugging
    card.setAttribute('data-project-index', idx);
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
          <span data-i18n="projects.source_code">Source Code</span>
        </a>
        ${hasLiveUrl ? `
          <a href="${project.liveUrl}" 
             target="_blank" 
             rel="noopener" 
             class="project-btn project-btn-secondary"
             aria-label="View ${project.title} live demo">
            <span data-i18n="projects.see_live">See Live</span>
          </a>
        ` : ''}
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
    
    // Apply tilt effect directly to each card as it's created
    applyTiltEffect(card, idx);
    
    grid.appendChild(card);
  });
}

// Apply 3D Tilt effect to individual card
function applyTiltEffect(card, index) {
  console.log(`Applying tilt effect to card ${index + 1}`); // Debug log
  
  // Reset any existing transforms
  card.style.transform = '';
  card.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  
  let isHovering = false;
  
  const handleMouseEnter = () => {
    isHovering = true;
    card.style.willChange = 'transform';
    card.style.transition = 'none';
    console.log(`Mouse entered card ${index + 1}`); // Debug log
  };
  
  const handleMouseMove = (e) => {
    if (!isHovering) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation values (reduced for subtle effect)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    
    requestAnimationFrame(() => {
      if (isHovering) {
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
      }
    });
  };
  
  const handleMouseLeave = () => {
    isHovering = false;
    card.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    requestAnimationFrame(() => {
      card.style.transform = '';
      card.style.willChange = 'auto';
    });
    console.log(`Mouse left card ${index + 1}`); // Debug log
  };
  
  // Remove any existing listeners first
  card.removeEventListener('mouseenter', handleMouseEnter);
  card.removeEventListener('mousemove', handleMouseMove);
  card.removeEventListener('mouseleave', handleMouseLeave);
  
  // Add new listeners
  card.addEventListener('mouseenter', handleMouseEnter);
  card.addEventListener('mousemove', handleMouseMove);
  card.addEventListener('mouseleave', handleMouseLeave);
  
  console.log(`Tilt effect successfully applied to card ${index + 1}`); // Debug log
}

// Verify that all project cards have tilt effect
function verifyTiltEffects() {
  const allCards = $$('.project-card');
  console.log(`Verifying tilt effects for ${allCards.length} cards`);
  
  allCards.forEach((card, index) => {
    const hasMouseEnterListener = card.onmouseenter !== null;
    const projectIndex = card.getAttribute('data-project-index');
    
    console.log(`Card ${index + 1} (project ${projectIndex}): ${hasMouseEnterListener ? 'HAS' : 'MISSING'} tilt effect`);
    
    // If missing, apply the effect
    if (!hasMouseEnterListener) {
      console.log(`Reapplying tilt effect to card ${index + 1}`);
      applyTiltEffect(card, index);
    }
  });
}

// Legacy function - kept for compatibility but now unused
function initTiltEffect() {
  console.log('Legacy initTiltEffect called - this should not happen with new implementation');
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
  
  // Verify all cards have tilt effect after a short delay
  setTimeout(() => {
    verifyTiltEffects();
  }, 200);

  // Initialize interactive effects
  initScrollSpy();

  // Verify tilt effects
  verifyTiltEffects();

  // Initialize internationalization (must be last)
  initLocale();
});
