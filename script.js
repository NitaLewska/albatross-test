$(document).ready(function () {
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true,
        appendArrows: ".reviews__controls",
        appendDots: ".reviews__controls",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            }],
        infinite: false,
    });
});

const audioSigns = document.querySelectorAll(".prediction__audio-player__sign");
const audio = document.querySelector(".prediction__audio-player__content audio")
audioSigns.forEach(a => a.addEventListener("click", function () {
    audioSigns.forEach(b => b.classList.remove('active'))
    a.classList.add('active')
    audio.setAttribute('src', `https://astro7.ru/images/newsletter/mail/2023/temporary/retro-eclipse/${[...audioSigns].indexOf(a) + 1}.mp3`)
}))




