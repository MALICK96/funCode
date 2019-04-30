/*
    
    Problem: Write a JS function that takes two args, 
    a string and a letter and the function will count 
    the number of occurrences the specified letter within
    the string.
    
    
    Sample args: 'W3ressources.com', 'o'
    Expected output: 2
    
    given a string write a function that find 
    how many times the specified letter appear in it
    and return the number.
    
*/

/*
function findOcurrences(str, l) {
    if ((typeof str  && typeof l) === 'string' && (str.length > 0 && l !== '')) {
        // regular expression to get the occurences in an array
        let occurrences = str.match(/a/gi);
    
        return occurrences.length
    
    } 
    
    return false;
    
} 


console.log(findOcurrences('Mamadou is A great dancer', 'a'));

*/


function findOcurrences(str, l) {
    // set a counter
    let occurrences = 0;
    
    // check if the inputs are string and not empty
    if (typeof str && typeof l === 'string' && str.length > 0 && l !== '') {
        
        // loop through the str
        for (let char of str) {

            // convert char to lowercase
            char = char.toLowerCase();
            // check if the char is the specified letter
            if (char === l) {
                occurrences++;
            }

        }
    
     return occurrences
    }

}

console.log(findOcurrences('Mamadou is A great dancer at palace yesterday', 'a'));



