
// Mobile menu toggle + basic enhancements
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const shown = nav.classList.toggle('show');
    toggle.setAttribute('aria-expanded', shown ? 'true' : 'false');
  });
}
// Anchor skip for main
document.addEventListener('keydown', (e)=>{
  if (e.key==='/' && (e.metaKey || e.ctrlKey)) {
    // future: focus site search
  }
});
