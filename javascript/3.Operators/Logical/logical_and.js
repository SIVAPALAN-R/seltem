/* ======================================
   Topic 8.1 - Logical AND (&&)
====================================== */

/*
Definition:
The Logical AND (&&) operator checks two or more conditions.

It returns true only if ALL conditions are true.

If any one condition is false,
it returns false.

Simple Definition:
The && operator returns true only when
all conditions are true.

Short Notes:

✔ && is called the Logical AND Operator.

✔ It combines two or more conditions.

✔ All conditions must be true.

✔ If one condition is false,
  the result becomes false.

✔ Return type is Boolean.

Truth Table:

| Condition 1 | Condition 2 | Result  |
| ----------- | ----------- | ------- |
| true        | true        | ✅ true  |
| true        | false       | ❌ false |
| false       | true        | ❌ false |
| false       | false       | ❌ false |


Syntax:
condition1 && condition2;

Example:
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
*/

/* Exercise 1 */
let age = 25;

console.log(age > 18 && age < 60);

/* Exercise 2 */
let salary = 35000;

console.log(salary >= 30000 && salary <= 50000);

/* Chellenge 1

Create a variable called age.

Assign the value:
22

Check whether:

age is greater than or equal to 18

AND

age is less than or equal to 60

using the && operator.

Print the output. */

let page =22;

console.log( page >= 18 && page <= 60 );

/* Chellenge 2 
Create a variable called marks.

Assign the value:
450

Check whether:

marks is greater than or equal to 400

AND

marks is less than or equal to 500

using the && operator.

Print the output.
*/

let mark =450;

console.log(mark >= 400 && mark <= 500);

/* Chellenge 3
Create a variable called ticketPrice.

Assign the value:
350

Check whether:

ticketPrice is greater than or equal to 300

AND

ticketPrice is less than or equal to 500

using the && operator.

Print the output. */

let ticketPrice = 350;

console.log(ticketPrice >=300 && ticketPrice <=500);