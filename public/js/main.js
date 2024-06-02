const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav_menu");

navTriggerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("nav-is-open");
})

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
            centeredSlides: true
        },
        768: {
            slidesPerView: 2,
            centeredSlides: true
        },
        960: {
            slidesPerView: 3
        }
    }
});

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 500
});

sr.reveal('.hero__text', {origin: 'top'});
sr.reveal('.steps__step', {distance: '100px', interval: 100});

sr.reveal('.about__text', {origin: 'left'});
sr.reveal('.about__img', {origin: 'right', delay: 200});

sr.reveal('.testimonial__bg', {delay: 200});
sr.reveal('.testimonial__title');
sr.reveal('.testimonial__slider', {delay: 300});

sr.reveal('.brands__img', {delay: 200, distance: '100px', interval: 100});

sr.reveal('.work__title');
sr.reveal('.work__subtitle', {delay: 300});
sr.reveal('.work__grid', {delay: 400});

sr.reveal('.stats');
sr.reveal('.stats__item', {
    distance: '100px',
    interval: 100
});

sr.reveal('.news__title');
sr.reveal('.news__subtitle', {delay: 300});
sr.reveal('.news__item', {
    distance: '100px',
    interval: 100,
    delay: 400
});

sr.reveal('.contact__container');
sr.reveal('.contact__text');

sr.reveal('.footer__item', {
    distance: '100px',
    interval: 100
});
