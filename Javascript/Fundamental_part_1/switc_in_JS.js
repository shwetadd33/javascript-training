// Conccept: Switch case
const day = "Tuesday";

switch (day) {
    case 'Monday':
        console.log("This is Monday");
        console.log("Plan course");
        break;
    case 'Tuesday':
        console.log("This is Tuesday");
        console.log("Video");
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('This is either wednesday or thursday');
        break;
    default:
        console.log("Invalid day");
}

// Concept: Conditional operator for if-else statement & this is called ternary operator

const age = 12
age >= 18 ? console.log("I can have driving license") :
    console.log("I can not have DL");

const drink = age >= 18 ? "Wine" : "Water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}`);

