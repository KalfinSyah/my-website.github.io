const nav = document.querySelector('nav');
const hamburger = nav.firstElementChild.firstElementChild;

hamburger.addEventListener('click', function(){
    nav.classList.toggle('max-md:overflow-visible');
    nav.classList.toggle('max-md:h-fit');

});