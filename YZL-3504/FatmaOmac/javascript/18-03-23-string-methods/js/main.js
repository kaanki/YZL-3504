/* 
----HATIRLATMA---
const myName = "Fatma"; // string

const age = 30; //number 

const hasCar = false ; //boolean

const price = null ; //null

let hero ; //undefined 

console.log(typeof hero)

const superHero = "batman";

//const da değiştiremeyiz

const seasons = ["winter", "summer"]; //array

const car = { 
    color:"red", 
    maxSpeed:"250mph",
    accelarate:function() { console.log ("Hızlanıyoruz.")}
}

car.accelarate(); */



//-----Length Property------
/*
let sentenceLenght = sentence.length;
console.log(sentenceLenght);
//son harfe bakmak için uzunluktan 1 çıkarırız
console.log(sentence[sentenceLenght-1])
//değişiklik yapmaya izin vermez
sentence[0]= "x"; //immutability

console.log (sentence);*/



//-----template literals-----

const weatherCondition = "yağmurlu";
//const weatherSentence = "bugün hava" + weatherCondition; // artı ile yapmak yerine 

const weatherSentence = `bugün hava ${weatherCondition}`;

const userFirstName ="Fatma" ;
const userLastName ="Omaç" ;
const userBasketTotal = 12000;
const checkoutSentence = `Sayın ${userFirstName} ${userLastName} almış olduğunuz ürün toplam fiyatı ${userBasketTotal} tl'dir`;

console.log (checkoutSentence)

let sentence ="Bugün hava yağmurlu";


//----toLowerCase(), toUpperCase()----

const myName = "Fatma";

const myNameAllLowerCase = myName.toLowerCase(); //tamamen küçük harfe çevirir.
const myNameAllUpperCase= myName.toUpperCase(); //tamamen büyük harfe çevirir.

console.log (myNameAllLowerCase)
console.log (myNameAllUpperCase)



//-----trim()----- (kırpmak)

const productName = "  Adidas  "; //başında ve sonunda boşluk var ve bunları kırmak zorunda kalabiliriz

const trimmedProductName = productName.trim() ;

console.log (trimmedProductName) ;





//-----slice()-----(dilim)

const greeting = "Selam dostum nasılsın ?";

const slice1 = greeting.slice(0, 4);
 
console.log(slice1);

const slice2 = greeting.slice(13);

console.log (slice2);

const slice3 = greeting.slice(-5, -1)

console.log (slice3);



//-----replace(), replaceAll()-----

const priceInTl = "300TL";

const priceInDollars = priceInTl.replace("TL" , "$");

console.log (priceInDollars);

const basketTotalStr = "300Tl , 400Tl , 500Tl";

const basketTotalStrInDollars = basketTotalStr.replaceAll("Tl" , "$")

console.log (basketTotalStrInDollars);


//-----includes()-------(boolean olarak döndürür)

const superHero = "The Dark Knight";

const hasDarkStr = superHero.includes("Dark");

console.log (hasDarkStr);


//-----indexOf(), lastIndexOf()---

const bookName = "Pride and Prejudice";

const prejudiceIndex = bookName.indexOf("Prejudice")

console.log (prejudiceIndex);

const malformedBookName = "Pride pride pride pride and and Prejudice";

const lastIndexPride =malformedBookName.lastIndexOf("pride");

console.log(lastIndexPride);


//------ split() Creates and array from a string ------

const seasonsStr= "Spring , Summer , Fall , Winter";

const arrFromSeasons = seasonsStr.split(", ");

console.log(arrFromSeasons);

//----RegEx
