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
        name: 10000
    },
    {
        id: 2,
        name: 9500
    },
    {
        id: 3,
        name: 8500
    },
];

// id
const id = 10;

const getEmployeeById = (id, callback) => {

    const employee = employees.find((e) => e.id === id);

    if (employee){
        callback(null, employee);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }

}

const getSalaryByEmployeeId = (id, callback) => {

    const salary = salaries.find((e) => e.id === id);

    if (salary){
        callback(null,salary);
    } else {
        callback(`El salario para el empleado con id ${id}, no existe`);
    }

}

getEmployeeById(id, (err, employee) => {
    (err) ? console.log(err):console.log(employee);
});

getSalaryByEmployeeId(id, (err, salary) => {
    (err) ? console.log(err): console.log(salary);
});