window.addEventListener('DOMContentLoaded', () => {
    
    scrollUp = document.querySelector('.absolute')
    scrollUp.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
    })
    new WOW().init();
})



