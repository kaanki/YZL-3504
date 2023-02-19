const boxEl = document.querySelector(".box");

boxEl.addEventListener("click", handleClick);

function handleClick() {
    console.log("I am the box!")
}


const pEl = document.querySelector("p");

function handleColor() {
    let pElBgColor = pEl.style.backgroundColor;

    if(pElBgColor === "blue"){
        pEl.style.backgroundColor = "red"
    }else{
        pEl.style.backgroundColor = "blue"
    }
}

pEl.addEventListener("click", handleColor);