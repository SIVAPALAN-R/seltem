/* ======================================
   Topic 15.5 - switch Statement
====================================== */

/*
Definition:
A switch statement is used
to execute one block of code
from multiple cases.

Simple Definition:
switch is used to compare
one value with multiple cases.

📖 Definition

The switch statement checks
the value of a variable or expression.

If a matching case is found,

JavaScript executes that case.

The break statement stops
the execution.

If no case matches,

the default block executes.

📝 Short Notes

✔ Used to compare one value.

✔ Used instead of multiple
   else if statements.

✔ break stops execution.

✔ default executes when
   no case matches.

✔ Only one matching case executes.

Syntax:

switch(variable){

    case value1:

        // Code

        break;

    case value2:

        // Code

        break;

    default:

        // Code

}
*/

/* Exercise 1 */

let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");

}

/* Exercise 2 */

let grade = "B";

switch (grade) {

    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Good");
        break;

    case "C":
        console.log("Average");
        break;

    default:
        console.log("Fail");

}

/* Challenge 1
Create a variable called month.

Assign the value:

5

Use switch.

1 → January

2 → February

3 → March

4 → April

5 → May

Otherwise:

Invalid Month */

let month=5;

switch(month) {
    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("February");
        break;   
    case 3 :
        console.log("March");
        break;  
    case 4 :
        console.log("April");
        break;  
    case 5 :
        console.log("May");
        break; 
        
     default :
     console.log("Invalid Month")   
}

/* Challenge 2
Create a variable called paymentMethod.

Assign the value:

"UPI"

Use switch.

"Cash" → Cash Payment

"Card" → Card Payment

"UPI" → UPI Payment

Otherwise:

Invalid Payment Method */

let paymentMethod = "UPI";

switch(paymentMethod){
    case "cash" :
        console.log("Cash Payment");
        break;
     
    case "card" :
        console.log("Card Payment");
        break;
        
    case "UPI":
        console.log("UPI Payment");  
        break;
        
    default :
         console.log("Invalid Payment Method");    
}

/* Challenge 3
Create a variable called language.

Assign the value:

"Tamil"

Use switch.

"English" → Hello

"Tamil" → Vanakkam

"Hindi" → Namaste

Otherwise:

Language Not Supported */

let language = "Tamil";

switch(language){
    case "English":
        console.log("Hello");
        break;

     case "Tamil":
        console.log("Vanakkam");
        break;  
        
     case "Hindi":
        console.log("Namaste");
        break;    

    default:
        console.log("Language Not Supported");    
    }

    /* Challenge 4
Create a variable called roomType.

Assign the value:

"Deluxe"

Use switch.

"Standard" → Standard Room

"Deluxe" → Deluxe Room

"Suite" → Luxury Suite

Otherwise:

Room Not Available */

let roomType="Deluxe";

switch(roomType){

    case "Standard":
    console.log("Standard Room");
    break;

     case "Deluxe":
    console.log("Deluxe Room");
    break;

     case "Suite":
    console.log("Luxury Suite");
    break;

    default:
        console.log("Room Not Availabkle");


}

/* Challenge 5
Create a variable called trafficLight.

Assign the value:

"Yellow"

Use switch.

"Red" → Stop

"Yellow" → Ready

"Green" → Go

Otherwise:

Invalid Signa */

let trafficLight = "Yellow";

switch(trafficLight) {

case "Red":
    console.log("Stop");
    break;
case "Yellow":
    console.log("Ready");
    break;
 case "Green":
    console.log("Go");
    break; 
default:
    console.log("Invalid Signal");      
}