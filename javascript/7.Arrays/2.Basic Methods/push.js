/* ======================================
   Topic - push()
====================================== */

/*
Definition:

The push() method

adds one or more

elements

to the END

of an Array.

Simple Definition:

push()

adds new values

at the END

of an Array.

📖 Definition

The push() method

inserts

new element(s)

after the

last element

of the Array.

📝 Short Notes

✔ Adds one or more values.

✔ Adds at the END.

✔ Modifies the original Array.

✔ Returns the new length of the Array.


Syntax:
Add One Value
arrayName.push(value);
*/

/* Exercise 1
Create an Array.

Variable Name

movieTitles

Values

Leo
Master

Add

Vikram

using push().

Print the updated Array.
*/
let movieTitles =[
    "Mankatha",
    "Thuvivu",
]
movieTitles.push("Good Bad Ugly");
console.log(movieTitles);

/* Exercise 2
Create an Array.

Variable Name

courseNames

Values

HTML
CSS

Add

JavaScript

using push().

Print the updated Array.
*/

let courseNames =[
    "HTML",
    "CSS"
]
courseNames.push("javaScript","React.Js");
console.log(courseNames);


/* Challenge 1
Create an Array.

Variable Name

shoppingItems

Values

Rice
Oil
Sugar

Add

Milk
Eggs
Bread

using ONE push().

Print the updated Array.
*/

let shoppingItems = [
    "Rice",
    "Oil",
    "Sugar"
]
shoppingItems.push("Milk", "Eggs", "Bread");
console.log(shoppingItems);