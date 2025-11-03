console.log("Hello World!123")
// Variables: let, const, var

let age = 20 // can chnage later
const pi = 3.14 // constant, cannot change
// var name = "John" // old syntax

// Always prefer let and const
// Use const when values shouldn't change

// JS is case-sensitive
let firstName = "John"
let FirstName = "John"

// Data Types
let name = "John" // string
let Age = 20 // number
let online = true // Boolean
let items = [1, 2, 3]
let person = {name: "John", age: 20} // object

// Output

console.log("Hello")
alert("Are You sure you want to delete this user!")

// If Else

let grade = 85

if (grade >= 90) {
    console.log("A")
} else if (grade >= 60) {
    console.log("B")
} else {
    console.log("C")
}

// Loops
// For Loop
console.log("Entering for loop")
let i = 0
for (i; i <= 5; i++) {
    console.log(i)
}
// While Loop

do {
    console.log(i)
    i++
} while (i <= 5)

    
console.log("Entering while loop")
let count = 3
while (count > 0) {
    console.log(count)
    count-- // count = count -1
}


// Functions

function greet(user) {
    console.log("Hello " + user)
}

greet("John")

// Objects => group of related data & behavior

let user = {
    name: "John",
    age: 20,
    greet: function() {
        console.log("Hello, I'm " + this.name)
    }
}

user.greet()


// Classes

class Car {
    constructor(brand, color) {
        this.brand = brand
        this.color = color
        this.speed = 0
    }

    start() {
        console.log(this.brand, "started")
    }

    accelerate(amount) {
        this.speed += amount
        console.log(this.brand + " speed:", this.speed)
    } 

}

let car1 = new Car("BMW", "Black")
car1.start()
car1.accelerate(20)