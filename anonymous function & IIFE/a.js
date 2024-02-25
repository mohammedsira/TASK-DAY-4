

// Print odd numbers in an array

// anonymous function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function (arr) {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})(numbers);


//IIFE 

(function (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i])
        }
    }
})([1, 2, 3, 4])