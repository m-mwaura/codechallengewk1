****# Introduction****

***##Here are the instructions to follow***
1. Create a repository on your GitHub account. NB: One folder, with 3-4 files for each solution. Please note that a single file should only hold one solution.
2. Use JavaScript to wire down the solution.
3. Push the solution to the above repository once done.
4. Submit the repository link for grading.
5. Ensure your repository has a well written README.
NOTE: You are required to complete ALL the challenges.



**##Challenge 1: Student Grade generator (Toy Problem)**

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below:
        
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

**###solution**

Declare a function with a parameter that will be used for the argument of marks and determined grades based on conditions

Use if statement to make sure the value of marks are valid and are between...if (marks < 0 || marks > 100 || isNaN(marks))...0 to 100 which makes the condition to be true since the marks are outside the range

Calculate the grade by assigning a variable based on the marks.

Output the grade with a console.log then invoke the function



**##Challenge 2: Speed detector**

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

**###solution**

Declare a function with a parameter that will be used for the argument of speed and determine points on based conditions

Assign variables to the speed limit and points which conditional statement will be used to ascertain statements for the speed limit and points given above the speed limit till the point of suspending the licence

Assign the math.floor() method in the conditional statement to make sure the results are returned in integers instead of decimal points.

To get the points executed using the if statement we evaluate the condition to be (if points < 12 ) so that it executes the points less than 12 indicating which are within warning hence above 12 points it gives warning to the driver that his licence is suspended


**##Challenge 3: Net salary calculator**

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided

**###Solution**

Use functions, variables and conditional statements to calculate the paye based on the data structure provided

use functions, variables and conditional statements to calculate nhif deductions at an icreament with the salarry based on data provided

use a function and a variable to calculate % deduction of nssf based on salary

calculate net salary using a function and variable and log results to console
