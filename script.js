// ................................................problem.........................................//

// 1.Write a recursive function to calculate the nth Fibonacci number.

// Pseudo Code:

// 1. Define a function named 'fibonacci' that takes a single parameter 'n'.
// 2. If 'n' is less than or equal to 1, return 'n' (base case).
// 3. Otherwise, return the sum of the (n-1)th and (n-2)th Fibonacci numbers.



function fibonacci(n) {

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
console.log(fibonacci(8)); // Output: 21 (0, 1, 1, 2, 3, 5, 8, 13, 21)


// 2. Write a recursive function to calculate the factorial of a number.

// Pseudo Code:

// 1. Define a function named 'factorial' that takes a single parameter 'n'.
// 2. If 'n' is 0, return 1 (base case).
// 3. Otherwise, return 'n' multiplied by the factorial of 'n-1'.



function factorial(n) {

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}


console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // Output: 1 (by convention, 0! is defined as 1)
console.log(factorial(3)); // Output: 6 (3 * 2 * 1)



// 3.Write a recursive function to find the sum of digits of a number.

// Pseudo Code:

// 1. Define a function named 'sumOfDigits' that takes a single parameter 'n'.
// 2. If 'n' is less than 10, return 'n' (base case).
// 3. Otherwise, return the last digit of 'n' plus the sum of digits of 'n' divided by 10 (integer division).



function sumOfDigits(n) {

    if (n < 10) {
        return n;
    }
  
    return n % 10 + sumOfDigits(Math.floor(n / 10));
}


console.log(sumOfDigits(123)); // Output: 6 (1 + 2 + 3 = 6)
console.log(sumOfDigits(456)); // Output: 15 (4 + 5 + 6 = 15)
console.log(sumOfDigits(789)); // Output: 24 (7 + 8 + 9 = 24)


// 4. Write a recursive function to reverse a string.


// Pseudo Code:

// 1. Define a function named 'reverseString' that takes a single parameter 'str'.
// 2. If the length of 'str' is 0 or 1, return 'str' (base case).
// 3. Otherwise, return the last character of 'str' concatenated with the result of recursively calling 'reverseString' on the substring of 'str' excluding the last character.



function reverseString(str) {

    if (str.length <= 1) {
        return str;
    }
    
    return str.slice(-1) + reverseString(str.slice(0, -1));
}


console.log(reverseString("hello"));    // Output: "olleh"
console.log(reverseString("world"));    // Output: "dlrow"
console.log(reverseString("123456"));   // Output: "654321"



// 5.Write a recursive function to calculate the power of a number.

// Pseudo Code:

// 1. Define a function named 'power' that takes two parameters: 'base' and 'exponent'.
// 2. If 'exponent' is 0, return 1 (base case).
// 3. Otherwise, return 'base' multiplied by the result of recursively calling 'power' with 'base' and 'exponent - 1'.



function power(base, exponent) {

    if (exponent === 0) {
        return 1;
    }
  
    return base * power(base, exponent - 1);
}


console.log(power(2, 3));  // Output: 8 (2^3 = 2 * 2 * 2 = 8)
console.log(power(5, 2));  // Output: 25 (5^2 = 5 * 5 = 25)
console.log(power(3, 4));  // Output: 81 (3^4 = 3 * 3 * 3 * 3 = 81)
