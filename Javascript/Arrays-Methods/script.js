'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdraw ${Math.abs(movement)}`);
  }
}

// same with for each - uses a call back function
console.log('-------------Method : FOR EACH----------------');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1} : You withdraw ${Math.abs(movement)}`);
  }
});

// Another Example of FOR EACH

let arr1 = [1, 2, 3, 4, 5, 6];

arr1.forEach(function (element) {
  console.log(element);
});

// NOTE: continue and break statement do not work in FOR EACH loop. So you can not break out of the loop.

//--------With Map----------------
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log(currencies);
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// ------ IMP : Method MAP (This is different than the datatype MAP) -------------
// NOTE : remeber that map method returns new array
// Convert movements from euro to dollars

// example - 1

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (movement) {
  return movement * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

// example - 2
const movementsDescriptions = movements.map(function (mov, i) {
  return `Movement ${
    i + 1
  } : You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`;
});

console.log(movementsDescriptions);

// ------ IMP : Method FILTER - use a filter to choose an elements from org array to create a new array -------------

const deposits = movements.filter(function (mov) {
  return mov > 0; // checks for the condition to be true
});

console.log(deposits);

const withdrawals = movements.filter(function (mov) {
  return mov < 0; // checks for the condition to be true
});

console.log(withdrawals);

// ------ IMP : Method REDUCE - boil down all the array elements to the 1 single value -------------
// accumlator is like a snowball
// NOTE ; REDUCE takes 2 parameters
const balance = movements.reduce(function (accum, curr, i, arr) {
  return accum + curr;
}, 0);

console.log(balance);

const max = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(`The max value in movements is : ${max}`);

// IMP: Chaining of all the methods
// NOTE : Using arrow function for call back functions to the method
// NOTE: chaining can introduce performance issue if array size is large.
const totalDeopsitsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDeopsitsUSD);

const firstWindrawal = movements.find(mov => mov < 0); // unlike Filter method it will not return an array but the 1st element which satisfies the given condition.

console.log(`The first withdrawal is ${firstWindrawal}`);

console.log(accounts);
// Let us Use find on Obejects

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

console.log(movements);

// checks for Equality
console.log(movements.includes(-130));

// checks for Condition
console.log(movements.some(mov => mov > 0));
console.log(movements.some(mov => mov > 5000));

// IMP: Every method
// every condition need to be true

// Here we are checking every movement is deposit
console.log(movements.every(mov => mov > 0));

console.log(account4.movements.every(mov => mov > 0));

// Separate callback

const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// IMP : Flat and FlatMap methods

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// flatten the array

console.log(arr.flat());

// Deeper arrays

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

console.log(arrDeep.flat()); // only goes 1 step deep
console.log(arrDeep.flat(2));

const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
owners.sort();
console.log(owners); // It changes the original array. It mutates it.

console.log(movements);
console.log(movements.sort()); // It does not sort numeric values properly . It converts everything to string and then sorts it. So it alphabetically arranges 1,2,3,4....

// But if actually want a sorting we need to do following

// return < 0 , a , b (keep order)
// return > 0 b , a (switch order)
// Ascending Order
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);

// Decending Order
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(movements);

// Simplify above
movements.sort((a, b) => a - b);
console.log(movements);

// Decending Order
movements.sort((a, b) => b - a);
console.log(movements);

// IMP : Create a date

const now = new Date();
console.log(now);

console.log(new Date('Tue Dec 10 2024 16:39:07'));
console.log(new Date('Tue Dec 24,2024'));

console.log(new Date(account1.movementsDates[0]));

// in JS the date index starts at 0 , so 10 is November and 11 is December
console.log(new Date(2037, 10, 19, 15, 23, 5));

// JS Auto corrects the date
console.log(new Date(2037, 10, 31)); // No 31 in Nov so auto corrects to 1 Dec
console.log(new Date(2037, 10, 33)); // Auto corrects to 3 Dec

console.log(new Date(0));

console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days after (3 days - 3*24*60*60*1000) 1000 for milsec

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.toISOString());
console.log(now.getTime());

now.setFullYear(2040);
console.log(now);

now.setMonth(4);
console.log(now);

//-------------- IMP: Timer functions ------------
// Second paramter specifies the time after which this Timout function should be called. here after 3secs.
// delayed function call. or scheduled function call.
setTimeout(() => console.log('Hello there'), 3000);
console.log('Waiting...');
// Run above piece of code and you will know.

// The arguments after the timer arguments ara parameters to function.
/// EXAMPLE:
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  5000,
  'olives',
  'spinach'
);

const ingreds = ['olives', 'spinach', 'tomatos'];

const pizzaTimer = setTimeout(
  (ing1, ing2, ing3) =>
    console.log(`Here is your pizza with ${ing1} , ${ing2} and ${ing3}`),
  7000,
  ...ingreds
);

if (ingreds.includes('spinach')) clearTimeout(pizzaTimer);

// What to run function over and over again after every 5 mins or so

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
