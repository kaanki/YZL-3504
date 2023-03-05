// function statements

function myFirstFunction() {
    console.log("Hello Function");
}

function sayHello(name, surname) {
    console.log("merhaba " + name + " " + surname);
}


function sum(first, second) {
    const result = first + second;
    console.log(result);
}

sayHello("kaan", "keles");
sum(2, 3)
sum(3, 3)
sum("2", "3")

function wrapper(param, element) {
    return "<" + element + ">" + param + "</" + element + ">";
}

console.log(typeof typeof(3));

function Subtract(a,b){
    let result
    if(typeof(a) === "number" && typeof(b) === "number" ){
        result = a - b;    
    }
    else{
        result = "gönderilen değişkenler Number olmalıdır.";
    }
    return result;
}

console.log(Subtract(7,5));