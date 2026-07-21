/* ======================================
   Topic 6.6 - Modulus Assignment Operator (%=)
====================================== */

/*
Definition:
The Modulus Assignment Operator (%=) finds the remainder after division and stores the result back in the same variable.

Simple Definition:
The %= operator finds the remainder and updates the value.

Short Notes

✔ %= is called the Modulus Assignment Operator.

✔ It finds the remainder after division.

✔ It automatically updates the variable.

✔ It is a shortcut for:

variable = variable % value;

Syntax:
variable %= value;

Example:
let number = 10;

number %= 3;

console.log(number); // 1
*/

/* Exercise 1 */
let number = 15;

number %= 4;

console.log(number);

/* Exercise 2 */

let chocolates = 32;

chocolates %= 5;

console.log(chocolates);

/* Challenge 1

A theatre has 95 seats.

Each row can hold 12 seats.

Print the remaining seats using the %= operator.  */

let theatreSeats = 95;
theatreSeats %= 12;

console.log(theatreSeats);

/* Challenge 2

A teacher has 67 chocolates.

They are distributed equally among 8 students.

Print the remaining chocolates using the %= operator. */

let teacherChocolates = 67;
teacherChocolates %= 8;

console.log(teacherChocolates);

/* Challenge 3

A hotel has 143 rooms.

Each floor contains 20 rooms.

Print the remaining rooms using the %= operator. */

let hotelRomms = 143;
hotelRomms %= 20;

console.log(hotelRomms);


