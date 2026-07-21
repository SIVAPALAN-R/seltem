/* ======================================
   Topic 8.2 - Logical OR (||)
====================================== */

/*
Definition:
The Logical OR (||) operator checks two or more conditions.

It returns true if AT LEAST ONE condition is true.

It returns false only if ALL conditions are false.

Simple Definition:
The || operator returns true when
any one condition is true.

📝 Short Notes:

✔ || is called the Logical OR Operator.

✔ It combines two or more conditions.

✔ At least one condition must be true.

✔ It returns false only when all conditions are false.

✔ Return type is Boolean.

Truth Table:

| Condition 1 | Condition 2 | Result  |
| ----------- | ----------- | ------- |
| true        | true        | ✅ true  |
| true        | false       | ✅ true  |
| false       | true        | ✅ true  |
| false       | false       | ❌ false |


Syntax:
condition1 || condition2;

Example:
console.log(true || true);     // true
console.log(true || false);    // true
console.log(false || true);    // true
console.log(false || false);   // false
*/

/* Exercise 1 */

let lesson = 16;

console.log( lesson < 18 || lesson > 60);

/* Exercise 2 */
let marks = 350;

console.log(marks >= 400 || marks >= 300);

/* Challenge 1 
Create a variable called age.

Assign the value:
65

Check whether:

age is less than 18

OR

age is greater than 60

using the || operator.

Print the output. */

let script = 65;

console.log(script < 18 || script > 60);


/* Challenge 2
Create a variable called marks.

Assign the value:
250

Check whether:

marks is greater than or equal to 400

OR

marks is greater than or equal to 300

using the || operator.

Print the output. */

let markk = 250;

console.log(markk  >= 400 || markk >= 300 );

/* Challenge 3

Create a variable called ticketPrice.

Assign the value:
600

Check whether:

ticketPrice is less than or equal to 300

OR

ticketPrice is greater than or equal to 500

using the || operator.

Print the output. */

let ttprice = 600;

console.log( ttprice <= 300 ||ttprice >= 500  );