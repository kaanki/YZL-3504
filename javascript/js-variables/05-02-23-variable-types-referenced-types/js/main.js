//Primitive types ( immutable)
let team = 'fenerbahçe'; //string type
let foundedAt = 1907; //number type
let hasPet = true; // boolean type
let hasCar = false; //boolean type

let age = 11;

let myFriend1Age = 30

let myFriend2Age = myFriend1Age;

myFriend1Age = 34;

console.log(myFriend2Age)



console.log( typeof team, typeof hasPet, typeof foundedAt, '*****' );


team[0] = "g"
console.log( team[0])



// referenced types ( mutable )
let seasons = [ 'winter', 'fall', 'spring', 'summer' ]; //array
seasons[1] = "my Fall"

console.log(  seasons )


let array1 = [1, 2, 3, 4, 5];

let array2 = array1;

array1[0] = 'x';

console.log(array2)


