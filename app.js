const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const line = document.querySelector('.line');
const lineBefore = document.querySelector('.line', '::before');
const lineAfter = document.querySelector('.line', '::after');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('open')
    line.classList.toggle('open')
    lineBefore.classList.toggle('open')
    lineAfter.classList.toggle('open')
    links.forEach(link => {
        link.classList.toggle('fade');
    })
});

navlinks.addEventListener('click', () => {
    navlinks.classList.remove('open')
    line.classList.remove('open')
    lineBefore.classList.remove('open')
    lineAfter.classList.remove('open')
    links.forEach(link => {
        link.classList.remove('fade');
    })
})