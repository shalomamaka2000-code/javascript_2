//String Manipulation Functions; Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example
console.log(reverseString("hello")); // "olleh"

//count characters in a string
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("hello world")); // 11


//Capitalize words in a string
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world")); // "Hello World"

//Array Manipulation Functions; Find the largest and smallest numbers in an array
function findLargestAndSmallest(arr) {
    const largest = Math.max(...arr);
    const smallest = Math.min(...arr);
    return { largest, smallest };
}
console.log(findLargestAndSmallest([1, 2, 3, 4, 5])); 
// { largest: 5, smallest: 1 }

//Sum of numbers in an array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15

//Filter out even numbers from an array
function filterEvenNumbers(arr) {
    return { oddNumbers: arr.filter(num => num % 2 !== 0) };
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // { oddNumbers: [1, 3, 5] }

//Math Functions; Calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

//Prime number check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true

//Fibonacci sequence generator
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]