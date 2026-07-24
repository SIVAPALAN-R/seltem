/* ======================================
   Topic - shift()
====================================== */

/*
Definition:

The shift() method

removes

the first element

from an Array.

Simple Definition:

shift()

removes

the first value

from an Array.

📖 Definition

The shift() method

deletes

the first element

of the Array.

📝 Short Notes

✔ Removes one value.

✔ Removes from the START.

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

Remove the first brand

using shift().

Print the updated Array.
*/

let mobileBrand = [
    "Samsung",
    "Apple",
    "OnePlus",
    "Vivo"
];

mobileBrand.shift();

console.log(mobileBrand);


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

Remove the first item.

Store it in a variable

called

removedItem

Print

1. removedItem

2. Updated Array
*/

let shoppingItemss = [
    "Rice",
    "Oil",
    "Sugar",
    "Milk",
    "Eggs"
];

let removedItems = shoppingItemss.shift();

console.log("Removed Item :", removedItems);

console.log("Updated Array :", shoppingItemss);


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

Remove the first value

and store it in

firstFruit.

Print

1. firstFruit

2. Updated Array

3. Array Length
*/

let fruitBaskets = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes"
];

let firstFruits = fruitBaskets.shift();

console.log("Removed Fruit :", firstFruits);

console.log("Updated Array :", fruitBaskets);

console.log("Array Length :", fruitBaskets.length);