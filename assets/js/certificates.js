// ===== CERTIFICATES DATA =====
const certificatesData = {
  certificates: [
    {
        "name": {
            "pt": "Certificado Projeto LAPIS",
            "en": "LAPIS Project Certificate"
        },
        "fileName": "Certificado Projeto LAPIS.pdf",
        "path": "./assets/certificates/Certificado Projeto LAPIS.pdf",
        "issuer": {
            "pt": "Projeto LAPIS",
            "en": "LAPIS Project"
        },
        "description": {
            "pt": "Certificado de participa\u00e7\u00e3o no Projeto LAPIS para desenvolvimento de aplicativo voltado \u00e0 acessibilidade e navega\u00e7\u00e3o de usu\u00e1rio do app no campus da Universidade de Bras\u00edlia.",
            "en": "Certificate of participation in the LAPIS Project for developing an application focused on accessibility and user navigation within the University of Bras\u00edlia campus."
        },
        "date": "2025"
    }
]
};

// Function to dynamically load certificates from the certificates folder
async function loadCertificatesFromFolder() {
  // For now, we'll use the static data above
  // In a real server environment, this could fetch from an API endpoint
  // that lists files in the certificates directory
  return certificatesData.certificates;
}

// Function to build certificates grid
function buildCertificatesGrid() {
  const grid = $('#certificatesGrid');
  if (!grid) return;
  
  // Get current language
  const currentLocale = localStorage.getItem('locale') || 'en';
  
  // Prevent unnecessary rebuilds if content hasn't changed
  if (grid.dataset.lastLocale === currentLocale && grid.children.length > 0) {
    return;
  }
  
  // Clear existing content
  grid.innerHTML = '';
  grid.dataset.lastLocale = currentLocale;
  
  certificatesData.certificates.forEach((certificate, idx) => {
    const card = document.createElement('div');
    card.className = 'group relative certificate-card border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden glass';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String(idx * 100));
    
    // Get localized content
    const name = typeof certificate.name === 'object' ? certificate.name[currentLocale] : certificate.name;
    const issuer = typeof certificate.issuer === 'object' ? certificate.issuer[currentLocale] : certificate.issuer;
    const description = typeof certificate.description === 'object' ? certificate.description[currentLocale] : certificate.description;
    
    card.innerHTML = `
      <div class="p-8">
        <div class="flex items-start justify-between mb-6">
          <div>
            <h3 class="text-xl font-semibold mb-2">${name}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-2">${issuer}</p>
            <p class="text-sm text-gray-500">${certificate.date}</p>
          </div>
          <div class="flex-shrink-0">
            <i data-lucide="award" class="h-8 w-8 text-brand-500"></i>
          </div>
        </div>
        
        <p class="text-gray-600 dark:text-gray-300 mb-6">${description}</p>
        
        <div class="flex items-center gap-4">
          <a href="${certificate.path}" 
             target="_blank" 
             rel="noopener" 
             class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-700 shadow-glow transition">
            <i data-lucide="external-link" class="h-4 w-4"></i>
            <span data-i18n="certificates.view">View Certificate</span>
          </a>
          <a href="${certificate.path}" 
             download="${certificate.fileName}"
             class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-brand-500 transition">
            <i data-lucide="download" class="h-4 w-4"></i>
            <span>Download</span>
          </a>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  // Initialize Lucide icons for the new content only once
  setTimeout(() => {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, 50);
}

// Navigation functions
function showCertificatesSection() {
  // Hide all main sections
  const sections = ['#home', '#values', '#skills', '#projects', '#experience', '#contact'];
  sections.forEach(selector => {
    const section = $(selector);
    if (section) section.style.display = 'none';
  });
  
  // Show certificates section
  const certificatesSection = $('#certificates');
  if (certificatesSection) {
    certificatesSection.classList.remove('hidden');
    certificatesSection.style.display = 'block';
  }
  
  // Enable navigation to main portfolio sections from certificates page
  enableCertificatesNavigation();
  
  // Build certificates grid
  buildCertificatesGrid();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Re-initialize AOS for new content only once
  setTimeout(() => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, 100);
}

function hideCertificatesSection() {
  // Hide certificates section
  const certificatesSection = $('#certificates');
  if (certificatesSection) {
    certificatesSection.classList.add('hidden');
    certificatesSection.style.display = 'none';
  }
  
  // Show all main sections
  const sections = ['#home', '#values', '#skills', '#projects', '#experience', '#contact'];
  sections.forEach(selector => {
    const section = $(selector);
    if (section) section.style.display = 'block';
  });
  
  // Disable special certificates navigation
  disableCertificatesNavigation();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Enable navigation from certificates page to main sections
function enableCertificatesNavigation() {
  const navLinks = $$('header nav a[href^="#"]:not([href="#certificates"])');
  
  navLinks.forEach(link => {
    // Remove any existing certificate navigation listeners
    link.removeEventListener('click', handleCertificateNavigation);
    // Add new listener for certificate navigation
    link.addEventListener('click', handleCertificateNavigation);
  });
}

// Disable special certificates navigation
function disableCertificatesNavigation() {
  const navLinks = $$('header nav a[href^="#"]:not([href="#certificates"])');
  
  navLinks.forEach(link => {
    link.removeEventListener('click', handleCertificateNavigation);
  });
}

// Handle navigation from certificates page to main sections
function handleCertificateNavigation(e) {
  e.preventDefault();
  
  const targetHash = e.currentTarget.getAttribute('href');
  
  // First, exit certificates mode
  hideCertificatesSection();
  
  // Then navigate to the target section
  setTimeout(() => {
    if (targetHash === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetSection = $(targetHash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, 100);
}

// Function to refresh certificates content when language changes
function refreshCertificatesContent() {
  const certificatesSection = $('#certificates');
  const isVisible = certificatesSection && !certificatesSection.classList.contains('hidden');
  
  if (isVisible) {
    const grid = $('#certificatesGrid');
    if (grid) {
      // Add updating class to prevent flickering
      grid.classList.add('updating');
      
      // Rebuild the grid with new language
      buildCertificatesGrid();
      
      // Remove updating class after content is loaded
      setTimeout(() => {
        grid.classList.remove('updating');
        
        // Re-initialize Lucide icons
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }, 100);
    }
  }
}