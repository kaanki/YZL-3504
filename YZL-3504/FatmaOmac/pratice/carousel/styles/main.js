/*const hamburger =document.querySelector(".hamburger");
const navMenü = document.querySelector(".nav-menü");

hamburger.addEventListener("click", () => {


    hamburger.classList.toggle ("active");
    navMenü.classList.toggle("active");
}




)*/
const carouselNavEl = document.querySelector(".carousel nav");
const carouselsliderEl=document.querySelector(".carousel .slider");


carouselNavEl.addEventListener("click", handleCarouselBtnClick);

function handleCarouselBtnClick(e){
    const target = e.target
    const btnIndex=target.dataset.index;
    const currentlyActiveBtn= document.querySelector("nav button.active");

    if (currentlyActiveBtn){
        currentlyActiveBtn.classList.remove("active");
        
    }

    target.classList.add("active");

    
    const moveX = Number(btnIndex) * -100;

    console.log (moveX)
    carouselsliderEl.style.marginLeft= moveX + "%"


}