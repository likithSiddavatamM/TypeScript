var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof!");
    };
    return Dog;
}());
var dog = new Dog("Buddy");
dog.makeSound();
//================================================
//Using Abstract class:
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.startEngine = function () {
        console.log("Engine started");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drive = function () {
        console.log("Driving the car");
    };
    return Car;
}(Vehicle));
var myCar = new Car();
myCar.startEngine(); // Output: Engine started
myCar.drive(); // Output: Driving the car
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
    }
    CreditCardPayment.prototype.process = function (amount) {
        console.log("Processing credit card payment of ".concat(amount));
    };
    return CreditCardPayment;
}());
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment() {
    }
    PayPalPayment.prototype.process = function (amount) {
        console.log("Processing PayPal payment of ".concat(amount));
    };
    return PayPalPayment;
}());
var payment = new CreditCardPayment();
payment.process(100); // Output: Processing credit card payment of 100
