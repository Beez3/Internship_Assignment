// Q1) Create an array of states in India.
// Remove all the names starting with vowels using array.filter.

let states = [
"Assam",
"Bihar",
"Goa",
"Gujarat",
"Karnataka",
"Odisha",
"Punjab",
"Rajasthan",
"Uttar Pradesh",
"West Bengal"
];

let result = states.filter(function(state) {
    let firstLetter = state[0].toLowerCase();
    return !["a","e","i","o","u"].includes(firstLetter);
});

console.log("States after removing vowel-starting names:");
console.log(result);