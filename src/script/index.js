//sidebar functionality
const sidebar = document.getElementById('sidebar');
const hamburger = document.querySelector('.header__hamburger');
const closeSidebar = document.getElementById('closeSidebar');

const toggle = () => {
    if (!sidebar) return;
    sidebar.classList.toggle('active');
    // minimal a11y state sync
    document.body.classList.toggle('no-scroll');
    const open = sidebar.classList.contains('active');
    hamburger?.setAttribute('aria-expanded', String(open));
    sidebar?.setAttribute('aria-hidden', String(!open));
};

if (hamburger) hamburger.addEventListener('click', toggle);
if (closeSidebar) closeSidebar.addEventListener('click', toggle);
// allow ESC to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar?.classList.contains('active')) toggle();
});
