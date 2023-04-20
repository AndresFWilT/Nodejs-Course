const { check } = require("express-validator");
const User = require('../models/user');

const emailIsValid = async(email = '') => {
    // email validation
    const validateEmail = await User.findOne({email});
    if (validateEmail){
        throw new Error(`El correo ${email} ya esta registrado.`);
    }
};

module.exports = {
    emailIsValid
}
