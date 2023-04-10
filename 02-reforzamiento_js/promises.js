const employees = [
    {
        id: 1,
        name: 'Fer'
    },
    {
        id: 2,
        name: 'Andres'
    },
    {
        id: 3,
        name: 'Nat'
    },
];

const salaries = [
    {
        id: 1,
        salary: 10000
    },
    {
        id: 2,
        salary: 9500
    },
    {
        id: 3,
        salary: 8500
    },
];

// id
const id = 4;

const getEmployeeById = (id) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find((e) => e.id === id)?.name;
        (employee) ? resolve(employee) : reject(`No existe empleado con id ${id}.`);
    });
}

const getSalaryByEmployeeId = (id) => {
    return new Promise((resolve,reject) => {
        const salary = salaries.find((e) => e.id === id)?.salary;
        (salary)? resolve(salary): reject(`No existe un salario para el empleado con id ${id}.`);
    });
}

// getEmployeeById(id).then( employee => console.log(employee)).catch( err => console.log(err));

// getSalaryByEmployeeId(id).then(salary => console.log(salary)).catch(err => console.log(err));

// Promesas en cadena

let name;

getEmployeeById(id).then(employee => {name = employee;
    return getSalaryByEmployeeId(id);
}).then(salary => console.log('El empleado co el nombre',name,' tiene el salario',salary))
.catch(err => console.log(err));