// Primitive types
let team = "galatasaray"; // string type
let foundedAt = 1907; //number
let hasPet = true; //boolean
let hasCar = false;

//mutability
let myFriend1Age = 30;
let myFriend2Age = myFriend1Age;

// referenced types
let seasons = ["winter","fall","spring","summer"]; //array type
console.log(seasons);
console.log( team);
console.log(typeof foundedAt);
console.log(typeof hasPet);
console.log(typeof seasons);

seasons[1] = "my Fall"
team[0] = 'f';

console.log(seasons);
console.log(team);
console.log(myFriend2Age);
myFriend1Age = 34;


let array1= [1,2,3,4,5];

let array2 = array1;

array1[0]='x';
console.log(array2);

