// Q5) Replace wrong word with correct word in a sentence.

function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

let sentence = "I love Japna";
let result = correctfn(sentence, "Japna", "Japan");

console.log(result);