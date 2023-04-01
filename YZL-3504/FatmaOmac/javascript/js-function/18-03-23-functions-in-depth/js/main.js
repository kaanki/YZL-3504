// Function statement

function sayHi(firstName){

    const output = `Selam ${firstName}`;
    return output;
}
const deneme =  sayHi("fatma");
console.log(deneme);

function testing() {

}

console.log(testing())

//-----parameter defaults-----


function greet (firstName, greetingWord="merhaba"){

    /* eğer karşılama cümlesi yazmazsak if ile de yapabiliriz yukarıdaki gibi direk de verebiliriz
  if (greetingWord===undefined) {
    greetingWord= "merhaba"
  }*/
    const output = `${firstName} ${greetingWord} , nasılsın `;
    return output;

}

const greetFatma = greet ("Fatma");
console.log (greetFatma);

/* pi sayısı alınmaz ise 3.14 olsun  */

function calculateCircumference (pi = 3.14 , r )
 {
    const circumference = 2 * pi * r ;
    return circumference;
}
const newCircumference = calculateCircumference(50);
console.log(newCircumference);

/* kdv oranını yollamazsa %18 den alsın yollarsa da yollanandan eklensin */

function calcTaxIncPrice (price, taxRate =0.18){

const res = price + price*taxRate ;
return res ;

}

console.log (calcTaxIncPrice(100))


//------Anonymous function expressions------

const addition = function (a,b) {
    return a + b ;
}

addition (3,5);



const btnEl =document.querySelector("button")

btnEl.addEventListener("click", function(){alert("hello")});



const boxEl =document.querySelector(".box")

boxEl.addEventListener ("click", function(){
    boxEl.textContent="merhaba"
})

//-----Arrow functions------

const subtract = (a,b) => {
    const res = a - b;
    return res;
}
console.log (subtract(8,2));

const subtract2 = (a,b) => a-b;

console.log (subtract2(102 , 2))



//alıştırma (return)

function calcTaxIncPrice (price, taxRate =0.18){

    const res = price + price*taxRate ;
    return res ;
    
    }

    const userFatmaBasketTotal = 1200;
    const userBurakBasketTotal=4200;
/*
    const messageBox = document.querySelector(".message");
    messageBox.textContent = `Sayın kullanıcımız almış olduğunuz ürünlerin KDV dahil toplam tutarı ${calcTaxIncPrice(userFatmaBasketTotal)} TL'dir.`
*/
   
     const messageBox = document.querySelector(".message");
    messageBox.textContent = ("Sayın kullanıcımız almış olduğunuz ürünlerin kdv dahil toplam tutarı" + " " + calcTaxIncPrice(userBurakBasketTotal)) + "TL'dir."



    const division = (a,b) => a / b ;
    