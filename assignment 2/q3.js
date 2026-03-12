// 3. Write a function findTax() that takes salary and calculates tax.

function findTax(salary) {

    switch(true) {

        case (salary > 0 && salary <= 500000):
            return salary * 0;

        case (salary > 500000 && salary <= 1000000):
            return salary * 0.10;

        case (salary > 1000000 && salary <= 1500000):
            return salary * 0.20;

        case (salary > 1500000):
            return salary * 0.30;

        default:
            return "Invalid salary";
    }
}

console.log(findTax(400000));
console.log(findTax(800000));
console.log(findTax(1200000));
console.log(findTax(2000000));