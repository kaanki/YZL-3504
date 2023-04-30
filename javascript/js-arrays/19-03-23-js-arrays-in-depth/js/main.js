const parfumes = ["Dior", "Axe", "Dolce & Gabbana", "Glade", "Abibas" ];

/* array length property */
const parfumesLength = parfumes.length;

console.log( parfumesLength );

/* ---- accessing array items ---- */
console.log( parfumes[0],  parfumes[parfumesLength - 1], "***");


/* --!!!  array destructuring --!!!! */
/*
const parfume1 = parfumes[0];
const parfume2 = parfumes[1];
*/
const [parfume1, parfume2, ...rest] = parfumes;

console.log( parfume1, parfume2, rest );


/* -- spread operator -- */
const days = ["monday", "tuesday", "wednesday", ];

const daysComplete = [ ...days, "thursday", "friday", "saturday", "sunday"];


console.log( days, daysComplete );




/* assigning new values  */
parfumes[parfumesLength - 1] = "Adidas";
parfumes[parfumesLength] = "Lacoste";


/* push, pop, shift, unshift methods */
const arr1 = ["a", "b", "c", "d"];

arr1.push("e" , "f", "g"); //dizi sonuna yeni eleman ekler ve orijinal diziyi dönüştürür.

arr1.pop(); //dizi sonundan  eleman siler ve orijinal diziyi dönüştürür.

arr1.unshift("x", "y", "z"); //dizi başlangıcına  eleman ekler ve orijinal diziyi dönüştürür.


arr1.shift();//dizi başlangıcından  eleman siler ve orijinal diziyi dönüştürür.



//bir dizi ve bir yeni eleman  (argüman ) kabul eden bir fonksiyon yazınız. Bu fonksiyon yeni elemanı verdiğimiz dizinin son elemanı olarak eklesin ve dizinin yeni uzunluğunu döndürsün. Push metodu kullanmayın spread operator kullanın.


// addItem( [1,2,3], 12)



function addLastItem(arr, newItem){
    const newArr = [ ...arr, newItem ];
    const length = newArr.length;

    return [newArr, length];
    

}

//console.log( addLastItem(  [1,2,3] , 24) );

const addLastItem2 = function(arr, newItem){
    const newArr = [ ...arr, newItem ];
    const length = newArr.length;

    return [newArr, length];
    

}

addLastItem2(  ["a", "b", "c"], "x");


const addLastItem3 = (arr, newItem)=>{ 
    const newArr = [ ...arr, newItem ];
    const length = newArr.length;

    return [newArr, length];
}

addLastItem3(  ["a", "b", "c"], "x");



/* --- forEach method --- */
const movieStars = ["Jason Statham", "Dwayne Johnson", "Brad Pitt", "Kıvanç Tatlıtuğ", "Anthony Hopkins", "Beren Saat"];

movieStars.forEach( (movieStar, index, arr)=>{  console.log(movieStar, index, arr)  } );



const popStars = ["Tarkan", "Bengü", "Demet", "Gülşen"];


popStars.forEach( (popStar, index, arr)=>{ console.log(popStar, index, arr) } );



const numbersArr = [ 1, 5, 7, 9, 21 ];




numbersArr.forEach(  (number, index)=>{ 
    
    numbersArr[index] = number * 2;


} );


const numbersArr2 = [13, 17, 7, 43];


function createDoubles(arr){

    const outputArr = [];

    arr.forEach( function(item, index){   


        outputArr.push( item * 2);

      } )


    return outputArr;


}

console.log( createDoubles( [4,7,8,0]  ) );




