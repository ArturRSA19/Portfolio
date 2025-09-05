# Certificate Manager Utility
# Simple Python script to help add new certificates to the portfolio

import os
import json
from datetime import datetime

class CertificateManager:
    def __init__(self, certificates_folder="./assets/certificates"):
        self.certificates_folder = certificates_folder
        self.js_file_path = "./assets/js/certificates.js"
    
    def scan_certificates_folder(self):
        """Scan the certificates folder and return list of PDF files"""
        if not os.path.exists(self.certificates_folder):
            print(f"Certificates folder not found: {self.certificates_folder}")
            return []
        
        pdf_files = []
        for file in os.listdir(self.certificates_folder):
            if file.lower().endswith('.pdf'):
                pdf_files.append(file)
        
        return sorted(pdf_files)
    
    def update_certificates_js(self, certificates_data):
        """Update the certificates.js file with new certificate data"""
        js_content = f"""// ===== CERTIFICATES DATA =====
const certificatesData = {{
  certificates: {json.dumps(certificates_data, indent=4)}
}};

// Function to dynamically load certificates from the certificates folder
async function loadCertificatesFromFolder() {{
  // For now, we'll use the static data above
  // In a real server environment, this could fetch from an API endpoint
  // that lists files in the certificates directory
  return certificatesData.certificates;
}}

// Function to build certificates grid
function buildCertificatesGrid() {{
  const grid = $('#certificatesGrid');
  if (!grid) return;
  
  // Get current language
  const currentLocale = localStorage.getItem('locale') || 'en';
  
  // Clear existing content
  grid.innerHTML = '';
  
  certificatesData.certificates.forEach((certificate, idx) => {{
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
            <h3 class="text-xl font-semibold mb-2">${{name}}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-2">${{issuer}}</p>
            <p class="text-sm text-gray-500">${{certificate.date}}</p>
          </div>
          <div class="flex-shrink-0">
            <i data-lucide="award" class="h-8 w-8 text-brand-500"></i>
          </div>
        </div>
        
        <p class="text-gray-600 dark:text-gray-300 mb-6">${{description}}</p>
        
        <div class="flex items-center gap-4">
          <a href="${{certificate.path}}" 
             target="_blank" 
             rel="noopener" 
             class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-700 shadow-glow transition">
            <i data-lucide="external-link" class="h-4 w-4"></i>
            <span data-i18n="certificates.view">View Certificate</span>
          </a>
          <a href="${{certificate.path}}" 
             download="${{certificate.fileName}}"
             class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-brand-500 transition">
            <i data-lucide="download" class="h-4 w-4"></i>
            <span>Download</span>
          </a>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  }});
  
  // Initialize Lucide icons for the new content
  if (typeof lucide !== 'undefined') {{
    lucide.createIcons();
  }}
}}

// Navigation functions
function showCertificatesSection() {{
  // Hide all main sections
  const sections = ['#home', '#values', '#skills', '#projects', '#experience', '#contact'];
  sections.forEach(selector => {{
    const section = $(selector);
    if (section) section.style.display = 'none';
  }});
  
  // Show certificates section
  const certificatesSection = $('#certificates');
  if (certificatesSection) {{
    certificatesSection.classList.remove('hidden');
    certificatesSection.style.display = 'block';
  }}
  
  // Build certificates grid
  buildCertificatesGrid();
  
  // Scroll to top
  window.scrollTo({{ top: 0, behavior: 'smooth' }});
  
  // Re-initialize AOS for new content
  if (typeof AOS !== 'undefined') {{
    AOS.refresh();
  }}
}}

function hideCertificatesSection() {{
  // Hide certificates section
  const certificatesSection = $('#certificates');
  if (certificatesSection) {{
    certificatesSection.classList.add('hidden');
    certificatesSection.style.display = 'none';
  }}
  
  // Show all main sections
  const sections = ['#home', '#values', '#skills', '#projects', '#experience', '#contact'];
  sections.forEach(selector => {{
    const section = $(selector);
    if (section) section.style.display = 'block';
  }});
  
  // Scroll to top
  window.scrollTo({{ top: 0, behavior: 'smooth' }});
}}"""
        
        with open(self.js_file_path, 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        print(f"Updated {self.js_file_path} with {len(certificates_data)} certificates")
    
    def add_certificate(self, name, issuer, description, date=None, filename=None):
        """Add a new certificate to the data"""
        if not filename:
            # Try to find a matching file in the certificates folder
            pdf_files = self.scan_certificates_folder()
            matching_files = [f for f in pdf_files if name.lower() in f.lower()]
            if matching_files:
                filename = matching_files[0]
            else:
                print(f"Warning: No matching file found for certificate '{name}'")
                return False
        
        if not date:
            date = str(datetime.now().year)
        
        certificate_data = {
            "name": name,
            "fileName": filename,
            "path": f"./assets/certificates/{filename}",
            "issuer": issuer,
            "description": description,
            "date": date
        }
        
        return certificate_data
    
    def sync_certificates(self):
        """Automatically sync certificates based on files in the folder"""
        pdf_files = self.scan_certificates_folder()
        certificates_data = []
        
        # For existing certificate (Projeto LAPIS)
        if "Certificado Projeto LAPIS.pdf" in pdf_files:
            certificates_data.append({
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
                    "pt": "Certificado de participação no Projeto LAPIS para desenvolvimento de aplicativo voltado à acessibilidade e navegação de usuário do app no campus da Universidade de Brasília.",
                    "en": "Certificate of participation in the LAPIS Project for developing an application focused on accessibility and user navigation within the University of Brasília campus."
                },
                "date": "2025"
            })
        
        # You can add more certificates here or modify the existing one
        # Example for adding new certificates:
        # certificates_data.append(self.add_certificate(
        #     name="New Certificate Name",
        #     issuer="Certificate Issuer",
        #     description="Description of the certificate",
        #     date="2025"
        # ))
        
        self.update_certificates_js(certificates_data)
        return certificates_data

if __name__ == "__main__":
    manager = CertificateManager()
    
    print("Certificate Manager")
    print("==================")
    print("Scanning certificates folder...")
    
    pdf_files = manager.scan_certificates_folder()
    print(f"Found {len(pdf_files)} PDF files:")
    for file in pdf_files:
        print(f"  - {file}")
    
    print("\nSyncing certificates...")
    certificates = manager.sync_certificates()
    
    print(f"\nSuccessfully processed {len(certificates)} certificates:")
    for cert in certificates:
        print(f"  - {cert['name']} ({cert['issuer']})")
    
    print("\nTo add new certificates:")
    print("1. Place PDF files in ./assets/certificates/ folder")
    print("2. Run this script again")
    print("3. Or manually edit ./assets/js/certificates.js")
