'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const hours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object Literals
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at time ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delecious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// looping through the array using for-of oprator
//NOTE it is like writing a for look in python

for (const item of menu) console.log(item);

//for (const item of menu.entries()) {
//  console.log(item);
//  console.log(`${item[0] + 1}:${item[1]}`);
//}

console.log(menu.entries());
console.log([...menu.entries()]);

// To do the above commented same task we can write like this as well
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

// ------------ Enhanced Object Literals --------------

console.log(restaurant);
console.log(hours);

// ---------------- Loop over an array-------------

// -------------- Property Names------------------
const properties = Object.keys(hours);
console.log(properties.length);
let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

//---------- Property Values -------------
const values = Object.values(hours);
console.log(values);

const entries = Object.entries(hours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  //console.log(x);
  console.log(`On ${key} we open at ${open} and close ${close}`);
}
