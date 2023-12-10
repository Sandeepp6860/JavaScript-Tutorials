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

let isLoggedIn=1;

let booleanIsLoggedIn=Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

