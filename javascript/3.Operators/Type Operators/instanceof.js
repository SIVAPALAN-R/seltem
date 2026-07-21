/* ======================================
   Topic 13.2 - instanceof Operator
====================================== */

/*
Definition:
The instanceof operator is used
to check whether an object
belongs to a particular class
or constructor.

Simple Definition:
The instanceof operator checks
whether an object belongs to
a specific type.

📖 Definition

The instanceof operator returns

true  -> if the object belongs
         to the specified constructor.

false -> otherwise.

📝 Short Notes

✔ instanceof is called the Type Operator.

✔ It works only with objects.

✔ It returns true or false.

✔ It is commonly used with Arrays,
   Objects, Dates and Classes.

Syntax:
object instanceof Constructor;

Example:

let numbers = [1,2,3];

console.log(numbers instanceof Array);

// true
*/

/* Exercise 1 */

let numbers = [1,2,3];

console.log(numbers instanceof Array);


/* Exercise 2 */

let today = new Date();

console.log(today instanceof Date);


/* Challenge 1

Create an array called fruits.

Store:

Apple
Mango
Orange

Check whether it is
an instance of Array.

Print the output.
*/

let fruits = ["Apple","Mango","Orange"];

console.log(fruits instanceof Array);


/* Challenge 2

Create a Date object called currentDate.

Check whether it is
an instance of Date.

Print the output.
*/

let currentDate = new Date();

console.log(currentDate instanceof Date);


/* Challenge 3

Create an object called student.

Store:

name : "Siva"

age : 24

Check whether it is
an instance of Object.

Print the output.
*/

let student = {

    name:"Siva",

    age:24

};

console.log(student instanceof Object);

