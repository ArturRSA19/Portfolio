// ===== CV DOWNLOAD FUNCTIONALITY =====
function updateCVButton() {
  const cvButton = $('a[data-i18n="hero.btn_cv"]');
  if (!cvButton) return;
  
  const currentLocale = localStorage.getItem('locale') || 'en';
  const cvPath = currentLocale === 'pt' ? './assets/docs/curriculo.pdf' : './assets/docs/cv.pdf';
  
  cvButton.href = cvPath;
}

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

// Build Featured Project Section
function buildFeaturedProject() {
  const container = $('#featured-project-container');
  if (!container || !featuredProject) return;

  const locale = localStorage.getItem('locale') || 'en';
  const t = (obj) => obj[locale] || obj.en;
  const tList = (obj) => obj[locale] || obj.en;

  const statusKey = featuredProject.status === 'completed'
    ? 'featured.status_completed'
    : 'featured.status_in_progress';
  const statusLabel = featuredProject.status === 'completed' ? 'Completed' : 'In Progress';

  const hasDemo = featuredProject.demoUrl && featuredProject.demoUrl.trim() !== '';

  const techTagsHTML = featuredProject.technologies
    .map(tech => `<span class="tag tag-light">${tech}</span>`)
    .join('');

  const featuresHTML = tList(featuredProject.features)
    .map(f => `
      <li class="feature-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span>${f}</span>
      </li>
    `).join('');

  const learningsHTML = tList(featuredProject.learnings)
    .map(l => `
      <li class="learning-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <span>${l}</span>
      </li>
    `).join('');

  const differentialsHTML = tList(featuredProject.differentials)
    .map(d => `
      <li class="learning-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        <span>${d}</span>
      </li>
    `).join('');

  const card = document.createElement('div');
  card.className = 'featured-card glass border border-gray-200 dark:border-gray-800';
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('data-aos-delay', '100');

  card.innerHTML = `
    <!-- Header -->
    <div class="featured-header-gradient p-6 pb-4 md:p-8 md:pb-5">
      <div class="flex flex-wrap items-center gap-3 mb-3">
        <span class="status-badge status-badge--completed">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
          <span data-i18n="${statusKey}">${statusLabel}</span>
        </span>
        <span class="type-badge">${t(featuredProject.type)}</span>
        <span class="text-xs text-gray-400 dark:text-gray-500" data-i18n="featured.services_count">9 orchestrated services</span>
      </div>
      <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 leading-tight">
        ${t(featuredProject.name)}
      </h3>
      <p class="mt-2 text-sm md:text-base text-brand-600 dark:text-brand-400 font-medium">
        ${t(featuredProject.tagline)}
      </p>
    </div>

    <!-- Body -->
    <div class="p-6 md:p-8 pt-2 md:pt-3">
      <!-- Description -->
      <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
        ${t(featuredProject.description)}
      </p>

      <!-- Technologies -->
      <div class="mb-6">
        <span class="featured-section-label" data-i18n="featured.technologies">Technologies</span>
        <div class="flex flex-wrap gap-1.5 mt-2">
          ${techTagsHTML}
        </div>
      </div>

      <!-- Two-column layout for features + expandable sections -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <!-- Features -->
        <div>
          <span class="featured-section-label" data-i18n="featured.features">Key Features</span>
          <ul class="mt-3 space-y-2.5" role="list">
            ${featuresHTML}
          </ul>
        </div>

        <!-- Expandable panels -->
        <div class="space-y-3">
          <!-- Technical Highlights -->
          <details class="featured-details">
            <summary>
              <span data-i18n="featured.differentials">Technical Highlights</span>
              <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </summary>
            <div class="details-content">
              <ul class="space-y-2" role="list">
                ${differentialsHTML}
              </ul>
            </div>
          </details>

          <!-- Technical Architecture -->
          <details class="featured-details">
            <summary>
              <span data-i18n="featured.technical_details">Technical Architecture</span>
              <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </summary>
            <div class="details-content">
              <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                ${t(featuredProject.technicalDescription)}
              </p>
            </div>
          </details>

          <!-- Learnings -->
          <details class="featured-details">
            <summary>
              <span data-i18n="featured.learnings">Technical Learnings</span>
              <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </summary>
            <div class="details-content">
              <p class="text-xs text-gray-400 dark:text-gray-500 mb-2" data-i18n="featured.learnings_hint">What I learned building this project</p>
              <ul class="space-y-2" role="list">
                ${learningsHTML}
              </ul>
            </div>
          </details>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="project-actions">
        <a href="${featuredProject.repoUrl}"
           target="_blank"
           rel="noopener noreferrer"
           class="project-btn project-btn-primary"
           aria-label="View BiblioTech repository on GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-right:0.5rem"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          <span data-i18n="featured.view_repo">View Repository</span>
        </a>
        ${hasDemo ? `
        <a href="${featuredProject.demoUrl}"
           target="_blank"
           rel="noopener noreferrer"
           class="project-btn project-btn-secondary"
           aria-label="View BiblioTech live demo">
          <span data-i18n="projects.see_live">See Live</span>
        </a>` : ''}
      </div>
    </div>
  `;

  container.innerHTML = '';
  container.appendChild(card);

  // Apply tilt effect (same as project cards)
  applyTiltEffect(card, 0);
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

// Apply tilt effect to profile image
function applyProfileTiltEffect() {
  const profileContainer = $('.profile-container');
  if (!profileContainer) return;
  
  console.log('Applying tilt effect to profile image');
  
  // Reset any existing transforms
  profileContainer.style.transform = '';
  profileContainer.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  
  let isHovering = false;
  
  const handleMouseEnter = () => {
    isHovering = true;
    profileContainer.style.willChange = 'transform';
    profileContainer.style.transition = 'none';
    console.log('Mouse entered profile image');
  };
  
  const handleMouseMove = (e) => {
    if (!isHovering) return;
    
    const rect = profileContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation values (same as project cards)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    
    requestAnimationFrame(() => {
      if (isHovering) {
        profileContainer.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
      }
    });
  };
  
  const handleMouseLeave = () => {
    isHovering = false;
    profileContainer.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    requestAnimationFrame(() => {
      profileContainer.style.transform = '';
      profileContainer.style.willChange = 'auto';
    });
    console.log('Mouse left profile image');
  };
  
  // Remove any existing listeners first
  profileContainer.removeEventListener('mouseenter', handleMouseEnter);
  profileContainer.removeEventListener('mousemove', handleMouseMove);
  profileContainer.removeEventListener('mouseleave', handleMouseLeave);
  
  // Add new listeners
  profileContainer.addEventListener('mouseenter', handleMouseEnter);
  profileContainer.addEventListener('mousemove', handleMouseMove);
  profileContainer.addEventListener('mouseleave', handleMouseLeave);
  
  console.log('Tilt effect successfully applied to profile image');
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

// ===== CV DOWNLOAD FUNCTIONALITY =====
function updateCVButton() {
  const cvButton = $('a[data-i18n="hero.btn_cv"]');
  if (!cvButton) return;
  
  const currentLocale = localStorage.getItem('locale') || 'en';
  const cvPath = currentLocale === 'pt' ? './assets/docs/curriculo.pdf' : './assets/docs/cv.pdf';
  
  cvButton.href = cvPath;
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

  // Initialize certificates navigation
  initCertificatesNavigation();

  // Initialize AOS (Animate on Scroll)
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true
    });
  }

  // Build dynamic content
  buildFeaturedProject();
  buildProjectsGrid();
  
  // Apply tilt effect to profile image
  applyProfileTiltEffect();
  
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
  
  // Update CV button after locale initialization
  updateCVButton();

  // Apply tilt effect to profile image
  applyProfileTiltEffect();
  
  // Initialize back to top button
  initBackToTop();
});

// Initialize certificates navigation
function initCertificatesNavigation() {
  // Handle certificates link clicks
  const certificatesLinks = $$('a[href="#certificates"]');
  certificatesLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showCertificatesSection();
    });
  });

  // Handle back to portfolio button
  const backButton = $('#backToPortfolio');
  if (backButton) {
    backButton.addEventListener('click', (e) => {
      e.preventDefault();
      hideCertificatesSection();
    });
  }

  // Handle home link clicks (both normal and when in certificates mode)
  const homeLinks = $$('a[href="#home"]');
  homeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Check if we're in certificates mode
      const certificatesSection = $('#certificates');
      const isInCertificatesMode = certificatesSection && !certificatesSection.classList.contains('hidden');
      
      if (isInCertificatesMode) {
        hideCertificatesSection();
      } else {
        // Normal scroll to home
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Handle mobile menu links
  $('#mobileMenu')?.addEventListener('click', (e) => {
    if (e.target.matches('a[href="#certificates"]')) {
      e.preventDefault();
      showCertificatesSection();
      // Close mobile menu
      $('#mobileMenu').classList.add('hidden');
    } else if (e.target.matches('a[href="#home"]')) {
      e.preventDefault();
      
      // Check if we're in certificates mode
      const certificatesSection = $('#certificates');
      const isInCertificatesMode = certificatesSection && !certificatesSection.classList.contains('hidden');
      
      if (isInCertificatesMode) {
        hideCertificatesSection();
      } else {
        // Normal scroll to home
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      // Close mobile menu
      $('#mobileMenu').classList.add('hidden');
    }
  });
}

// Back to Top Button functionality
function initBackToTop() {
  const backToTopBtn = $('#backToTop');
  if (!backToTopBtn) return;

  // Show/hide button based on scroll position
  const toggleBackToTopButton = () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  };

  // Smooth scroll to top
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Listen to scroll events with throttling for better performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
      toggleBackToTopButton();
    });
  });

  // Initial check
  toggleBackToTopButton();
}
