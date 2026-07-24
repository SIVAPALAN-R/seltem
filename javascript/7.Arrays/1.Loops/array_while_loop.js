/* ======================================
   Topic - Array while Loop
====================================== */

/*
Definition:
A while loop
repeats a block
of code

as long as
the condition
is true.

Simple Definition:
The while loop
keeps running

until the
condition
becomes false.

📖 Definition

Unlike the for loop,

the while loop

doesn't keep

everything

inside one line.

Initialization,

Condition

and

Increment

are written

separately.

📝 Short Notes

✔ Repeats code.

✔ Runs while condition is true.

✔ Initialization is outside.

✔ Increment is inside.

✔ Stops when condition becomes false.


Syntax :
let i = 0;

while (i < arrayName.length) {

    console.log(arrayName[i]);

    i++;

}
*/

/* Exercise 1
Create an Array.

Variable Name

fruitBasket

Values

Apple
Mango
Orange
Banana

Print all values
using while loop.
*/

let fruitBasket =[
   "Apple",
   "Mango",
   "Orange",
   "Banana"
]
let i = 0;
while (i < fruitBasket.length){
   console.log(fruitBasket[i]);
      i++;
   
}

/*
Create an Array.

Variable Name

employeeNames

Values

Siva
Rahul
Arun
Kavin

Print all values
using while loop.
*/

let employeeNamed = [
   "Siva",
   "Ajay",
   "Vasanth",
   "Ajith",
   "Suriya"
]
let named = 0;
while (named< employeeNamed.length){
   console.log("Name " , named + 1, ":", employeeNamed[named]);
   named++;
}

/*
Create an Array.

Variable Name

bikeBrands

Values

Yamaha
Honda
KTM
Royal Enfield
TVS

Print

Bike 1 : Yamaha
Bike 2 : Honda
Bike 3 : KTM
Bike 4 : Royal Enfield
Bike 5 : TVS
*/
let bikeBrands = [
    "Yamaha",
    "Honda",
    "KTM",
    "Royal Enfield",
    "TVS"
];

let bike = 0;

while (bike < bikeBrands.length) {

    console.log("Bike", bike + 1, ":", bikeBrands[bike]);

    bike++;

}

/*
Challenge 2


Create an Array.

Variable Name

movieTitles

Values

Leo
Master
Vikram
Kaithi
Thunivu

Print

Movie 1 : Leo
Movie 2 : Master
Movie 3 : Vikram
Movie 4 : Kaithi
Movie 5 : Thunivu

using while loop.
*/

let movieTitles = [
    "Leo",
    "Master",
    "Vikram",
    "Kaithi",
    "Thunivu"
];

let movieIndex = 0;

while (movieIndex < movieTitles.length) {

    console.log(
        "Movie",
        movieIndex + 1,
        ":",
        movieTitles[movieIndex]
    );

    movieIndex++;

}

/*
Output

Movie 1 : Leo
Movie 2 : Master
Movie 3 : Vikram
Movie 4 : Kaithi
Movie 5 : Thunivu
*/