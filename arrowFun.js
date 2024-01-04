// a. Print odd numbers in an array
const oddNumbers = arr => arr.filter(num => num % 2 !== 0);

// b. Convert all the strings to title caps in a string array
const titleCapsArray = stringArray => stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));

// c. Sum of all numbers in an array
const sumOfNumbers = numbersArray => numbersArray.reduce((acc, num) => acc + num, 0);

// d. Return all the prime numbers in an array
const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};
const primeNumbers = numbersArray => numbersArray.filter(num => isPrime(num));

// e. Return all the palindromes in an array
const isPalindrome = str => str === str.split("").reverse().join("");
const palindromeWords = wordsArray => wordsArray.filter(word => isPalindrome(word));

// Example usage
console.log("Odd Numbers:", oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("Title Caps Array:", titleCapsArray(["hello", "world", "javascript"]));
console.log("Sum of Numbers:", sumOfNumbers([1, 2, 3, 4, 5]));
console.log("Prime Numbers:", primeNumbers([2, 3, 5, 7, 9, 11, 13, 17]));
console.log("Palindromes:", palindromeWords(["level", "hello", "racecar", "world"]));
