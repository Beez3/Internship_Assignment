// Q3) let string = 'INDIA'
// Output = 'INDONESIA'
// Use array.splice

let string = "INDIA";

// Convert string to array
let arr = string.split("");

// Insert "ONES" after "IND"
arr.splice(3, 0, "O", "N", "E", "S");

// Join back to string
let result = arr.join("");

console.log(result);