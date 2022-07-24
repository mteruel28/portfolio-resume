//Code to Display Drop Down SideBar Menu

const sidemenu = document.querySelector('#mobile-menu')
const sidemenuLinks =document.querySelector('.navbar__menu')

const sidemobileMenu =() => {
    sidemenu.classList.toggle('is-active')
    sidemenuLinks.classList.toggle('active')
}

sidemenu.addEventListener('click',sidemobileMenu);