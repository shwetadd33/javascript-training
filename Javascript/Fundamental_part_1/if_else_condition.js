const age = 12;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah can not drive yet. Wait another ${yearsLeft} years.`);
}

