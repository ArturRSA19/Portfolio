// ===== INTERNATIONALIZATION (i18n) =====
const I18N = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    'hero.tagline': 'Portfolio 2025',
    'hero.heading_pre': 'Hi, I\'m',
    'hero.heading_post': '.',
    'hero.body': 'Full-Stack Developer passionate about building reliable, performant solutions. I work with <strong>C#/.NET</strong>, <strong>Java</strong>, <strong>React/Next.js</strong>, and <strong>React Native</strong>. Experienced in both legacy system maintenance and modern BI implementations, with expertise in mobile development and backend integrations.',
    'hero.btn_projects': 'View Projects',
    'hero.btn_github': 'GitHub',
    'hero.btn_cv': 'Download CV',
    
    'about.title': 'About',
    'about.body': 'I\'m a Software Engineering student at the University of Brasília and a Full-Stack developer with experience in both modern and legacy systems. Currently working with <strong>C# MVC</strong> and <strong>Java JPA</strong> at UGestor, I\'ve developed everything from <strong>React Native</strong> mobile apps to <strong>BI systems</strong>. My expertise spans frontend development, backend APIs, and database management, with a passion for clean code and scalable architecture.',
    'about.stats.years': 'Years coding',
    'about.stats.shipped': 'Projects shipped',
    'about.stats.stacks': 'Main stacks',
    'about.stats.userfocused': 'User-focused',
    
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.backend_extra': 'Auth, Caching, Queues',
    'skills.dataai': 'Data & AI',
    'skills.devops': 'DevOps & QA',
    'skills.a11y': 'Accessibility (WCAG)',
    
    'featured.title': 'Featured',
    'projects.title': 'Projects',
    'projects.see_all': 'See all →',
    
    'experience.title': 'Experience',
    'experience.current': 'Currently',
    'experience.ugestor.role': 'Junior Full-Stack Developer — UGestor',
    'experience.ugestor.meta': 'C#, Java, MVC & Business Intelligence • Jul 2025 — Aug 2025',
    'experience.ugestor.b1': 'Developed with C# MVC and Razor Pages for new BI system implementation.',
    'experience.ugestor.b2': 'Maintained legacy Java system using JPA for data persistence.',
    'experience.pagglo.role': 'Frontend Developer — Pagglo (Internship)',
    'experience.pagglo.meta': 'React Native, TypeScript & .NET integrations • Jan 2024 — May 2025',
    'experience.pagglo.b1': 'Developed iOS/Android applications with React Native, Redux Toolkit, and TypeScript.',
    'experience.pagglo.b2': 'Integrated with C# .NET APIs using Postman and participated in Scrum methodologies.',
    'experience.mepa.role': 'Full-Stack Developer — UnB/MEPA Energia',
    'experience.mepa.meta': 'React, TypeScript, Python & Django • Nov 2024 — Mar 2025',
    'experience.mepa.b1': 'Developed website functionalities using React, TypeScript, and Python Django.',
    'experience.mepa.b2': 'Worked with Docker containerization and Git/GitLab version control.',
    'experience.acessa.role': 'Full-Stack Developer — Acessa UnB (DACES/UnB)',
    'experience.acessa.meta': 'Flutter, Node.js & MySQL • Apr 2024 — Jan 2025',
    'experience.acessa.b1': 'University extension project developing mobile app for accessibility on campus.',
    'experience.acessa.b2': 'Built with Flutter/Dart frontend and Node.js + MySQL backend.',
    'experience.dnit.role': 'Full-Stack Developer — UnB/DNIT',
    'experience.dnit.meta': '.NET, React, TypeScript & PostgreSQL • Mar 2023 — Jul 2023',
    'experience.dnit.b1': 'Developed web solutions for DNIT project assisting schools near highways.',
    'experience.dnit.b2': 'Used .NET, C#, React, TypeScript, PostgreSQL with Figma for design.',
    
    'contact.title': 'Contact',
    'contact.subtitle': 'Open to internships, junior roles, and freelance work. Let\'s build something great.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.telegram': 'Telegram',
    
    'footer.rights': 'All rights reserved.',
    'footer.back_to_top': 'Back to top'
  },
  pt: {
    'nav.about': 'Sobre',
    'nav.skills': 'Competências',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    
    'hero.tagline': 'Portfólio 2025',
    'hero.heading_pre': 'Olá, me chamo',
    'hero.heading_post': '.',
    'hero.body': 'Desenvolvedor Full-Stack apaixonado por construir soluções confiáveis e performáticas. Trabalho com <strong>C#/.NET</strong>, <strong>Java</strong>, <strong>React/Next.js</strong> e <strong>React Native</strong>. Experiente tanto na manutenção de sistemas legados quanto na implementação de BI moderno, com expertise em desenvolvimento mobile e integrações backend.',
    'hero.btn_projects': 'Ver Projetos',
    'hero.btn_github': 'GitHub',
    'hero.btn_cv': 'Baixar CV',
    
    'about.title': 'Sobre',
    'about.body': 'Sou estudante de Engenharia de Software na Universidade de Brasília e desenvolvedor Full-Stack com experiência em sistemas modernos e legados. Atualmente trabalhando com <strong>C# MVC</strong> e <strong>Java JPA</strong> na UGestor, já desenvolvi desde apps <strong>React Native</strong> até <strong>sistemas BI</strong>. Minha expertise abrange desenvolvimento frontend, APIs backend e gerenciamento de banco de dados, com paixão por código limpo e arquitetura escalável.',
    'about.stats.years': 'Anos programando',
    'about.stats.shipped': 'Projetos entregues',
    'about.stats.stacks': 'Stacks principais',
    'about.stats.userfocused': 'Foco no usuário',
    
    'skills.title': 'Competências',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.backend_extra': 'Autenticação, Cache, Filas',
    'skills.dataai': 'Dados & IA',
    'skills.devops': 'DevOps & QA',
    'skills.a11y': 'Acessibilidade (WCAG)',
    
    'featured.title': 'Destaques',
    'projects.title': 'Projetos',
    'projects.see_all': 'Ver todos →',
    
    'experience.title': 'Experiência',
    'experience.current': 'Atualmente',
    'experience.ugestor.role': 'Desenvolvedor Full-Stack Júnior — UGestor',
    'experience.ugestor.meta': 'C#, Java, MVC & Business Intelligence • Jul 2025 — Ago 2025',
    'experience.ugestor.b1': 'Desenvolvi com C# MVC e Razor Pages para implementação de novo sistema BI.',
    'experience.ugestor.b2': 'Mantive sistema legado Java utilizando JPA para persistência de dados.',
    'experience.pagglo.role': 'Desenvolvedor Front-End — Pagglo (Estágio)',
    'experience.pagglo.meta': 'React Native, TypeScript & integrações .NET • Jan 2024 — Mai 2025',
    'experience.pagglo.b1': 'Desenvolvimento de aplicações iOS/Android com React Native, Redux Toolkit e TypeScript.',
    'experience.pagglo.b2': 'Integração com APIs C# .NET usando Postman e participação em metodologias Scrum.',
    'experience.mepa.role': 'Desenvolvedor Full-Stack — UnB/MEPA Energia',
    'experience.mepa.meta': 'React, TypeScript, Python & Django • Nov 2024 — Mar 2025',
    'experience.mepa.b1': 'Desenvolvi funcionalidades de sites usando React, TypeScript e Python Django.',
    'experience.mepa.b2': 'Trabalhei com containerização Docker e controle de versão Git/GitLab.',
    'experience.acessa.role': 'Desenvolvedor Full-Stack — Acessa UnB (DACES/UnB)',
    'experience.acessa.meta': 'Flutter, Node.js & MySQL • Abr 2024 — Jan 2025',
    'experience.acessa.b1': 'Projeto de extensão universitária desenvolvendo app móvel para acessibilidade no campus.',
    'experience.acessa.b2': 'Construído com frontend Flutter/Dart e backend Node.js + MySQL.',
    'experience.dnit.role': 'Desenvolvedor Full-Stack — UnB/DNIT',
    'experience.dnit.meta': '.NET, React, TypeScript & PostgreSQL • Mar 2023 — Jul 2023',
    'experience.dnit.b1': 'Desenvolvi soluções web para projeto DNIT de assistência a escolas próximas a rodovias.',
    'experience.dnit.b2': 'Utilizei .NET, C#, React, TypeScript, PostgreSQL com Figma para design.',
    
    'contact.title': 'Contato',
    'contact.subtitle': 'Aberto a estágio, vagas júnior e freela. Vamos construir algo incrível.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.telegram': 'Telegram',
    
    'footer.rights': 'Todos os direitos reservados.',
    'footer.back_to_top': 'Voltar ao topo'
  }
};

function setLocale(locale) {
  const dict = I18N[locale] || I18N.en;
  document.documentElement.lang = (locale === 'pt') ? 'pt-BR' : 'en-US';
  localStorage.setItem('locale', locale);
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const val = dict[key];
    if (val !== undefined) el.innerHTML = val; // allow inline <strong>
  });
  
  // sync selects
  const s1 = document.getElementById('langSelect');
  const s2 = document.getElementById('langSelectMobile');
  if (s1) s1.value = locale === 'pt' ? 'pt' : 'en';
  if (s2) s2.value = locale === 'pt' ? 'pt' : 'en';
}

function initLocale() {
  const saved = localStorage.getItem('locale');
  const browser = navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  setLocale(saved || browser || 'en');
}
