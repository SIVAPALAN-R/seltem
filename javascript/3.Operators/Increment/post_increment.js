
/* ======================================
   Topic 9.2 - Post Increment (variable++)
====================================== */

/*
Definition:
The Post Increment (variable++) operator
first uses the current value of a variable,
then increases it by 1.

Simple Definition:
Post Increment prints the current value
first, then adds 1.

📝 Short Notes
✔ variable++ is called Post Increment.

✔ It first uses the current value.

✔ Then it increases the value by 1.

✔ Mostly used in loops and counters.

✔ Return type is Number.

Syntax:
variable++;

Example:
let count = 5;

console.log(count++); // 5
console.log(count);   // 6
*/

/* Exercise 1 */
let count = 5;

count++;

console.log(count);

/* Exercise 2 */

let visitors = 120;

visitors++;

console.log(visitors);

/* Challenge 1
Create a variable called rooms.

Assign the value:
50

Increase it by 1
using the ++ operator.

Print the output. */

let rooms =50;
rooms++ ;
console.log(rooms);

/* Challenge 2
Create a variable called students.

Assign the value:
35

Increase it by 1
using the ++ operator.

Print the output. */

let students = 35;

students++;
console.log(students);



/*Challenge 3
Create a variable called ticketCount.

Assign the value:
199

Increase it by 1
using the ++ operator.

Print the output. */

let ticketCount = 199;
ticketCount++;

console.log(ticketCount);
