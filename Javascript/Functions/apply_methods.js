const indigo = {
  airline: 'Indigo',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

indigo.book(239, 'Jonas David');
indigo.book(635, 'Jhon Smith');
console.log(indigo);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// create a copy of a function "book" from indigo object and apply this function on every object:
const book = indigo.book;

// Does not work like below
//book(23, 'ABC XYZ');

//IMP : Call Apply and Bind method
// call function will manually sets this keyword of specified function we want to call
book.call(eurowings, 23, 'Abc Xyz');
console.log(eurowings);
book.call(indigo, 455, 'Pqr sxy');
console.log(indigo);

// Apply method is same as copy just little different
const flightData = [545, 'Jermey'];
book.apply(eurowings, flightData);
console.log(eurowings);

// OR
book.call(indigo, ...flightData);

// NOTE: Bind Method , it is like a call function, just it does not imidiately call the function
// instead it returns new function where this keyword is bound.

const bookEW = book.bind(eurowings);
// It will just return the new function where the book function where this keyword is always set to the eurowings.
bookEW(343, 'Neha James');
console.log(eurowings);

const bookIN = book.bind(indigo);
bookIN(6789, 'Dipa Dilli');

// We can bind variables

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Shweta Deshmukh');
bookEW23('James Jacob');

// With event listeners

indigo.planes = 300;
indigo.buyPlane = function () {
  this.planes++;

  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', indigo.buyPlane.bind(indigo));

// Partial application

const addTax = (rate, value) => value + value * (rate / 100);

console.log(addTax(10, 200));

const addVAT = addTax.bind(null, 23);

console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * (rate / 100);
  };
};

const addVAT2 = addTaxRate(23);

console.log(addVAT2(200));
