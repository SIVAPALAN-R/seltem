/* ======================================
   Topic 12.1 - String Concatenation Operator (+)
====================================== */

/*
Definition:
The String Concatenation Operator (+)
is used to join two or more strings.

Simple Definition:
The + operator joins strings together.



📝 Short Notes

✔ + is called the String Concatenation Operator.

✔ It joins two or more strings.

✔ It can join strings with variables.

✔ It can join strings with numbers.

✔ The output is always a String.

Syntax:
string1 + string2;

Example:
let firstName = "Siva";
let lastName = "Regunathan";

console.log(firstName + " " + lastName);
*/


/* Exercise 1 */

let firstName = "Siva";
let lastName = "Regunathan";

console.log(firstName + " " + lastName);


/* Exercise 2 */

let hotelName = "Luxury Stay";
let city = "Chennai";

console.log(hotelName + " - " + city);


/* Challenge 1

Create a variable called company.

Assign the value:
Selten

Create another variable called companyLocation.

Assign the value:
Chennai

Join both values using the + operator.

Print the output.
*/

let company = "Selten";
let companyLocation = "Chennai";

console.log(company  + " " +  companyLocation);


/* Challenge 2

Create a variable called movie.

Assign the value:
Good Bad Ugly

Create another variable called year.

Assign the value:
2025

Join both values using the + operator.

Print the output.
*/

let movie = "Good Bad Ugly";
let year = 2025;

console.log(movie + " -" + year);


/* Challenge 3

Create a variable called customerName.

Assign the value:
Siva

Create another variable called roomNumber.

Assign the value:
101

Print the output as:

Siva - Room 101
*/

let customerName = "Siva";
let roomNumber = 101;

console.log(customerName + " - Room " + roomNumber);

