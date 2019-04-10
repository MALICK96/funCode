/*
This Program sort an array of numbers into descending order;

Author: Malick Diakite
*/ 

function descendingOrder() {
    // Define an array of integers
    let n = [3, 20, 30, 1, 2, 50, 86, 90];

    // the callback function in the sort function //returns  one of the following value: 
    // if negative value is return a is sorted before b
    // if  positive value is return b is sorted before a
    // if zero is return no changes is done 

    let descendingOrder = n.sort( (a, b) => b - a);

    return descendingOrder;
}

let descending = descendingOrder();

console.log(descending);