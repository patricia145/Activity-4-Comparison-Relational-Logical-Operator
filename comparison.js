//Create a variable named firstFavNumb and store your favorite number
let firstFavNumb = 7;
//Create a variable named secondFavNumb and store your second favorite number
let secondFavNumb = 17;

//COMPARISON //

//Greater Than
console.log(firstFavNumb > secondFavNumb); //false
//Less Than
console.log(firstFavNumb < secondFavNumb); //true

// RELATIONAL //

//Greater Than or Equal to
console.log(firstFavNumb >= secondFavNumb); //false
//Less Than or Equal to
console.log(firstFavNumb <= secondFavNumb); //true
//Strict Equality (===)
console.log(firstFavNumb === secondFavNumb); //false
//Loose Equality (==)
console.log(firstFavNumb == secondFavNumb); //false
//Strict Inequality (!==)
console.log(firstFavNumb !== secondFavNumb); //true
//Loose Inequality (!=)
console.log(firstFavNumb != secondFavNumb); //true

 // LOGICAL OPERATORS //

 //AND
let x = 32;
let y = 51;
let z = 74;

 console.log(x < y && y < z); //true
 console.log(x > y && y > z); //false

//OR
let a = "sunny";
let b = "rainy";
let c = "sunny";

console.log(a === b || a === c); //true
console.log(a === b || b === c); //false

//NOT
let isHot = true;
let isCold = false;

console.log(!isHot); //false
console.log(!isCold); //true

console.log(!isHot && isCold); //false
console.log(isHot && !isCold); //true
console.log(isHot || isCold); //true
console.log(!isHot || isCold); //false
console.log(isHot == isCold); //false
console.log(isHot == !isCold); //true
