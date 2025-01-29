'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} speed increased to: ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} speed decreased to: ${this.speed}`);
};

const bmw = new Car('BMW', 200);
console.log(bmw.speed);
console.log(bmw.__proto__);
bmw.accelerate();
bmw.brake();

const mercedes = new Car('Mercedes', 100);
console.log(mercedes.speed);
console.log(mercedes.__proto__);
mercedes.accelerate();
mercedes.brake();

// There is no concept of Class in JS , but it is implemented in JS to make it easy for people familiar with other OOP language.

//class expression
//const PersonCl = class{}

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // getter and setter methods
  get age() {
    return 2037 - this.birthYear;
  }
}

const jessica = new PersonCl('Jessica', '1991');
console.log(jessica);
jessica.calcAge(); // NOTE: every method added in class declaration it is added in prototype of an object only and not directly on object
console.log(jessica.__proto__);

// so getter and setter methods can access like properties
console.log(jessica.age);

//3rd way

const PersonProto = {
  calcAge() {
    console.log("Person's age is in PersonProto:", 2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
