/* ======================================
   Topic 18 - do...while Loop
====================================== */

/*
Definition:
A do...while loop is used to execute
a block of code first,
then it checks the condition.

Simple Definition:
A do...while loop always executes
the code at least one time,
then checks the condition.

📖 Definition

The do...while loop is used when
the code must execute
at least one time,
even if the condition is false.

📝 Short Notes

✔ Executes the code first.

✔ Checks the condition later.

✔ Always runs at least one time.

✔ Useful for menus,
   login systems,
   and user input.

✔ Condition is checked
   after execution.

Syntax:
let number = 1;

do {

    console.log(number);

    number++;

} while (number <= 5);

   */




/*
Exercise 1

Print numbers

1 to 5

using a do...while loop.

*/

let numbers = 1;

do {

    console.log(numbers);

    numbers++;

} while (numbers <= 5);



/*
Exercise 2

Print countdown

10 to 1

using a do...while loop.

*/

let countDowns = 10;

do {

    console.log(countDowns);

    countDowns--;

} while (countDowns >= 1);





/*
Challenge 1

Print Employee IDs

1001 to 1005

using a do...while loop.

*/

let employeeIds = 1001;

do {

    console.log(employeeIds);

    employeeIds++;

} while (employeeIds <= 1005);



/*
Challenge 2

Print even numbers

2 to 20

using a do...while loop.

*/

let evenNumbers = 2;

do {

    console.log(evenNumbers);

    evenNumbers += 2;

} while (evenNumbers <= 20);



/*
Challenge 3

Print

★★★★★

5 times

using a do...while loop.

*/

let star = 1;

do {

    console.log("★★★★★");

    star++;

} while (star <= 5);