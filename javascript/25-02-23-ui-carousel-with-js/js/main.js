/* Event Delegation */
const carouselNavEl = document.querySelector(".carousel nav");
const carouselSliderEl = document.querySelector(".carousel .slider")

carouselNavEl.addEventListener("click", handleCarouselBtnClick);


function handleCarouselBtnClick(e){

    const targetBtn  = e.target;
    const btnIndex = targetBtn.dataset.index;

    const moveX = Number(btnIndex) * -100;

    carouselSliderEl.style.marginLeft = moveX + "%";

}
