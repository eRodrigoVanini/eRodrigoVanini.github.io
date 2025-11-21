// Elementos
const intro = document.querySelector(".intro");
const wordsGrid = document.querySelector(".words-grid");
const langOptions = document.querySelectorAll(".lang-option");

// Idioma atual
let currentLang = "pt";

// Controle de toque para mobile
let isTouching = false;

// Palavras do tema em PT-BR
const dimWordsPT = [
  "código",
  "vida",
  "resiliência",
  "bits",
  "coragem",
  "pulsar",
  "conexão",
  "futuro",
  "altruísmo",
  "bytes",
  "esperança",
  "algoritmo",
  "empatia",
  "persistir",
  "digital",
  "humanidade",
  "inovação",
  "compaixão",
  "sistemas",
  "força",
  "evolução",
  "dados",
  "superação",
  "rede",
  "determinação",
  "interface",
  "bondade",
  "adaptação",
  "nuvem",
  "solidariedade",
  "recomeçar",
  "servidor",
  "generosidade",
  "processar",
  "vitalidade",
  "transformar",
  "protocolo",
  "conectar",
  "binário",
  "amor",
  "persistência",
  "hardware",
  "respirar",
  "software",
  "lutar",
  "renascer",
  "memória",
  "doação",
  "cloud",
  "api",
  "cuidado",
  "evoluir",
  "pixel",
  "debug",
  "viver",
  "compilar",
  "função",
  "resistir",
];

// Palavras do tema em EN
const dimWordsEN = [
  "code",
  "life",
  "resilience",
  "bits",
  "courage",
  "pulse",
  "connection",
  "future",
  "altruism",
  "bytes",
  "hope",
  "algorithm",
  "empathy",
  "persist",
  "digital",
  "humanity",
  "innovation",
  "compassion",
  "systems",
  "strength",
  "evolution",
  "data",
  "overcoming",
  "network",
  "determination",
  "interface",
  "kindness",
  "adaptation",
  "cloud",
  "solidarity",
  "restart",
  "server",
  "generosity",
  "process",
  "vitality",
  "transform",
  "protocol",
  "connect",
  "binary",
  "love",
  "persistence",
  "hardware",
  "breathe",
  "software",
  "fight",
  "rebirth",
  "memory",
  "donation",
  "cloud",
  "api",
  "care",
  "evolve",
  "pixel",
  "debug",
  "live",
  "compile",
  "function",
  "resist",
];

// Palavras destacadas (sempre dentro do viewport)
const highlightWords = {
  pt: ["PORTFÓLIO", "2025", "RODRIGO", "VANINI", "ENTRAR"],
  en: ["PORTFOLIO", "2025", "RODRIGO", "VANINI", "ENTER"],
};

// Traduções (mantive igual ao seu original, resumido para evitar poluição aqui)
const translations = {
  pt: {
    role: "Desenvolvedor Full Stack",
    cv: "Ver Currículo Completo",
    "about-title": "Sobre Mim",
    "about-p1":
      "Olá! Sou Rodrigo Vanini, desenvolvedor full stack apaixonado por criar experiências digitais únicas e funcionais. Com formação em Análise e Desenvolvimento de Sistemas, combino design minimalista com código limpo e eficiente.",
    "about-p2":
      "Minha jornada na programação começou com curiosidade e se transformou em dedicação diária para aprender, evoluir e construir soluções que fazem diferença. Acredito que a tecnologia deve ser humana, acessível e elegante.",
    "about-p3":
      "Atualmente, trabalho com desenvolvimento web moderno, explorando desde interfaces interativas até sistemas robustos no backend. Sempre em busca de novos desafios e oportunidades de crescimento.",
    "skills-title": "Tecnologias",
    advanced: "Avançado",
    intermediate: "Intermediário",
    beginner: "Iniciante",
    "projects-title": "Projetos em Destaque",
    "project1-desc":
      "Aplicação web prática e intuitiva que permite organizar todos os seus prompts de IA em um único lugar.",
    "project2-desc":
      "Jogo de adivinhação educativo desenvolvido com React.js, ideal para sala de aula e aprendizado interativo.",
    "project3-desc":
      "Conversor de moedas moderno que converte Real (BRL) para USD, EUR e GBP. Desenvolvido com JavaScript vanilla.",
    "project4-desc":
      "Aplicação simples para gerenciar sua lista de compras semanal. Adicione, marque como completo e remova itens facilmente.",
    "project5-desc":
      "Calculadora de IMC simples com exibição de resultado. Utiliza CSS e JavaScript para interface interativa.",
    "project6-desc":
      "Agregador de links para usar como cartão de visita online. Design minimalista e responsivo.",
    "view-demo": "Ver demo",
    "view-code": "Ver código",
    "more-projects": "Ver todos os projetos no GitHub",
    "contact-title": "Vamos Conversar?",
    "contact-text":
      "Estou sempre aberto a novos projetos, colaborações e oportunidades. Se você tem uma ideia ou apenas quer trocar uma ideia, não hesite em entrar em contato!",
    "footer-text":
      "© 2025 Rodrigo Vanini. Desenvolvido com código, café e determinação.",
  },
  en: {
    role: "Full Stack Developer",
    cv: "View Full Resume",
    "about-title": "About Me",
    "about-p1":
      "Hello! I'm Rodrigo Vanini, a full stack developer passionate about creating unique and functional digital experiences. With a degree in Systems Analysis and Development, I combine minimalist design with clean and efficient code.",
    "about-p2":
      "My journey in programming started with curiosity and has become a daily dedication to learn, evolve, and build solutions that make a difference. I believe technology should be human, accessible, and elegant.",
    "about-p3":
      "Currently, I work with modern web development, exploring everything from interactive interfaces to robust backend systems. Always seeking new challenges and growth opportunities.",
    "skills-title": "Technologies",
    advanced: "Advanced",
    intermediate: "Intermediate",
    beginner: "Beginner",
    "projects-title": "Featured Projects",
    "project1-desc":
      "A practical and intuitive web application that allows you to organize all your AI prompts in one place.",
    "project2-desc":
      "Educational guessing game developed with React.js, ideal for classroom and interactive learning.",
    "project3-desc":
      "Modern currency converter that converts Brazilian Real (BRL) to USD, EUR, and GBP. Built with vanilla JavaScript.",
    "project4-desc":
      "Simple application for managing your weekly shopping list. Add, mark as complete, and remove items easily.",
    "project5-desc":
      "Simple BMI calculator with result display. Uses CSS and JavaScript for interactive interface.",
    "project6-desc":
      "Link aggregator to use as an online business card. Minimalist and responsive design.",
    "view-demo": "View demo",
    "view-code": "View code",
    "more-projects": "See all projects on GitHub",
    "contact-title": "Let's Talk?",
    "contact-text":
      "I'm always open to new projects, collaborations, and opportunities. If you have an idea or just want to chat, don't hesitate to get in touch!",
    "footer-text":
      "© 2025 Rodrigo Vanini. Built with code, coffee, and determination.",
  },
};

// Calcula quantidade de palavras baseado no tamanho da tela
function calculateTotalWords() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 375) {
    return 220;
  } else if (screenWidth <= 767) {
    return 300;
  } else if (screenWidth <= 1024) {
    return 370;
  } else if (screenWidth <= 1279) {
    return 420;
  } else if (screenWidth <= 1439) {
    return 500;
  } else if (screenWidth <= 1919) {
    return 570;
  } else {
    return 670;
  }
}

// Detecta idioma do navegador
function detectLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.toLowerCase().startsWith("pt") ? "pt" : "en";
}

// Ativa palavra (adiciona highlight permanentemente)
function activateWord(element) {
  if (
    element &&
    element.classList.contains("dim") &&
    !element.classList.contains("active")
  ) {
    element.classList.add("active");
  }
}

// Util: retorna um item aleatório do array
function randItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Gera palavras aleatórias com bloco de highlights em posição aleatória segura
function generateWords(lang) {
  wordsGrid.innerHTML = ""; // Limpa grid

  const dimWords = lang === "pt" ? dimWordsPT : dimWordsEN;
  const highlights = highlightWords[lang].slice(); // copia
  const totalWords = calculateTotalWords();

  // Monta uma lista de placeholders para preencher -> start com todos dim placeholders
  const slots = new Array(totalWords).fill(null);

  // Preenche todos slots com palavras dim aleatórias
  for (let i = 0; i < slots.length; i++) {
    slots[i] = { type: "dim", text: randItem(dimWords) + "." };
  }

  // Determinar posição segura para inserir o bloco de highlights:
  // queremos que o bloco apareça dentro da área visível (não no extremo que fica deslocado).
  // Limitamos a posição de inserção a um percentual inicial do grid (ex: primeiros 45% dos slots).
  const safeFraction = 0.45; // 45% do grid — suficientemente dentro do viewport
  const maxStart = Math.max(
    0,
    Math.floor((totalWords - highlights.length) * safeFraction)
  );

  // posição aleatória dentro da área segura
  const insertionIndex = Math.floor(Math.random() * (maxStart + 1));

  // substitui nesse índice pelo bloco de highlights (mantendo bloco agrupado)
  for (let h = 0; h < highlights.length; h++) {
    const idx = insertionIndex + h;
    if (idx < slots.length) {
      slots[idx] = { type: "highlight", text: highlights[h] + "." };
    }
  }

  // Agora criamos os elementos a partir de slots — isso mantém o bloco agrupado
  // mas a posição do bloco muda aleatoriamente a cada chamada
  let overflowCounter = 0;
  for (let i = 0; i < slots.length; i++) {
    const slot = slots[i];

    if (slot.type === "highlight") {
      // Criamos um highlight dentro de um wrapper de bloco quando encontramos o primeiro elemento do bloco.
      // Para evitar criar múltiplos wrappers, checamos se o anterior já foi highlight.
      // Estratégia: se i==0 ou o anterior não for highlight, abrir um new wrapper.
      if (i === 0 || slots[i - 1].type !== "highlight") {
        // começar wrapper
        const wrapper = document.createElement("span");
        wrapper.className = "highlight-block";
        // inserir as palavras do bloco contínuo em sequência
        let j = i;
        while (j < slots.length && slots[j].type === "highlight") {
          const span = document.createElement("span");
          span.className = "word highlight";
          span.textContent = slots[j].text;
          span.addEventListener("click", hideIntro);
          wrapper.appendChild(span);
          j++;
        }
        wordsGrid.appendChild(wrapper);
        // pular o índice até j-1, porque o for vai incrementar normalmente
        i = j - 1;
        continue;
      } else {
        // se já estamos dentro de um bloco (não alcançamos aqui por causa do continue acima)
        continue;
      }
    } else {
      // dim word normal
      const span = document.createElement("span");
      span.className = "word dim";
      span.textContent = slot.text;

      // alterna overflow classes para criar sensação de corte
      if (overflowCounter % 30 < 15) {
        span.classList.add("overflow-left");
      } else {
        span.classList.add("overflow-right");
      }
      overflowCounter++;

      // Eventos
      span.addEventListener("mouseenter", function () {
        this.classList.add("active");
      });

      span.addEventListener(
        "touchstart",
        function (e) {
          e.preventDefault();
          e.stopPropagation();
          isTouching = true;
          activateWord(this);
        },
        { passive: false }
      );

      span.addEventListener(
        "touchmove",
        function (e) {
          e.preventDefault();
          e.stopPropagation();

          if (isTouching) {
            const touch = e.touches[0];
            const elementUnderFinger = document.elementFromPoint(
              touch.clientX,
              touch.clientY
            );
            activateWord(elementUnderFinger);
          }
        },
        { passive: false }
      );

      span.addEventListener(
        "touchend",
        function (e) {
          e.preventDefault();
          e.stopPropagation();
          isTouching = false;
        },
        { passive: false }
      );

      wordsGrid.appendChild(span);
    }
  }
}

// Atualiza traduções da página
function updateTranslations(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Troca idioma
function switchLanguage(lang) {
  currentLang = lang;

  // Atualiza seletor visual
  langOptions.forEach((option) => {
    option.classList.toggle("active", option.dataset.lang === lang);
  });

  // Atualiza HTML lang
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  // Regenera palavras
  generateWords(lang);

  // Atualiza traduções do conteúdo
  updateTranslations(lang);
}

// Remove a intro
function hideIntro() {
  intro.classList.add("fade-out");
  document.body.classList.add("intro-hidden");

  setTimeout(() => {
    intro.remove();
  }, 800);
}

// Event listeners para troca de idioma
langOptions.forEach((option) => {
  option.addEventListener("click", () => {
    switchLanguage(option.dataset.lang);
  });
});

// Eventos gerais
document.addEventListener("keydown", hideIntro, { once: true });

// Listener global para touchend
document.addEventListener("touchend", function () {
  isTouching = false;
});

// Regenera palavras ao redimensionar a janela
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    generateWords(currentLang);
  }, 250);
});

// Inicializa
currentLang = detectLanguage();
switchLanguage(currentLang);

// Auto-hide após 10s
setTimeout(hideIntro, 10000);
