//bunları dizide tutmak için array içinde arrayde tutmamız gerekecek ve renk marka gibi özellikleri belirtemeyebiliriz(kullanılır ama tercih edilmez)

//süslü paarantez obje üretir, fonsiyonları ve özellikleri vardır
let myCar = {
    color:"red", 
    weight :"1000kg",
    brand:"bmw",
    hasSunroof:true, 

}

 //accessing object key's value - nokta ile içeriye giriyoruz (dot notation)
console.log (myCar.color); 
console.log (myCar.brand);

 //accessing object key's value - köşeli parantez ile içeriye gireriz (square bracket notation)
 console.log (myCar["color"]);
 console.log(myCar["brand"]);

 let myHouse = {
    roomCount:4 ,
    lacotion: "Kadıköy",
    hasBalcony : true ,
    buildingAge: 10 ,
    totalArea :"100metersquare",
    sections: ["kitchen", "bedroom", "bathroom", "living room", "dining room" ],

 }

 console.log (myHouse.sections[2]);


 let user =  {
    firstName :"deneme",
    lastName : "test",
    hasRegisted: false,
    gender:"male",
    age:34,
    loginInfo :{password :"1234" , id :1234545},
    subscriptionType :"Monthly"
 }

 console.log (user.loginInfo.password);
 console.log (user.loginInfo["id"]);




 let superHero  = {
    alias : "Spiderman" ,
    skillSet : ["net shooter", "climbing walls"],
    sayAlias: function (){
        console.log ("I am the Spiderman")
    }
 }

 superHero.sayAlias ();


 let motorbike = {
    //object property
    brand:"Harley Davidson", 
    maxSpeed : "250km/h",

    //object method
    break : function (){    
        console.log ("break");
    },
    accelerate: function(){
        console.log ("accelerate");
    },
    
 }

 console.log (motorbike.brand); //propertyleri çağırıken console.log ile
 motorbike.break(); // methodları bu şekilde çağırıyoruz

 
 