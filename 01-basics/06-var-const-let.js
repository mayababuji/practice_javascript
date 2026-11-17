// Question:
// Explain the difference between var, let, and const
// using examples for scope, reassignment, and redeclaration.

// Solution:

// 1. var
// - Function-scoped
// - Can be reassigned
// - Can be redeclared in the same scope
// - Avoid using var in modern JavaScript

function varExample() {
  var city = "Milton";

  if (true) {
    var city = "Toronto"; // Same variable is changed
    console.log("Inside if block:", city); // Toronto
  }

  console.log("Outside if block:", city); // Toronto
}

varExample();

// 2. let
// - Block-scoped
// - Can be reassigned
// - Cannot be redeclared in the same scope
// - Use let when a value needs to change

function letExample() {
  let score = 80;

  if (true) {
    let score = 90; // Different variable, limited to this block
    console.log("Inside if block:", score); // 90
  }
console.log("Outside if block before ressigning it to 85 :", score); // 80
  score = 85; // Allowed: let can be reassigned
  console.log("Outside if block:", score); // 85
}

letExample();

// 3. const
// - Block-scoped
// - Cannot be reassigned
// - Cannot be redeclared in the same scope
// - Use const by default for values that should not change

function constExample() {
  const country = "Canada";

  console.log("Country:", country); // Canada

  // Uncommenting the next line will cause an error:
  //country = "USA";
  // TypeError: Assignment to constant variable.
}

constExample();

// Important:
// const does NOT make an object or array completely unchangeable.
// It only prevents reassigning the variable itself.

const student = {
  name: "Maya",
  course: "QA Automation"
};

student.course = "JavaScript"; // Allowed
console.log("\nUpdated student object:");
console.log(student);

// This is NOT allowed because it reassigns the const variable:
// student = { name: "Maya", course: "JavaScript" };

const fruits = ["apple", "banana"];
fruits.push("mango"); // Allowed
console.log("\nUpdated fruits array:");
console.log(fruits);

// This is NOT allowed:
// fruits = ["orange", "grape"];