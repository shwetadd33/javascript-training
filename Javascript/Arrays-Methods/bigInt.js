console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 3);

// to store number longer than above use BigInt
console.log(34734342342352342222234);
console.log(34734342342352342222234n);
console.log(BigInt(34734342));

// works same with operators
console.log(100000n + 100000n);
