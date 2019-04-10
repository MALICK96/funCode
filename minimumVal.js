/*
Program: Find a minimum value in an array of integers
Author: Malick Diakite
*/

//  First Approch

function findMin() {
    // Define the array
    let arr = [5, 8, 9, 18, 50, 500, 9000];

    // for each element (el) in the array check if it //// is less than x if true then return el else el.

    let minVal = arr.reduce( (x, el) => x = el < x ? el : x); 

    // Return the minimum value
    return minVal;
}

// let min = findMin();

// console.log(min);


//  Second Approch

function findMin() {
    let arr = [5, 8, 2, 18, 50, 500, 9000, -1000];

    let min = arr[1];

    for (let i = 0; i < arr.length; i++) {
        	
        // Check if arr[i] value is less than min. if true assign arr[i] to min
        if (arr[i] < min) {
            min = arr[i];
        }

    }
    // return the minimum value 
    return min;
}

// let min = findMin();

// console.log(min);


// Thrid Approch

function findMin() {
    let arr = [5, 8, 2, 18, 50, 500, 9000, -1000];

    let min = Math.min.apply(null, arr);

    return min;
}

let minValue = findMin();

console.log(minValue);