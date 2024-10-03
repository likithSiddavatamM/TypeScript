// Function Declaration
function add(a, b) {
    return a + b;
}
// Function Expression
var multiply = function (x, y) {
    return x * y;
};
//Arrow Function
var subtract = function (a, b) { return a - b; };
//Higher-Order Function (takes a function as a parameter)
function applyOperation(a, b, operation) {
    return operation(a, b);
}
//Immediately Invoked Function Expression (IIFE)
(function () {
    console.log('This IIFE runs immediately!');
})();
// IIFE with parameters
(function (name) {
    console.log("Hello, ".concat(name));
})('TypeScript');
//Arrow Function within Array Methods (Example of Higher-Order Function)
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function (num) { return num * 2; }); // 'map' takes a function and applies it to each element
// Optional Parameters
function greet(name, greeting) {
    return "".concat(greeting || 'Hello', ", ").concat(name);
}
// Default Parameters
function greetWithDefault(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, ", ").concat(name);
}
// Rest Parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
// Return Types
function divide(a, b) {
    return a / b;
}
// Void and Never
function logMessage(message) {
    console.log(message);
}
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
// Test Cases
console.log(add(5, 10)); // 15
console.log(multiply(3, 4)); // 12
console.log(greet('Alice')); // "Hello, Alice"
console.log(greet('Alice', 'Hi')); // "Hi, Alice"
console.log(greetWithDefault('Bob')); // "Hello, Bob"
console.log(sum(1, 2, 3, 4)); // 10
console.log(divide(10, 2)); // 5
logMessage('This is a log message.'); // Logs: This is a log message
// throwError('Something went wrong!'); // Throws: Error: Something went wrong!
var resultSubtract = applyOperation(10, 5, subtract); // Using arrow function
console.log(subtract(10, 3)); // 7
console.log(resultSubtract); // 5
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
