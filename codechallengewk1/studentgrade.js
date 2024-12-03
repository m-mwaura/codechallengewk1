function getStudentGrade(marks){

    if(marks < 0 || marks > 100 || isNaN(marks)){ //ensures a practictal input from users is between o and 100
        console.log();
    }
    let grade; //detemine grade based on marks
    if (marks >= 79){
        grade = "A";
    } else if (marks >= 60){
        grade = "B";
    }else if (marks >= 49){
        grade = "C";
    }else if (marks >= 40){
        grade = "D";
    } else {
        grade = "E";
    }
    console.log(`The grade is: ${grade}`);//The input is displayed as grades
}
    getStudentGrade() //invoke the function that gets the input to be displayed 