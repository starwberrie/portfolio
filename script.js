/* ═══════════════════════════════════════════════
   SCRIPT.JS — Portfolio Safaâ
═══════════════════════════════════════════════ */

/* ── 1. MACHINE À ÉCRIRE MULTILINGUE ── */
const greetings = [
    "Bonjour, je suis Safaâ",
    "Hello, I'm Safaâ",
    "Hola, soy Safaâ",
    "Привет, я Сафаа",
    "你好，我是 萨法",
    "أهلاً، أنا صفاء"
];

const rollingText = document.getElementById("rolling-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    if (!rollingText) return;
    const currentWord = greetings[wordIndex];

    if (isDeleting) {
        rollingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        rollingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % greetings.length;
        typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
}

type();

/* ── 2. NAVBAR — SCROLL EFFECT ── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* ── 3. BOUTON RETOUR EN HAUT ── */
const topBtn = document.getElementById('top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        topBtn.classList.add('visible');
    } else {
        topBtn.classList.remove('visible');
    }
});

/* ── 4. MENU BURGER MOBILE ── */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    // Anime les barres du burger
    const spans = burger.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
});

// Ferme le menu mobile en cliquant sur un lien
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const spans = burger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    });
});

/* ── 5. FADE-IN AU SCROLL (Intersection Observer) ── */
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Délai en cascade pour les groupes
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 80);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
});

fadeEls.forEach(el => observer.observe(el));

/* ── 6. ACTIVE NAV LINK AU SCROLL ── */
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinksAll.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${id}`) {
                    link.style.color = 'var(--accent)';
                }
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ── 7. FERMETURE MODALE AU CLIC EXTÉRIEUR ── */
// Géré via l'attribut onclick dans le HTML


L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution: '© Stadia Maps, © OpenStreetMap'
}).addTo(map);

