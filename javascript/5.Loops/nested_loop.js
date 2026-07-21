/* ======================================
   Topic 19 - Nested Loop
====================================== */

/*
Definition:
A nested loop is a loop
inside another loop.

Simple Definition:
One loop
inside another loop
is called
a nested loop.

📖 Definition

The outer loop executes first.
For every one execution
of the outer loop,
the inner loop
executes completely.

📝 Short Notes

✔ Loop inside another loop.

✔ Outer loop starts first.

✔ Inner loop finishes completely.

✔ Then outer loop
   goes to next iteration.

✔ Used for patterns,
   tables and grids.

Syntax:
for (Outer Loop) {

    for (Inner Loop) {

    }

}

*/
/*Example*/

for (let floor = 1; floor <= 2; floor++) {

    console.log("Floor " + floor);

    for (let room = 1; room <= 3; room++) {

        console.log("Room " + room);

    }

}

/*
Exercise 1

Print

Department 1
Employee 1
Employee 2
Employee 3

Department 2
Employee 1
Employee 2
Employee 3

using nested for loop.

*/

for  ( let Department = 1; Department <=2 ; Department++){
    console.log("Department " + Department);

    for (let EmployeesId =1; EmployeesId <=3; EmployeesId++){
        console.log("Employee " + EmployeesId)
    }

}


/*
Exercise 2

Print

Week 1
Day 1
Day 2
Day 3

Week 2
Day 1
Day 2
Day 3

Week 3
Day 1
Day 2
Day 3

using nested for loop.

*/

for (let Week =1; Week <= 3; Week++){
    console.log("Week " + Week);
    for (let day = 1; day<=3; day++){
        console.log("Day " + day);
    }

}

/*
Exercise 3

Print

Class 1
Student 1
Student 2
Student 3
Student 4

Class 2
Student 1
Student 2
Student 3
Student 4

Class 3
Student 1
Student 2
Student 3
Student 4

using nested for loop.

*/

for (let classRoom = 1; classRoom<=3; classRoom++){
    console.log("Class Room " + classRoom);
    for (let Student =1; Student <=4; Student++ ){
        console.log("Student " + Student);

    }
}

/* Exercise 4

Print

Company 1

Department 1
Employee 1
Employee 2

Department 2
Employee 1
Employee 2

Company 2

Department 1
Employee 1
Employee 2

Department 2
Employee 1
Employee 2

*/

for (let office =1; office<= 2; office++){
    console.log("Company " + office);
    for (let departments = 1; departments<=2; departments++){
        console.log("Department " +departments);
        for (let employee = 1; employee <=2; employee++){
            console.log("Employee " + employee);
        }
    }
}



/*
Exercise 5

Print

Country 1

State 1
City 1
City 2
City 3

State 2
City 1
City 2
City 3

--------------------

Country 2

State 1
City 1
City 2
City 3

State 2
City 1
City 2
City 3

*/

for (let country = 1; country <= 2; country++) {

    console.log("Country " + country);

    for (let state = 1; state <= 2; state++) {

        console.log("State " + state);

        for (let city = 1; city <= 3; city++) {

            console.log("City " + city);

        }

    }

}