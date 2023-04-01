const parfumes = [ "Dior" , "Axe", "Dolce & Gabbana", "Glade" , "Abibas"] ;

/* array lenght property */

const parfumesLength = parfumes.length;

console.log (parfumesLength);

/* accesing array items */

console.log (parfumes[0], parfumes[parfumesLength - 1])


/* array destructuring */
/*
const parfume1 = parfumes[0];
const parfume2 = parfumes[1];
*/

const [parfume1 , parfume2 , ...rest] = parfumes;

console.log (parfume1 , parfume2 , rest)



/* spread operator */

const days = ["monday", "tuesday", "wednesday",]

const daysComplete = [...days , "thurday", "friday" , "saturday", "sunday"] 


console.log (daysComplete)



const mounts = ["january" , "february" , "march", "april",]

const mountsComlete = [ ...mounts , "june" , "july" ,"august", "september", "october", "november", "december"]

console.log (mountsComlete)

/* assignig new values */

parfumes [parfumesLength - 1 ] = "adidas"

parfumes [parfumesLength]= "Lacoste";



/* push , pop , shift , unshift */

const arr1 = [ "a", "b", "c", "d"];

arr1.push("e"); //dizi sonuna yeni elaman ekler ve orjinal diziyi dönüştürür.

arr1.pop (); // dizi sonunda eleman siler ve orjinal diziyi dönüştürür.

arr1.unshift("x", "y", "z");//dizi başlangıcına eleman ekler ve orjinal diziyi dönüştürür.

arr1.shift(); //dizi başlangıcından eleman siler ve orjinal diziyi dönüştürür.



//----SORU----//

//bir dizi ve bir yeni eleman kabul eden bir fonksiyon yazınız. Bu fonksiyon yeni elemanı verdiğimiz dizinin son elemanı olarak eklesin ve dizinin yeni uzunluğunu döndürsün. Push metodu kullanmayın spread operator kullanın.

function addLastItem (arr , newItem) {

   const newArr =[...arr , newItem];

   const lenght = newArr. length;
   
   return [newArr , lenght ];
}
console.log(  addLastItem ([1,2,3] , 24)) ;


/*----forEach method----- */

const movieStars =["Josan Statham", "Dwayne Johnson" , "Brad Pitt", "Kıvanç Tatlıtuğ", "Beren Saat"];

movieStars.forEach((movieStars, index)=> { console.log(movieStars , index)});

const popStars = ["Tarkan" , "Bengü", "Demet", "Gülşen"];

popStars.forEach((item, index, arr)=>{console.log(item, index, arr)})






const numbersArr = [1 , 5 , 7, 9, 21] ;

//dizinin içindeki itemları iki katı ile çarpıp diziyi dönüştür.

numbersArr.forEach ( (number, index, arr)=>{
   numbersArr[index] = number*2;

});
console.log (numbersArr);



const numberArr2 = [13,17,7,43];

function createDoubles(arr){
        
   const outputArr = [];

   arr.forEach (function(item,index){

      outputArr.push(item*2) ;
  

   }) 

   return outputArr ;
}
console.log (createDoubles(numberArr2))

