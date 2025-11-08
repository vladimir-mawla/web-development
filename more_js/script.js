
// Conditions

let grade = 130

if (grade < 0){
    console.error("too low")
} else if (grade > 100) {
    console.error("too high")
}

if (grade >= 90) {
    console.log("A")
} else if (grade >= 75) {
    console.log("B")
} else {
    console.log("C")
}

// Loops

for (let i = 1; i < 5; i++) {
    console.log('Step', i)
}

let i = 1
while (i <= 5) {
    console.log("While loop", i)
    i++
}



// Arrays, Functions, and Events

let tasks = ["Eat", "Code", "Sleep"]

console.log(tasks[2])

// Indexing starts at 0

tasks.push()  // Adds an item to the end of the array
tasks.pop() // removes the last item
tasks.splice(index, count) // Removes items starting at a specific position tasks.splice(1, 2)  index is included
// ["Eat", "Code", "Sleep", "Drive"] => tasks.length -> 4
// => ["Eat", "Drive"] => tasks.length -> 2
tasks.length // returns how many items are in the array


function add(a, b) {
    c = a + b
    return c
}

// add(1, 5) => 6
