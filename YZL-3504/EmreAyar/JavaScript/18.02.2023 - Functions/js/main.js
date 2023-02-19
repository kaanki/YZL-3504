console.log("Hello :)");

/*  function statements  */
function myFirstFunc() {
    console.log("Hello function!");
}

myFirstFunc(); // calling a function.



function sayHello(firstName, lastName) {
    console.log("Merhaba" + " " + firstName + " " + lastName)
}

sayHello("Burak", "Kuyucaklı");

sayHello("Can", "Kartal");




function add(a, b) {
    const result = a + b;
    console.log(result)
}

add(23, 532)



// default parameter
function greet(firstName, lastName, greetingWord = "Merhaba") {
    const result = greetingWord + ", " + firstName + " " + lastName;
    console.log(result)
}

greet("Burak", "Kuyucaklı", "Selamlar");
greet("Emre", "Ayar",);



// bir fonksiyondan değer döndürmek - returning value from a function.
// bir fonsiyon içerisinde return ile değer döndürmezseniz, js undefined değeri döndürür.

function test() {
    return "deneme";
}

console.log(test())


function multiply(a, b) {
    const result = a * b;
    return result;
}

console.log(multiply(20, 3))


function divide(a, b) {
    const result = a / b;
    return result;
}

console.log(divide(30, 3))


const mySuperResult = divide(30,3);


/* "hello", "<h1>hello</h1>" */

function wrap(text){
    const result = "<h1>" + text + "</h1>"
    return result
}

console.log(wrap("hello world"))


function wrapWithTag(tagName, text ){
      const result = "<" + tagName + ">" + text + "</" + tagName + ">";
      return result;
}

const myTestPEl = wrapWithTag("p", "Hello I am p tag");

const myH1El = wrapWithTag("h1", "Weather is beautiful");

console.log(myTestPEl, myH1El);


// subtract (32,48) -- subtract ("a", 2)

function subtract(a,b){
    let result;
    if( typeof a === "number" && typeof b === "number" ){
       result = a -b;
    }else{
        result = false;
    }

    return result;
}

console.log( subtract (18 , 12))