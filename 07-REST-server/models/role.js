const { Schema, model } = require("mongoose");

const roleSchema = Schema({
    role: {
        type: String,
        required: [true, 'role is mandatory']
    }
});

module.exports = model("Role", roleSchema);