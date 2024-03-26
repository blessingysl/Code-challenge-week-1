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
