/* ======================================
   Topic - Scope
====================================== */

/*
Definition:
Scope determines
where a variable
can be accessed.

Simple Definition:
Scope decides
where a variable
can be used.

📖 Definition

Variables declared
inside a function
can be used
only inside
that function.

Variables declared
outside a function
can be used
everywhere.

📝 Short Notes

✔ Local Scope
   → Inside function.

✔ Global Scope
   → Outside function.

✔ Local variables
   cannot be used
   outside.

✔ Global variables
   can be used
   inside functions.



Global Variable

✅ Accessible
Inside Function

✅ Accessible
Outside Function

-------------------------

Local Variable

✅ Accessible
Inside Same Function

❌ Not Accessible
Outside Function

*/


/*
======================================
Exercise 1 - Global Scope
======================================

Create a global variable
named company.

Store

"TCS"

Create a function
named employee.

Print company.

Call the function.

*/

let compane = "TCS";

function employee() {

   let = citeed = "chennai";
   console.log(citeed);


}
    console.log(compane);

employee();


/*
======================================
Exercise 2 - Local Scope
======================================

Create a function
named student.

Create a local variable

name

Store

"Siva"

Print the variable.

Call the function.

*/

function student() {

    let name = "Siva";

    console.log(name);

}

student();


/*
======================================
Challenge 1
======================================

Create a global variable

hotel

Store

"Luxury Stay Hotel"

Create a function

booking()

Print hotel.

Call the function.

*/

let hotele = "Luxury Stay Hotel";

function booking() {

console.log(hotele);    

}

booking();


/*
======================================
Challenge 2
======================================

Create a function

movie()

Create a local variable

movieName

Store

"Leo"

Print movieName.

Call the function.

*/

function moviee() {

    let movieName = "Leo";

    console.log(movieName);

}

moviee();


/*
======================================
Challenge 3
======================================

Create a global variable

course

Store

"JavaScript"

Create a function

learning()

Create a local variable

student

Store

"Siva"

Print both variables.

Call the function.

*/

let coursee = "JavaScript";

function learning() {

    let student = "Siva";
    student="Shakthi";

    console.log(coursee);

    console.log(student);

}

learning();