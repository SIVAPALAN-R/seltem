/* ======================================
   Topic - pop()
====================================== */

/*
Definition:

The pop() method

removes

the last element

from an Array.

Simple Definition:

pop()

removes

the last value

from an Array.

📖 Definition

The pop() method

deletes

the last element

of the Array.

📝 Short Notes

✔ Removes one value.

✔ Removes from the END.

✔ Modifies the original Array.

✔ Returns the removed element.
*/


/*
Challenge 1

Create an Array.

Variable Name

mobileBrands

Values

Samsung
Apple
OnePlus
Vivo

Remove the last brand

using pop().

Print the updated Array.
*/
let mobileBrands = [
    "Samsung",
    "Apple",
    "OnePlus",
    "Vivo"
];

mobileBrands.pop();

console.log(mobileBrands);


/*
Challenge 2

Create an Array.

Variable Name

shoppingItems

Values

Rice
Oil
Sugar
Milk
Eggs

Remove the last item.

Store it in a variable

called

removedItem

Print

1. removedItem

2. Updated Array
*/

let shoppingItem = [
    "Rice",
    "Oil",
    "Sugar",
    "Milk",
    "Eggs"
];

let removedItem = shoppingItem.pop();

console.log("Removed Item :", removedItem);

console.log("Updated Array :", shoppingItem);

/*
Challenge 3

Create an Array.

Variable Name

fruitBasket

Values

Apple
Mango
Orange
Banana
Grapes

Remove the last value

and store it in

lastFruit.

Print

1. lastFruit

2. Updated Array

3. Array Length
*/

let fruitBasket = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes"
];

let lastFruit = fruitBasket.pop();

console.log("Removed Fruit :", lastFruit);

console.log("Updated Array :", fruitBasket);

console.log("Array Length :", fruitBasket.length);

