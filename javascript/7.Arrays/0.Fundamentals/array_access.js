/* ======================================
   Topic - Accessing Array Elements
====================================== */

/*
Definition:
Accessing an Array
means getting
a value
from an Array.

Simple Definition:
Accessing means
reading a value
from an Array.

📖 Definition

Every value
inside an Array

has an Index Number.

Using the Index,

we can access
any value
from the Array.

📝 Short Notes

✔ Index starts from 0.

✔ First value = Index 0.

✔ Second value = Index 1.

✔ Use square brackets [].

✔ Syntax

arrayName[index]
*/


/* Exercise 1


Create a String Array.

Variable Name

movieCollection

Values

Leo
Master
Vikram
Thuppakki

Print

First Movie

Expected Output

Leo
*/

let movieCollection = [
    "leo",
    "Master",
    "Vikram",

]
console.log(movieCollection[0]);




/* Exercise 2


Create a Number Array.

Variable Name

rollNumbers

Values

101
102
103
104
105

Print

Fourth Roll Number

Expected Output

104
*/

let rollNumbers = [
    101,102,103,104,105
]
console.log(rollNumbers[3]);


/* Challenge 1


Create a String Array.

Variable Name

programmingLanguages

Values

HTML
CSS
JavaScript
React

Print

Second Language

Expected Output

CSS
*/

let programmingLanguages = [
    "Html","css", "javascript","react"
]
console.log(programmingLanguages[1]);



/* Challenge 2


Create a String Array.

Variable Name

cricketTeams

Values

CSK
MI
RCB
GT
SRH

Print

Last Team

Expected Output

SRH
*/
let cricketTeams = [
    "csk","mi","rcb","gt","srh"
]
console.log(cricketTeams[4]);


/* Challenge 3


Create a Mixed Array.

Variable Name

employeeDetails

Values

"Siva"
101
true
"Frontend Developer"

Print

1. Employee Name
2. Employee ID
3. Employee Position

Expected Output

Siva
101
Frontend Developer
*/

let employeeDetails = [
    "Siva",
    101,
    true,
    "Frontend Developer"
]
console.log("Name :" + employeeDetails[0],"ID :" + employeeDetails[1],"Department : "+ employeeDetails[3]);

