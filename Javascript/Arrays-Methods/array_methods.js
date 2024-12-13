let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // end parameter is excluded
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(-3));
console.log(arr.slice(0, -3));
console.log([...arr]);
//OR
console.log(arr.slice());

// IMP: SPLICE : it changes the original array. is not a inplace method

//console.log(arr.splice(2));
arr.splice(-1); // last element is deleted i.e "e" is deleted.
arr.splice(1, 2); // 2nd count is a deleteCount. so it satrts with "a" , then "b" & "c" is deleted and "d" is remained now.
console.log(arr);

// IMP : REVERSE . it is not inplace method is as well

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2); // it changes the original array as well.

//IMP : Concat

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//IMP : Join

console.log(letters.join(' - '));

// IMP : At method

const nums = [23, 11, 64];
console.log(nums[0]);
//OR
console.log(nums.at(0));
console.log(nums.at(2));

// If we don't know the exact length of an aaray then this "At" is useful.
console.log(nums.at(-1));
console.log(nums.at(-2));

// it works on strings as well

console.log('Shweta'.at(-1));
