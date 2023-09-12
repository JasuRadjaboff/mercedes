const knopka = document.querySelector('.bar');
const sideBar = document.querySelector('.sideBar');
const closee = document.querySelector('.btn')

knopka.addEventListener('click', () => {
    sideBar.classList.add('active')
})
closee.addEventListener('click', () => {
    sideBar.classList.remove('active')
})
