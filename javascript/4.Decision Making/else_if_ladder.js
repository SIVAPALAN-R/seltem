/* ======================================
   Topic 15.3 - else if Ladder
====================================== */

/*
Definition:
The else if ladder is used to
check multiple conditions.

Simple Definition:
The else if ladder checks
more than one condition.

If the first condition is true,
its block executes.

If the first condition is false,
JavaScript checks the next condition.

It continues checking until
a condition becomes true.

If none of the conditions are true,
the else block executes.

📖 Definition

The else if ladder is a Decision
Making statement used to execute
one block of code from multiple
conditions.

JavaScript checks the conditions
from top to bottom.

The first condition that becomes
true is executed.

After executing one block,
JavaScript skips the remaining
conditions.

If no condition is true,
the else block executes.

📝 Short Notes

✔ Used to check multiple conditions.

✔ JavaScript checks conditions
   from top to bottom.

✔ The first true condition executes.

✔ Remaining conditions are skipped.

✔ If all conditions are false,
   the else block executes.


In else if,

JavaScript always checks
conditions from TOP to BOTTOM.

↓

The FIRST true condition
executes.

↓

After that,

JavaScript STOPS.

↓

It never checks
the remaining conditions.


Syntax:

if(condition1){

    // Code

}
else if(condition2){

    // Code

}
else if(condition3){

    // Code

}
else{

    // Code

}

Flow

Condition 1

↓

true
↓

Execute

↓

End

OR

false

↓

Condition 2

↓

true
↓

Execute

↓

End

OR

false

↓

Condition 3

↓

true
↓

Execute

↓

End

OR

false

↓

else Block

↓

End

Example:

let percentage = 82;

if (percentage >= 90) {

    console.log("Grade A");

}
else if (percentage >= 75) {

    console.log("Grade B");

}
else if (percentage >= 50) {

    console.log("Grade C");

}
else {

    console.log("Fail");

}
*/

/* Exercise 1 */
let percentage = 82;

if (percentage >= 90) {
    console.log("Grade A");
}
else if (percentage >= 75) {
    console.log("Grade B");
}
else if (percentage >= 50) {
    console.log("Grade c");
}
else {
    console.log("Fail");
}

/* Exercise 2 */

let shoppingAmount = 6500;

if (shoppingAmount >= 10000) {

    console.log("30% Discount");

}
else if (shoppingAmount >= 5000) {

    console.log("20% Discount");

}
else if (shoppingAmount >= 1000) {

    console.log("10% Discount");

}
else {

    console.log("No Discount");

}

/* Challenge 1
Create a variable called experience.

Assign the value:

4

If experience is greater than or equal to 8,

Print:

Senior Developer

Else if experience is greater than or equal to 5,

Print:

Mid Level Developer

Else

Print:

Junior Developer */

let experience = 4;
if (experience >= 8) {
    console.log("Senior Developer");
}
else if (experience >= 5) {
    console.log("Mid Level Developer");
}

else {
    console.log("Junior Developer");
}

/*  Challenge 2
Create a variable called attendance.

Assign the value:

72

If attendance is greater than or equal to 90,

Print:

Excellent Attendance

Else if attendance is greater than or equal to 75,

Print:

Good Attendance

Else

Print:

Low Attendance */

let attendance = 72;

if (attendance >= 90){
    console.log("Excellent Attendance");
}
else if (attendance >= 75) {
    console.log("Good Attendance");
}
else {
    console.log("Low Attendance");
}

/* Challenge 3
Create a variable called cartValue.

Assign the value:

1200

If cartValue is greater than or equal to 5000,

Print:

Free Delivery + Gift

Else if cartValue is greater than or equal to 1000,

Print:

Free Delivery

Else

Print:

Delivery Charges Apply */

let cartValue = 1200;

if (cartValue >= 5000) {
    console.log("Free Delivery + Gift");
}
else if (cartValue >= 1000) {
    console.log("Free Delivery");
}
else {
    console.log("Delivery Charge Apply");
}

/* Challenge 4
Create a variable called signalStrength.

Assign the value:

35

If signalStrength is greater than or equal to 80,

Print:

Excellent Signal

Else if signalStrength is greater than or equal to 50,

Print:

Good Signal

Else

Print:

Weak Signal */

let signalStrength =35;

if (signalStrength >= 80 ) {
    console.log("Excellent Signal");
}
else if (signalStrength >= 50) {
    console.log("Good Signal");
}
else {
    console.log("Weak Signal");
}

/* Challenge 5
Create a variable called storageSpace.

Assign the value:

5

If storageSpace is greater than or equal to 100,

Print:

Plenty of Storage

Else if storageSpace is greater than or equal to 20,

Print:

Storage Available

Else

Print:

Low Storage
 */

let storageSpace = 5;

if (storageSpace >= 100) {
    console.log("Plenty storage");
}
else if (storageSpace >= 20) {
    console.log("Storage Available");
}
else {
    console.log("Low Storage");
}