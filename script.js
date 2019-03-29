for (let i = 0; i < 5; i++) {
  console.log(i);
}

let ifNum = 1;
//ifNum = 2;
//ifNum = 3;

if (ifNum % 2 === 0) {
  ifNum = 1;
} else if (ifNum % 3 === 1) {
  ifNum = 2;
} else {
  ifNum =3;
}

console.log(ifNum);

let age = 28;
if (age >= 21) {
  console.log("No booze for you!")
} else {
  console.log("Shots shots shots shots shots shots")
}

const favoriteNumber = 420;
if (favoriteNumber < 10) {
  console.log("A little number!")
} else if (favoriteNumber === 420) {
  console.log("420 blaze it")
} else {
  console.log("Not a little number!")
}

let a = 3;
if ((a * 3) % 2 === 0) {
  console.log("Even")
} else {
  console.log("You're an odd one")
}

let b = 99;
if (b < 25) {
  console.log("bottom quartile")
} else if (b < 50) {
  console.log("lower middle quartile")
} else if (b < 75) {
  console.log("upper middle quartile")
} else if (b < 100) {
  console.log("top quartile")
} else {
  console.log("not a valid entry (1-100)")
}