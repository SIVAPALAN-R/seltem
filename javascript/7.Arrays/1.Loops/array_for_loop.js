/* ======================================
   Topic - Array for Loop
====================================== */

/*
Definition:
A for loop
is used to
repeat a block
of code

and access
every element
inside an Array.

Simple Definition:
A for loop
prints all
Array values
one by one.

📖 Definition

Instead of writing
multiple console.log(),

the for loop
runs repeatedly

until it reaches
the last element
of the Array.

📝 Short Notes:

✔ Repeats code.

✔ Starts from Index 0.

✔ Stops at the last element.

✔ Uses Array Index.

✔ Most commonly used
   loop in JavaScript.



Syntax:
for (let i = 0; i < movieList.length; i++) {

    console.log(movieList[i]);

}   

*/



/*
Exercise 1

Create a String Array.

Variable Name

courseList

Values

HTML
CSS
JavaScript
React

Print all values
using a for loop.

*/

let courseList =[
    "HTML",
    "CSS",
    "JavaScript",
    "React"
]

for (let i = 0; i < courseList.length; i++){
    console.log(courseList[i]);
}


/* Exercise 2


Create a Number Array.

Variable Name

roomNumbers

Values

101
102
103
104
105

Print all values
using a for loop.

*/

let roomNumbers = [
    101,
    102,
    103,
    104,
    105
];

for (let i = 0; i < roomNumbers.length; i++) {

    console.log(roomNumbers[i]);

}




/* Challenge 1


Create a String Array.

Variable Name

cityNames

Values

Chennai
Madurai
Trichy
Salem
Coimbatore

Print all values
using a for loop.

*/

let cityNames = [
    "Chennai",
    "Madurai",
    "Trichy",
    "Salem",
    "Coimbatore"
];

for (let i = 0; i < cityNames.length; i++) {

    console.log(cityNames[i]);

}




/* Challenge 2


Create a Number Array.

Variable Name

studentMarks

Values

75
80
85
90
95

Print all values
using a for loop.

*/

let studentMarks = [
    75,
    80,
    85,
    90,
    95
];

for (let i = 0; i < studentMarks.length; i++) {

    console.log(studentMarks[i]);

}




/* Challenge 3


Create a Mixed Array.

Variable Name

employeeDetails

Values

"Siva"
101
true
"Frontend Developer"
"Chennai"

Print all values
using a for loop.

*/

let employeeDetails = [
    "Siva",
    101,
    true,
    "Frontend Developer",
    "Chennai"
];

for (let i = 0; i < employeeDetails.length; i++) {

    console.log(employeeDetails[i]);

}

