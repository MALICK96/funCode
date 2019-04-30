/*
    write a function that take a string 
    and count the number of times each 
    appear in the string and return an obj.
    note: only aphanumeric char are allowed
*/
/*
function charCount(str) {
    let charObj = {};
    
    if (/[a-zA-Z0-9]/.test(str)) {
        for (let char of str) {
            char = char.toLowerCase();
            charObj[char] = ++charObj[char] || 1;
        }    
    }
    
    return charObj;
}

console.log(charCount('hello world'));
*/

function charCount(str) {
    let charObj = {};
    
    for (let char of str) {
        if (isAlphaNumeric(char)) {
//            char = char.toLowerCase();
            charObj[char] = ++charObj[char] || 1;
        }    
    }
    
    return charObj;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 96 && code < 123) &&
        !(code > 64 && code < 91) &&
        !(code > 47 && code < 58)) {
            return false;
    } 
    return true;
}

console.log(charCount('hello world')); 