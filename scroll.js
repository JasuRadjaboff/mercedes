document.addEventListener('scroll', () => {
    const navkar = document.querySelector('.navbar');
    const revealText = document.querySelector('.info');

    if (window.scrollY > 0) {
        navkar.classList.add('changedNav');
        revealText.classList.add('infActive')



    } else {
        navkar.classList.remove('changedNav');
        revealText.classList.remove('infActive')

    }
})