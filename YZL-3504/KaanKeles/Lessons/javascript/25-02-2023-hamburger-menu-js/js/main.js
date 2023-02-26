const btnHamburger = document.querySelector("#page-header .btn-hamburger");

btnHamburger.addEventListener("click",openLeftMenu);



function openLeftMenu(e) {
    const hamburgerNav =  document.querySelector(".wrapper-hamburger-nav");
    btnHamburger.classList.toggle("close");
    hamburgerNav.classList.toggle("on");
    
}
