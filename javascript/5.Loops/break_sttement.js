/* ======================================
   Topic 20 - break Statement
====================================== */

/*
Definition:
The break statement is used
to immediately stop
a loop or switch statement.

Simple Definition:
break exits
the loop immediately.

📖 Definition

The break statement
terminates the loop
when a specific condition
becomes true.

📝 Short Notes

✔ Stops the loop immediately.

✔ Used inside if condition.

✔ Works with for, while,
   do...while and switch.

✔ Remaining iterations
   are not executed.

✔ Commonly used in
   searching and validation.
*/


/*
Exercise 1

Print numbers

1 to 10

Stop when
number becomes 6.

*/

for (let number = 1; number <=10; number++){
    if (number ===6){
        break;
    }
    console.log(number);
}

/*
Exercise 2

Print

Employee IDs

1001 to 1010

Stop at 1007.

*/

for (let employeed = 1001; employeed <=1010; employeed++){
    if(employeed===1007){
       break;
    }
     console.log(employeed);
}

/*
Challenge 1

Print even numbers

2 to 20

Stop at 14.

*/

for (let even = 2; even <= 20; even += 2) {

    if (even === 14) {
        break;
    }

    console.log(even);

}

/*
Challenge 2

Print

50
45
40
35
30
25

Stop at 20.

*/

for (let number = 50; number >= 20; number -= 5) {

    if (number === 20) {
        break;
    }

    console.log(number);

}

/*
Challenge 3

Print odd numbers

1 to 15

Stop at 11.

*/

for (let odd = 1; odd <= 15; odd += 2) {

    if (odd === 11) {
        break;
    }

    console.log(odd);

}

/*
Challenge 2

Print

50
45
40
35
30
25

Stop at 20.

*/

for (let number = 50; number >= 20; number -= 5) {

    if (number === 20) {
        break;
    }

    console.log(number);

}

/*
Challenge 3

Print odd numbers

1 to 15

Stop at 11.

*/

for (let odd = 1; odd <= 15; odd += 2) {

    if (odd === 11) {
        break;
    }

    console.log(odd);

}