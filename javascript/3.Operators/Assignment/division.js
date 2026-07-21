/* ======================================
   Topic 6.5 - Division Assignment Operator (/=)
====================================== */

/*
Definition:
The Division Assignment Operator (/=) divides the current variable value by another value and stores the result back in the same variable.

Simple Definition:
The /= operator divides and updates the value.

Short Notes

✔ /= is called the Division Assignment Operator.

✔ It divides the current value.

✔ It updates the variable automatically.

✔ It is a shortcut for:

variable = variable / value;

Syntax:
variable /= value;

Example:
let salary = 30000;

salary /= 3;

console.log(salary); // 10000
*/

/* Exercise 1 */

let totalSalary = 60000;

totalSalary /= 3;

console.log(totalSalary);

/* Exercise 2 */

let mark = 450;

mark /= 5;

console.log(mark);

/* Challenge 1

A hotel bill is ₹18,000.

It is shared equally among 6 friends.

Print how much each friend should pay using the /= operator. */

let hotelBill = 18000;
hotelBill /= 6;

console.log(hotelBill);


/* Challenge 2

A company pays a total salary of ₹96,000.

It is equally divided among 8 employees.

Print the salary of each employee using the /= operator.*/

let companySalary = 96000;
companySalary /= 8;

console.log(companySalary);


/* Challenge 3

A teacher has 720 answer sheets.

They are distributed equally among 12 classes.

Print how many answer sheets each class receives using the /= operator.*/

let teacher = 720;
teacher /= 12;

console.log(teacher);
