// function statement

function sayHi( firstName ){

    const output =  `Selam ${firstName}`;
    return output;
   
}

const deneme = sayHi("Burak");


function testing(){

}


console.log( testing() );


/*--- parameter defaults ---*/

function greet( firstName, greetingWord="Merhaba" ){

   

    const output = `${firstName} ${greetingWord}, nasılsın`;

    return output;
}


const greetBurak = greet("Arda", "Selams");

console.log( greetBurak );


function calcTaxIncPrice(price, taxRate=0.18){

    const res = price + price * taxRate;

    return res;

}

calcTaxIncPrice(100 );


/* --- Anonymous function expressions --- */

const addition = function(a, b){  
    return a + b; 
 }


 addition( 3, 5);


 const btnEl = document.querySelector("button");

 btnEl.addEventListener("click", function(e){ alert("hello")} );

 const boxEl = document.querySelector(".box");

 boxEl.addEventListener("click", function(e){  

    boxEl.textContent = "Merhaba "

  })




 /* ---  Arrow functions --- */

 const subtract = (a, b)=>{  
     const res = a - b;
    return res;

}

console.log( subtract( 8, 2) );


const subtract2 = (a,b) => a-b;

console.log( subtract2(102, 2) );



/* function statement */
function test(parameter1, parameter2=33){

    
}

test(32, 45);


/* Anonymous function expression */
const test2 = function(a, b=33){ return null;  }

test2( 12, 45);

/*  Arrow function expression */
const test3 = (a, b)=>{ return null;  }




function calcTaxIncPrice(price, taxRate=0.18){

    const res = price + price * taxRate;

    return res;

}

const userBurakBasketTotal = 1200;
const userFatmaBasketTotal = 2000;

const messageBox = document.querySelector(".message");

messageBox.textContent = `Sayın kullanıcımız almış olduğunuz ürünlerin kdv dahil toplam tutarı ${ calcTaxIncPrice(userBurakBasketTotal)  }Tl'dir. `;


messageBox.textContent = "Sayın kullanıcımız almış olduğunuz ürünlerin kdv dahil toplam tutarı " + calcTaxIncPrice(userFatmaBasketTotal) + "TL";



const division = (a, b)=> a / b;



















































