document.addEventListener('scroll', () => {
    const navkar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navkar.classList.add('changedNav');
        console.log('scrolled')
    } else {
        navkar.classList.remove('changedNav');
    }
})