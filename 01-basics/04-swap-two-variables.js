// Question:
// Swap the values of two variables.

// Solution:
let a = 5;
let b = 10;
//swap values using destructuring assignment
// [a,b] = [b,a]; // Swap values using array destructuring
// Swap values using a temporary variable
let temp = a; // Store the value of a in a temporary variable
a = b; // Assign the value of b to a
b = temp; // Assign the value of temp (original a) to b
console.log("After swapping: a =", a, "b =", b); // After swapping: a = 10 b = 5