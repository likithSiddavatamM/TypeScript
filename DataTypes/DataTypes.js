// Primitive Types
var age = 22; // number
var Name = 'Liki'; // string
var isActive = true; // boolean
var empty = null; // null
var notAssigned = undefined; // undefined
// Special Types
var data = 5; // any
var input; // unknown
function logMessage() {
    console.log('Hello');
}
// Complex Types
var numbers = [1, 2, 3]; // array
var tuple = ['liki', 30]; // tuple
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {})); // enum
var dir = Direction.Up;
// Object Types
var person = { name: 'liki', age: 22 }; // object
// Union and Intersection Types
var id; // union
var worker = { name: "liki", id: 123 }; // intersection
var userId = 123;
var direction; // literal type
direction = 'up';
var add; // function type
add = function (x, y) { return x + y; };
function error(message) {
    throw new Error(message);
}
var arr = [1, 2, 3]; // readonly
