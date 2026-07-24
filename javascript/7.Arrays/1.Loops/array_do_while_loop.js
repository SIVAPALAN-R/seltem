/* ======================================
   Topic - Array do...while Loop
====================================== */

/*
Definition:
A do...while loop

executes the code

at least once,

then checks

the condition.

Simple Definition:

The do...while loop

runs first,

checks later.

📖 Definition

Unlike while,

the do...while loop

executes the code

before checking

the condition.

📝 Short Notes

✔ Runs at least once.

✔ Condition is checked later.

✔ Initialization is outside.

✔ Increment is inside.

✔ Ends when condition becomes false.



Syntax:
let snackIndex = 0;

do {

    console.log(snackItems[snackIndex]);

    snackIndex++;

} while (snackIndex < snackItems.length);
*/

/* Exercise 1
Create an Array.

Variable Name

flowerNames

Values

Rose
Lily
Jasmine
Lotus

Print all values
using do...while loop.
*/

let flowerNames = [
    "Rose",
    "Lily",
    "Jasmine",
    "Lotus"
]
let flowerIndex = 0;
do {
    console.log(flowerNames[flowerIndex]);
    flowerIndex++;
} while (flowerIndex < flowerNames.length);

/*Challenge 1
Create an Array.

Variable Name

courseNames

Values

HTML
CSS
JavaScript
React
Bootstrap

Print

Course 1 : HTML
Course 2 : CSS
Course 3 : JavaScript
Course 4 : React
Course 5 : Bootstrap

using do...while loop.
*/

let courseNames = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
]

let CourseIndex = 0;
do{
    console.log(" Course ", CourseIndex +1 ,":", courseNames[CourseIndex]);
    CourseIndex++;
} while(CourseIndex < courseNames.length);