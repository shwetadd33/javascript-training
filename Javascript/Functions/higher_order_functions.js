/*
First calss functions : functions are 1st citizen. that means functions are
simply values.
Functions are just another "type" of object.
so we can also store functions in variables or properties.

a. we can pass function as an argument to other functions.
b. we can retrun function from another functions.
 And this a & b is known as Higher-order functions.

Functions in JS are objects, and they have methods.

*/

const oneWord = function (string1) {
  return string1.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (string1) {
  const [first, ...others] = string1.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function : Passing the call back function fn to the function
const transformer = function (string1, fn) {
  console.log(`Original String : ${string1}`);
  console.log(`Transformed string : ${fn(string1)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('Hi');
};

// NOTE : JS uses call backs all the time.
// This is another example of call back function, and High order function
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// Advantage : Call back functions allows us to create abstraction.
// example : in above the transformer function does not know how it transformed the sstring,
// It does not know the details of function it is getting as arg "fn".
// We created a level of abstraction.

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} : ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steve');

// OR
greet('Hello')('Shweta');

// Using Arrow function :
const greet2 = greeting => name => console.log(`${greeting} : ${name}`);

greet2('Hi')('Shweta');
