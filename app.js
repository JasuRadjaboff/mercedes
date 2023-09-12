const knopka = document.querySelector('.bar');
const sideBar = document.querySelector('.sideBar');
const closee = document.querySelector('.btn')
const backdrop = document.querySelector('.backdrop');
knopka.addEventListener('click', () => {
    sideBar.classList.add('active');
    backdrop.classList.add('bDblur')

})
closee.addEventListener('click', () => {
    sideBar.classList.remove('active')
    backdrop.classList.remove('bDblur')
})
