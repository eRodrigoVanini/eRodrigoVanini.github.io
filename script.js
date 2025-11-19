// Elementos
const intro = document.querySelector('.intro');
const wordsGrid = document.querySelector('.words-grid');
const langOptions = document.querySelectorAll('.lang-option');

// Idioma atual
let currentLang = 'pt';

// Palavras do tema em PT-BR
const dimWordsPT = [
    'código', 'vida', 'resiliência', 'bits', 'coragem', 'pulsar', 'conexão',
    'futuro', 'altruísmo', 'bytes', 'esperança', 'algoritmo', 'empatia',
    'persistir', 'digital', 'humanidade', 'inovação', 'compaixão', 'sistemas',
    'força', 'evolução', 'dados', 'superação', 'rede', 'determinação',
    'interface', 'bondade', 'adaptação', 'nuvem', 'solidariedade', 'recomeçar',
    'servidor', 'generosidade', 'processar', 'vitalidade', 'transformar',
    'protocolo', 'conectar', 'binário', 'amor', 'persistência', 'hardware',
    'respirar', 'software', 'lutar', 'renascer', 'memória', 'doação', 'cloud',
    'api', 'cuidado', 'evoluir', 'pixel', 'debug', 'viver', 'compilar', 'função',
    'resistir'
];

// Palavras do tema em EN
const dimWordsEN = [
    'code', 'life', 'resilience', 'bits', 'courage', 'pulse', 'connection',
    'future', 'altruism', 'bytes', 'hope', 'algorithm', 'empathy',
    'persist', 'digital', 'humanity', 'innovation', 'compassion', 'systems',
    'strength', 'evolution', 'data', 'overcoming', 'network', 'determination',
    'interface', 'kindness', 'adaptation', 'cloud', 'solidarity', 'restart',
    'server', 'generosity', 'process', 'vitality', 'transform',
    'protocol', 'connect', 'binary', 'love', 'persistence', 'hardware',
    'breathe', 'software', 'fight', 'rebirth', 'memory', 'donation', 'cloud',
    'api', 'care', 'evolve', 'pixel', 'debug', 'live', 'compile', 'function',
    'resist'
];

// Palavras destacadas
const highlightWords = {
    pt: ['PORTFÓLIO', '2025', 'RODRIGO', 'VANINI', 'ENTRAR'],
    en: ['PORTFOLIO', '2025', 'RODRIGO', 'VANINI', 'ENTER']
};

// Detecta idioma do navegador
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

// Gera palavras aleatórias
function generateWords(lang) {
    wordsGrid.innerHTML = ''; // Limpa grid
    
    const dimWords = lang === 'pt' ? dimWordsPT : dimWordsEN;
    const highlights = highlightWords[lang];
    const totalWords = 150;
    const highlightPositions = [75, 76, 77, 78, 79];
    
    for (let i = 0; i < totalWords; i++) {
        const span = document.createElement('span');
        span.className = 'word';
        
        if (highlightPositions.includes(i)) {
            const highlightIndex = highlightPositions.indexOf(i);
            span.textContent = highlights[highlightIndex] + '.';
            span.classList.add('highlight');
            span.addEventListener('click', hideIntro);
        } else {
            const randomWord = dimWords[Math.floor(Math.random() * dimWords.length)];
            span.textContent = randomWord + '.';
            span.classList.add('dim');
            
            // Desktop: mouseenter
            span.addEventListener('mouseenter', function() {
                this.classList.add('active');
            });
            
            // Mobile: touchstart com toggle inteligente
            span.addEventListener('touchstart', function(e) {
                e.preventDefault();
                
                // Remove 'active' de todas as outras palavras
                document.querySelectorAll('.word.dim.active').forEach(word => {
                    if (word !== this) {
                        word.classList.remove('active');
                    }
                });
                
                // Toggle na palavra atual
                this.classList.toggle('active');
            }, { passive: false });
            
            // Fallback para click (funciona em ambos)
            span.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        }
        
        wordsGrid.appendChild(span);
    }
}

// Troca idioma
function switchLanguage(lang) {
    currentLang = lang;
    
    // Atualiza seletor visual
    langOptions.forEach(option => {
        option.classList.toggle('active', option.dataset.lang === lang);
    });
    
    // Atualiza HTML lang
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    
    // Regenera palavras
    generateWords(lang);
}

// Remove a intro
function hideIntro() {
    intro.classList.add('fade-out');
    document.body.classList.add('intro-hidden');
    
    setTimeout(() => {
        intro.remove();
    }, 800);
}

// Event listeners para troca de idioma
langOptions.forEach(option => {
    option.addEventListener('click', () => {
        switchLanguage(option.dataset.lang);
    });
});

// Eventos gerais
document.addEventListener('keydown', hideIntro, { once: true });
intro.addEventListener('touchstart', hideIntro, { once: true });

// Inicializa
currentLang = detectLanguage();
switchLanguage(currentLang);

// Auto-hide após 10s
setTimeout(hideIntro, 10000);