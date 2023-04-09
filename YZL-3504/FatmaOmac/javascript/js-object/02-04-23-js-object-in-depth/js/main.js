//keyed collection type 

const user1 = {
    alias:"Darkness", //key-value (property)
    hasPet : false , //key-value (property)
    hasCar : false , //key-value (property)
    age : 24 , //key-value (property)
    greet : function (){ console.log ("Hello Ben " + this.alias);} 
}

//accessing values

//dot notation 

console.log (user1.age, user1.alias) ;

user1.greet(); // user1 objesinin greet methodu

user1.hasCar = true ; //olan özellikleri değiştirebiliyoruz

user1.height = "190cm"; //yeni özellik ekleyebiliyoruz

console.log (user1) ;

//squareBracket notation 

console.log(user1["age"],user1["hasPet"]);

const car ={ brand:"bmw" , engine1:"200hp"};

console.log ( car["engine"+ 1]);

car ["brand"] = "tesla" ;
car ["hasSunroof"] = false ;

//-----destructuring     access + assign ----

const hero = { alias:"Hulk" , age:50, color: "green"};

const {alias , age , ...rest} = hero ;

console.log (alias , age , rest);

const item = { category :"Laptop" , price :"240000tl"} ;

/*
const myCategory = item.category;
const myLaptopPrice = item.price

*/
 const { category:myCategory, price:myLaptopPrice} = item ;


 //----spread operator----- (bir diziyi bozmadan ya da başka bir diziye kopyalamak için kullanılır ) 

 const book = { author : "Jack London" , name: "Beyaz Diş" , pageCount : 300}

 const book2 = {...book , coverIllustration:"Yiğit Özgür", pageCount:500};

 console.log (book2);



    

function test({name, id, age}) { 

    console.log (name, id, age);
}
const superUser = { name: "fatma " , id: 14 , age:24};

test(superUser);