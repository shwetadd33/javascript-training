/*
Closures : it is not a feature we explicitly use. we dont create it manually like we create new array or function
it happens in some situation we just need to recognise them.
*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// the new function booker is cretaed here as secureBooking returns function.
const booker = secureBooking();

// Observe the execution context of both secureBooking and booker function.
// And you will understand "clouser". booker can access the passengerCount variable
//of secureBooking() even when the execution of this function has long been ended when we 1st called it.
// we can say, booker remembers the variable of it's parent function from which it is created.
booker();
booker();
booker();
console.dir(booker);

//console.log(booker.passengerCount);

// ****** More Examples of Clousers ******

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // here it will remeber value of "a"
h();
f(); // here it will now remeber value of "b"
console.dir(f);

// Example - 2

const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  // Now use Callback function here
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups,each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassenger(180, 3);
