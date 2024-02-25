// Return all the palindromes in an array

Palindrome = (arr, n) => {
    
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}
