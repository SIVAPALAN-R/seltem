/* ======================================
   Topic 15.2 - if...else Statement
====================================== */

/*
Definition:
The if...else statement is used to
execute one block of code when the
condition is true and another block
of code when the condition is false.

Simple Definition:
if...else checks a condition.

If the condition is true,
the if block runs.

If the condition is false,
the else block runs.

📖 Definition

The if...else statement evaluates
a condition.

If the condition returns true,
JavaScript executes the code
inside the if block.

If the condition returns false,
JavaScript executes the code
inside the else block.

📝 Short Notes

✔ if...else is a Decision Making statement.

✔ It checks only one condition.

✔ if block executes when the
   condition is true.

✔ else block executes when the
   condition is false.

✔ Either the if block or the
   else block will execute.

✔ Both blocks will never execute
   at the same time.

Syntax:

if(condition){

    // True Block

}
else{

    // False Block

}

Flow

Condition

↓

true
↓

if Block

↓

End

OR

Condition

↓

false
↓

else Block

↓

End

Example:

let marks = 45;

if (marks >= 35) {

    console.log("Pass");

}
else {

    console.log("Fail");

}
*/

/* Exercise 1 */

let walletBalance = 2500;

if (walletBalance >= 1000) {
   console.log(" Purchase Allowed ");
}

else {
   console.log( " Insufficient Balance ");
}

/* Exercise 2 */

let internetConnection = false;

if (internetConnection){
   console.log(" Connected ");
}
else {
   console.log( "No Internet" );
}

/* Challenge 1
Create a variable called fuelLevel.

Assign the value:

15

If fuelLevel is greater than or equal to
20,

Print:

Enough Fuel

Otherwise print:

Refill Fuel */

let fuelLevel = 15;
if (fuelLevel >= 20) {
   console.log(" Enough Fuel ");
}
else {
   console.log( "Refill Fuel" );
}

/* Challenge 2
Create a variable called examScore.

Assign the value:

30

If examScore is greater than or equal to
35,

Print:

Pass

Otherwise print:

Fail */

let examScore = 30;
if (examScore >= 35) {
   console.log( " Pass " );
}
else {
   console.log( " Fail" );
}

/* Challenge 3
 Create a variable called wifiStatus.

Assign the value:

true

If wifiStatus is true,

Print:

Connected

Otherwise print:

Disconnected */

let wifiStatus = true;
if (wifiStatus){
   console.log("Connected");
}
else {
   console.log("Disconnected");
}

/* challenge 4
 Create a variable called stockQuantity.

Assign the value:
0

If stockQuantity is greater than 0,

Print:
In Stock

Otherwise print:
Out of Stock  */

let stockQuantity = 0;
if (stockQuantity > 0){
   console.log( "In Stock");
}
else {
   console.log("Out of stock");
}

/* Challenge 5
Create a variable called accountVerified.

Assign the value:
false

If accountVerified is true,

Print:
Login Successful

Otherwise print:
Verification Required */

let accountVerified = false;
if (accountVerified) {
   console.log("Login Successful");
}
else {
   console.log("Verification Required");
}
