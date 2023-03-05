// const btnEl1 = document.querySelector("button:first-child");

// console.log(btnEl1);

// const btnEl2 = document.querySelector("button:nth-child(2)");

// const btnEl3 = document.querySelector("button:nth-child(3)");

// btnEl1.addEventListener("click", handleBtn1Click);
// btnEl2.addEventListener("click", handleBtn2Click);
// btnEl3.addEventListener("click", handleBtn3Click);

// function handleBtn1Click(e) {
//     const target = e.target;
//     console.log(target.dataset.index);
//     console.log(target.dataset.color);
//     console.log(target.dataset.asdwqwe);
//     console.log(target.getAttribute("type"));
//     btnEl2.getAttribute("type");

//     alert("Ben" + target.dataset.index);
// };

// function handleBtn2Click(e) {
//     alert("Ben " + e.target.dataset.index);
// };

// function handleBtn3Click(e) {
//     alert("Ben " + e.target.dataset.index);
// };

// Event Delegetion 

const navEl = document.querySelector("nav");

navEl.addEventListener("click", handleBtnClick);

function handleBtnClick(e) {
    const target = e.target
    const currentlyActiveBtn = document.querySelector("nav button.active");

    if(currentlyActiveBtn){
        currentlyActiveBtn.classList.remove("active");
    }

    target.classList.add("active");

}