/* ======================================
   Topic - Array for...in Loop
====================================== */

/*
Definition:
The for...in loop
is used to
access every
index
of an Array.

Simple Definition:
for...in
prints all
Array indexes
one by one.

📖 Definition

Unlike for...of,

which gives values,

for...in

gives indexes.

📝 Short Notes

✔ Gets Index.

✔ Doesn't return values directly.

✔ Mostly used
   with Objects.

✔ Can also be used
   with Arrays.



Syntax:
for (let index in arrayName) {

    console.log(index);

}   

*/


/*
Exercise 1

Create an Array.

Variable Name

countryNames

Values

India
Japan
Canada
Australia

Print only the indexes
using for...in.
*/
let countryNames =[
    "India",
    "USA",
    "UAE",
    "UK"
]
 for (let countryIndex in countryNames ){
    console.log(countryIndex);
 } 

/*
Exercise 2

Create an Array.

Variable Name

bookTitles

Values

Atomic Habits
Rich Dad Poor Dad
Deep Work
Ikigai

Print all values
using for...in.


*/
let bookTitles = [
    "Atomic Habits",
    "Rich Dad Poor Dad",
    "Deep Work",
    "Ikigai"
];
for (let bookIndex in bookTitles){
    console.log(bookTitles[bookIndex]);
}



/*
Challenge 1

Create an Array.

Variable Name

laptopBrands

Values

Dell
HP
Lenovo
Asus

Print

Index : Value

*/
let laptopBrands = [
    "Dell",
    "HP",
    "Lenovo",
    "Asus"
];
for (let laptopIndex in laptopBrands){
    console.log(laptopIndex, ":", laptopBrands[laptopIndex]);
}

/*
Challenge 2

Create an Array.

Variable Name

playerNames

Values

Dhoni
Virat
Rohit
Gill
Hardik

Hint

Use

playerIndex + 1
*/
let playerNames = [
    "Dhoni",
    "Virat",
    "Rohit",
    "Gill",
    "Hardik"
];
for (let playerIndex in playerNames){
    console.log("Player", Number(playerIndex)+1, ":",playerNames[playerIndex]);
}

/*
Challenge 3

Create an Array.

Variable Name

carModels

Values

BMW
Audi
Benz
Toyota
Kia


*/
let carModels = [
    "BMW",
    "Audi",
    "Benz",
    "Toyota",
    "Kia"
];

for (let carIndex in carModels) {

    console.log("Index =", carIndex , "| Value =", carModels[carIndex]);

}