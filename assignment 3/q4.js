// Q4) Take any string with minimum 20 characters.
// Count number of vowels and consonants in the string.

let str = "JavaScript programming is fun";

let vowels = 0;
let consonants = 0;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {

    let ch = str[i];

    if ("aeiou".includes(ch)) {
        vowels++;
    } 
    else if (ch >= 'a' && ch <= 'z') {
        consonants++;
    }

}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);