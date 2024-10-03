// Function Declaration
function add(a: number, b: number): number {
return a + b;
}

// Function Expression
const multiply = (x: number, y: number): number => {
return x * y;
};

//Arrow Function
const subtract = (a: number, b: number): number => a - b;

//Higher-Order Function (takes a function as a parameter)
function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
return operation(a, b);
}

//Immediately Invoked Function Expression (IIFE)
(function() {
console.log('This IIFE runs immediately!');
})();

// IIFE with parameters
(function(name: string) {
console.log(`Hello, ${name}`);
})('TypeScript');

//Arrow Function within Array Methods (Example of Higher-Order Function)
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num: number): number => num * 2);  // 'map' takes a function and applies it to each element

// Optional Parameters
function greet(name: string, greeting?: string): string {
return `${greeting || 'Hello'}, ${name}`;
}

// Default Parameters
function greetWithDefault(name: string, greeting: string = 'Hello'): string {
return `${greeting}, ${name}`;
}

// Rest Parameters
function sum(...numbers: number[]): number {
return numbers.reduce((acc, num) => acc + num, 0);
}

// Return Types
function divide(a: number, b: number): number {
return a / b;
}

// Void and Never
function logMessage(message: string): void {
console.log(message);
}

function throwError(errorMsg: string): never {
throw new Error(errorMsg);
}

// Test Cases
console.log(add(5, 10));                // 15
console.log(multiply(3, 4));            // 12
console.log(greet('Alice'));            // "Hello, Alice"
console.log(greet('Alice', 'Hi'));      // "Hi, Alice"
console.log(greetWithDefault('Bob'));   // "Hello, Bob"
console.log(sum(1, 2, 3, 4));           // 10
console.log(divide(10, 2));             // 5
logMessage('This is a log message.');   // Logs: This is a log message
// throwError('Something went wrong!'); // Throws: Error: Something went wrong!
const resultSubtract = applyOperation(10, 5, subtract);  // Using arrow function
console.log(subtract(10, 3));                           // 7
console.log(resultSubtract);                            // 5
console.log(doubledNumbers);                            // [2, 4, 6, 8, 10]