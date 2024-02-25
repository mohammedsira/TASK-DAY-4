// Return all the prime numbers in an array

// ANONYMOUS

(function (numArray) {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(numArray);
})


//IIFE

    (
        function (numArray) {
            numArray = numArray.filter((number) => {
                for (var i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i === 0) return false;
                }
                return true;
            });
            console.log(numArray);
        })([1, 2, 3, 4])(
            function (numArray) {
                numArray = numArray.filter((number) => {
                    for (var i = 2; i <= Math.sqrt(number); i++) {
                        if (number % i === 0) return false;
                    }
                    return true;
                });
                console.log(numArray);
            })([1, 2, 3, 4])