const bcryptjs = require("bcryptjs");

const encryptPassword = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  const encryptedPassword = await bcryptjs.hash(password, salt);
  return encryptedPassword;
};

module.exports = {
  encryptPassword
}