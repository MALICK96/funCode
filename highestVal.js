/*
Program: Find a higest value in an array of integers
Author: Malick Diakite

*/

// First Approch
function findMax() {

    // Define the array
    let arr = [5, 8, 9, 18, 50, 500, 9000];

    // cycle through each element in the arr
    // and check if the arr val > acc. if true return //// val otherwise return highest.
    let highestVal = arr.reduce((acc, val) => acc = val > acc ? val : acc);

    console.log(highestVal);
}

// findMax();

// Second Approch

function findMax() {
    let arr = [5, 8, 9, 18, 50, 500, 9000];
    let intialVal = 0;
    let highestVal;
    for (let i = 0; i < arr.length; i++) {
        highestVal = arr[i] > intialVal ? arr[i] : intialVal;
    }

    return highestVal;
}

// console.log(findMax());

//  Third Approch

function findMax() {
    let arr = [5, 8, 9, 18, 50, 500, 9000];

    highestVal = Math.max.apply(null, arr);
    
    console.log(highestVal);
}

findMax();