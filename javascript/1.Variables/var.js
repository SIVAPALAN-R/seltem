/* ======================================
   Topic 5 - var
====================================== 

Easy Definition

var is a JavaScript keyword used to create a variable.

Technical Definition

var is the old keyword used to declare variables in JavaScript before ES6 (2015). 
It allows both reassignment and redeclaration.


Why was var used?

Before ES6, JavaScript had only one keyword for creating variables.

syntex:
var city = "Chennai";

| Part        | Meaning             |
| ----------- | ------------------- |
| `var`       | Keyword             |
| `city`      | Variable Name       |
| `=`         | Assignment Operator |
| `"Chennai"` | Value               |


Why is var not recommended?

Imagine a project with 1000 variables.

If JavaScript allows redeclaration,

var total = 100;

var total = 500;

Another developer may accidentally overwrite your variable.

This can cause bugs.

That's why modern developers prefer:

let
const

Short Notes
✔ var is a keyword.
✔ Used before ES6.
✔ Used to create variables.
✔ Allows reassignment.
✔ Allows redeclaration.
✔ Mostly used in old projects.
✔ Not recommended for new projects.

Example Programs
/* Exercise 1 */

var Name =("Siva");
console.log(Name);

/* Exercise 2  (Reassignment)*/

var Fruits =("Applle");
Fruits=("Orange");

console.log(Fruits);

/* Exercise 3 Redeclaration */

var compay =("Selten");
var compay=("Zoho");

console.log(compay);










