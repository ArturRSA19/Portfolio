// ===== FEATURED PROJECT DATA =====
const featuredProject = {
  name: {
    en: 'BiblioTech — Library Management System',
    pt: 'BiblioTech — Sistema de Gerenciamento de Biblioteca'
  },
  tagline: {
    en: 'Complete library system with modern architecture, offline-first and integrated observability',
    pt: 'Sistema completo de biblioteca com arquitetura moderna, offline-first e observabilidade integrada'
  },
  description: {
    en: 'Full-stack system for library management with customer control, book catalog, reservations, and automatic late fine calculation. Works as a PWA with offline support, automatic sync, and smart search via Elasticsearch.',
    pt: 'Sistema full-stack para gerenciamento de biblioteca com controle de clientes, catálogo de livros, reservas e cálculo automático de multas por atraso. Funciona como PWA com suporte offline, sincronização automática e busca inteligente via Elasticsearch.'
  },
  technicalDescription: {
    en: 'Containerized microservices architecture with Docker Compose orchestrating 9 services: NestJS 11 backend with MongoDB (Replica Set for transactions) and Prisma ORM, Angular 21 frontend as an offline-first PWA with IndexedDB (Dexie) for operation queuing, Elasticsearch 8.12 for fuzzy search and event auditing, Logstash with two incremental sync ETL pipelines (6-minute window with safety overlap), Kong API Gateway with IP restriction plugin and Konga for visual administration, and Kibana for analytical dashboards. The system implements patterns such as fire-and-forget audit logging indexed in Elasticsearch, customer data snapshots in reservations for audit integrity, soft delete on books, server-side CPF validation, HTTP interceptors for error handling and connectivity detection, and Service Worker with freshness strategy for API caching.',
    pt: 'Arquitetura de microserviços containerizada com Docker Compose orquestrando 9 serviços: backend NestJS 11 com MongoDB (Replica Set para transações) e Prisma ORM, frontend Angular 21 como PWA offline-first com IndexedDB (Dexie) para enfileiramento de operações, Elasticsearch 8.12 para busca fuzzy e auditoria de eventos, Logstash com duas pipelines ETL de sincronização incremental (janela de 6 minutos com overlap de segurança), Kong API Gateway com plugin de restrição de IP e Konga para administração visual, e Kibana para dashboards analíticos. O sistema implementa padrões como fire-and-forget audit logging indexado no Elasticsearch, snapshot de dados do cliente nas reservas para integridade de auditoria, soft delete em livros, validação de CPF server-side, interceptors HTTP para tratamento de erros e detecção de conectividade, e Service Worker com estratégia freshness para cache de API.'
  },
  type: {
    en: 'Full-stack (REST API + PWA Frontend + Observable Infrastructure)',
    pt: 'Full-stack (API REST + PWA Frontend + Infraestrutura Observável)'
  },
  technologies: [
    'NestJS 11', 'Angular 21', 'Angular Material', 'MongoDB', 'Prisma ORM',
    'Elasticsearch 8.12', 'Logstash 8.12', 'Kibana 8.12', 'Kong API Gateway',
    'Konga', 'Docker', 'Docker Compose', 'TypeScript', 'Node.js 20',
    'Dexie (IndexedDB)', 'RxJS', 'Angular Service Worker (PWA)',
    'Web Speech API', 'PostgreSQL (Kong DB)'
  ],
  features: {
    en: [
      'Full CRUD for customers with CPF validation',
      'Book catalog with soft delete, fuzzy search via Elasticsearch, and Base64 cover upload',
      'Reservation system with availability control and automatic late fine calculation (R$10 + 5%/day)',
      'Offline-first PWA with IndexedDB operation queuing and automatic replay on reconnect',
      'Incremental ETL pipeline via Logstash syncing books and rentals to Elasticsearch every 5 minutes',
      'Fire-and-forget audit system with Elasticsearch-indexed events (registrations, edits, deletions, returns)',
      'Kong API Gateway with IP restriction and reverse proxy with strip path',
      'Analytical dashboard with Kibana for rental and collection data visualization',
      'Voice recognition (Web Speech API) for book search in pt-BR'
    ],
    pt: [
      'CRUD completo de clientes com validação de CPF',
      'Catálogo de livros com soft delete, busca fuzzy via Elasticsearch e upload de capa em Base64',
      'Sistema de reservas com controle de disponibilidade e cálculo automático de multas por atraso (R$10 + 5%/dia)',
      'PWA offline-first com enfileiramento de operações em IndexedDB e replay automático ao reconectar',
      'Pipeline ETL incremental via Logstash sincronizando livros e locações para Elasticsearch a cada 5 minutos',
      'Sistema de auditoria fire-and-forget com eventos indexados no Elasticsearch (registros, edições, exclusões, devoluções)',
      'API Gateway Kong com restrição de IP e proxy reverso com strip path',
      'Dashboard analítico com Kibana para visualização de dados de locações e acervo',
      'Reconhecimento de voz (Web Speech API) para busca de livros em pt-BR'
    ]
  },
  differentials: {
    en: [
      'Complete observability architecture with ELK Stack (Elasticsearch + Logstash + Kibana) integrated into the data flow',
      'Robust offline-first strategy: HTTP interceptor + IndexedDB queue + Service Worker with freshness strategy + auto-sync',
      'Asynchronous fire-and-forget auditing that does not impact request latency',
      'Incremental sync via Logstash with overlap window to ensure zero data loss',
      'Customer data snapshots in reservations preserving audit trail integrity even after client deletion',
      'Kong API Gateway with ip-restriction plugin configured via automated script',
      'Optimized multi-stage Dockerfile separating build and runtime with production dependencies only'
    ],
    pt: [
      'Arquitetura de observabilidade completa com ELK Stack (Elasticsearch + Logstash + Kibana) integrada ao fluxo de dados',
      'Estratégia offline-first robusta: interceptor HTTP + IndexedDB queue + Service Worker com freshness strategy + auto-sync',
      'Auditoria assíncrona fire-and-forget que não impacta a latência das requisições',
      'Sincronização incremental via Logstash com janela de overlap para garantir zero perda de dados',
      'Snapshot de dados do cliente nas reservas preservando integridade da trilha de auditoria mesmo após exclusão do cliente',
      'Kong API Gateway com plugin ip-restriction configurado via script automatizado',
      'Dockerfile multi-stage otimizado separando build e runtime com apenas dependências de produção'
    ]
  },
  learnings: {
    en: [
      'Orchestration of multiple services with Docker Compose including health checks and dependencies',
      'Elasticsearch integration with NestJS for fuzzy search and event audit system',
      'ETL pipeline configuration with Logstash for incremental data synchronization',
      'Offline-first PWA implementation with Angular Service Worker, IndexedDB, and HTTP interceptors',
      'Fire-and-forget pattern for asynchronous logging without performance impact',
      'Kong API Gateway configuration with security plugins and reverse proxy',
      'MongoDB modeling with Prisma ORM using Replica Set for transaction support',
      'Intentional data denormalization to preserve audit trail (snapshot pattern)',
      'Multi-stage Docker build for production image optimization',
      'Web Speech API integration for in-browser voice recognition'
    ],
    pt: [
      'Orquestração de múltiplos serviços com Docker Compose incluindo health checks e dependências',
      'Integração de Elasticsearch com NestJS para busca fuzzy e sistema de auditoria de eventos',
      'Configuração de pipelines ETL com Logstash para sincronização incremental de dados',
      'Implementação de PWA offline-first com Angular Service Worker, IndexedDB e interceptors HTTP',
      'Padrão fire-and-forget para logging assíncrono sem impacto em performance',
      'Configuração de API Gateway Kong com plugins de segurança e proxy reverso',
      'Modelagem MongoDB com Prisma ORM usando Replica Set para suporte a transações',
      'Desnormalização intencional de dados para preservar trilha de auditoria (snapshot pattern)',
      'Multi-stage Docker build para otimização de imagem de produção',
      'Integração da Web Speech API para reconhecimento de voz no navegador'
    ]
  },
  status: 'completed',
  repoUrl: 'https://github.com/ArturRSA19/Desafio-Tecnico-Sistema-de-Biblioteca',
  demoUrl: null
};

// ===== PROJECT DATA =====
const projectData = {
  projects: [
    {
      title: 'Habit Tracker App — NLW Setup & Trilha Explorer',
      tags: ['React', 'TypeScript', 'Node.js', 'SQLite'],
      image: 'assets/images/habitsApp.jpg',
      repo: 'https://github.com/ArturRSA19/NLW_Setup?tab=readme-ov-file',
      liveUrl: 'https://arturrsa19.github.io/NLW_Setup/'
    },
    {
      title: 'Orders App — Order Management System',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'assets/images/ordersApp.jpg',
      repo: 'https://github.com/ArturRSA19/Orders-App'
    },
    {
      title: 'CryptoDash — Real-time Crypto Dashboard',
      tags: ['React', 'Next.js', 'TypeScript', 'API'],
      image: 'assets/images/cryptodash-img.png',
      repo: 'https://github.com/ArturRSA19/Crypto-Dashboard'
    },
    {
      title: 'Jetson Xavier NX — Docs',
      tags: ['Docs', 'Embedded', 'Research'],
      image: 'assets/images/jetson.jpg',
      repo: 'https://gitlab.com/ArturRSA19/trabalho-1-2025-1-jetson-xavier-nx/-/tree/main/JetsonXavierNX'
    },
    {
      title: 'NLW Spacetime — Time Capsule App',
      tags: ['React Native', 'TypeScript', 'Node.js', 'Prisma'],
      image: 'assets/images/spacetimeApp.jpg',
      repo: 'https://github.com/ArturRSA19/NLW-Spacetime',
    }
  ]
};
