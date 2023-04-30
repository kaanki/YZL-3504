//DRY 

/*
const btnEl1 = document.querySelector("button:first-child");

console.log( btnEl1 );

const btnEl2 = document.querySelector("button:nth-child(2)");

btnEl2.addEventListener("click", handleBtn2Click);

function handleBtn2Click(e){
    const target = e.target;
    const index = target.dataset.index;

    alert(index);
}

const btnEl3 = document.querySelector("button:nth-child(3)");

console.log( btnEl3 );


btnEl1.addEventListener("click", handleBtn1Click);

function handleBtn1Click(e){
    const target = e.target;
    const index = target.dataset.index;
    
    const color = target.dataset.color;
    const age = target.dataset.age;
   
    alert("Ben " + index )
    
}


*/

/* Event Delegation */

const navEl = document.querySelector("nav");

navEl.addEventListener("click", handleBtnClick);

function handleBtnClick(e){
    const target =  e.target;
    const index = target.dataset.index;
    const currentlyActiveBtn = document.querySelector("nav button.active");


    if(currentlyActiveBtn){
        currentlyActiveBtn.classList.remove("active");
    }
    

    target.classList.add("active");

   
}