
//   Asynchronous  
//   Object-Oriented Programming (OOP)
//   DOM and BOM


  
// console.log("First");
// console.log("Second");
// console.log("Third");
 

//   waits for one statement to finish before moving to the next. This behavior is called   synchronous execution  .

 

//   What is Asynchronous  ?

// In real applications, some tasks take time, such as:

//   Fetching data from an API
//   Downloading files
//   Reading data from a database
//   Waiting for user actions

// Instead of freezing the entire application while these tasks complete,   continues executing other code. This is called   asynchronous programming  .

 

//   Callbacks

// A callback is simply a function passed as an argument to another function so that it can be executed later.

  
// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function done() {
//     console.log("Task Completed");
// }

// greet("John", done);
 

// The callback function runs only after the first task has finished.

 

//   Callback Hell


// loginUser(() => {
//     getProfile(() => {
//         getPosts(() => {
//             console.log("Completed");
//         });
//     });
// });
 

// As more tasks are added, the code becomes deeply nested and difficult to read. This situation is known as   Callback Hell  .

 

//   Promises

// Promises provide a cleaner way to handle asynchronous operations.

// A Promise has three possible states:

//   Pending
//   Fulfilled (Resolved)
//   Rejected

  
// const promise = new Promise((resolve, reject) => {

//     let success = true;

//     if (success) {
//         resolve("Data Loaded");
//     } else {
//         reject("Error Occurred");
//     }

// });
 

// Handling the promise:

  
// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
 

 

//   Async and Await

// `async` and `await` make asynchronous code easier to read and write.

  
// function fetchData() {

//     return new Promise(resolve => {

//         setTimeout(() => {
//             resolve("Data Received");
//         }, 2000);

//     });

// }

// async function getData() {

//     let result = await fetchData();

//     console.log(result);

// }

// getData();
 

// Advantages:

//   Cleaner syntax
//   Better readability
//   Easier debugging

 

//   Error Handling with Try...Catch

  
// async function getData() {

//     try {

//         let result = await fetchData();

//         console.log(result);

//     } catch (error) {

//         console.log(error);

//     }

// }
 

//   What is OOP?

// Object-Oriented Programming is a programming style that organizes code using objects and classes.

// Benefits:

//   Code Reusability
//   Better Organization
//   Easier Maintenance
//   Scalability

 

//   Objects

// An object stores related information together.

  
// const student = {

//     name: "John",
//     age: 20,

//     study() {
//         console.log("Studying");
//     }

// };
 

 

//   Classes

// A class is a blueprint used to create objects.
// class Student {

//     constructor(name, age) {

//         this.name = name;
//         this.age = age;

//     }

//     display() {

//         console.log(this.name);

//     }

// }
 

// Creating an object:
// const s1 = new Student("John", 20);

// s1.display();

// The `this` keyword refers to the current object.
// class Student {

//     constructor(name) {

//         this.name = name;

//     }

// }
// Here, `this.name` represents the `name` property of the object being created.
//   Inheritance
// Inheritance allows one class to reuse the properties and methods of another class.


// class Animal {

//     eat() {
//         console.log("Eating");
//     }

// }

// class Dog extends Animal {

//     bark() {
//         console.log("Barking");
//     }

// }

// const dog = new Dog();

// dog.eat();
// dog.bark();
 

 

//   Method Overriding

// A child class can replace a method inherited from its parent class.

  
// class Animal {

//     sound() {
//         console.log("Animal Sound");
//     }

// }

// class Dog extends Animal {

//     sound() {
//         console.log("Bark");
//     }

// }
 

 

// DOM (Document Object Model)

//   What is DOM?

// The DOM is a tree-like representation of an HTML document.

// Using  , we can:

//   Select elements
//   Modify content
//   Change styles
//   Add new elements
//   Remove existing elements

 

//   Selecting Elements

// By ID:

  
// document.getElementById("title");
 

// By Class:


// document.getElementsByClassName("box");


// By Tag:


// document.getElementsByTagName("p");
 

// Modern methods:

  
// document.querySelector(".box");
// document.querySelectorAll(".box");
 

 

//   Changing Text

// <h1 id="title">Hello</h1>
 

 

  
// document.getElementById("title").innerText = "Welcome";
  
// document.getElementById("title").style.color = "red";
 

// Events are actions performed by the user.

// Common events include:

//   Click
//   Hover
//   Key Press
//   Input
//   Submit

 

//   Click Event

// <button id="btn">Click Me</button>
 


// document.getElementById("btn").addEventListener("click", () => {
//     alert("Button Clicked");
// });
 


//   Input Event
// input.addEventListener("input", () => {
//     console.log("Typing...");
// });
 //   BOM (Browser Object Model)
// The BOM allows   to interact with the browser itself rather than the webpage.
//   Alert
// window.alert("Hello");
 //Confirm

  
//confirm("Are you sure?");

//Prompt
  
// prompt("Enter your name");
   
// console.log(location.href);
 
//   Reload the Page  
// location.reload();
 


//   Browser History

  
// history.back();

// history.forward();
 

 

//   Practice Questions

// 1. Create a callback function that prints a message after 2 seconds.
// 2. Create a Promise that resolves if marks are greater than 40 and rejects otherwise.
// 3. Convert a Promise-based function into `async/await`.
// 4. Create a `Car` class with `brand` and `model` properties.
// 5. Create a `Vehicle` class and inherit a `Bike` class from it.
// 6. Create a `student` object with `name`, `age`, and `marks`.
// 7. Add a new property `city` to the object.
// 8. Update the student's marks.
// 9. Delete a property from the object.
// 10. Print all keys and values of the object.
// 11. Use object destructuring to extract values.
// 12. Copy an object using the spread operator.
// 13. Merge two objects using the spread operator.
// 14. Use template literals to display student details.
// 15. Create a button that changes the text of a heading when clicked.
// 16. Create an input field and display whatever the user types.
// 17. Change the background color of the page using  .
// 18. Create a counter button that increases a number every time it is clicked.

 

//   Summary

// Today we learned:

//   Asynchronous  

//     Callbacks
//     Promises
//     Async/Await

//   Object-Oriented Programming

//     Objects
//     Classes
//     `this`
//     Inheritance
//     Method Overriding

//   DOM and BOM

//     Selecting Elements
//     Modifying Elements
//     Events
//     Browser Interaction

// These concepts are fundamental for building interactive and modern web applications.
