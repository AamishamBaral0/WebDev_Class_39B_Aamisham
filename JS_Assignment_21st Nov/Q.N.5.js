const calculateBonus = (basicSalary) => {
    if (basicSalary >= 40000) {
        return basicSalary * 0.10;
    } else {
        return basicSalary * 0.05;
    }
};

const calculateTax = (basicSalary) => {
    return basicSalary * 0.05;
};


const calculateNetSalary = (
    basicSalary,
    bonusCallback,
    taxCallback
) => {
    const bonusAmount = bonusCallback(basicSalary);
    const taxAmount = taxCallback(basicSalary);

    return basicSalary + bonusAmount - taxAmount;
};

const generatePayslip = (
    employeeName,
    basicSalary,
    salaryCalculator
) => {
    const bonusAmount = calculateBonus(basicSalary);
    const taxAmount = calculateTax(basicSalary);

    const netSalary = salaryCalculator(
        basicSalary,
        calculateBonus,
        calculateTax
    );

    console.log("Employee:", employeeName);
    console.log("Basic Salary: Rs.", basicSalary);
    console.log("Bonus: Rs.", bonusAmount);
    console.log("Tax: Rs.", taxAmount);
    console.log("Net Salary: Rs.", netSalary);
};

generatePayslip("Ram", 50000, calculateNetSalary);