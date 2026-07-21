/* ======================================
   Topic 6.2 - Addition Assignment Operator (+=)
====================================== */

/*
Definition:
The Addition Assignment Operator (+=) adds a value to the current variable value and stores the result back in the same variable.

Short Notes:

✔ += is called the Addition Assignment Operator.

✔ It adds a value to the existing value.

✔ It updates the variable automatically.

✔ It is a shortcut for variable = variable + value.

Simple Definition:
The += operator adds and updates the value.

Syntax:
variable += value;

Example:
let marks = 80;

marks += 10;

console.log(marks); // 90
*/

/* Exercise 1 */

let marks = 80;
marks += 10;

console.log(marks);

/* Exercise 2 */

let walletBalance = 500;
walletBalance += 250;

console.log(walletBalance);

/* Challenge 1

A customer has ₹2,000 in their wallet.

They add ₹500.

Print the updated wallet balance. */

let customerWallet = 2000;
customerWallet += 500;

console.log(customerWallet);

/* Challenge 2

A student scored 350 marks.

Grace marks of 20 are added.

Print the final marks.  */

let studentScore = 350;
studentScore += 20;

console.log(studentScore);

/* Challenge 3

A hotel room costs ₹2,500.

Extra services cost ₹750.

Print the final bill using the += operator. */

let roomCost = 2500;
roomCost += 750;

console.log(roomCost);
