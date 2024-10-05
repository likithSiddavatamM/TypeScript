//Using Interface:
interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log("Woof!");
    }
}

let dog = new Dog("Buddy");
dog.makeSound();


//================================================

//Using Abstract class:
abstract class Vehicle {
    abstract drive(): void;  // Abstract method, no implementation

    startEngine(): void {  // Concrete method with implementation
        console.log("Engine started");
    }
}

class Car extends Vehicle {
    drive(): void {  // Must provide implementation for abstract method
        console.log("Driving the car");
    }
}

let myCar = new Car();
myCar.startEngine();  // Output: Engine started
myCar.drive();  // Output: Driving the car


//====================================================================

//Using Both Interface and AbsractClass

interface Payment {
    process(amount: number): void;
}

class CreditCardPayment implements Payment {
    process(amount: number): void {
        console.log(`Processing credit card payment of ${amount}`);
    }
}

class PayPalPayment implements Payment {
    process(amount: number): void {
        console.log(`Processing PayPal payment of ${amount}`);
    }
}

let payment: Payment = new CreditCardPayment();
payment.process(100);  // Output: Processing credit card payment of 100
