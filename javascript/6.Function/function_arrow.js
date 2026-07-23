/* ======================================
   Topic - Arrow Function
====================================== */

/*
Definition:
An Arrow Function
is a shorter
way to write
a function.

Simple Definition:
Arrow Function
is a short
syntax for
Function Expression.

📖 Definition

Arrow Functions
were introduced
in ES6.

They provide
a cleaner and
shorter syntax
for writing
functions.

📝 Short Notes

✔ Introduced in ES6.

✔ Uses =>

✔ Mostly uses const.

✔ Can have parameters.

✔ Can return values.
*/


/*
======================================
Part 1 - Basic Arrow Function
======================================
*/

/*
Exercise 1

Create an Arrow Function
named welcome.

Print

"Welcome to JavaScript"

Call the function.

*/

const welcomee = () => {
    console.log("Welcome to JavaScript");
}
welcomee();


/*
Exercise 2

Create an Arrow Function
named hotel.

Print

"Luxury Stay Hotel"

Call the function.

*/

const hotell = () => {

    console.log("Luxury Stay Hotel");

};

hotell();


/*
======================================
Part 2 - Arrow Function with Parameters
======================================
*/

/*
Exercise 3

Create an Arrow Function
named student.

Create one parameter.

name

Print the parameter.

Call the function.

*/

const studentt = (name) => {
    console.log(name);
}
studentt ("Siva");


/*
Exercise 4

Create an Arrow Function
named employee.

Create 3 parameters.

employeeId
employeeName
department

Print all parameters.

Call the function.

*/

const employeee = (employeeId, enmployeeName, department) => {
    console.log(employeeId);
    console.log(enmployeeName);
    console.log(department);
}
employeee (101 , "Siva" , "Frontend");


/*
======================================
Part 3 - Arrow Function with Return
======================================
*/

/*
Challenge 1

Create an Arrow Function
named addNumbers.

Create 2 parameters.

Return the addition.

Store the returned
value in a variable.

Print the variable.

*/

const addNumberss = (num1, num2) => {

    return num1 + num2;

};

let totall = addNumberss(10, 20);

console.log(totall);


/*
Challenge 2

Create an Arrow Function
named calculateSalary.

Create 2 parameters.

salary
bonus

Return total salary.

Store the returned
value in a variable.

Print the variable.

*/
const calculateSalaryy = (salary , bonus) => {
    return salary +  bonus;
}
let finalSalaryy = calculateSalaryy(25000,5000);
console.log(finalSalaryy)


/*
Challenge 3

Create an Arrow Function
named calculateDiscount.

Create 2 parameters.

price
discount

Return final amount.

Store the returned
value in a variable.

Print the variable.

*/

const calculateDiscountt = (price, discount) => {

    return price - discount;

};

let finalAmounte = calculateDiscountt(2000, 300);

console.log(finalAmounte);


/*
Bonus Challenge

Create an Arrow Function
named calculateGST.

Create one parameter.

amount

Return

amount * 18 / 100

Store the returned
value in a variable.

Print the variable.

*/

const calculateGST = (amount) => {

    return amount * 18 / 100;

};

let gst = calculateGST(5000);

console.log(gst);