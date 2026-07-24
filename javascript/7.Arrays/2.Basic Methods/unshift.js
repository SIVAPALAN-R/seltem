/* ======================================
   Topic - unshift()
====================================== */

/*
Definition:

The unshift() method

adds

one or more elements

to the START

of an Array.

Simple Definition:

unshift()

adds

new values

at the START

of an Array.

📖 Definition

The unshift() method

inserts

new element(s)

before

the first element

of the Array.

📝 Short Notes

✔ Adds one or more values.

✔ Adds at the START.

✔ Modifies the original Array.

✔ Returns the new length of the Array.
*/


/*
Challenge 1

Create an Array.

Variable Name

movieTitles

Values

Leo
Master
Vikram

Add

Kaithi

using unshift().

Print the updated Array.
*/

let movieTitle = [
    "Leo",
    "Master",
    "Vikram"
];

movieTitle.unshift("Kaithi");

console.log(movieTitle);


/*
Challenge 2

Create an Array.

Variable Name

courseNames

Values

HTML
CSS
JavaScript

Add

React
Bootstrap

using ONE unshift().

Print the updated Array.
*/

let courseNamed = [
    "HTML",
    "CSS",
    "JavaScript"
];

courseNamed.unshift(
    "React",
    "Bootstrap"
);

console.log(courseNamed);


/*
Challenge 3

Create an Array.

Variable Name

employeeNames

Values

Siva
Rahul
Arun

Add

Kavin

Store the returned value

in

newLength

Print

1. newLength

2. Updated Array

3. Array Length
*/

let employeeNames = [
    "Siva",
    "Rahul",
    "Arun"
];

let newLength = employeeNames.unshift("Kavin");

console.log("New Length :", newLength);

console.log("Updated Array :", employeeNames);

console.log("Array Length :", employeeNames.length);