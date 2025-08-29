
// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const shown = nav.classList.toggle('show');
    toggle.setAttribute('aria-expanded', shown ? 'true' : 'false');
  });
}
