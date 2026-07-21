/* ======================================
   Topic 10.3 - Pre Decrement (--variable)
====================================== */

/*
Definition:
The Pre Decrement (--variable) operator
first decreases the value of a variable by 1,
then uses the updated value.

Simple Definition:
The Pre Decrement operator subtracts 1
from a variable first, then uses
the updated value.

📖 Definition

The Pre Decrement (--variable) operator
first decreases the value of a variable
by 1 and then uses the updated value.

📝 Short Notes

✔ --variable is called the Pre Decrement Operator.

✔ It first decreases the value by 1.

✔ Then it uses the updated value.

✔ It works only with variables.

✔ It is mostly used in loops and counters.

✔ Return type is Number.

Syntax:
--variable;

Example:

let count = 5;

console.log(--count); // 4
console.log(count);   // 4
*/


/* Exercise 1 */

let counts = 15;

console.log(--counts);

console.log(counts);


/* Exercise 2 */

let visitor = 300;

console.log(--visitor);

console.log(visitor);


/* Challenge 1

A hotel has 120 rooms.

One room becomes unavailable.

Print the updated room count
using the Pre Decrement operator.
*/

let room = 120;

console.log(--room);

console.log(room);


/* Challenge 2

A class has 60 students.

One student leaves the class.

Print the updated student count
using the Pre Decrement operator.
*/

let student = 60;

console.log(--student);

console.log(student);


/* Challenge 3

A theatre has 250 booked tickets.

One ticket is cancelled.

Print the updated ticket count
using the Pre Decrement operator.
*/

let ticketCounts = 250;

console.log(--ticketCounts);

console.log(ticketCounts);

