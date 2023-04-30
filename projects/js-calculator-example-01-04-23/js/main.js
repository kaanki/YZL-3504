let operation = "add";

const frmEl = document.getElementById("frm-calculator");
const selectEl = document.getElementById("operations");

selectEl.addEventListener("change", handleOperationChange);

frmEl.addEventListener("submit", handleFrmSubmit);

//işlem tipi değiştiğinde çağırılacak
function handleOperationChange(e){
    //console.log(e.target.value)
    operation = e.target.value;
}


function handleFrmSubmit(e){
    e.preventDefault();
    let opRes;
    let a = getValue("numA");
    let b = getValue("numB");

    console.log(a, b)
   
    if(!a || !b ) {
        alert("Boş bırakmaınız");
        return false;
    }
   
    

    if( operation === "add"){
        opRes = add(a, b );
    }else if( operation === "subtract" ){
        opRes = subtract( a, b );
    }else if( operation === "divide" ){
        opRes = divide( a, b );
    }else if( operation === "multiply" ){
        opRes = multiply( a, b );
    }
    
   writeMessage(opRes);
}


function getValue(id){
    const el = document.getElementById(id);
    return parseInt(el.value);
}


function writeMessage( message ){

    const messageEl = document.querySelector(".message");

    messageEl.textContent = message;

}

function add(a, b){
    return a + b;
}

function divide(a, b){
    return a / b;
}

function multiply(a, b){
    return a * b;
}

function subtract(a, b){
    return a - b;
}

