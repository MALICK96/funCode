/*
This Program sort an array of numbers into ascending order;

Author: Malick Diakite
*/ 

function ascendingOrder() {

    // Define an array of integers
    let n = [3, 20, 30, 1, 2, 50, 86, 90];

    // the callback function in the sort function //returns  one of the following value: 
    // if negative value is return a is sorted before b
    // if  positive value is return b is sorted before a
    // if zero is return no changes is done 
    ascendingOrder = n.sort( (a, b) => a - b);

    return ascendingOrder;
}

console.log(ascendingOrder());

