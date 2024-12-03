function calculatePaye(payBeforeTax){ //declare function to calculate paye with conditional statements

    let payeTax = 0;

    if (payBeforeTax <= 24000){ //10% tax deduction for ksh 24000
        payeTax = payBeforeTax * 0.10; 
    } else if (payBeforeTax <= 32333){//25% tax deduction for between ksh 24000 and 32333
        payeTax = 24000 * 0.10 + (payBeforeTax - 24000) * 0.25;
    } else if (payBeforeTax <= 500000){//30% tax deduction for between ksh 32333 to 500000
        payeTax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (payBeforeTax -32333) * 0.30;
    } else if (payBeforeTax <= 800000){//32.5% tax deduction for ksh 50000-800000
        payeTax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (payBeforeTax - 500000) * 0.325;
    } else {//35% tax deduction for abaove ksh 800000 

        payeTax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000-32333) * 0.30 + (800000-500000) * 0.325 + (payBeforeTax - 800000) * 0.54;
    }       
            return payeTax;
}
function calculateNhif(payBeforeTax){//declare function to calculate nhif deductions withi a condtional statememt
    let nhifDeduction = 0;

    if (payBeforeTax <= 5999){//deduction for salaries below ksh 5999
        nhifDeduction = 150;

    } else if(payBeforeTax <= 7999){//deduction for salaries between ksh 6000-7999
        nhifDeduction = 300;

    } else if(payBeforeTax <= 11999){//deduction for salaries between ksh 8000 - 11999
        nhifDeduction = 400;

    } else if(payBeforeTax <= 14999){//deduction for salaries between ksh 12000 - 14999
        nhifDeduction = 500;
    
    } else if(payBeforeTax <= 19999){//deduction for salaries between ksh 15000- 19999
        nhifDeduction = 600;

    } else if(payBeforeTax <= 24999){//deduction for salaries between ksh 20000 - 24999
        nhifDeduction = 750;

    } else if(payBeforeTax <= 29999){//deduction for salaries between ksh 25000 - 29999
        nhifDeduction = 850;

    } else if(payBeforeTax <= 34999){//deductions for salaries between 30000 - 349999
        nhifDeduction = 900;

    }else if(payBeforeTax <= 39999){//deductions for salariesbetween ksh 35000 - 39999
        nhifDeduction = 950;

    }else if(payBeforeTax <= 44999){//deductions forsalaries  between 40000 - 44999
        nhifDeduction = 1000;

    } else if(payBeforeTax <= 49999){//deductions for salaries between 45000-49999
        nhifDeduction = 1100;

    } else if(payBeforeTax <= 59999){//deductions for salaries between ksh 50000 - 59999
        nhifDeduction = 1200;

    } else if(payBeforeTax <= 69999){//deductions for salariesbetweeen khs 60000-69999
        nhifDeduction = 1300;

    } else if(payBeforeTax <= 79999){//deductions for salariesbetween 70000 - 79999
        nhifDeduction = 1400;

    } else if(payBeforeTax <= 89999){//deductions for salaries between 80000 - 89999
        nhifDeduction = 1500;

    } else if(payBeforeTax <= 99999){//deductions for salaries between 90000-99999
        nhifDeduction = 1600;

    } else {                    //deductions for salaries above 99999

        nhifDeduction = 1700;
    }

        return nhifDeduction;

}

//function to calculate nssf deduction at 6%

function calculateNssf(payBeforeTax){
    const nssfDeduction = payBeforeTax * 0.06;

    return nssfDeduction;

}

function calculateNetSalary(payBeforeTax){//calculate net salary
    let payeAmount = calculatePaye(payBeforeTax);
    let nhifAmount = calculateNhif(payBeforeTax);
    let nssfAmount = calculateNssf(payBeforeTax);
    let netSalary = payBeforeTax - (payeAmount +nhifAmount + nssfAmount);

console.log(`paye for a salary of ${payBeforeTax} is; ${payeAmount}`);
console.log(`nhif for a salary of ${payBeforeTax} is; ${nhifAmount}`);
console.log(`nssf for a salary of ${payBeforeTax} is; ${nssfAmount}`);
console.log(`net salary after deduction is; ${netSalary}`);

}

let payBeforeTax = 250000;
calculateNetSalary(payBeforeTax);
