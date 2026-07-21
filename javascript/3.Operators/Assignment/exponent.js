/* ======================================
   Topic 6.7 - Exponent Assignment Operator (**=)
====================================== */

/*
Definition:
The Exponent Assignment Operator (**=) raises the current variable value to the power of another value and stores the result back in the same variable.

Simple Definition:
The **= operator finds the power and updates the value.

Short Notes:

✔ **= is called the Exponent Assignment Operator.

✔ It calculates the power of a number.

✔ It automatically updates the variable.

✔ It is a shortcut for:

variable = variable ** value;

Syntax:
variable **= value;

Example:
let number = 2;

number **= 3;

console.log(number); // 8
*/

/* Exercise 1 */

let base = 3;

base **= 2;

console.log(base);

/* Exercise 2 */

let value = 5;

value **= 3;

console.log(value);

/* Challenge 1

A square has a side length of 12 cm.

Find the area using the **= operator. */

let lengthSide = 12;
lengthSide **=2;

console.log(lengthSide);
/* Challenge 2

A cube has a side length of 4 cm.

Find the volume using the **= operator. */

let cubeSide = 4;
cubeSide **=3;

console.log(cubeSide);

/* Challenge 3

A game character starts with a power level of 5.

Increase it to the power of 4 using the **= operator and print the final power level. */
let powerLevel = 5;
powerLevel **=4;

console.log(powerLevel);