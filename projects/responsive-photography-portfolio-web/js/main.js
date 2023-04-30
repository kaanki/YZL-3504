/* 
1. html'deki toggle butonuna ulaş


2. html'deki nav-main elemanına ulaş


3.  html'deki toggle butonuna click olay dinleyicisi ekle


4. olay gerçekleştiğinde html'deki nav-main elemanına expanded class'ını ekle

*/


const btnToggleEl = document.querySelector(".btn-toggle");

const navMainEl = document.querySelector(".nav-main");

btnToggleEl.addEventListener("click", handleToggleBtnClick);


function handleToggleBtnClick(e){
    navMainEl.classList.toggle("expanded");

}
