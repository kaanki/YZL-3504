/* js ia a loosely typed language */
// conditianol-koşul
 
let season = "winter";

if( season == "winter") {
    console.log ("jumper")
}
else if (season=="summer") {
    console.log ("t-shirt")
}
else if (season=="fall") {
    console.log ("sweatshirt")
}
else if (season=="spring") {
    console.log ("hat")
}
else {
    console.log ("Invalid season detected!")
}

/* == (coersion )vs ===( strict equality check) */

console.log (1 === "1") // number değeri string değere eşitliyoruz iki tane eşittir true verir ama üç tane eşittir daha garanti olur ve onu eşitlemez o yüzden 3 tane eşittir kullanırız.


let team = "fb"

switch (team)  {
    case "fb":
        console.log ("kanarya");
        break;
    case "gs" :
        console.log ("aslan");
        break;
    case "bjk":
        console.log ("kartal");
        break;
    default:
        console.log ("Team not found!")    
}

/* --- and (&&), or (||) */

let firstname  = "fatma"
let password ="1234"

if (firstname === "fatma" && password==="1234" ) {
    console.log ("you are in!")
}
else {
    console.log ("nop!")
}

let weatherCondition = "rainy"

if (weatherCondition === "rainy" || weatherCondition === "snowy") {
    console.log ("Take your umberalla!")
}

// not (!), notEqual (!==) -> eşit değilse demek

let brand = "samsung";

if (brand !== "iphone") {
    console.log ("Go to android store")
}

let isYoung = false ;

if (isYoung) {
    console.log("not retired")
}

if (!isYoung){
    console.log("retired")
}

let hasPet= true ;

if (hasPet){
    console.log("hayvansever")
}
if(!hasPet) {
    console.log("değil")
}

/* falsy values : 0, false, -0, null, undefined, NaN */

let myCarCount = 0;

if (myCarCount) {
    console.log ("you are rich")
}

/* ----ternary operator---- */

const hasKey = true;

const hasAccess = hasKey ? "girebilirsin" : "giremezsin";