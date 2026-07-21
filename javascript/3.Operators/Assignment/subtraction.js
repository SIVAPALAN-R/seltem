/* ======================================
   Topic 6.3 - Subtraction Assignment Operator (-=)
====================================== */

/*
Definition:
The Subtraction Assignment Operator (-=) subtracts a value from the current variable value and stores the result back in the same variable.

Simple Definition:
The -= operator subtracts and updates the value.

Short Notes

✔ -= is called the Subtraction Assignment Operator.

✔ It subtracts a value from the existing value.

✔ It automatically updates the variable.

✔ It is a shortcut for:

variable = variable - value;

Syntax:
variable -= value;

Example:
let marks = 90;

marks -= 10;

console.log(marks); // 80
*/

/* Exercise 1 */
let walletAmount = 5000;
walletAmount -= 1200;

console.log(walletAmount);

/* Exercise 2 */
let totalMarks = 500;
totalMarks -= 75;

console.log(totalMarks);

/* Challenge 1

A customer has ₹10,000 in their bank account.

They withdraw ₹2,500.

Print the remaining balance using the -= operator.  */

let bankBalance = 10000;
bankBalance -= 2500;

console.log(bankBalance);

/* Challenge 2

A theatre has 500 seats.

175 seats are booked.

Print the available seats using the -= operator. */

let numberofSeats = 500;
numberofSeats -= 175;

console.log(numberofSeats);

/* Challenge 3

A student scored 600 marks.

Due to 15 marks being deducted for malpractice, print the final marks using the -= operator. */

let studentMarks = 600;
studentMarks -= 15;

console.log(studentMarks);