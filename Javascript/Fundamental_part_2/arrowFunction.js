// Concept: Arrow Function

const calcAge2 = function (birthyear) {
    return 2024 - birthyear;
}

const calcAge3 = birthyear => 2024 - birthyear; // This is a one-liner arrow function.

const calcAge4 = birthyear => {
    console.log("This is multiline arrow function");
    return 2024 - birthyear;
} // This is how you write a arrow function.

const age3 = calcAge3(2000);
console.log(`age is ${age3}`);

const age4 = calcAge4(2013);
console.log(`age is ${age4}`);
