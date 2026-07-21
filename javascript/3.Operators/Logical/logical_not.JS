/* ======================================
   Topic 8.3 - Logical NOT (!)
====================================== */

/*
Definition:
The Logical NOT (!) operator reverses a Boolean value.

If the value is true,
it returns false.

If the value is false,
it returns true.

Simple Definition:
The ! operator changes true to false
and false to true.

Short  Notes:

✔ ! is called the Logical NOT Operator.

✔ It reverses a Boolean value.

✔ true becomes false.

✔ false becomes true.

✔ Return type is Boolean.

Truth Table:

| Value | Result  |
| ----- | ------- |
| true  | ❌ false |
| false | ✅ true  |


Syntax:
!condition;

Example:
console.log(!true);    // false
console.log(!false);   // true
console.log(!(10 > 5)); // false
*/

/* Exercise 1 */
let isLoggedIn = true;

console.log(!isLoggedIn);

/* Exercise 2 */

let isRaining = false;

console.log(!isRaining);


/* Challenge 1
Create a variable called isStudent.

Assign the value:
true

Print the opposite value
using the ! operator. */

let isStudent = true;

console.log(!isStudent);

/*Challenge 2
Create a variable called hasTicket.

Assign the value:
false

Print the opposite value
using the ! operator. */

let hasTicket = false;

console.log(!hasTicket);

/*Challenge 3
Create a variable called age.

Assign the value:
16

Check whether:

age > 18

using the ! operator.

Print the output. */

let paage = 16;

console.log(!(paage > 18) );

