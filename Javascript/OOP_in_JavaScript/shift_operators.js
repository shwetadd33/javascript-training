console.log(8 >> 2);
console.log(-8 >> 2);

let n = 12;
let nB = n.toString(2);
nB = Number(nB);
console.log(typeof nB);
console.log(nB >>> 2);
console.log(-8 >>> 2);

var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n = n >>> 1;
  }
  return count;
};

const wt = hammingWeight(2147483645);
console.log(wt);
