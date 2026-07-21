/* ======================================
   Topic 7.4 - Strict Not Equal Operator (!==)
====================================== */

/*
Definition:
The Strict Not Equal Operator (!==) compares both the value
and the data type.
If either the value or the data type is different,
it returns true.
Otherwise, it returns false.

Simple Definition:
The !== operator checks whether two values are not equal
without converting their data types.

Syntax:
value1 !== value2;

Example:
console.log(10 !== 20);    // true
console.log(10 !== 10);    // false
console.log("10" !== 10);  // true
*/

/* ======================================
   📝 Short Notes
====================================== */

/*
✔ !== is called the Strict Not Equal Operator.

✔ It compares both value and data type.

✔ It does NOT perform type conversion.

✔ It always returns true or false.

✔ Return type is Boolean.

✔ It is recommended to use !== in modern JavaScript.
*/

/* ======================================
   💻 Practice
====================================== */

/* Exercise 1 */

let topic = 24;

console.log(topic !== 18);

/* Exercise 2 */

let companieName = "Selten";

console.log(companieName !== "Google");


/* ======================================
   🎯 Challenge
====================================== */

/*
Challenge 1

Create a variable called hotelName.

Assign the value:
"KGR Hotel"

Compare it with:
"Selten Hotel"

using the !== operator.

Print the output.
*/

let hname = "KGR Hotel";

console.log( hname !== "Selten Hotel");

/*
Challenge 2

Create a variable called ticketPrice.

Assign the value:
350

Compare it with:
"350"

using the !== operator.

Print the output.
*/

let tcktPrice = 350;

console.log(tcktPrice !== "350");

/*
Challenge 3

Create a variable called isLoggedIn.

Assign the value:
true

Compare it with:
1

using the !== operator.

Print the output.
*/

let lgIn = true;
console.log(lgIn !== 1);