// Concept: Object
// Note : Object is similar to Dict data type
// In objects the order of the element we want to access does not matter like Arrays

const shweta = {
  firstName: "Shweta",
  lastName: "Deshmukh",
  birthyear: 1993,
  job: "teacher",
  friends: ["abc", "xyz", "pqr"],

  // calcAge: function (birthyear) {
  //     return 2024 - birthyear;
  // }

  calcAge: function () {
    return 2024 - this.birthyear;
  },
};

console.log(shweta);

// Dot vs Bracket notation
console.log(shweta.lastName);
// OR
console.log(shweta["lastName"]);

// The only use of this Bracket notation access we can write expression as well like below-
const nameKey = "Name";
console.log(shweta["first" + nameKey]);
console.log(shweta["last" + nameKey]);

// Bracket notation is also useful in cases suuch as:
const data = prompt(
  "What do you want to know? firstName, lastName, age, job and friends"
);
console.log(shweta[data]);

if (shweta[data]) {
  console.log(shweta[data]);
} else {
  console.log("Wrong request");
}

shweta.location = "India";
shweta["gender"] = "female";
console.log(shweta);

console.log(`${shweta.firstName} has ${shweta.friends.length} friends, and her
    best friend is called ${shweta.friends[0]}`);

// Object Method : any function attached to Object is called Object Method.
// Here calcAge is a Object Method.

//console.log(shweta.calcAge(1993));
//OR
//console.log(shweta['calcAge'](1993));

// Use of "this" keyword : is equal to the object calling the method. (in our case this keyword will point to shweta)
console.log("use case of this keyword...");
console.log(shweta.calcAge());
