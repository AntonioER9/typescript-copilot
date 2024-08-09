export interface Employee {
  name: string;
  age: number;
  salary: number;
}

const employees: Employee[] = [
  { name: 'John', age: 32, salary: 100000 },
  { name: 'Jane', age: 28, salary: 90000 },
  { name: 'Doe', age: 35, salary: 110000 },
  { name: 'Alice', age: 30, salary: 95000 },
  { name: 'Bob', age: 33, salary: 105000 },
  { name: 'Charlie', age: 29, salary: 92000 },
  { name: 'David', age: 31, salary: 98000 },
  { name: 'Eve', age: 34, salary: 102000 },
];

/**
 * Finds an employee by their name.
 * @param name - The name of the employee to search for.
 * @returns The found employee or undefined if not found.
 */
function findEmployeeByName(name: string): Employee | undefined {
  return employees.find((employee) => employee.name === name);
}

function filterEmployeesByAge(age: number): Employee[] {
  return employees.filter((employee) => employee.age === age);
}

function filterEmployeesBySalary(salary: number): Employee[] {
  return employees.filter((employee) => employee.salary === salary);
}

function getAllEmployeesNames(): string[] {
  return employees.map((employee) => employee.name);
}

const getMaxSalary = (): number => {
  return Math.max(...employees.map((employee) => employee.salary));
}

const getAverageSalary = (): number => {
  return employees.reduce((acc, employee) => acc + employee.salary, 0) / employees.length;
}
