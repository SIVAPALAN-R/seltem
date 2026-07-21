/* ======================================
   Topic 7.2 - Strict Equal Operator (===)
====================================== */

/*
Definition:
The Strict Equal Operator (===) compares both the value and the data type.
If both are the same, it returns true.
Otherwise, it returns false.

Short Notes

✔ === is called the Strict Equal Operator.

✔ It compares value and data type.

✔ It does NOT perform type conversion.

✔ It always returns Boolean (true or false).

✔ It is recommended to use === in modern JavaScript.

Simple Definition:
The === operator checks whether both the value and the data type are equal.

Syntax:
value1 === value2;

Example:
console.log(10 === 10);    // true
console.log("10" === 10);  // false
*/

/* Exercise 1 */
let page= 24;

console.log(page === 24);

/* Exercise 2 */

let officeName = "Selten";

console.log(officeName === "Selten");

/* Challenge 1

Create a variable called studentName.

Assign the value:

Siva

Compare it with:

Siva

using the === operator.

Print the output. */

let studentName = "siva";

console.log(studentName === "siva" );


/* Challenge 2

Create a variable called ticketPrice.

Assign the value:

350

Compare it with:

"350"

using the === operator.

Print the output. */

let tPrice = 350;

console.log(tPrice === "350");


/* Challenge 3

Create a variable called isLoggedIn.

Assign the value:

true

Compare it with:

true

using the === operator.

Print the output. */

let isLoggedIn = true;

console.log(isLoggedIn === true);
