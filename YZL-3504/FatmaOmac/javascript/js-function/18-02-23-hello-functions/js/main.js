console.log("hello :)")

/* function statements*/
/* kodları istenildiği zaman devreye sokman lazım koşmak eylemi gibi */
function myFirstFunc() {
    console.log("hello function")
}
myFirstFunc(); //invoking, calling a function

function sayHello(firstName, lastName) {
    console.log("merhaba" + " " + firstName + " " + lastName)
}
sayHello("fatma", "omaç");

function add(parametre1, parametre2) {
    const result = parametre1 + parametre2;
    console.log("sonuç" + " " + result)

}
add(2, 4)

function greet(firstName, lastName, greetingWord="Merhaba"){
    const result = greetingWord + "," + firstName + " " + lastName;
    console.log (result);
}
greet ("Fatma", "Omaç", "Selamlar")
greet("Can","Kartal")

// Returning value from a function (bir fonksiyondan değer döndürmek)
//bir fonksiyon içerisinde return ile değer döndürmedğimsek js undefined değeri döndürür

function test (){ // içini bos bırakı nca return yapıyor ve undefined olarak çıkıyor
       return "deneme"
}
console.log (test ())


function multiply (a,b){
const result = (a*b);
return result ; 
}
console.log (multiply(20,3))


function divide (a,b) {
    const result= (a/b)
    return result ;
}
console.log (divide (20,2))


function wrap (text) { 
    const result = "<h1>" + text + "</h1>"
    return result
}
console.log (wrap("hello"))



function wraper (tagName, text) {
const result = "<" + tagName + ">"+ text + "</"  + tagName + ">"
return result ;
}

const myTestP1 = wraper ("p", "hello I am p tag");
const myH1 = wraper ("h1", "weather is beatiful, today")
console.log (myTestP1, myH1)



function subtract (a,b) {
    let result;
    if  (typeof a ==="number"  && typeof b ==="number") {
      result= a-b;
    }
   
    else {
        result = false
    }
    return result;

}

console.log (subtract(10,3))

