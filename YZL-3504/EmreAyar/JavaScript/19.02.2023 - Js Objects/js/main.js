let myCar = {
    color: "red",
    weight: "1000kg",
    brand: "bmw",
    hasSunroof: true,
}

//accessing object key's value ( dot notation )
console.log(myCar.color);
console.log(myCar.brand);

//accessing object key's value ( square bracket notation )
console.log(myCar["color"]);
console.log(myCar["brand"]);



let myHouse = {
    paintColor: "black",
    location: "kadıköy",
    hasBalcony: true,
    roomCount: 3,
    totalArea: "100metersquare",
    sections: ["kitchen", "bedroom", "bathroom", "living room", "dining room"],
}

console.log(myHouse.paintColor, myHouse.location, myHouse.roomCount, myHouse.sections[3]);

let user = {
    firstName: "Emre",
    lastName: "Ayar",
    hasRagistered: false,
    gender: "Male",
    age: 30,
    loginInfo: { password: "1234", id: "gutn" },
    subscriptionType: "Monthly",
}

console.log(user.loginInfo.id);


let superHero = {
    alias: "Spider man",
    skillSet: ["net shooter", "climbing walls"],
    sayAlias: function () {
        console.log("I am spider man");
    }
}

superHero.sayAlias();



let motorbike = {
    //object property
    brand: "Harley Davidson",
    //object property
    maxSpeed: "250km/h",
    //object moethod
    break: function () {
        console.log("Break");
    },
    //object method
    accelerate: function () {
        console.log("Accelerate");
    },
}

console.log( motorbike.brand);

motorbike.break();



