
// Moon orbit Challenge

function moonOrbit(earthdays) {
  return (earthdays/27.322).toFixed(3);
 }

let howManyOrbits = moonOrbit(54);
console.log(howManyOrbits);

// Working with Circles Challenge

// 1. Write a function that takes the radius of a circle and return its area.
// 2. Write a function that takes the radius of a circle and return its perimeter.

function circleArea (radius) {
  return (Math.PI * (radius*radius)).toFixed(2);
}

let circAr = circleArea(10);
console.log(circAr);

function circlePeri (radius) {
  return (2 * Math.PI * radius).toFixed(2);
}

let circleP = circlePeri(10);
console.log(circleP);

// Years to Days & Seconds Challenge

// 1. Create a function that takes your age in years and returns your age in days.
// 1. Create a function that takes your age in years and returns your age in seconds.

function yearsToDays(ageInYears){
  return (ageInYears * 365);
}

console.log(yearsToDays(32));


function yearsToSeconds (ageInYears){
  const secondsInOneYear = 86400 * 365;
  return (ageInYears * secondsInOneYear);
}

console.log(yearsToSeconds(32));


// Return the Remainder from Two Numbers Challenge

// There is a single operator in JavaScript, capable of providing the remainder of a division operation.
// Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder,
// possibly zero. Return that value.


function remainderTwoNums(num1, num2) {
  return (num1 % num2);
}

console.log(remainderTwoNums(-9, 45));

// Basketball Points Challenge

// You are counting points for a basketball game, given the amount of 2-pointers scored
// and 3-pointers scored, find the final points for the team and return that value.

function kobe(twoPointers, threePointers) {
  return ((twoPointers * 2)+(threePointers *3));
}

console.log(kobe(2,5));

// Less Than 100? Challenge

// Given two numbers, return true if the sum of both numbers is less than 100.
// Otherwise return false.

function checkHundred (num1, num2) {
  if (num1 + num2 < 100) {
    return true;
  } else {
    return false;
  }
}

console.log(checkHundred(83, 34) );
