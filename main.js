const togglebutton = document.querySelector('.navbar-togglebutton')
const menu = document.querySelector('.navbar-menu')
const icons = document.querySelector('.navbar-icons')

togglebutton.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active')
});

