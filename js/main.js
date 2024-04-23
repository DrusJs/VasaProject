if (document.querySelector('.faq__button')) {
    document.querySelectorAll('.faq__button').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.currentTarget.parentElement.classList.toggle('active')
        })
    })
}


let pageUpButton = document.querySelector('.page-up__button')
if (pageUpButton) {
    pageUpButton.addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    })
}
window.addEventListener('scroll', () => {
    console.log()
    if (+window.scrollY >= 600) {
        pageUpButton.classList.remove('hide')
    } else {
        pageUpButton.classList.add('hide')
    }
})

if (document.querySelector('.burger-button')) {
    document.querySelector('.burger-button').addEventListener('click', (e) => {
        document.querySelector('.nav').classList.toggle('active')
        e.currentTarget.classList.toggle('active')
        document.body.classList.toggle('scroll-hidden')
    })
}

if (document.querySelector('.header__link')) {
    document.querySelectorAll('.header__link').forEach((link) => {
        link.addEventListener('click', () => {
            document.querySelector('.burger-button').classList.remove('active')
            document.querySelector('.nav').classList.remove('active')
            document.body.classList.remove('scroll-hidden')
        })
    })
}