let season = "red";



if(season==="winter"){
    console.log("Jumper")
}else if(season ==="summer"){
    console.log("t-shirt")
}else if( season === "fall"){
    console.log("sweat shirt")
}else if( season === "spring"){
    console.log("hat");
}else{
    console.log("Invalid season detected!")
}

/* == (coersion) vs === (strict equality check) */

console.log(  1 == "1" )


let team = "Fb";

switch( team ){
    case "fb":
        console.log("Kanarya");
        break;
    case "gs":
        console.log("Aslan");
        break;
    case "bjk":
        console.log("Kartal");
        break;
    default:
        console.log("Team not found!")  
}


/* ---- and (&&), or ( || ) --- */

let firstName = "Burak"
let password = "12345"

if( firstName === "Burak" && password === "1234"){
    console.log('You are in!')
}else{
    console.log("Nop!")
}


let weatherCondition = "sunny";

if( weatherCondition === "rainy" || weatherCondition === "snowy" ){
    console.log("Take your umbrella!")
}


/* --- not (!), notEqual (!==) --- */

let brand = "samsung";

if( brand !== "iphone"){
    console.log("Go to android store")
}

/*
let framework = "React";

if(framework !== "Node"){
    console.log("This is a frontend framework");
}
*/


let isYoung = false;

console.log(isYoung, "---")

if(isYoung){
    console.log("Not retired")
}

if(!isYoung){
    console.log("Retired")
}

let hasPet = true;

if(hasPet){ 
    console.log("Hayvansever")
}

if(!hasPet){

}

/* falsy values: 0, false, -0, null, undefined, NaN  */
let myCarCount = 0;

if(myCarCount){
    console.log("You are rich")
}

let mySuperName = "";

if(mySuperName){
    console.log("You are super " + mySuperName)
}







