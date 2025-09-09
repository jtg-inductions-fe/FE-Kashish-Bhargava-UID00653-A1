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
