/*let myName: string = "Lily Howan"
let myAge: number = 19
let lovesCoding: boolean = true

console.log(myName)
console.log(myAge)
console.log(lovesCoding)

let myArray: string[] = ["Cat", "Dog"]
myArray.push("Seal")
console.log(myArray)

enum Days {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

let dayOfWeek: Days = Days.FRIDAY*/

interface Person {
    name: string,
    age: number
}

function sayHello(particularPerson: Person) {
    console.log("Hello, " + particularPerson.name + ".")
}

let me: Person = {
    name: "Lily",
    age: 19
}

sayHello(me)