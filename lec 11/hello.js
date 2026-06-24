// conditions in java script 
// condition allowr our program to make decision  based on different situations. 
// // if-statment, else, else if.
// let age  = 10;
// if(age >18){
//     console.log("eligible for vote")
// }else if(age = 18){
//     console.log("Ok wait for a year")
// }else(age < 18){
//     console.log("minor")
// }

// Loops in javascript
// for(let i=1; i<=5;i++){
//     console.log(i);
// }
// // while loop- 
// let i = 1;
// while(i<=100){
//     console.log(i)
//     i++;
// }

// do..while loop
// let i = 1;
// do{
//     console.log(i)
//     i++;
// // }while(i<=99);




// Scope in JavaScript
// global scope
// let name = "john";
// function display(){
//     console.log(name);
// }
// display();

// local scope
// function display(){
//     let age = 20;
//     console.log(age); 
// }

// console.log(age);
// display();

// block scope
// if(true){
//     let city = "delhi"
//     console.log(city);
// }

// function- it is a resusable blocks of code that perform specific tasks.
// function greet(){
//     console.log("hello")
// }
// greet();

// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));
// higher order function
function greet(name) {
    return "Hello " + name;
}

function processUser(callback) {
    console.log(callback("John"));
}

processUser(greet);

// lamda(arrow) function
const add = (a,b) => a+b;
console.log(add(10,20));

// // closure
// A closure occurs when an inner function remembers and accesses variables from its outer function even after the outer function has finished executing.

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();

// array-
let numbers = [10,20,30,40];
console.log(numbers[0]);
numbers.push(50);
numbers.pop([3]);
numbers.unshift(5);
numbers.shift();

// objects
let student={
    name:"john",
    age:20,
    city:"delhi"
};
console.log(student);

let message = "JavaScript";

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// Check whether a number is positive, negative, or zero.
// Check whether a number is even or odd.
// Check whether a person is eligible to vote.
// Find the largest among two numbers.
// Find the largest among three numbers.
// Check whether a year is a leap year.
// Check whether a number is divisible by both 5 and 11.
// Assign grades based on marks.
// Check whether a character is a vowel or consonant.

// Reverse a number.
// Find the sum of digits of a number.
// Check whether a number is a palindrome.
// Check whether a number is an Armstrong number.
// Print the Fibonacci series up to n terms.
// Find the greatest common divisor (GCD) of two numbers.
// Print all prime numbers between 1 and 100.