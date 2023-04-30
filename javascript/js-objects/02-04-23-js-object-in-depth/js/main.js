//keyed collection type
const user1 = {
    alias:"Darkness", //key-value (property)
    hasPet:false, //key-value (property)
    hasCar:false, //key-value (property)
    age:24, //key-value (property)
    greet:function(){  console.log( "Hello " + this.alias ); }

}

//accessing values

// --- dot notation
console.log( user1.age, user1.alias );

user1.greet(); //user1 objesinin greet methodu

user1.hasCar = true; //modify

user1.height = "190cm";// add new property

console.log(user1);

// --- squareBracket notation
console.log( user1["age"], user1["hasCar"]);

const car = { brand:"Bmw", engine1:"200hp", engine2:"185hp" };
const num = 2;

console.log(  car["engine" + num] );

car["brand"] = "Tesla"; // modify
car["hasSunRoof"] = false; // add new property


// --- destructuring   access + assign --- //

const hero = {alias:"Hulk", age:50, color:"green"};

const { alias, age, ...rest } = hero;

console.log(alias, age, rest);

const item = { category:"Laptop", price:"24000tl" };

/*
const myCategory = item.category;
const myLaptopPrice = item.price;
*/

const {category:myCategory, price:myLaptopPrice} = item;


/* --- Spread operator --- */
const book = {author:"Jack London", name:"Beyaz diş", pageCount:300};

const book2 = {  ...book, coverIllustration:"Yiğit Özgür", pageCount:500 };

console.log(book2);

const popSong = { singer:"Serdar Ortaç", songTitle:"Dansöz" };

const popSondCloned = { ...popSong };


function test({name, id, age,}){
    console.log(name, id, age);
}

const superUser = { id:14, age:26, name:"Jack", height:120 };
test(superUser);









