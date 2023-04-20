const Role = require('../models/role');
const User = require('../models/user')

const roleIsValid = async(role = '') => {
    const roleExists = await Role.findOne({role});
    if (!roleExists){
        throw new Error(`El rol ${role} no esta definido en el sistema.`);
    }
};

const userExists = async(id= '') => {
    const userExists = await User.findById(id);
    if (!userExists){
        throw new Error(`El usuario no existe.`)
    }
}

module.exports = {
    roleIsValid,
    userExists
}