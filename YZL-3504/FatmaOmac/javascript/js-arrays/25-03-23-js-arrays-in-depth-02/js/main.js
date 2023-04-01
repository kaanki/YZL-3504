//data değiştikçe 

const DATA_BASKET = [ 

   { title : "Faber kırmızı kalem", category : "kalem", price:75},
   { title : "Telefon case", category : "kutu", price:175},
   {title : "Faber kırmızı kalem", category : "kalem", price:75},
   {title : "Faber kırmızı kalem", category : "kalem", price:75},
   {title : "Faber kırmızı kalem", category : "kalem", price:205},


]
let basketTotal = 0;
const basketListEl = document.querySelector(".basket-list");


DATA_BASKET.forEach((item)=> {

//yeni li elamanı oluştur
const liEl = document.createElement("li");

//yeni li elamanının text içeriğini item objesinin title özelliği olarak ata
liEl.textContent = item.title;

//yeni li elemanını basket listesine appedn et
basketListEl.append(liEl)

basketTotal = basketTotal + item.price;

});

const boxEl = document.querySelector(".box");

boxEl.textContent =`Sayın kullanıcımız almış olduğunuz ürün toplamı ${basketTotal} TL'dir.`



/*-------Array filter method------- */

const fruits = ["elma" , "muz", "portakal","portakal" , "portakal", "portakal", "kivi" ];

const filteredFruits= fruits.filter ( (item)=> { 

 if (item === "portakal") {
   return true ; 
 } else {
   return false ;
 }

})

console.log (filteredFruits);

// const filteredFruits = fruits.filter ( (item) => item==="portakal") ;

const numbersArr = [1, 4 , 9 , 12 , 17]

const filteredNumber = numbersArr.filter  ((item) => {
 if (item % 2 === 1) {
   return true ;
 }
 else {
   return false ;
 }

})
console.log (filteredNumber);




const DATA_USERS= [ 

   { firtsName : "Fatma", lastName : "Omaç", gender: "female"},
   { firtsName : "Dicle", lastName : "Sezer", gender: "female"},
   { firtsName : "Selim", lastName : "Algı", gender: "male"},
   { firtsName : "Ümran", lastName : "Omaç", gender: "female"},
   { firtsName : "Fatih", lastName : "Karakaş", gender: "male"},
  

]


const maleUsers = DATA_USERS.filter  ((item) => {
   if (item.gender === "male") {
     return true ;
   }
   else {
     return false ;
   }
  
  })
  /*

  console.log (maleUser);

  maleUsers.forEach((maleUsers)=> {
    const liEl = document.createElement("li");
    liEl.textContent = `Ad: ${maleUser.firtsName} \n soyad: ${maleUser.lastName}`;

    maleUsersListEl.append(liEl)
  })
*/

//------Array map method------

const numbers = [1 , 3 , 5 , 7 , 8 , 15 ];

const doubles = numbers.map ((number)=> number * 2 );

console.log (doubles , numbers);



/*
const newTitlesArr = DATA_USERS2.map ((user) => {
  if (item.gender === "male") {
   return     `Bay  ${user.firtsName}` 
   
 */

   const newTitlesArr = DATA_USERS.map ((user)=> {

if (user.gender === "male") {

  return `Bay ${user.firtsName}` 
} 
  return `Bayan ${user.firtsName}` 
   }) ;

   console.log (newTitlesArr)


   const usersListEl= document.querySelector(".user-list");
   
newTitlesArr.forEach((title)=> {

  const liEl = document.createElement("li");
  liEl.textContent = title;

  usersListEl.append(liEl)

  });

  //---- Array reduce method-----

  const basket = [ 200, 300 ,500, 600];

  const basket2 = [
    {title:"iphone sx" , price:7000},
    {title:"faber kalem", price:175},
    {title:"macbook pro", price:35000},
    {title:"ajanda" , price:180}
  ]

  const total = basket.reduce ((acc, item) => {

    console.log (acc ,item);
    return acc + item;
  } , 0);




  const total2 = basket2.reduce ((acc, item)=>{
      return acc + item.price
  


  } ,0)


  console.log (total);
  console.log (total2);


  /* -----for...of----- */

  const seasons = ["winter" , "summer", "fall", "spring"];
 // seasons içerisindeki seasonsları tek tek konsola yazdırmak için
 //sadece array da kullanılır
  for (let season of seasons){
    console.log (season);
  }