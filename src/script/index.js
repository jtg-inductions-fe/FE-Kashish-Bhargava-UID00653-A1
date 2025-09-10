//sidebar functionality
const sidebar = document.getElementById('sidebar');
const hamburger = document.querySelector('.header__hamburger');
const closeSidebar = document.getElementById('closeSidebar');
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
closeSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
// const sidebar = document.getElementById('sidebar');
// const hamburger = document.querySelector('.header__hamburger');
// const closeSidebar = document.getElementById('closeSidebar');

// function toggleSidebar(force) {
//     if (!sidebar) return;
//     const next =
//         typeof force === 'boolean'
//             ? force
//             : !sidebar.classList.contains('active');
//     sidebar.classList.toggle('active', next);
//     if (hamburger) {
//         hamburger.setAttribute('aria-expanded', String(next));
//         hamburger.setAttribute('aria-controls', 'sidebar');
//     }
//     sidebar.setAttribute('aria-hidden', String(!next));
// }

// if (sidebar && hamburger && closeSidebar) {
//     hamburger.addEventListener('click', () => toggleSidebar());
//     closeSidebar.addEventListener('click', () => toggleSidebar(false));
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape') toggleSidebar(false);
//     });
// } else {
//     console.warn('Sidebar controls not found in DOM');
// }
