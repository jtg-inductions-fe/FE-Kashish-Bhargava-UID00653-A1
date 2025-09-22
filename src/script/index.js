import '../styles/scss/main.scss';

window.addEventListener('load', () => {
    document.body.classList.remove('preload');
});
import { initialzeSwipper } from './carousel.js';
initialzeSwipper();

//sidebar functionality
const sidebar = document.getElementById('sidebar');
const hamburger = document.querySelector('.header__hamburger');
const closeSidebar = document.getElementById('closeSidebar');
const mainContent = document.getElementById('main-content');
const header = document.querySelector('.header');

const toggle = () => {
    if (!sidebar) return;
    sidebar.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
    // minimal a11y state sync
    const open = sidebar.classList.contains('active');
    hamburger?.setAttribute('aria-expanded', String(open));
    sidebar?.setAttribute('aria-hidden', String(!open));
    //Focus trapping functionality
    if (open) {
        mainContent?.setAttribute('inert', '');
        header?.setAttribute('inert', '');
        const firstFocusable = sidebar.querySelector('button:not([disabled])');
        firstFocusable?.focus();
    } else {
        mainContent?.removeAttribute('inert');
        header?.removeAttribute('inert');
        hamburger?.focus();
    }
};

if (hamburger) hamburger.addEventListener('click', toggle);
if (closeSidebar) closeSidebar.addEventListener('click', toggle);
// Close on item selection
document
    .querySelectorAll('.sidebar__list a')
    .forEach((a) => a.addEventListener('click', () => toggle(false)));
// allow ESC to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar?.classList.contains('active')) toggle();
});

//Accordion functionality
const titles = document.querySelectorAll('.footer__title');
titles.forEach((title) => {
    title.addEventListener('click', () => {
        const expanded = title.getAttribute('aria-expanded') === true;
        title.setAttribute('aria-expanded', !expanded);
    });
});
