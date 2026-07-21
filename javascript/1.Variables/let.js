/*  let Keyword */

/*
Definition:
let is a JavaScript keyword used to create a variable
that stores data values.

Technical Definition:

let is a block-scoped keyword introduced in ES6 (ECMAScript 2015) to declare variables. 
It allows reassignment but does not allow redeclaration in the same scope.

Why do We Use let?

We use let when we want to store data and change it later.

Reassignment 
Definition:

Changing the value of an existing variable is called Reassignment.

Syntax:
let variableName = value;

| Part     | Meaning                    |
| -------- | -------------------------- |
| `let`    | Keyword                    |
| `name`   | Variable Name (Identifier) |
| `=`      | Assignment Operator        |
| `"Siva"` | Value                      |
| `;`      | Statement Terminator       |


Short Notes:
✔ let is used to declare variables.
✔ Variables are used to store data in memory.
✔ let value can be changed (Reassignment allowed).
✔ let cannot be redeclared in the same scope.
✔ let follows block scope.
✔ = is called the Assignment Operator.
✔ console.log() is used to display the stored value.
*/

/* Exercise 1 */

let MobileBrand = ("Samsung");
console.log(MobileBrand);

/* Exercise 2 */

let LaptopBrand =("HP");
console.log(LaptopBrand);

/* Exercise 3 */
let StudentName =("SIVA");
let CollegeName =("MAM");
let Department =("CSE");

console.log("Srudent Name:",StudentName);
console.log("College Name:",CollegeName);
console.log("Deprtment Name:",Department);

/* Exercise 4 */

let HotelName =("SELTEN");
let RoomType =("Deluxe");
let RoomPrice=(2500);

console.log(HotelName);
console.log(RoomType);
console.log(RoomPrice);

/* Exercise 4 (Reassignment)*/

let Stay=("Chennai");
Stay=("Madurai")

console.log(Stay);

/* Exercise 5 (Reassignment)*/

let Amount =(20000);
Amount =(30000);
console.log(Amount);