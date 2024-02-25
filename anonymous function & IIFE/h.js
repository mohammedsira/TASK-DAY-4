// Rotate an array by k times

var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function (a, n, k) {
    k = k % n;

    for (let i = 0; i < n; i++) {
        if (i < k) {


            console.log(a[n + i - k] + " ");
        }
        else {


            console.log((a[i - k]) + " ");
        }
    }

})
    (Array, N, K);

    