const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};

const subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
};
const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};

const divide = (firstNumber, secondNumber) => {
    if (secondNumber === 0) {
        return "Division by zero is not allowed";
    }

    return firstNumber / secondNumber;
};

const calculate = (firstNumber,secondNumber,operationCallback) => {
    return operationCallback(firstNumber, secondNumber);
};

console.log("Addition:","20+10=",calculate(20, 10, add));

console.log("Subtraction:","20-10 =",calculate(20, 10, subtract));

console.log("Multiplication:","20*10 =",calculate(20, 10, multiply));

console.log("Division:","20 / 10 =",calculate(20, 10, divide));