/* ======================================
   Topic 22 - Infinite Loop
====================================== */

/*
Definition:
An infinite loop is a loop
that never stops because
its condition always
remains true.

Simple Definition:
A loop that never ends
is called an
infinite loop.

📖 Definition

An infinite loop occurs
when the condition
never becomes false.

📝 Short Notes

✔ Runs forever.

✔ Condition always true.

✔ Missing update causes
   infinite loop.

✔ Wrong update direction
   also causes infinite loop.

✔ Can freeze the browser.
*/


/*
Exercise 1

Fix the code.

*/

let num = 1;

while (num <= 5) {

    console.log(num);

    num++;

}


/*
Exercise 2

Fix the code.

*/

let counted = 10;

while (counted >= 1) {

    console.log(counted);

    counted--;

}


/*
Challenge 1

Fix the code.

*/

for (let i = 1; i <= 5; i++) {

    console.log(i);

}


/*
Challenge 2

Fix the code.

*/

let value = 5;

while (value <= 10) {

    console.log(value);

    value++;

}


/*
Challenge 3

Fix the code.

*/

let number2 = 20;

while (number2 >= 10) {

    console.log(number2);

    number2--;

}