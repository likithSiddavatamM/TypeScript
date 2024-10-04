class Employee {
    private name: string;      // Only accessible within this class
    protected department: string;  // Accessible within this class and derived classes
    public id: number;         // Accessible from outside the class

    constructor(name: string, department: string, id: number) {
        this.name = name;
        this.department = department;
        this.id = id;
    }

    // Public method to get the name
    public getName(): string {
        return this.name;
    }

    // Public method to set the name with validation
    public setName(newName: string): void {
        if (newName.length > 0) {
            this.name = newName;
        } else {
            console.log("Name cannot be empty");
        }
    }
}

const emp = new Employee("John", "HR", 101);
console.log(emp.id);          // Accessible: 101
console.log(emp.getName());   // Accessible via public method: "John"
emp.setName("Jane");          // Modifying private property via public method
console.log(emp.getName());   // Output: "Jane"

// console.log(emp.name);    // error: 'name' is private and cannot be accessed outside the class
