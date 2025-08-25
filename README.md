# Portfolio de Artur Rodrigues

Um portfólio moderno e responsivo desenvolvido com HTML5, CSS3, JavaScript e Tailwind CSS.

## 📁 Estrutura do Projeto

```
Portfolio/
├── index.html              # Arquivo principal (antigo)
├── index.html          # Arquivo principal reorganizado
├── README.md               # Documentação do projeto
│
├── assets/                 # Recursos do projeto
│   ├── css/
│   │   └── styles.css      # Estilos customizados
│   │
│   ├── js/
│   │   ├── app.js          # Script principal da aplicação
│   │   ├── data.js         # Dados dos projetos
│   │   ├── i18n.js         # Sistema de internacionalização
│   │   └── tailwind-config.js # Configuração do Tailwind
│   │
│   ├── images/             # Imagens do projeto
│   │   └── profile.png     # Foto de perfil (adicionar aqui)
│   │
│   └── docs/               # Documentos
│       └── cv.pdf          # Currículo (adicionar aqui)
│
└── components/             # Componentes reutilizáveis (futuro)
```

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e animações
- **JavaScript (ES6+)** - Interatividade e lógica
- **Tailwind CSS** - Framework CSS utilitário
- **Swiper.js** - Carrossel de projetos
- **AOS (Animate On Scroll)** - Animações de scroll
- **Lucide Icons** - Ícones modernos

## 🎨 Funcionalidades

- ✅ Design responsivo para todos os dispositivos
- ✅ Modo escuro/claro com persistência
- ✅ Internacionalização (PT/EN)
- ✅ Animações suaves e interativas
- ✅ Efeitos 3D nos cards de projetos
- ✅ Carrossel de projetos em destaque
- ✅ Navegação sticky com indicação da seção ativa
- ✅ SEO otimizado com meta tags e JSON-LD
- ✅ Acessibilidade (WCAG)

## 📋 Como Usar

### 1. Configuração Inicial

1. Clone ou baixe o projeto
2. Adicione sua foto de perfil em `assets/images/profile.png`
3. Adicione seu currículo em `assets/docs/cv.pdf`
4. Abra `index.html` no navegador

### 2. Personalização

#### Dados Pessoais
Edite o arquivo `assets/js/data.js` para adicionar seus projetos:

```javascript
const projectData = {
  featured: [
    {
      title: 'Seu Projeto',
      blurb: 'Descrição do projeto',
      image: 'URL da imagem',
      repo: 'URL do repositório'
    }
  ],
  projects: [
    // Seus projetos aqui
  ]
};
```

#### Textos e Traduções
Edite o arquivo `assets/js/i18n.js` para personalizar os textos:

```javascript
const I18N = {
  en: {
    'hero.body': 'Sua descrição em inglês...',
    // outros textos
  },
  pt: {
    'hero.body': 'Sua descrição em português...',
    // outros textos
  }
};
```

#### Links Sociais
No arquivo `index.html`, atualize os links:

- GitHub: `https://github.com/seu-usuario`
- LinkedIn: `https://www.linkedin.com/in/seu-perfil`
- Email: `mailto:seu@email.com`
- Telegram: `https://t.me/seu-usuario`

#### Cores e Estilo
Para personalizar as cores, edite `assets/js/tailwind-config.js`:

```javascript
colors: {
  brand: {
    500: '#sua-cor-principal',
    // outras variações
  }
}
```

## 🎯 Seções do Portfolio

1. **Hero** - Apresentação inicial com call-to-actions
2. **About** - Sobre você e estatísticas
3. **Skills** - Competências técnicas organizadas por categoria
4. **Featured** - Projetos em destaque (carrossel)
5. **Projects** - Todos os projetos em grid
6. **Experience** - Experiência profissional e acadêmica
7. **Contact** - Formas de contato

## 🔧 Desenvolvimento

### Estrutura Modular
O projeto foi organizado de forma modular para facilitar manutenção:

- **CSS separado** - Estilos customizados em arquivo próprio
- **JavaScript modular** - Funcionalidades divididas por arquivo
- **Dados centralizados** - Projetos em arquivo separado
- **Internacionalização** - Sistema de traduções independente

### Adicionando Novos Projetos

1. Edite `assets/js/data.js`
2. Adicione o projeto no array correspondente
3. A página será atualizada automaticamente

### Adicionando Novas Traduções

1. Edite `assets/js/i18n.js`
2. Adicione as chaves de tradução
3. Use `data-i18n="chave"` nos elementos HTML

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: 768px - 1024px
- **Large**: > 1024px

## 🌐 Deploy

Para colocar online, você pode usar:

- **GitHub Pages** - Grátis para repositórios públicos
- **Netlify** - Deploy automático com Git
- **Vercel** - Otimizado para projetos frontend
- **Surge.sh** - Deploy rápido via CLI

## 🛠️ Melhorias Futuras

- [ ] Sistema de blog com markdown
- [ ] Formulário de contato funcional
- [ ] PWA (Progressive Web App)
- [ ] Análise de performance
- [ ] Testes automatizados
- [ ] Componentização com framework

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

---

**Desenvolvido com ❤️ por Artur Rodrigues**
