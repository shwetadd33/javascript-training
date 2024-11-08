let js = 'amazing';
console.log(40 + 9 - 10);

console.log('Jonas');
console.log(23);

// Declare variable
let firstName = "Jonas";
console.log(firstName);

let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof (jsIsFun));
console.log(typeof (firstName));

let year;
console.log(year);

// 

let age = 20;
age = 21;

const birthYear = 1993;   // const are immutable & can not be empty
// birthYear = 1994   Not allowed

var job = "Programmmer";    // var is a legacy keyword to initialize a variable
job = "teacher";             // just know that "let" is block scoped and "var" is function scoped.
console.log(firstName, job);


const isFullAge = age >= 18;
console.log(isFullAge);


// Concept: Type conversion in JS

const inputYear = '1998';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23) + inputYear);

// Concept: Type coercion - JS converts type of a variable implicitly/automatically behind the scene
console.log('I am ' + 23 + ' Years old') //here 23 will converted to string 
console.log('23' - '10' - 3);   // here 23 and 10 converted to Number (it detects the context of the instruction)
console.log('23' + '10' + 3);   // here 23 and 10 are considered string


