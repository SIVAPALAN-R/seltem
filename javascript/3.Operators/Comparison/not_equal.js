/* ======================================
   Topic 7.3 - Not Equal Operator (!=)
====================================== */

/*
Definition:
The Not Equal Operator (!=) compares two values.
If the values are not equal, it returns true.
If the values are equal, it returns false.


hort Notes

✔ != is called the Not Equal Operator.

✔ It compares two values.

✔ It returns true or false.

✔ It performs type conversion (type coercion) before comparing values.

✔ The return type is always Boolean.
Simple Definition:
The != operator checks whether two values are different.

Syntax:
value1 != value2;

Example:
console.log(10 != 20);   // true
console.log(10 != 10);   // false
*/

/* Exercise 1 */

let num = 24;
console.log(num != 18);

/* Exercise 2 */

let compName = "Selten";

console.log(compName != "Google");

/* Challenge 1

Create a variable called hotelName.

Assign the value:

KGR Hotel

Compare it with:

Selten Hotel

using the != operator.

Print the output */

let hName = "KGR Hotel";

console.log(hName != "Selten Hotel")

/*Challenge 2

Create a variable called ticketPrice.

Assign the value:

350

Compare it with:

500

using the != operator.

Print the output. */

let tkPrice = 350;

console.log(tkPrice != 500);



/*Challenge 3

Create a variable called bookingId.

Assign the value:

101

Compare it with:

"101"

using the != operator.

Print the output. */

let bkId = 101;

console.log(bkId != "101");

