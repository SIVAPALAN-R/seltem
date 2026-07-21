/* ======================================
   Topic 5.2 - Subtraction Operator (-)
====================================== */

/*
Definition:
The Subtraction Operator (-) is used to subtract one number from another.

Simple Definition:
The - operator is used to find the difference between two numbers.

📝 Short Notes

✔ - is called the Subtraction Operator.

✔ It subtracts one number from another.

✔ It returns the difference.

✔ It works only with numbers.

✔ The order of operands is important.

Syntax:
value1 - value2;

Example:
20 - 10 = 10
*/

/*Exercise 1*/

let amount = 5000;
let spent = 40;

console.log(amount - spent);

/*Exercise 2*/

let total = 100;
let used = 40;
let damaged = 10;

console.log(total - used - damaged);

/*Challenge 1*/
/*A customer has ₹50,000 in the bank.

He withdraws ₹12,500.

Print the remaining balance.*/


let totalAmount = 50000;
let withdraws = 12500;

console.log(totalAmount - withdraws);

/*Challenge 2*/
/*A theatre has 500 seats.

320 seats are booked.

Print the available seats.*/

let totalSeat = 500;
let bookedSeat = 320;

console.log(totalSeat - bookedSeat);

/*Challenge 3
A student scored 480 marks out of 600.

Print how many marks the student lost.*/
let totalMark = 600;
let studentMark = 480;

console.log(totalMark - studentMark);
