/* ======================================
   Topic 6 - const
====================================== 

Easy Definition

const is a JavaScript keyword used to create a variable whose value cannot be changed after it is assigned.

Technical Definition

const is a block-scoped keyword introduced in ES6 (2015) to declare variables with constant (fixed) values.
 It does not allow reassignment or redeclaration in the same scope.

 Why do we use const?

We use const when the value should never change during the program.

Real-Life Example

Your country is India.

Country = India

It doesn't change while your program is running.

So we use:

const country = "India";

Short Notes
✔ const is a keyword.
✔ Used to create constant variables.
✔ Introduced in ES6 (2015).
✔ Reassignment ❌
✔ Redeclaration ❌
✔ Must assign a value while creating.
✔ Recommended for fixed values.


Syntax
const variableName = value;

const country = "India";

| Part      | Meaning              |
| --------- | -------------------- |
| `const`   | Keyword              |
| `country` | Variable Name        |
| `=`       | Assignment Operator  |
| `"India"` | Value                |
| `;`       | Statement Terminator |


*/

/* Exercise 1 */
const dateofBirth = ("08-07-2003");

console.log(dateofBirth);


/* Exercise 2  Reassignment ❌*/

const country =("India");
country =("USA")
console.log(country);

/* Exercise 3 Redeclaration ❌*/

const age =("23");
const age = ("24");

console.log(age);



