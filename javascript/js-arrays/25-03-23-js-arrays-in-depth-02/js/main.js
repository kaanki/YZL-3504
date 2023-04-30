const DATA_BASKET = [

    {title:"Faber kırmızı kalem", category:"kalem", price:75},
    {title:"Telefon Case", category:"Kutu", price:175},
    {title:"Hp Laptop", category:"Laptop", price:175},
    {title:"Telefon Case", category:"Kutu", price:175},
    {title:"Telefon Case", category:"Kutu", price:175},
    {title:"Rayban Güneş Gözlüğü", category:"Kutu", price:10000},

];

let basketTotal = 0;

const basketListEl = document.querySelector(".basket-list");

DATA_BASKET.forEach( (item)=>{

   //yeni li elemanı oluştur
   const liEl = document.createElement("li");

   //yeni li elemanının text içeriğini item objesinin title özelliği olarak ata
   liEl.textContent = item.title;

   //yeni li elemanını basket listesine append kullanarak ekle
   basketListEl.append(liEl);

  
   basketTotal = basketTotal + item.price;

} );



const msgEl = document.querySelector("p.msg");

msgEl.textContent = `Sayın kullanıcımız ${basketTotal} liralık ürün aldınız`;



/* --- Array filter method --- */
const fruits = ["elma", "muz", "portakal", "portakal", "portakal", "kivi"];


const filteredFruits = fruits.filter(  (item)=>{ 

    if(item === "portakal"){
        return true;
    }else{
        return false;
    }

 }  );

 


// +,  -, /, *, %

const numbersArr = [1, 4, 9, 12, 17 ]


/*
const oddNumbers = numbersArr.filter(  (item)=>{ 

    if(item % 2 === 1 ){

        return true;
    }

    return false;


  }  )

  */

  const oddNumbers = numbersArr.filter(  (number)=>number % 2 === 1  );



  const DATA_USERS = [ 
       {firstName:"Emre", lastName:"Ayar", gender:"Male"},  {firstName:"Fatih", lastName:"Bulutoglu", gender:"Male"},  {firstName:"Merve", lastName:"Merve", gender:"Female"},  {firstName:"Ayşe", lastName:"Ayşe", gender:"Female"}
    ];


  // [ "Bay Emre", "Bay Fatih", "Bayan Merve", ""  ]



const maleUsers =  DATA_USERS.filter(  filterMaleUsers  )
const maleUsersListEl = document.querySelector(".male-users-list");
 
function filterMaleUsers(user){

    if(user.gender === "Male"){
        return true;
    } 

    return false;

}



maleUsers.forEach( (maleUser)=>{

    const liEl = document.createElement("li");
    liEl.textContent = `Ad:${maleUser.firstName} \n Soyad:${maleUser.lastName}`;

    maleUsersListEl.append(liEl)


}  )



/* --- Array map method --- */

const numbers = [1, 3, 5, 7, 8, 15];

const doubles = numbers.map( (number)=>number * 2  );




const newTitlesArr = DATA_USERS.map(  (user)=>{

    if(user.gender.toLowerCase() === "male"){
        return `Bay ${user.firstName}`
    }
    
    return `Bayan ${user.firstName}`
    

} );


const allUserListEl = document.querySelector(".all-users")

newTitlesArr.forEach( (title)=>{

    const liEl = document.createElement("li");

    liEl.textContent = title;

    allUserListEl.append(liEl)


} )


/* --- Array reduce method --- */
const basket = [ 200, 300, 500, 600 ];

const basket2 = [
    {title:"iphone sx", price:7000},
    {title:"Faber kalem", price:25},
    {title:"Moleskin Ajanda", price:400}
]

const total = basket.reduce( (acc, number)=>{


    console.log(acc, number);
    return acc + number;

}, 0  );



const total2 = basket2.reduce( (acc, item)=>{ 

    return acc + item.price

}, 0  )

console.log(total2);




/* --- for...of  --- */

const seasons = ["winter", "summer", "fall", "spring"];

for( let season of seasons){
console.log(season);

}















































