/* ======================================
   Topic 15.1 - if Statement
====================================== */

/*
Definition:
The if statement is used to execute
a block of code only when a condition
is true.

Simple Definition:
The if statement checks a condition.

If the condition is true,
the code runs.

If the condition is false,
the code is skipped.

📖 Definition

The if statement evaluates a condition.

If the condition returns true,
the code inside the if block
is executed.

If the condition returns false,
JavaScript skips the block
and continues with the next statement.

📝 Short Notes

✔ if is a Decision Making statement.

✔ It checks only one condition.

✔ It executes only when
   the condition is true.

✔ If the condition is false,
   nothing inside the if block runs.

✔ Curly braces {} are used
   to define the code block.

Syntax:

if(condition){

    // code

}

Flow

Condition

↓

true
↓

Execute Code

↓

End

Condition

↓

false
↓

Skip Code

↓

End

Example:

let age = 20;

if(age >= 18){

    console.log("Eligible");

}
*/

/* Exercise 1 */

let age = 20;

if (age >= 18) {

    console.log("Eligible to Vote");

}

/* Exercise 2 */

let marks = 75;

if (marks >= 35) {

    console.log("Pass");

}

/* Challenge 1

Create a variable called roomAvailable.

Assign the value:

true

If roomAvailable is true,

Print:

Room Booked

*/

let roomAvailable = true;

if (roomAvailable) {
    console.log("Room Booked");
}

/* Challenge 2

Create a variable called salary.

Assign the value:

45000

If salary is greater than or equal to
30000,

Print:

Eligible for Loan

*/

let salary = 45000;

if (salary >= 30000) {
    console.log ("Eligible for loan");
}

/* Challenge 3

Create a variable called temperature.

Assign the value:

38

If temperature is greater than
35,

Print:

Hot Weather

*/

let temperature = 38;

if(temperature > 35) {
    console.log("Hot Weather");
}

/* Challenge 4
Create a variable called battery.

Assign the value:

85

If battery is greater than or equal to
80,

Print:

Fully Charged */

let battery = 85;
if(battery >= 80) {
    console.log("Fully Charged");
}

/* Callenge 5
Create a variable called roomPrice.

Assign the value:

6500

If roomPrice is greater than or equal to
6000,

Print:

Luxury Room */

let roomPrice = 6500;
if (roomPrice >= 6000) {
    console.log("Luxury Room");
}