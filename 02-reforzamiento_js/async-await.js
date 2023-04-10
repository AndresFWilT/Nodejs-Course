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

// async await

const getInfoUser = async(id) => {
    try{
        const employee = await getEmployeeById(id); 
        const salary = await getSalaryByEmployeeId(id);
        return `EL salario del empleado ${employee} es ${salary}.`;
    } catch(error){
        return error;
    }
}

getInfoUser(id).then(msg => console.log(msg)).catch(err => console.log(err));