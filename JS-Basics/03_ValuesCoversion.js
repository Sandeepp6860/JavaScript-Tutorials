let points="10";

console.log(typeof points);
console.log(typeof(points));

// To convert String to a number:

let pointsInNumberType=Number(points);
console.log(typeof pointsInNumberType);

// To convert Number to a String:

let number=45;
let numberInString=String(number);
console.log(typeof numberInString);

//NaN

let score="34tc";

let scoreInNumber=Number(score);
console.log(scoreInNumber);
console.log(typeof scoreInNumber);

//Converting to a Number

// "45" => 45

// "45jsngn" => NaN

// true => 1

// false => 0

// undefined => NaN

// null => 0

// let isLoggedIn=1;

// let booleanIsLoggedIn=Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

//Postfix

let x=10;
let y=x++; // When Postfix operator is used, the increment operator increments the value but returns the value before increment.
        // Here x value will be 4, but value of x is 3 before increment. so the value of y will be 3.

console.log(`X: ${x},Y: ${y}`);

// Prefix Operator:

let a=10;
let b=++a; // When Prefix is used, the increment operator increments the value and returns the value after incrementing.
        // Here a value will be 4 and b value will be 4. b value will be 4 because prefix increment operator returns the value after incrementing.



