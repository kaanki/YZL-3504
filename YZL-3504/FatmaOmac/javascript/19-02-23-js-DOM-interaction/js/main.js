const boxE1 = document.querySelector(".box");

boxE1.addEventListener("click", handleClick);

function handleClick(){
    console.log("I am the box!!!")
}




boxE1.addEventListener("mouseover", handleClick);

function handleClick(){
    console.log("I am the box!!!")
}



/*

const pE1=document.querySelector("p");
function handleColor(){
    pE1.style.color="red";
        }
     
pE1.addEventListener("click", handleColor);

*/




const pE1=document.querySelector("p");

function handleColor(){

    let pE1BgColor = pE1.style.backgroundColor;

    if (pE1BgColor==="blue") {
        pE1.style.backgroundColor = "red";
    }

    else {
        pE1.style.backgroundColor ="blue";
    }

}
     
pE1.addEventListener("click", handleColor);


