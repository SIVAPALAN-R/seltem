/* ======================================
   Topic 10.2 - Post Decrement (variable--)
====================================== */

/*
Definition:
The Post Decrement (variable--) operator
first uses the current value of a variable,
then decreases it by 1.

Simple Definition:
Post Decrement prints the current value
first, then subtracts 1.


📝 Short Notes

✔ variable-- is called Post Decrement.

✔ It first uses the current value.

✔ Then it decreases the value by 1.

✔ Mostly used in loops and counters.

✔ Return type is Number.

Syntax:
variable--;

Example:
let count = 5;

console.log(count--); // 5
console.log(count);   // 4
*/

/* Exercise 1 */
let count = 15;

console.log(count--);

console.log(count); 

/* Exercise 2 */
let visitors = 300;

console.log(visitors--);

console.log(visitors);

/* Challenge 1
A hotel has 120 rooms.

One room becomes unavailable.

Print the room count before decrement
and after decrement using Post Decrement. */

let rooms = 120;

console.log(rooms--);

console.log(rooms);

/* Challenge 2
A class has 60 students.

One student leaves the class.

Print the student count before decrement
and after decrement.*/

let students = 60;

console.log(students--);

console.log(students);

/* Challenge 3
 A theatre has 250 booked tickets.

One ticket is cancelled.

Print the ticket count before decrement
and after decrement.*/

let ticketCount = 250;

console.log(ticketCount--);

console.log(ticketCount);