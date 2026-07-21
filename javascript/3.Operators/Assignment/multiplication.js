/* ======================================
   Topic 6.4 - Multiplication Assignment Operator (*=)
====================================== */

/*
Definition:
The Multiplication Assignment Operator (*=) multiplies the current variable value by another value and stores the result back in the same variable.

Simple Definition:
The *= operator multiplies and updates the value.

Short Notes

✔ *= is called the Multiplication Assignment Operator.

✔ It multiplies the current value.

✔ It updates the variable automatically.

✔ It is a shortcut for:

variable = variable * value;

Syntax:
variable *= value;

Example:
let salary = 25000;

salary *= 2;

console.log(salary); // 50000
*/

/* Exercise 1*/
let salary = 25000;

salary *= 2;

console.log(salary);

/* Exercise 2 */

let roomRent = 1500;

roomRent *= 3;

console.log(roomRent);


/*Challenge 1

A movie ticket costs ₹200.

A customer buys 6 tickets.

Print the total ticket amount using the *= operator. */

let ticketsCost = 200;
ticketsCost *= 6;

console.log(ticketsCost);




/*Challenge 2

A hotel room costs ₹3,000 per night.

A customer stays for 4 nights.

Print the total room rent using the *= operator */

let roomCosts = 3000;
roomCosts *= 4;

console.log(roomCosts);


/* Challenge 3

A worker earns ₹800 per day.

He works for 30 days.

Print the total salary using the *= operator */

let workerEarn = 800;
workerEarn *= 30;

console.log(workerEarn);