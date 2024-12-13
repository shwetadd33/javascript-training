'use strict';

const bookings = [];

// Default Parameters
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 290);

// Passing arguments : Value vs. Reference

const flight = 'LH345';
const jonas = {
  name: 'Jonas David',
  passport: 23456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 23456789) {
    alert('Check In');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, jonas);
// The flight variable will not change after the function call. As it is premitive type. So it flightName is a copy of flight
console.log(flight);

// But the jonas object will change its values. Object is the reference type of data . and it actually passes just the reference of the object to the function
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(`Passport number changed to: ${jonas.passport}`);

// Passing by Value

//NOTE :  Passing by reference : JS does not have pass by reference
// We can pass the object but that is not exactly a reference it is again a value that we pass as object and not the memory location.
