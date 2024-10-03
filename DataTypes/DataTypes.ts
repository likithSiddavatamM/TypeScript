// Primitive Types
    let age: number = 22;           // number
    let Name: string = 'Liki';       // string
    let isActive: boolean = true;    // boolean
    let empty: null = null;          // null
    let notAssigned: undefined = undefined;  // undefined

// Special Types
    let data: any = 5;              // any
    let input: unknown;             // unknown
    function logMessage(): void {   // void
    console.log('Hello');
    }

// Complex Types
    let numbers: number[] = [1, 2, 3];   // array
    let tuple: [string, number] = ['liki', 30];  // tuple
    enum Direction { Up, Down, Left, Right }      // enum
    let dir: Direction = Direction.Up;

// Object Types
    let person: { name: string, age: number } = { name: 'liki', age: 22 };  // object

// Union and Intersection Types
    let id: number | string;     // union
    interface Person { name: string }  
    interface Employee { id: number }
    let worker: Person & Employee = { name: "liki", id: 123 };  // intersection

// Advanced Types
    type ID = number | string;   // type alias
    let userId: ID = 123;

    let direction: 'up' | 'down';   // literal type
    direction = 'up';

    function error(message: string): never {   // never
    throw new Error(message);
    }

    let arr: readonly number[] = [1, 2, 3];    // readonly

