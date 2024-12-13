// Sometimes we want to call a function immediately only once in the program and
// never actually save it.

// And this is IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23; // private or encapsulated
})();

// Will work with arrow functions
(() => console.log('This will never run again'))();
