# Artur Rodrigues - Portfolio

A modern, responsive portfolio website showcasing full-stack development skills and projects. Built with vanilla HTML5, CSS3, JavaScript, and enhanced with Tailwind CSS for rapid styling.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🌟 Features

- **🎨 Modern Design** - Clean, professional interface with smooth animations
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **🌓 Dark/Light Mode** - Theme switching with system preference detection
- **🌍 Internationalization** - Bilingual support (English/Portuguese)
- **⚡ Interactive Effects** - 3D tilt effects, hover animations, particle systems
- **🎯 Accessibility** - WCAG compliant with semantic HTML and ARIA labels
- **🔍 SEO Optimized** - Structured data, meta tags, and performance optimizations
- **💾 Persistent Settings** - Theme and language preferences saved locally

## 🚀 Quick Start

### Prerequisites

- Node.js 14+ (for development server)
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ArturRSA19/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will open at `http://localhost:3000`

### Alternative Setup (No Node.js required)

Simply open `index.html` directly in your browser for a static version.

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── package.json              # Project configuration
├── README.md                 # Project documentation
│
├── assets/
│   ├── css/
│   │   └── styles.css        # Custom CSS styles
│   │
│   ├── js/
│   │   ├── app.js           # Main application logic
│   │   ├── data.js          # Project data configuration
│   │   ├── i18n.js          # Internationalization system
│   │   └── tailwind-config.js # Tailwind CSS configuration
│   │
│   ├── images/              # Image assets
│   │   ├── profile.png      # Profile picture
│   │   ├── habitsApp.jpg    # Project screenshots
│   │   ├── ordersApp.jpg
│   │   ├── cryptodash-img.png
│   │   ├── jetson.jpg
│   │   └── spacetimeApp.jpg
│   │
│   └── docs/                # Document files
│       ├── cv.pdf          # English CV
│       └── curriculo.pdf   # Portuguese CV
```

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Semantic structure | Latest |
| **CSS3** | Styling and animations | Latest |
| **JavaScript (ES6+)** | Interactive functionality | ES2022+ |
| **Tailwind CSS** | Utility-first CSS framework | 3.x (CDN) |
| **AOS** | Scroll animations | 2.3.4 |
| **Lucide Icons** | Modern icon system | Latest |

### External Libraries
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **Lucide Icons** - Beautiful, customizable icons
- **Tailwind CSS** - Rapid UI development

## 🎯 Sections Overview

### 🏠 Hero Section
- Introduction with name and title
- Call-to-action buttons (Projects, GitHub, CV)
- Animated profile image with particle effects

### 💭 Values Section
- Development philosophy and approach
- Key statistics and achievements
- Professional values showcase

### 🛠️ Skills Section
- Technical skills organized by category:
  - Frontend Development
  - Backend Development
  - Data & AI
  - DevOps & QA

### 💼 Projects Section
- Dynamic project grid with interactive cards
- 3D tilt effects on hover
- Direct links to source code and live demos
- Responsive image loading

### 📚 Experience Section
- Professional and academic experience
- Detailed role descriptions
- Technology stacks used

### 📞 Contact Section
- Multiple contact methods
- Social media links
- Professional networking options

## ⚙️ Customization Guide

### Adding New Projects

1. Open `assets/js/data.js`
2. Add your project to the `projects` array:

```javascript
{
  title: 'Your Project Name',
  tags: ['React', 'Node.js', 'MongoDB'],
  image: 'assets/images/your-project.jpg',
  repo: 'https://github.com/username/project',
  liveUrl: 'https://your-project.com' // Optional
}
```

### Updating Content

1. **Personal Information**: Edit `assets/js/i18n.js` for all text content
2. **Social Links**: Update links in `index.html`
3. **Profile Image**: Replace `assets/images/profile.png`
4. **CV Documents**: Replace files in `assets/docs/`

### Color Scheme

Modify the brand colors in `assets/js/tailwind-config.js`:

```javascript
colors: {
  brand: {
    400: '#4ade80', // Light shade
    500: '#0fc2c0', // Primary brand color
    600: '#0891b2', // Dark shade
    700: '#0e7490'  // Darker shade
  }
}
```

### Language Support

The i18n system supports easy translation. Add new languages by:

1. Extending the `I18N` object in `assets/js/i18n.js`
2. Adding language option to the select elements
3. Updating the `setLocale` function if needed

## 📱 Responsive Design

The portfolio uses a mobile-first approach with these breakpoints:

- **Mobile**: `< 640px`
- **Tablet**: `640px - 768px`  
- **Desktop**: `768px - 1024px`
- **Large Desktop**: `> 1024px`

## 🌐 Deployment

### GitHub Pages
1. Push code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `./`
4. Deploy automatically on push

### Vercel
1. Import your GitHub repository
2. Framework preset: None
3. Build settings will be auto-detected
4. Deploy with zero configuration

## 🔧 Development Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run serve    # Start HTTP server (port 8080)
npm run build    # Build project for production
npm run lint     # Run code linting
npm run format   # Format code
```

## 🎨 Design Features

### Interactive Elements
- **3D Tilt Effects** - Project cards and profile image respond to mouse movement
- **Hover Animations** - Smooth transitions and visual feedback
- **Particle System** - Animated sparkles on profile image
- **Glass Morphism** - Modern frosted glass effects

### Accessibility
- **Semantic HTML** - Proper heading hierarchy and landmarks
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Color Contrast** - WCAG AA compliant color ratios

## 🐛 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) - For the excellent utility framework
- [AOS](https://michalsnik.github.io/aos/) - For smooth scroll animations
- [Lucide](https://lucide.dev/) - For beautiful icons
- [Unsplash](https://unsplash.com/) - For high-quality placeholder images

## 📞 Contact

**Artur Rodrigues** - Full-Stack Developer

- 🌐 Website: [your-domain.dev](https://your-domain.dev)
- 💼 LinkedIn: [linkedin.com/in/arturrsa19](https://linkedin.com/in/arturrsa19)
- 🐱 GitHub: [github.com/ArturRSA19](https://github.com/ArturRSA19)
- 📧 Email: artur@email.com

---

⭐ **Like this project? Give it a star!** ⭐
