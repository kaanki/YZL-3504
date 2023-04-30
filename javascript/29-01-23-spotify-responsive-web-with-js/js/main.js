const btnHamburgerEl = document.querySelector(".btn-hamburger");
const wrapperHamburger = document.querySelector(".wrapper-hamburger-nav");

btnHamburgerEl.addEventListener("click", handleNavHamburgerToggle);


function handleNavHamburgerToggle(){
    wrapperHamburger.classList.toggle("on");
}