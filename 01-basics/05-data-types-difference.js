// Question:
// Explain the difference between JavaScript data types
// using examples for string, number, boolean, null,
// undefined, object, and array.

// Solution:

// 1. String
// Used to store text.
// Text must be inside single quotes, double quotes, or backticks.
const nameConst = "Alice"; // string
const city = "New York"; // string
const message = `Hello,${nameConst}! Welcome to ${city}.`;
console.log(message); // Hello,Alice! Welcome to New York.
console.log(`Type of name is ${typeof nameConst}`); 


// 2. Number
// Used for whole numbers and decimal numbers.
const age = 25;
const price = 19.99;
console.log(`Type of age is ${typeof age}`);
console.log(`Type of price is ${typeof price}`);

//3 Boolean 
const isStudent = true;
const isGraduated = false;
console.log(`Type of isStudent is ${typeof isStudent}`);
console.log(`Type of isGraduated is ${typeof isGraduated}`);

// 4. Null
// Represents the intentional absence of any object value.
const emptyValue = null;
console.log(`Type of emptyValue is ${typeof emptyValue}`); // object

// 5. Undefined
// A variable that has been declared but not assigned a value.
let undefinedValue;
console.log(`Type of undefinedValue is ${typeof undefinedValue}`); // undefined

// 6. Object
// Used to store collections of data and more complex entities.
const person = {
    name: "Bob",
    age: 30,
    isStudent: false
};
console.log(`Type of person is ${typeof person}`); // object
console.log(`Name of person is ${person.name}, Age is ${person.age}, Is Student? ${person.isStudent}`);


// 7. Array
// A special type of object used to store ordered collections.
const numbersArray = [1, 2, 3, 4, 5];
console.log(`Type of numbersArray is ${typeof numbersArray}`); // object
console.log(`Is numbersArray an array? ${Array.isArray(numbersArray)}`); // true   

//8 Funtion 

function add(a,b){
    return a+b;
}
console.log(`Type of add is ${typeof add}`); // function
console.log(`Result of add(2,3) is ${add(2,3)}`); // 5



