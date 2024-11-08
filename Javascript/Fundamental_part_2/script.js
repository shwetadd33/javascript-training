// We will write code in strict mode now . Strict mode allows us to write code in more secure that means without accidental errors and bugs.
// To activate strict mode you only have to write following line
"use strict";

function logger() {
  console.log("Hello world");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const juice = fruitProcessor(3, 5);
console.log(juice);

function calcAge1(birthyear) {
  return 2024 - birthyear;
}

const age = calcAge1(1993);
console.log(`age is ${age}`);

// We can declare a function without any function name and this is function expression
const calcAge2 = function (birthyear) {
  return 2024 - birthyear;
};

const age2 = calcAge2(1995);
console.log(`age is ****** ${age2}`);

// Concept: Function calling another function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log("We are inside fruitProcessor2 function.");
  console.log(`cut apples in ${applePieces} and orages in ${orangePieces}`);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor2(2, 3));

// Concept : Array Data Structure

// Define array
const friend = ["abc", "xyz", "pqr"];
console.log(friend);
console.log(friend[0]);
console.log(friend.length);

friend[1] = "shweta"; // even though the friend is declared as const still we can change the values of an array in JS. Just we can not change th whole array like friend = ["ABC","TUV"]
console.log(friend[1]);

const me = ["Shweta", "Deshmukh", 23, "Engineer", friend];
console.log(me);

// Concept: Array Methods
friend.push("Jay");
//friend.reduce("abc");
console.log(friend);

// add elements in the start of the array
friend.unshift("John");
// To delete last elements from array
friend.pop();
console.log(friend);
// to delete first element
friend.shift();
console.log(friend);

console.log(friend.indexOf("shweta"));
console.log(friend.includes("shweta")); // check if element is present or not
console.log();
