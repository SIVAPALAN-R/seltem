/* ======================================
   Topic 12.2 - String Assignment Operator (+=)
====================================== */

/*
Definition:
The String Assignment Operator (+=)
is used to append one string to
an existing string.

Simple Definition:
The += operator adds a new string
to an existing string.



📝 Short Notes

✔ += is called the String Assignment Operator.

✔ It appends one string to another.

✔ It updates the existing variable.

✔ It is a shortcut for:
   variable = variable + value;

✔ The output is always a String.

Syntax:
variable += value;

Example:
let message = "Hello";

message += " Siva";

console.log(message);
*/


/* Exercise 1 */

let greeting = "Hello";

greeting += " Siva";

console.log(greeting);


/* Exercise 2 */

let hotelNames = "Luxury";

hotelNames += " Stay";

console.log(hotelNames);


/* Challenge 1

Create a variable called company.

Assign the value:
Selten

Add the text:

" Technologies"

using the += operator.

Print the output.
*/

let companys = "Selten";

companys += " Technologies";

console.log(companys);


/* Challenge 2

Create a variable called movie.

Assign the value:
Good Bad Ugly

Add the text:

" (2025)"

using the += operator.

Print the output.
*/

let movies = "Good Bad Ugly";

movies += " (2025)";

console.log(movies);


/* Challenge 3

Create a variable called customer.

Assign the value:
Siva

Add the text:

" - Premium Member"

using the += operator.

Print the output.
*/

let customers = "Siva";

customers += " - Premium Member";

console.log(customers);