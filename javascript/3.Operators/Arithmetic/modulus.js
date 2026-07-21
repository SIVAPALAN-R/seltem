/* ======================================
   Topic 5.5 - Modulus Operator (%)
====================================== */

/*
Definition:
The Modulus Operator (%) returns the remainder after dividing one number by another.

Simple Definition:
The % operator is used to find the remainder.


Short Notes

✔ % is called the Modulus Operator.

✔ It returns the remainder.

✔ It works only with numbers.

✔ It is commonly used to check even and odd numbers.

Syntax:
value1 % value2;

Example:
10 % 3 = 1
*/

/* Exercise 1 */
let number = 10;
let divisor = 3;

console.log(number % divisor);

/* Exercise 2 */
let chocolates = 25;
let students = 4;

console.log(chocolates % students);

/* Chellenge 1 
A hotel has 53 rooms.

Each floor can hold 10 rooms.

Print the remaining rooms after filling complete floors.
*/

let totalRooms = 53;
let floorRooms = 10;

console.log(totalRooms % floorRooms);


/* Chellenge 2
A teacher has 41 chocolates.

She gives them equally to 6 students.

Print the remaining chocolates. */

let teacherChocolates = 41;
let classStudents = 6;

console.log(teacherChocolates % classStudents);


/* Chellenge 3
A theatre has 102 seats.

Each row contains 8 seats.

Print the remaining seats after filling complete rows. */


let theateSeats = 102;
let rowContains = 8;

console.log(theateSeats % rowContains);