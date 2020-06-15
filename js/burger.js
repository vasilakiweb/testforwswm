const burger = document.querySelector ('.burger');
const burgerLines = document.querySelectorAll ('.burger__line');
const burgerMenu = document.querySelector ('.burger__menu');

burger.addEventListener ('click', ()=> {
    burger.classList.toggle ('burger--on');
    burgerMenu.classList.toggle ('burger__menu--on');
    closeButton.classList.toggle ('display-none');
});
