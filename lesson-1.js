function Person(){
    this.firstName = "";
    this.lastName = "";
    this.sayHello = function(name){
        console.log(`Hello ${name}, my name is ${name}`);
    }
}

const eko = new Person();
eko.firstName = "Eko";
eko.lastName = "Kurniawan";
eko.sayHello("Joko");

console.log(eko);