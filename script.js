const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

function showSection(sectionId) {
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'flex';
        } else {
            section.style.display = 'none';
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // stop scrolling

        const targetSection = link.dataset.section;
        showSection(targetSection);

        // active tab highlight
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Load Home by default
showSection('home');
navLinks[0].classList.add('active');
const heroVisual = document.querySelector('.hero-visual');
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;


const collapsibles = document.querySelectorAll('.collapsible-section');

collapsibles.forEach(section => {
    const toggle = section.querySelector('.section-toggle');

    toggle.addEventListener('click', () => {
        section.classList.toggle('open');
    });
});
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;

    heroBg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});