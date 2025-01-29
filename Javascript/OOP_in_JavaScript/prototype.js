/*
Constructor function: we can use it to build and object using function.

regular function and constructor functions are same the only difference we call lateral by keyword "New"
And in JS the convention is constructor function always starts with Capital letter.

*/

'use strict';

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // What id we want to add methods? you can create methods like below.
  /*
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };*/
  // But you should not do this. You should not create methods inside constructor.
  // Coz with each object created these methods will have that many copies and it will degrade our program performance.
  // Instead make use of Prototype in JS.
};

//new Person('Jonas', '1991');
// For above command  -
// Here when new is called the following steps are performed at the backend.
// 1. New empty object "{}"" is created
// 2. functin is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

// So now when we set some properties in constructor function they are returned from the function.
const jonas = new Person('Jonas', '1991');
console.log(jonas);

const shweta = new Person('Shweta', '1993');
console.log(shweta);

// So in JS we can say the object is an instance of a constructor function. Here jonas and shweta is instanec of Person.
console.log(jonas instanceof Person);

// -----------Prototypes--------
console.log(Person.prototype);

// It's like creating a new property on Person constructor function name "prototype". And each object of this Cf can accces all the properties and methods defined on this Prototype property as well.
Person.prototype.calcAge = function () {
  console.log('Age is', 2037 - this.birthYear);
};

shweta.calcAge();

Person.prototype.species = 'Homo Sapiens';
console.log(shweta);
console.log(shweta.species);
console.log(jonas.species);

console.log(shweta.hasOwnProperty('firstName'));
console.log(shweta.hasOwnProperty('species'));

console.log(shweta.__proto__);
console.log(shweta.__proto__.__proto__);
console.log(shweta.__proto__.__proto__.__proto__);

const arr = [1, 2, 3, 1, 2];
console.log(arr.__proto__);
// Hence we can use __proto__ property to see all the methods related to a given object. Remember everything is object in Js even arrays.

// NOTE: Fun Fact: we can add new methods in build in objects like

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
console.log(Array.prototype);

const h1 = document.querySelector('h1');
console.dir(h1.__proto__.__proto__);

// -----------------Inheritance------------
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // THIS IS HOW WE CAN IMPLEMENT INHERITANCE
  this.course = course;
};

//Linking prototypes and not copying prototypes
Student.prototype = Object.create(Person.prototype); // Student Inheriting prototype of Person constructor function

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer');
console.log(mike);
mike.introduce();
mike.calcAge();
