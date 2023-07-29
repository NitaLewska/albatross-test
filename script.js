// $(document).ready(function () {
//     $('.slider').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,

//         dots: true,
//         variableWidth: true
//     });
// });

const audioSigns = document.querySelectorAll(".prediction__audio-player__sign");
const audio = document.querySelector(".prediction__audio-player__content audio")
audioSigns.forEach(a => a.addEventListener("click", function() {
    audioSigns.forEach(b => b.classList.remove('active'))
    a.classList.add('active')
    audio.setAttribute('src', `https://astro7.ru/images/newsletter/mail/2023/temporary/retro-eclipse/${[...audioSigns].indexOf(a)+1}.mp3`)
  }))


