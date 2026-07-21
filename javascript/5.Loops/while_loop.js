/* ======================================
   Topic 17 - while Loop
====================================== */

/*
Definition:
A while loop is used to execute
the same block of code
repeatedly as long as
the condition is true.

Simple Definition:
A while loop repeats
the same code again and again
until the condition
becomes false.

📖 Definition

The while loop is used when
we don't know how many times
the code should execute.

📝 Short Notes

✔ Executes code repeatedly.

✔ Checks the condition
   before every iteration.

✔ Stops when the condition
   becomes false.

✔ Used when the number of
   iterations is unknown.

✔ Variable must be updated
   inside the loop to avoid
   an infinite loop.

Syntax:
let count = 1;

while (count <= 5) {

    console.log(count);

    count++;

}

   */

/* Example 1*/
let count = 1;

while (count <= 5) {

    console.log(count);

    count++;

}



/*
Exercise 1

Print numbers
from 1 to 5
using a while loop.

*/

let number = 1;
while (number <=5) { 
    console.log(number);
    number++;
}

/*
Exercise 2

Print countdown
from 10 to 1
using a while loop.

*/

let countDown =10;
while ( countDown >=1){
    console.log(countDown);
    countDown--;
}


/*
Challenge 1

Print Employee IDs

1001 to 1005

using a while loop.

*/

let employeeId =1001;
while (employeeId <=1005){
    console.log(employeeId);
    employeeId++;
}

/*
Challenge 2

Print even numbers

2 to 20

using a while loop.

*/

let evenNumber = 2;
while (evenNumber <=20){
    console.log(evenNumber);
    evenNumber+=2;
}
/*
Challenge 3

Print

★★★★★

5 times

using a while loop.

*/

let Print =1;
while ( Print <=5){
    console.log("*****");
    Print++;
    
}