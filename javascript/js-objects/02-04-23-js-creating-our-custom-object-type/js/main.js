//custom object type
function User(id, fullName, hasPet){
    this.id = id;
    this.fullName = fullName;
    this.hasPet = hasPet;
}

User.prototype.greet = function(){
    console.log( `Selam ben ${this.fullName}`)
}

const user1 = new User(0, "Burak Kuyucaklı", false);

user1.greet();

const user2 = new User(1, "Arda Özkanlı", false);

user2.greet();

//Syntactic Sugar
class Animal{
    constructor(id, name, power){
        this.id=id;
        this.name = name;
        this.power = power;
    }

    greet(){
        console.log(this.name)
    }

}

const animal1 = new Animal(1, "Tiger", 1000);
animal1.greet();