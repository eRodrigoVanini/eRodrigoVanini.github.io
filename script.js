/* ========================= script.js ========================= */
/* Minimalist, conceptual, poetic — refined version */

// Elements
const intro = document.querySelector(".intro");
const wordsGrid = document.querySelector(".words-grid");
const langOptions = document.querySelectorAll(".lang-option");

let currentLang = "pt";
let isTouching = false;

// dimWords PT
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

// dimWords EN
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

// highlight words
const highlightWords = {
  pt: ["PORTFÓLIO", "2025", "RODRIGO", "VANINI", "ENTRAR"],
  en: ["PORTFOLIO", "2025", "RODRIGO", "VANINI", "ENTER"],
};

// translations (mantém as suas — removido por brevidade)
const translations = {};

// reduces density by 15% for cleaner minimalism
function calculateTotalWords() {
  const w = window.innerWidth;
  let base;
  if (w <= 375) base = 220;
  else if (w <= 767) base = 300;
  else if (w <= 1024) base = 370;
  else if (w <= 1279) base = 420;
  else if (w <= 1439) base = 500;
  else if (w <= 1919) base = 570;
  else base = 670;

  return Math.max(80, Math.floor(base * 0.85));
}

function detectLanguage() {
  const b = navigator.language || navigator.userLanguage;
  return b.toLowerCase().startsWith("pt") ? "pt" : "en";
}

function randItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function hideIntro(fast = false) {
  intro.classList.add("fade-out");
  document.body.classList.add("intro-hidden");
  setTimeout(() => intro.remove(), fast ? 350 : 500);
}

function generateWords(lang) {
  wordsGrid.innerHTML = "";
  const dim = lang === "pt" ? dimWordsPT : dimWordsEN;
  const highlights = highlightWords[lang].slice();
  const total = calculateTotalWords();

  const slots = new Array(total).fill(null).map(() => ({
    type: "dim",
    text: randItem(dim) + ".",
  }));

  const safeFraction = 0.45;
  const maxStart = Math.max(
    0,
    Math.floor((total - highlights.length) * safeFraction)
  );
  const insertionIndex = Math.floor(Math.random() * (maxStart + 1));

  for (let h = 0; h < highlights.length; h++) {
    const idx = insertionIndex + h;
    if (idx < slots.length)
      slots[idx] = { type: "highlight", text: highlights[h] + "." };
  }

  let overflowCounter = 0;

  for (let i = 0; i < slots.length; i++) {
    const s = slots[i];

    if (s.type === "highlight") {
      if (i === 0 || slots[i - 1].type !== "highlight") {
        const wrapper = document.createElement("span");
        wrapper.className = "highlight-block";

        const blockDelay = 0.32 + Math.random() * 0.18;

        let j = i;
        while (j < slots.length && slots[j].type === "highlight") {
          const w = document.createElement("span");
          w.className = "word highlight";
          w.textContent = slots[j].text;
          w.addEventListener("click", () => hideIntro(true));
          w.style.animation = `fadeIn 0.25s ease forwards`;
          w.style.animationDelay = blockDelay + (j - i) * 0.06 + "s";
          wrapper.appendChild(w);
          j++;
        }

        setTimeout(
          () => wrapper.classList.add("breathed"),
          Math.floor(blockDelay + 500)
        );

        wordsGrid.appendChild(wrapper);
        i = j - 1;
        continue;
      }
    } else {
      const span = document.createElement("span");
      span.className = "word dim";
      span.textContent = s.text;

      if (overflowCounter % 30 < 15) span.classList.add("overflow-left");
      else span.classList.add("overflow-right");
      overflowCounter++;

      const delay = Math.random() * 0.5;
      span.style.animation = `fadeIn 0.28s ease forwards`;
      span.style.animationDelay = delay + "s";

      span.addEventListener("mouseenter", () => span.classList.add("active"));
      span.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          isTouching = true;
          span.classList.add("active");
        },
        { passive: false }
      );
      span.addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault();
          if (isTouching) {
            const t = e.touches[0];
            const el = document.elementFromPoint(t.clientX, t.clientY);
            if (el && el.classList.contains("dim")) el.classList.add("active");
          }
        },
        { passive: false }
      );
      span.addEventListener("touchend", () => (isTouching = false), {
        passive: false,
      });

      wordsGrid.appendChild(span);
    }
  }
}

function updateTranslations(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key])
      el.textContent = translations[lang][key];
  });
}

function switchLanguage(lang) {
  currentLang = lang;
  langOptions.forEach((o) =>
    o.classList.toggle("active", o.dataset.lang === lang)
  );
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  generateWords(lang);
  updateTranslations(lang);
}

function onFirstScrollEnter() {
  hideIntro(true);
  window.removeEventListener("wheel", onFirstScrollEnter);
  window.removeEventListener("touchmove", onFirstScrollEnter);
}

langOptions.forEach((opt) =>
  opt.addEventListener("click", () => switchLanguage(opt.dataset.lang))
);
document.addEventListener("keydown", () => hideIntro(true), { once: true });

window.addEventListener("wheel", onFirstScrollEnter, { passive: true });
window.addEventListener("touchmove", onFirstScrollEnter, { passive: true });

document.addEventListener("touchend", () => (isTouching = false));

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => generateWords(currentLang), 300);
});

// ===============================
// INTRO ALWAYS SHOWS
// ===============================

currentLang = detectLanguage();
switchLanguage(currentLang);
setTimeout(() => hideIntro(), 4500);
