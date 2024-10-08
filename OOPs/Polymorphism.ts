// Compile-time polymorphism:

/* class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }
        return a + b;
    }
}

let calc = new Calculator();
console.log(calc.add(9, 17));
console.log(calc.add('LIKITH', ' S M'));
 */

//================================================================

// Run-time polymorphism:

/* class Animal {
    sound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound(): void {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound(): void {
        console.log("Cat meows");
    }
}

let myDog: Animal = new Dog();
let myCat: Animal = new Cat();

myDog.sound();
myCat.sound(); */
