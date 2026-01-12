// ===== INTERNATIONALIZATION (i18n) =====
const I18N = {
  en: {
    'nav.home': 'Home',
    'nav.values': 'Values',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.certificates': 'Certificates',
    'nav.contact': 'Contact',
    
    'hero.tagline': 'Portfolio 2025',
    'hero.heading_pre': 'Hi, I\'m',
    'hero.heading_post': '.',
    'hero.body': 'Software Engineer graduated from <strong>UnB</strong> and Full Stack Developer focused on delivering scalable, high-performance solutions. I work extensively with <strong>Python</strong>, <strong>C#/.NET</strong>, <strong>React/Next.js</strong>, <strong>React Native</strong>, <strong>Flutter</strong>, and <strong>TypeScript</strong>, applying solid software engineering principles across frontend, backend, and system integration. <br><br>I have a strong practical expertise in the daily use of <strong>Artificial Intelligence</strong> to increase productivity and code quality, including the design, orchestration, and delegation of tasks to <strong>AI agents</strong>. I actively leverage tools such as <strong>Codex</strong>, <strong>Claude Code</strong>, <strong>Google Gemini</strong>, and other AI-assisted development platforms to accelerate development, automate workflows, support architectural decisions, and enhance problem-solving efficiency. <br><br>My experience includes maintaining legacy systems, developing modern data-driven and BI-oriented solutions, and participating in impactful academic and industry-linked projects, including accessibility initiatives at UnB, partnerships with DNIT, and collaborations with MEPA Energia. <br><br>Outside of work and study, I enjoy playing soccer, training at the gym, following Cruzeiro, gaming in my free time, and cultivating the habit of reading more books.',
    'hero.btn_projects': 'View Projects',
    'hero.btn_github': 'GitHub',
    'hero.btn_cv': 'Download CV',
    
    'values.title': 'My Development Philosophy',
    'values.body': 'I believe in building software that delivers real, measurable impact. My development philosophy is grounded in <strong>software engineering fundamentals</strong>, with a strong emphasis on <strong>clean, maintainable, and scalable code</strong>. I actively leverage <strong>artificial intelligence as a productivity multiplier</strong>, using AI agents and modern tools to delegate tasks, accelerate development, and support better technical decisions. I value <strong>accessibility-aware design</strong>, <strong>clear architecture</strong>, and <strong>collaborative development</strong>, supported by strong documentation, knowledge sharing, and continuous learning. Every project is approached with a long-term mindset, focusing on sustainability, quality, and meaningful outcomes.',
    'values.stats.years': 'Years coding',
    'values.stats.shipped': 'Projects shipped',
    'values.stats.stacks': 'Main stacks',
    'values.stats.userfocused': 'User-focused',
    
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.backend_extra': 'Auth, Caching, Queues',
    'skills.dataai': 'Data & AI',
    'skills.devops': 'DevOps & QA',
    'skills.a11y': 'Accessibility (WCAG)',
    
    'projects.title': 'Projects',
    'projects.see_all': 'See all →',
    'projects.source_code': 'Source Code',
    'projects.see_live': 'See Live',
    
    'experience.title': 'Experience',
    'experience.current': 'Currently',
    'experience.ize.role': 'Junior Full Stack Developer (Level 3) — Ize Gestão Empresarial',
    'experience.ize.meta': 'TypeScript, Python, PostgreSQL & Firebase • Sep 2025 — Jan 2026',
    'experience.ize.b1': 'Developed and maintained full-stack applications using TypeScript and Python, ensuring seamless integration between front-end and back-end layers.',
    'experience.ize.b2': 'Built robust APIs and database structures with PostgreSQL and Firebase, applying best practices for scalability and performance.',
    'experience.ize.b3': 'Implemented workflow automation using n8n to optimize processes and improve system efficiency.',
    'experience.ize.b4': 'Collaborated with design teams using Figma and managed databases with DBeaver for comprehensive development cycles.',
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
    
    'certificates.title': 'Certificates',
    'certificates.subtitle': 'Professional certifications and achievements',
    'certificates.view': 'View Certificate',
    'certificates.back': 'Back to Portfolio',
    
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
    'nav.home': 'Início',
    'nav.values': 'Valores',
    'nav.skills': 'Competências',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.certificates': 'Certificados',
    'nav.contact': 'Contato',
    
    'hero.tagline': 'Portfólio 2025',
    'hero.heading_pre': 'Olá, me chamo',
    'hero.heading_post': '.',
    'hero.body': 'Engenheiro de Software formado pela <strong>UnB</strong> e Desenvolvedor Full Stack focado em entregar soluções escaláveis e de alto desempenho. Trabalho extensivamente com <strong>Python</strong>, <strong>C#/.NET</strong>, <strong>React/Next.js</strong>, <strong>React Native</strong>, <strong>Flutter</strong> e <strong>TypeScript</strong>, aplicando princípios sólidos de engenharia de software em frontend, backend e integração de sistemas. <br><br>Possuo forte expertise prática no uso diário de <strong>Inteligência Artificial</strong> para aumentar a produtividade e qualidade do código, incluindo o design, orquestração e delegação de tarefas para <strong>agentes de IA</strong>. Utilizo ativamente ferramentas como <strong>Codex</strong>, <strong>Claude Code</strong>, <strong>Google Gemini</strong> e outras plataformas de desenvolvimento assistido por IA para acelerar o desenvolvimento, automatizar fluxos de trabalho, apoiar decisões arquiteturais e aumentar a eficiência na resolução de problemas. <br><br>Minha experiência inclui manutenção de sistemas legados, desenvolvimento de soluções modernas orientadas a dados e BI, e participação em projetos acadêmicos e vinculados à indústria de alto impacto, incluindo iniciativas de acessibilidade na UnB, parcerias com o DNIT e colaborações com a MEPA Energia. <br><br>Fora do trabalho e estudos, gosto de jogar futebol, treinar na academia, torcer pelo Cruzeiro, jogar videogames no meu tempo livre e cultivar o hábito de ler mais livros.',
    'hero.btn_projects': 'Ver Projetos',
    'hero.btn_github': 'GitHub',
    'hero.btn_cv': 'Baixar CV',
    
    'values.title': 'Minha Filosofia de Desenvolvimento',
    'values.body': 'Acredito em construir software que gere impacto real e mensurável. Minha filosofia de desenvolvimento é baseada em <strong>fundamentos sólidos de engenharia de software</strong>, com forte ênfase em <strong>código limpo, escalável e de fácil manutenção</strong>. Utilizo ativamente a <strong>inteligência artificial como multiplicador de produtividade</strong>, empregando agentes de IA e ferramentas modernas para delegar tarefas, acelerar o desenvolvimento e apoiar melhores decisões técnicas. Valorizo <strong>design com atenção à acessibilidade</strong>, <strong>arquitetura bem definida</strong> e <strong>desenvolvimento colaborativo</strong>, sustentados por boa documentação, compartilhamento de conhecimento e aprendizado contínuo. Cada projeto é conduzido com uma visão de longo prazo, priorizando sustentabilidade, qualidade e resultados significativos.' ,
    'values.stats.years': 'Anos programando',
    'values.stats.shipped': 'Projetos entregues',
    'values.stats.stacks': 'Stacks principais',
    'values.stats.userfocused': 'Foco no usuário',
    
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
    'projects.source_code': 'Código Fonte',
    'projects.see_live': 'Ver Online',
    
    'experience.title': 'Experiência',
    'experience.current': 'Atualmente',
    'experience.ize.role': 'Desenvolvedor Full Stack Júnior (Nível 3) — Ize Gestão Empresarial',
    'experience.ize.meta': 'TypeScript, Python, PostgreSQL & Firebase • Set 2025 — Jan 2026',
    'experience.ize.b1': 'Desenvolvimento e manutenção de aplicações full-stack usando TypeScript e Python, garantindo integração perfeita entre camadas front-end e back-end.',
    'experience.ize.b2': 'Construção de APIs robustas e estruturas de banco de dados com PostgreSQL e Firebase, aplicando melhores práticas de escalabilidade e desempenho.',
    'experience.ize.b3': 'Implementação de automação de fluxos de trabalho usando n8n para otimizar processos e melhorar eficiência dos sistemas.',
    'experience.ize.b4': 'Colaboração com equipes de design usando Figma e gerenciamento de bancos de dados com DBeaver para ciclos de desenvolvimento completos.',
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
    
    'certificates.title': 'Certificados',
    'certificates.subtitle': 'Certificações profissionais e conquistas',
    'certificates.view': 'Ver Certificado',
    'certificates.back': 'Voltar ao Portfólio',
    
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
  
  // Update language buttons state
  updateLanguageButtons(locale);
  
  // Update CV button link based on language
  if (typeof updateCVButton === 'function') {
    updateCVButton();
  }
  
  // Update certificates content if certificates section is visible
  if (typeof refreshCertificatesContent === 'function') {
    refreshCertificatesContent();
  }
}

function updateLanguageButtons(locale) {
  // Desktop buttons
  const enBtn = document.getElementById('langBtnEn');
  const ptBtn = document.getElementById('langBtnPt');
  
  if (enBtn && ptBtn) {
    enBtn.classList.toggle('active', locale === 'en');
    ptBtn.classList.toggle('active', locale === 'pt');
  }
  
  // Mobile buttons
  const enBtnMobile = document.getElementById('langBtnEnMobile');
  const ptBtnMobile = document.getElementById('langBtnPtMobile');
  
  if (enBtnMobile && ptBtnMobile) {
    enBtnMobile.classList.toggle('active', locale === 'en');
    ptBtnMobile.classList.toggle('active', locale === 'pt');
  }
}

function initLocale() {
  const saved = localStorage.getItem('locale');
  const browser = navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  setLocale(saved || browser || 'en');
  
  // Add event listeners to language buttons
  const langButtons = document.querySelectorAll('.lang-btn, .lang-btn-mobile');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLocale(lang);
    });
  });
}
