const sideMenuBtn = document.querySelector('.side-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const links = document.getElementById('links')

window.addEventListener('resize', () => {
    const { innerWidth: width } = window;
    width >= 600 ? links.classList.remove('nav-open'): null;
})

sideMenuBtn.addEventListener('click', () => {
    links.classList.add('nav-open')
    sideMenuBtn.classList.add('side-menu-btn-off')
})

closeMenuBtn.addEventListener('click', () => {
    links.classList.remove('nav-open')
    sideMenuBtn.classList.remove('side-menu-btn-off')
})
