/* ======================================
   Topic - Updating Array Elements
====================================== */

/*
Definition:
Updating an Array
means changing
an existing value
inside an Array.

Simple Definition:
Update means
replace an old value
with a new value.

📖 Definition

Every value
inside an Array

has an Index.

Using the Index,

we can change
any value
inside the Array.

📝 Short Notes

✔ Uses Index.

✔ Index starts from 0.

✔ Replace old value
   with new value.

✔ Syntax

arrayName[index] = newValue;
*/



/*
Exercise 1

Create a String Array.

Variable Name

courseList

Values

HTML
CSS
Bootstrap
JavaScript

Update

Bootstrap

↓

React

Print the Array.

*/

let courseList = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript"
];

courseList[2] = "React";


console.log(courseList);




/* Exercise 2


Create a Number Array.

Variable Name

studentMarks

Values

70
75
80
85

Update

75

↓

95

Print the Array.

*/

let studentMarks = [
    70,
    75,
    80,
    85
];

studentMarks[1] = 95;

console.log(studentMarks);



/* Challenge 1


Create a Boolean Array.

Variable Name

attendanceStatus

Values

true
false
false
true

Update the second value to

true

Print the Array.

*/

let attendanceStatus = [
    true,
    false,
    false,
    true
];

attendanceStatus[1] = true;

console.log(attendanceStatus);




/* Challenge 2


Create a String Array.

Variable Name

cityList

Values

Chennai
Madurai
Trichy
Salem

Update

Salem

↓

Coimbatore

Print the Array.

*/

let cityList = [
    "Chennai",
    "Madurai",
    "Trichy",
    "Salem"
];

cityList[3] = "Coimbatore";
cityList[1] ="Karaikudi";

console.log(cityList);




/*
======================================
Bonus Challenge
======================================

Create a Mixed Array.

Variable Name

developerProfile

Values

"Siva"
22
true
"Frontend"

Update

22

↓

23

Frontend

↓

Full Stack Developer

Print the Array.

*/

let developerProfile = [
    "Siva",
    22,
    true,
    "Frontend"
];

developerProfile[1] = 23;
developerProfile[3] = "Full Stack Developer";

console.log(developerProfile);

