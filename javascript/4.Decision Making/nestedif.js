/* ======================================
   Topic 15.4 - Nested if Statement
====================================== */

/*
Definition:
A Nested if statement is an
if statement inside another
if statement.

Simple Definition:
Nested if means an if statement
inside another if statement.

The inner if statement executes
only when the outer if condition
is true.

📖 Definition

A Nested if statement is used
when one condition depends on
another condition.

First, JavaScript checks the
outer if condition.

If it is true,

JavaScript enters the outer block
and checks the inner if condition.

If the outer condition is false,

JavaScript skips the inner
condition completely.

📝 Short Notes

✔ Nested if means
   if inside another if.

✔ Used when one condition
   depends on another condition.

✔ Outer condition executes first.

✔ Inner condition executes
   only if the outer condition
   is true.

✔ If the outer condition is false,
   JavaScript skips the inner if.

Syntax:

if(condition1){

    if(condition2){

        // Code

    }

}

Flow

Condition 1

↓

True?

↓

YES

↓

Condition 2

↓

True?

↓

Execute Code

↓

End

OR

Condition 1

↓

False

↓

Skip Inner if

↓

End

Example:

let userLoggedIn = true;
let isAdmin = true;

if (userLoggedIn) {

    if (isAdmin) {

        console.log("Welcome Admin");

    }

}
*/

/* Exercise 1 */

let userLoggedIn = true;
let isAdmin = true;

if (userLoggedIn) {

    console.log("User Logged In");

    if (isAdmin) {

        console.log("Welcome Admin");

    }

}

/* Exercise 2 */

let customerLoggedIn = true;
let roomsAvailable = false;

if (customerLoggedIn) {

    console.log("Customer Logged In");

    if (roomsAvailable) {

        console.log("Booking Confirmed");

    }

}

/* Challenge 1
Create a variable called accountVerified.

Assign the value:

true

Create another variable called otpVerified.

Assign the value:

true

If accountVerified is true,

Print:

Account Verified

Inside that block,

If otpVerified is true,

Print:

Login Successful  */

let accountsVerified = true;
let otpVerified = true;

if (accountsVerified) {
    console.log("Account Verified");

    if (otpVerified) {
        console.log("Login Successful");
    }
    
}

/* Challenge 2
Create a variable called paymentSuccess.

Assign the value:

true

Create another variable called invoiceGenerated.

Assign the value:

false

If paymentSuccess is true,

Print:

Payment Received

Inside that block,

If invoiceGenerated is true,

Print:

Invoice Ready */

let paymentSuccess = true;
let invoiceGenerated = false;

if (paymentSuccess) {
    console.log("Payment Received");

    if(invoiceGenerated) {
        console.log("Invoice Ready");
    }
}


/* Challenge 3
Create a variable called wifiConnected.

Assign the value:

false

Create another variable called internetAvailable.

Assign the value:

true

If wifiConnected is true,

Print:

WiFi Connected

Inside that block,

If internetAvailable is true,

Print:

Internet Available  */

let wifiConnected = false;
let internetAvailable = true;

if (wifiConnected) {
    console.log("Wifi connected");

    if (internetAvailable) {
        console.log("Internet Available");
    }
}


/* Challenge 4
Create a variable called examRegistered.

Assign the value:

true

Create another variable called hallTicketDownloaded.

Assign the value:

true

If examRegistered is true,

Print:

Registration Completed

Inside that block,

If hallTicketDownloaded is true,

Print:

Ready for Exam */


let examRegistered = true;
let hallTicketDownloaded = true;

if (examRegistered) {
    console.log("Registration Completed");

    if (hallTicketDownloaded) {
        console.log("Ready for Exam");
    }
}


/* Challenge 5
Create a variable called cardInserted.

Assign the value:

true

Create another variable called pinCorrect.

Assign the value:

false

If cardInserted is true,

Print:

Card Detected

Inside that block,

If pinCorrect is true,

Print:

Transaction Allowed */

let cardInserted = true;
let pinCorrect = false;

if (cardInserted) {
    console.log("Card Deteected");

    if (pinCorrect) {
        console.log("Transaction Allowed");
    }
}