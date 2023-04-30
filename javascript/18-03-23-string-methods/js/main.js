let sentence = "Bugün hava yağmurlu";

sentence =  "Bugün hava yağmurlu";




/* ---  length property --- */

let sentenceLength = sentence.length;

console.log( sentenceLength );

console.log(sentence[sentenceLength - 1 ] )

sentence[0] = "x"; //immutability

console.log(sentence )


/* --- template literals --- */

const weatherCondition = "yağmurlu";

const weatherSentence = `Bugün hava ${weatherCondition} ${ 3*500 }`;


const userFirstName ="Burak";
const userLastName = "Kuyucaklı";

const userBasketTotal = 12000;

const checkoutSentence = `Sayın ${userFirstName} ${userLastName} almış olduğunuz ürün  toplam fiyatı  ${userBasketTotal}tl'dir.`;

console.log( checkoutSentence );


/* --- toLowerCase(), toUpperCase() --- */

const myName = "BuRak";

const myNameAllLowerCase = myName.toLowerCase();

const myNameAllUpperCase = myName.toUpperCase();

console.log( myNameAllUpperCase );

/* --- trim() --- */

const productName = " Adidas ";

const trimmedProductName = productName.trim();

console.log( trimmedProductName );




/* --- slice() --- */
const greeting = "Selam dostum nasılsın?";

const slice1 = greeting.slice(0, 4 );

const slice2 = greeting.slice(13);

const slice3 = greeting.slice(-5, -1 );


/* --- replace(), replaceAll() --- */
const priceInTl = "300Tl";


const priceInDollars = priceInTl.replace("Tl", "$");

console.log( priceInDollars );

const basketTotalStr = "300Tl, 400Tl, 200Tl";

const basketTotalStrInDollars = basketTotalStr.replaceAll("Tl", "$");

console.log( basketTotalStrInDollars );



/* --- includes() --- */
const superHero = "The Dark Knight";

const hasDarkStr = superHero.includes("Dark");

console.log(hasDarkStr);

/* --- indexOf(), lastIndexOf() ---*/
const bookName = "Pride and Prejudice";

const prejudiceIndex = bookName.indexOf("Prejudice");

console.log(prejudiceIndex);

const malformedBookName = "Pride pride pride pride and and Prejudice";

const lastIndexPride = malformedBookName.lastIndexOf("pride");

console.log( lastIndexPride );


/* --- split() Creates an array from a string --- */

const seasonsStr = "Spring, Summer, Fall, Winter";

const arrFromSeasons = seasonsStr.split(", ");

console.log( arrFromSeasons );


// ---- RegEx


















