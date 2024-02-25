// Remove duplicates from an array

// Anonymous Function:

const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const removeDuplicates = function (arr) {
    return [...new Set(arr)];
};

const uniqueNumbers = removeDuplicates(numbersWithDuplicates);
console.log("Array without duplicates:", uniqueNumbers);


// IIFE

(function (array) {
    let dup = [...new Set(array)];
    console.log(dup);
})([1, 1, 2, 3, 4])