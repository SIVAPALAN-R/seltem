/* ======================================
   Topic 16.2 - for Loop
====================================== */

/*
Definition:
A for loop is used to execute
the same block of code
multiple times until
a condition becomes false.

Simple Definition:
A for loop repeats
the same code again and again
based on a condition.

📖 Definition

The for loop is used when
we know how many times
the code should execute.

📝 Short Notes

✔ Executes code multiple times.

✔ Used when the number of
   iterations is known.

✔ Stops when the condition
   becomes false.

✔ Reduces duplicate code.

✔ Most commonly used loop
   in JavaScript.
*/


/* Challenge 1 

Print the multiplication table of 7.  */

for ( let table=1; table <=10; table++){
    console.log("7 x " + table + " = " + (7 * table));}


/* Challenge 2
Print invoice numbers. */ 

for ( let invoice = 2001; invoice <= 2005; invoice++){
    console.log(" Invoice No : " + invoice);
}

/* Challenge 3 
Print even numbers.*/

for ( let even = 20; even >=10; even-=2){
    console.log(even);
}

/* challenge 4
Print movie ticket numbers. */

for ( let ticket = 101; ticket <= 105; ticket ++ ) {
    console.log("Ticket : T"+ticket);
}

/* Challenge 5 
Print floors in reverse order.*/

for ( let reverse = 10; reverse >=5 ; reverse -- ) {
    console.log("Floor " + reverse);
}

/* Challenge 6 
Print:

5
10
20
40
80
160

⚠️ This time don't use +=.

Think:

What operation changes:
5 → 10
10 → 20
20 → 40*/

for ( let moduleNumber =5; moduleNumber <= 160 ; moduleNumber *= 2  ) 
    console.log( moduleNumber);

/* Challenge 7 
Print:

1
2
4
8
16
32
64
128 */

for ( let multiple = 1; multiple <=128; multiple =multiple *2)
{
    console.log(multiple);
}