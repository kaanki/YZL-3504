//Primitive types
//mutasyona uğratıp değişiklikler yapamıyoruz.(immutable)
let team ="fenerbahçe"; //string type
let foundedAt = 1907; //number type
let hasPet = true; //boolean type
let hasCar= false;// boolean type

let age=11;
let myFriend1Age=30;
let myFriend2Age=myFriend1Age;
myFriend1Age=34;  // burda myfriend1age etkilenmez ve çıktısı yine 30 olur

console.log(typeof team, typeof  hasPet, typeof foundedAt);

//mutability 


//referenced types (mutable)
let seasons= ["winter", "fall", "spring","summer"]; //array(dizi) type

seasons[1]= "my fall"; //mutable-mutasyona uğratıp değişiklikler yapabiliyoruz

console.log (seasons);

let array1 = [1,2,3,4,5];

let array2 = array1;

array1[0] = "x";
 //burda mutasyona uğratınca değişir.

console.log(array2);