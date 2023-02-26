
const navEl = document.querySelector(".carousel nav");
navEl.addEventListener("click", handleBtnClick);

const sliderEl =document.querySelector(".carousel .slider");

function handleBtnClick(e) {
    const target = e.target;

    const currentlyActiveBtn = document.querySelector("nav button.active");

    if (currentlyActiveBtn) {
        currentlyActiveBtn.classList.remove("active");
    }

    target.classList.add("active");
    const moveX = Number(target.dataset.index) * -100;
    console.log(typeof moveX);
    sliderEl.style.marginLeft =  moveX + "%";
}