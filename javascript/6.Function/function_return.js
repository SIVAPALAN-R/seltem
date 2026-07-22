/* ======================================
   Topic - Return Statement
====================================== */

/*
Definition:
The return statement
is used to send
a value back
from a function.

Simple Definition:
return gives
a value back
from a function.

📖 Definition

The return statement
ends the function
and returns
a value to
the place
where the function
was called.

📝 Short Notes

✔ Returns a value.

✔ Ends the function.

✔ Used inside functions.

✔ Returned value
   can be stored
   in a variable.

✔ Makes functions
   reusable.
*/


/*
=========================================
Part 1 - Return Single Value
=========================================
*/


/*
Exercise 1

Declare a function
named getName.

Return

"Siva"

Store the returned
value in a variable.

Print the variable.

*/

function getName(){
    return "Siva";
}
let namee = getName();
console.log(namee);


/*
Exercise 2

Declare a function
named getAge.

Return

22

Store the returned
value in a variable.

Print the variable.

*/
function getAge(){
    return 22;
}
let age = getAge();
console.log(age);


/*
Challenge 1

Declare a function
named getMovie.

Return

"Leo"

Store the returned
value in a variable.

Print the variable.

*/

function getMovie(){
    return "leo";
}
let movie = getMovie();
console.log(movie);


/*
Challenge 2

Declare a function
named getCompany.

Return

"TCS"

Store the returned
value in a variable.

Print the variable.

*/

function getCompany() {

    return "TCS";

}

let companine = getCompany();

console.log(companine);


/*
Challenge 3

Declare a function
named getCourse.

Return

"JavaScript"

Store the returned
value in a variable.

Print the variable.

*/

function getCourse() {

    return "JavaScript";

}

let course = getCourse();

console.log(course);


/*
=========================================
Part 2 - Return with Parameters
=========================================
*/


/*
Exercise 1

Declare a function
named addNumbers.

Create 2 parameters.

num1
num2

Return the addition.

Store the returned
value in a variable.

Print the variable.

*/

function addNumbers(num1, num2) {
    return num1 + num2;
}
let total = addNumbers(10,20);
console.log(total);


/*
Exercise 2

Declare a function
named multiplyNumbers.

Create 2 parameters.

num1
num2

Return the multiplication.

Store the returned
value in a variable.

Print the variable.

*/

function multiplyNumbers(num1, num2) {

    return num1 * num2;

}

let multiplication = multiplyNumbers(5, 6);

console.log(multiplication);


/*
Challenge 1

Declare a function
named findSquare.

Create 1 parameter.

number

Return the square.

Store the returned
value in a variable.

Print the variable.

*/

function findSquare(number) {

    return number * number;

}

let square = findSquare(8);

console.log(square);


/*
Challenge 2

Declare a function
named calculateSalary.

Create 2 parameters.

salary
bonus

Return the total salary.

Store the returned
value in a variable.

Print the variable.

*/

function calculateSalary(salary, bonus) {

    return salary + bonus;

}

let finalSalary = calculateSalary(25000, 5000);

console.log(finalSalary);


/*
Challenge 3

Declare a function
named calculateDiscount.

Create 2 parameters.

price
discount

Return the final amount.

Store the returned
value in a variable.

Print the variable.

*/

function calculateDiscount(price, discount) {

    return price - discount;

}

let finalAmount = calculateDiscount(2000, 300);

console.log(finalAmount);

/*
=========================================
Part 3 - Return Real Project Examples
=========================================
*/


/*
Exercise 1

Declare a function
named getStudentName.

Create 1 parameter.

studentName

Return the parameter.

Store the returned
value in a variable.

Print the variable.

*/

function getStudentName(studentName) {

    return studentName;

}

let students = getStudentName("Siva");

console.log(students);


/*
Exercise 2

Declare a function
named getRoomType.

Create 1 parameter.

roomType

Return the parameter.

Store the returned
value in a variable.

Print the variable.

*/

function getRoomType(roomType) {

    return roomType;

}

let room = getRoomType("Deluxe");

console.log( "Room Type:" + room);


/*
Challenge 1

Declare a function
named getCompanyName.

Create 1 parameter.

companyName

Return the parameter.

Store the returned
value in a variable.

Print the variable.

*/

function getCompanyName(companyName) {

    return companyName;

}

let companyName = getCompanyName("Google");

console.log(companyName);


/*
Challenge 2

Declare a function
named getCourseName.

Create 1 parameter.

courseName

Return the parameter.

Store the returned
value in a variable.

Print the variable.

*/

function getCourseName(courseName) {

    return courseName;

}

let courseName = getCourseName("JavaScript");

console.log(courseName);


/*
Challenge 3

Declare a function
named getEmployeeDepartment.

Create 1 parameter.

department

Return the parameter.

Store the returned
value in a variable.

Print the variable.

*/

function getEmployeeDepartment(department) {

    return department;

}

let employeeDepartment = getEmployeeDepartment("Frontend");

console.log(employeeDepartment);