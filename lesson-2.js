function Employee(firstName){
    this.firstName = firstName;
    this.sayHello = function(name){
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

function Manager(firstName, lastName){
    this.lastName = lastName;
    Employee.call(this, firstName);
}

const raka = new Manager("Raka", "Banget");

console.log(raka);