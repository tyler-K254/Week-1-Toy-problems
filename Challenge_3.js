////CHALLENGE 3: Net Salary Calculator (Toy Problem)

//Calculate net salary by getting the inputs of basic salary and benefits. -----
//Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
//NSSF according to website ===6 percent of salary
//The value of NHIF differs depending on the amount of salary earned
// create if statements to return the value of NHIF based on the amount of salary 
//Value of PAYE is a percentage of the salary and differes depending on the amount of the salary
//Net salary === the value of salary - NHIF - NSSF - PAYE
//return net salary


function netSalaryCalculator (salary){
    NSSF = ((6/100)*salary)
    
    if(salary <= 5999){
        NHIF = 150
    }else if(salary =>6000 && salary <=7999 ){
        NHIF =300
    }else if(salary =>8000 && salary <=11999 ){
        NHIF = 400
    }else if(salary =>12000 && salary <=1499 ){
        NHIF = 500
    }else if(salary =>15000 && salary <=19999 ){
        NHIF = 600
    }else if(salary =>20000 && salary <=24999 ){
        NHIF = 750
    }else if(salary =>25000 && salary <=29999 ){
        NHIF = 850
    }else if(salary =>30000 && salary <=34999 ){
        NHIF = 900
    }else if(salary =>35000 && salary <=39999 ){
        NHIF = 950
    }

    if (salary<=24000) {
        netSalary = salary - NHIF - NSSF - ((10/100)*salary)
    }else if(salary=>24001 && salary<=32333){
        netSalary = salary - NHIF - NSSF - ((25/100)*salary)
    }else if(salary >32333){
        netSalary = salary - NHIF - NSSF - ((30/100)*salary)
    }
    return netSalary;
}