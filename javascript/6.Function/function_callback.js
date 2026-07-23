/* ======================================
   Topic - Callback Function
====================================== */

/*
Definition:
A Callback Function
is a function
passed as
an argument
to another function.

Simple Definition:
A Callback Function
is a function
sent to
another function.

📖 Definition

A Callback Function
is not called directly.

It is passed
to another function,
which calls it later.

📝 Short Notes

✔ Passed as
   an argument.

✔ Received by
   another function.

✔ Called later.

✔ Uses function
   without ().

✔ Used in
   Events,
   setTimeout(),
   Fetch API
   and React.

Syntax : 
function firstFunction() {

}

function secondFunction(callback) {

    callback();

}

secondFunction(firstFunction);

*/



/*
Exercise 1

Create a function
named welcome.

Print

"Welcome"

Create another function
named execute.

Create one parameter
named callback.

Call the callback.

Pass welcome
to execute.

*/

function welcomeed() {
    console.log("WELCOME");
}
function execute (callback) {
    callback();
}
execute(welcomeed);


/*
Exercise 2

Create a function
named student.

Print

"Siva"

Create another function
named run.

Create one parameter
named callback.

Call the callback.

Pass student
to run.

*/

function student() {

    console.log("Siva");

}

function std(callback) {

    callback();

}

std(student);


/*
Challenge 1

Create a function
named hotel.

Print

"Luxury Stay Hotel"

Create another function
named start.

Create one parameter
named callback.

Call the callback.

Pass hotel
to start.

*/

function hotel() {

    console.log("Luxury Stay Hotel");

}

function start(callback) {

    callback();

}

start(hotel);


/*
Challenge 2

Create a function
named employee.

Print

"Employee Login"

Create another function
named executeEmployee.

Create one parameter
named callback.

Call the callback.

Pass employee
to executeEmployee.

*/

function employee() {

    console.log("Employee Login");

}

function executeEmployee(callback) {

    callback();

}

executeEmployee(employee);


/*
Challenge 3

Create a function
named product.

Print

"Laptop Added"

Create another function
named process.

Create one parameter
named callback.

Call the callback.

Pass product
to process.

*/

function product() {

    console.log("Laptop Added");

}

function process(callback) {

    callback();

}

process(product);