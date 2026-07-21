/* ======================================
   Topic 11 - Ternary Operator (?:)
====================================== */

/*
Definition:
The Ternary Operator (?:) is a shorthand
way to write an if...else statement.

Simple Definition:
The Ternary Operator checks a condition.

If the condition is true,
it returns one value.

If the condition is false,
it returns another value.

Short Notes:
✔ ?: is called the Ternary Operator.

✔ It is a shortcut for if...else.

✔ It checks one condition.

✔ If the condition is true,
  it returns the first value.

✔ If the condition is false,
  it returns the second value.

✔ Return type depends on the values returned.

Syntax:
condition ? valueIfTrue : valueIfFalse;

Example:
let age = 20;

console.log(age >= 18 ? "Eligible" : "Not Eligible");
// Eligible
*/

/* Exercise 1 */

let age =20;

console.log( age >= 18 ? "Eligibile" : "Not Eligible");

/* Exercise 2 */

let marks = 75;

console.log( marks >= 35 ? "Pass" : "Fail");

/* Challenge 1
 A customer must be at least 18 years old
to book a hotel room.

Create a variable called age.

Assign the value:
25

Using the Ternary Operator,
print:

"Booking Allowed"

or

"Booking Not Allowed" */

let customerAge = 22;

console.log( customerAge > 18 ? "Booking Allowed" : "Booking Not Allowed" );


/*  Challenge 2
A student passes if the mark is
35 or above.

Create a variable called mark.

Assign the value:
28

Using the Ternary Operator,
print:

"Pass"

or

"Fail" */

let studentMarks = 28;

console.log( studentMarks >=35 ? "Pass" : "Fail");

/* Challenge 3
A movie ticket gets a discount
if the customer's age is 60 or above.

Create a variable called customerAge.

Assign the value:
65

Using the Ternary Operator,
print:

"Discount Available"

or

"No Discount" */

let customersAge = 65;

console.log(customersAge >=60 ? "Discount Available" : "No Discount");