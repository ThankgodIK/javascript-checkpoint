//reverse string
function reverseString(params) {
  let result = [];
  for (let i = params.length + 1; i > 0; i--) {
    result.push(params[i - 1]);
  }
  return result.join("");
}
console.log(reverseString("Kelechi"));

// function to count number of chracters in a string
function countCharacters(house) {
  return house.length;
}
console.log(countCharacters("No"));

// function to capitalize
function capitalizeFirstLetter(params) {
  let senstense = params.split(" ");
  let result = [];

  for (let i = 0; i < senstense.length; i++) {
    result.push(
      senstense[i].slice(0, 1).toUpperCase() + "" + senstense[i].slice(1)
    );
  }

  return result.join(" ");
}
console.log(capitalizeFirstLetter("this is nigeria"));

function findMaximum(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined if array is empty
  }
  let maxVal = arr[0]; // Initialize maxVal with the first element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}

console.log(findMaximum([20, 25, 30, 60]));

// minimun value
function findMinimum(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined if array is empty
  }
  let minVal = arr[0]; // Initialize minVal with the first element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return minVal;
}
console.log(findMinimum([20, 25, 30, 60]));

// sum up array values
function sumOfArray(params) {
  let result = 0;
  for (let i = 0; i < params.length; i++) {
    result = result + params[i];
  }
  return result;
}

console.log(sumOfArray([3, 10, 6]));

// filter products
let products = [
  { name: "samsung", space: 256 },
  { name: "Iphone", space: 256 },
];

function filterProduct(params) {
  let result = [];
  for (let i = 0; i < params.length; i++) {
    if (params[i].name === "Iphone") {
      result.push(params[i]);
    }
  }
  return result;
}

console.log(filterProduct(products));

// factorial number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Factorial of 0 and 1 is 1
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
const number = 5;
console.log("Factorial of", number, "is:", factorial(number)); // Output: Factorial of 5 is: 120

function isPrime(num) {
  // Check if the number is less than 2 (prime numbers start from 2)
  if (num < 2) {
    return false;
  }
  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible, it's not prime
    }
  }
  return true; // If not divisible, it's prime
}
console.log(isPrime(4));

function generateFibonacci(numTerms) {
  const fibonacciSequence = [0, 1]; // Initialize the sequence with the first two terms

  // Generate Fibonacci sequence
  for (let i = 2; i < numTerms; i++) {
    const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextTerm);
  }

  return fibonacciSequence;
}

// Example usage:
const numberOfTerms = 10;
const fibonacciSequence = generateFibonacci(numberOfTerms);
console.log(
  "Fibonacci sequence with",
  numberOfTerms,
  "terms:",
  fibonacciSequence
);

const TestNumber = 13;
console.log(TestNumber, "is prime?", isPrime(TestNumber)); // Output: 13 is prime? true
