// Accordion
document.querySelectorAll('.time-content.expandable').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Reveal on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

// Mouse Glow
const mouseGlow = document.getElementById('mouse-glow');
let timeoutId;

document.addEventListener('mousemove', (e) => {
    mouseGlow.style.left = `${e.clientX}px`;
    mouseGlow.style.top = `${e.clientY}px`;
    document.body.classList.add('mouse-active');

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        document.body.classList.remove('mouse-active');
    }, 1000);
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    nav.style.padding = window.scrollY > 80 ? '0.8rem 0' : '1.2rem 0';
});