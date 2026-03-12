// Q9) Count number of words

function countWords(paragraph){
    let words = paragraph.trim().split(" ");
    return words.length;
}

let text = "JavaScript is very interesting to learn and practice daily";

console.log(countWords(text));