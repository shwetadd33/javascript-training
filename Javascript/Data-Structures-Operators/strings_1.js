'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);

console.log(airline.length);

// NOTE : Whenever method of string is called JavaScript
//converts that string to Object and string is treated as Objects

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

// Substring of String
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats in Airplane
  if (seat.slice(-1) == 'B' || seat.slice(-1) == 'E') {
    console.log('You got the middle seat :(');
  } else {
    console.log('You got lucky :)');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('12C');
checkMiddleSeat('22E');

// String is called the fromat looks like object
console.log(new String('jonas'));

console.log(typeof new String('jonas').slice(2));

// Simple string methods

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const passenger1 = 'joNas';
const passengerLower = passenger1.toLowerCase();
const PassengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(PassengerCorrect);

// Comparing email

const email = 'jonas@gmail.com';
const loginEmail = ' Jonas@Gmail.Com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimEmail = lowerEmail.trim();
console.log(trimEmail);

// OR

const noramlizedEmail = loginEmail.toLowerCase().trim();
console.log(noramlizedEmail);

console.log(email === noramlizedEmail);

// Replacing

const priceUS = '288,97$';
const priceINR = priceUS.replace('$', 'Rs').replace(',', '.');
console.log(priceINR);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!!!';

// replaces only first coccurance
console.log(announcement.replace('door', 'gate'));

// SO use replaceAll
console.log(announcement.replaceAll('door', 'gate'));

// Regular Expression
console.log(announcement.replace(/door/g, 'gate'));
//NOTE : g represents Global

// Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.startsWith('E'));
console.log(plane1.endsWith('o'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log(`Part of the new Airbus family name of flight is : ${plane1}`);
} else {
  console.log('Not a part of new Airbus family');
}

// Split : split allows to spilt string into array of various substring using divider string

console.log('a+very+nice+string'.split('+'));

let newName = ['Mr.', 'Jonas', 'David'].join();

console.log(newName);

newName = ['Mr.', 'Jonas', 'David'].join(' ');
console.log(newName);

const stringArray = 'a+very+nice+string'.split('+');
console.log(stringArray);
const upperString = [];

for (const n of stringArray) {
  upperString.push(n[0].toUpperCase() + n.slice(1));
}

console.log(upperString.join(' '));

// Padding

const msg = 'Go to gate 23!';
console.log(msg.padStart(25, '.'));
console.log(msg.padEnd(23, '.'));

// Repeat

const msg2 = 'Bad Weather.... all departures delayed....... \n';
console.log(msg2.repeat(5));
