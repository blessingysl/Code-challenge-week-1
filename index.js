function generateGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else {
        return "E";
    }
}

// Example usage:
const studentMarks = parseInt(prompt("Enter student marks: "));
const grade = generateGrade(studentMarks);
console.log("Grade:", grade);

function calculatePoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const overSpeed = speed - speedLimit;
    
    if (overSpeed <= 0) {
        return "OK";
    } else {
        const demeritPoints = Math.floor(overSpeed / kmPerDemeritPoint);
        if (demeritPoints >= 12) {
            return "License suspended";
        } else {
            return "Points: " + demeritPoints;
        }
    }
}

// Example usage:
const carSpeed = parseInt(prompt("Enter car speed (in km/h): "));
const result = calculatePoints(carSpeed);
console.log(result);

function calculateNetSalary(basicSalary, benefits) {
    // Tax Rates
    const PAYE = basicSalary <= 24000 ? 0.1 :
                basicSalary <= 32333 ? 0.15 :
                basicSalary <= 40385 ? 0.2 :
                basicSalary <= 48336 ? 0.25 : 0.3;
    
    // NHIF and NSSF Deductions
    const NHIF = 0.025 * basicSalary;
    const NSSF = 0.06 * basicSalary;

    const grossSalary = basicSalary + benefits;
    const payee = PAYE * grossSalary;
    const netSalary = grossSalary - payee - NHIF - NSSF;

    return {
        grossSalary: grossSalary,
        payee: payee,
        NHIFDeductions: NHIF,
        NSSFDeductions: NSSF,
        netSalary: netSalary
    };
}

// Example usage:
const basic = parseInt(prompt("Enter basic salary: "));
const benefits = parseInt(prompt("Enter benefits: "));
const salaryDetails = calculateNetSalary(basic, benefits);
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Payee (Tax):", salaryDetails.payee);
console.log("NHIF Deductions:", salaryDetails.NHIFDeductions);
console.log("NSSF Deductions:", salaryDetails.NSSFDeductions);
console.log("Net Salary:", salaryDetails.netSalary);
