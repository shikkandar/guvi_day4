// a. Print odd numbers in an array
(function () {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const oddNumbers = arr.filter(function (num) {
        return num % 2 !== 0;
    });
    console.log("Odd Numbers:", oddNumbers);
})();

// b. Convert all the strings to title caps in a string array
(function () {
    const stringArray = ["hello", "world", "javascript"];
    const titleCapsArray = stringArray.map(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log("Title Caps Array:", titleCapsArray);
})();

// c. Sum of all numbers in an array
(function () {
    const numbersArray = [1, 2, 3, 4, 5];
    const sum = numbersArray.reduce(function (acc, num) {
        return acc + num;
    }, 0);
    console.log("Sum of Numbers:", sum);
})();

// d. Return all the prime numbers in an array
(function () {
    const numbersArray = [2, 3, 5, 7, 9, 11, 13, 17];
    const isPrime = function (num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    };
    const primeNumbers = numbersArray.filter(function (num) {
        return isPrime(num);
    });
    console.log("Prime Numbers:", primeNumbers);
})();

// e. Return all the palindromes in an array
(function () {
    const wordsArray = ["level", "hello", "racecar", "world"];
    const isPalindrome = function (str) {
        return str === str.split("").reverse().join("");
    };
    const palindromeWords = wordsArray.filter(function (word) {
        return isPalindrome(word);
    });
    console.log("Palindromes:", palindromeWords);
})();
