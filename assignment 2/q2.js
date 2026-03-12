// 2. Write a function to calculate which can add, subtract,
// multiply and divide two numbers. Use switch inside function.

function calculate(num1, num2, operator) {
    switch(operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;

        default:
            return "Invalid operator";
    }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));