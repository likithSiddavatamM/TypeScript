var Employee = /** @class */ (function () {
    function Employee(name, department, id) {
        this.name = name;
        this.department = department;
        this.id = id;
    }
    // Public method to get the name
    Employee.prototype.getName = function () {
        return this.name;
    };
    // Public method to set the name with validation
    Employee.prototype.setName = function (newName) {
        if (newName.length > 0) {
            this.name = newName;
        }
        else {
            console.log("Name cannot be empty");
        }
    };
    return Employee;
}());
var emp = new Employee("John", "HR", 101);
console.log(emp.id); // Accessible: 101
console.log(emp.getName()); // Accessible via public method: "John"
emp.setName("Jane"); // Modifying private property via public method
console.log(emp.getName()); // Output: "Jane"
// console.log(emp.name);    // error: 'name' is private and cannot be accessed outside the class
