/* ======================================
   Topic 23.5 - Arguments
====================================== */

/*
Definition:
An argument is the
actual value passed
to a function
when it is called.

Simple Definition:
An argument is
the value passed
to a parameter.

📖 Definition

Arguments provide
actual data to
the function's
parameters.

📝 Short Notes

✔ Passed while
   calling the function.

✔ Sent to parameters.

✔ Can be numbers,
   strings, booleans, etc.

✔ One parameter
   receives one argument.

✔ Makes functions
   dynamic and reusable.
*/

/*
Exercise 1

Declare a function
named student.

Create one parameter.

name

Call the function
with the argument

"Siva"

*/
 
function student(name) {
    console.log(name);
}
student("Siva");


/*
Exercise 2

Declare a function
named employee.

Create two parameters.

employeeId
employeeName

Call the function with

101
"Siva"

*/

function employees(employeeId,employeeName){
    console.log(employeeId);
    console.log(employeeName);
}
employees(101,"siva")

/*
Challenge 1

Declare a function
named hotel.

Create three parameters.

roomNumber
roomType
price

Call the function with

201
"Deluxe"
5000

*/

function hotel(roomNumber,roomType,price){
    console.log(roomNumber);
    console.log(roomType);
    console.log(price);
}
hotel (201,"Deluxe" ,  500);


/*
Challenge 3

Declare a function
named company.

Create four parameters.

companyName
employeeId
employeeName
department

Call the function with

"TCS"
101
"Siva"
"Frontend"

*/

function company(companyName, employeeId, employeeName, department) {

    console.log(companyName);
    console.log(employeeId);
    console.log(employeeName);
    console.log(department);

}

company("TCS", 101, "Siva", "Frontend");