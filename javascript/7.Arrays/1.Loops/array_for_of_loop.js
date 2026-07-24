/* ======================================
   Topic - Array for...of Loop
====================================== */

/*
Definition:
The for...of loop
is used to
access every value
inside an Array.

Simple Definition:
for...of
prints all Array
values one by one.

📖 Definition

Unlike the for loop,

you don't need

Index

length

or i++.

The for...of loop

directly gives

each value

from the Array.

📝 Short Notes

✔ Easy to write.

✔ No Index.

✔ No length.

✔ No i++.

✔ Directly gets values.

✔ Mostly used
   to print Array values.


Syntax:
for (let value of arrayName) {

    console.log(value);

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
using for...of.

*/

let  courseLists = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
]
for (let course of courseLists) {
    console.log(course);
}

/*
Exercise 2

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
using for...of.

*/

let roomsNumbers =[
    101,102,103,104,105
]
for(let roomNumber of roomsNumbers){
    console.log (roomNumber);
}

/*
Challenge 1

Variable Name

cityNames

Values

Chennai
Madurai
Trichy
Salem
Coimbatore

Print all values
using for...of.

*/

let citysNames = [
    "Chennai",
    "Madurai",
    "Trichy",
    "Salem",
    "Combatore"
]

for (let cityName of citysNames){
    console.log(cityName);
}


/*
Challenge 2

Variable Name

studentMarks

Values

70
80
90
95
100

Print all values
using for...of.

*/
let studentsMarks = [
    70,80,90,95,100
]
for (let studentMark of studentsMarks){
    console.log(studentMark);
}
    


/*
Challenge 3

Variable Name

employeeDetails

Values

"Siva"
101
true
"Frontend Developer"
"Chennai"

Print all values
using for...of.

*/

let employeesDetails = [
    "Siva",
    101,
    true,
    "Frontend Developer",
    "Chennai"
]
for (let employeeDetail of employeesDetails){
    console.log(employeeDetail);
}