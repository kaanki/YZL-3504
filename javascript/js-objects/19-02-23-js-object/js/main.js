let myCar = { 
    color:"red",
    weight:"1000kg",
    brand:"bmw",
    hasSunroof:true,
}

// accessing object key's value ( dot notation )
console.log( myCar.color);
console.log( myCar.brand );


// accessing object key's value ( square bracket notation )
console.log( myCar["color"] );

console.log( myCar["brand"]);


let myHouse = {
    paintColor:"black",
    location:"Kadıköy",
    hasBalcony:true,
    roomCount:3,
    tatalArea:"100metersquare",
    sections:["kitchen", "bedroom", "bathroom", "living room", "dining room"],
}

console.log(myHouse.sections[0])

let user = {
    firstName:"Deneme",
    lastName:"Test",
    hasRegistered:false,
    gender:"male",
    age:34,
    loginInfo:{ password:"1234", id:12324434 },
    subscriptionType:"Monthly",
}

console.log( user.loginInfo["password"]);


let superHero = {
    alias:"Spider Man",
    skillSet:["net shooter", "climbing walls"],
    sayAlias:function(){ 
        console.log("I am the spider man");
    }
}


superHero.sayAlias();


let motorbike = {
    //object property
    brand:"Harley Davidson",
    //object property
    maxSpeed:"250km/h",
    //object method
    break:function(){  
         console.log("Break"); 
  },
    //object method
    accelerate:function(){  
        console.log("Accelerate");  
     },
}


console.log( motorbike.brand );

motorbike.break();





















